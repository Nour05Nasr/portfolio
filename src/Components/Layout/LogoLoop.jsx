import { useCallback, useEffect, useMemo, useRef, useState, memo } from 'react';
import './LogoLoop.css';

const ANIMATION_CONFIG = { SMOOTH_TAU: 0.25, MIN_COPIES: 2, COPY_HEADROOM: 2 };
const toCssLength = value => (typeof value === 'number' ? `${value}px` : value ?? undefined);

const useResizeObserver = (callback, elements, dependencies) => {
  useEffect(() => {
    if (!window.ResizeObserver) {
      const handleResize = () => callback();
      window.addEventListener('resize', handleResize);
      callback();
      return () => window.removeEventListener('resize', handleResize);
    }
    const observers = elements.map(ref => {
      if (!ref.current) return null;
      const observer = new ResizeObserver(callback);
      observer.observe(ref.current);
      return observer;
    });
    callback();
    return () => observers.forEach(observer => observer?.disconnect());
  }, [callback, elements, dependencies]);
};

const useImageLoader = (seqRef, onLoad, dependencies) => {
  useEffect(() => {
    const images = seqRef.current?.querySelectorAll('img') ?? [];
    if (images.length === 0) {
      onLoad();
      return;
    }
    let remaining = images.length;
    const handleLoad = () => {
      remaining -= 1;
      if (remaining === 0) onLoad();
    };
    images.forEach(img => {
      if (img.complete) handleLoad();
      else {
        img.addEventListener('load', handleLoad, { once: true });
        img.addEventListener('error', handleLoad, { once: true });
      }
    });
    return () => {
      images.forEach(img => {
        img.removeEventListener('load', handleLoad);
        img.removeEventListener('error', handleLoad);
      });
    };
  }, [onLoad, seqRef, dependencies]);
};

const useAnimationLoop = (trackRef, targetVelocity, seqWidth, isHovered, hoverSpeed) => {
  const rafRef = useRef(null);
  const lastTimestamp = useRef(null);
  const offset = useRef(0);
  const velocity = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const animate = timestamp => {
      if (lastTimestamp.current === null) lastTimestamp.current = timestamp;
      const delta = Math.max(0, timestamp - lastTimestamp.current) / 1000;
      lastTimestamp.current = timestamp;

      const target = isHovered && hoverSpeed !== undefined ? hoverSpeed : targetVelocity;
      const easing = 1 - Math.exp(-delta / ANIMATION_CONFIG.SMOOTH_TAU);
      velocity.current += (target - velocity.current) * easing;

      if (seqWidth > 0) {
        offset.current = (offset.current + velocity.current * delta) % seqWidth;
        track.style.transform = `translate3d(${-offset.current}px, 0, 0)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      lastTimestamp.current = null;
    };
  }, [targetVelocity, seqWidth, isHovered, hoverSpeed, trackRef]);
};

export const LogoLoop = memo(
  ({
    logos,
    speed = 120,
    width = '100%',
    logoHeight = 28,
    gap = 32,
    pauseOnHover,
    hoverSpeed,
    fadeOut = false,
    fadeOutColor,
    scaleOnHover = false,
    renderItem,
    ariaLabel = 'Partner logos',
    className,
    style
  }) => {
    const containerRef = useRef(null);
    const trackRef = useRef(null);
    const seqRef = useRef(null);
    const [seqWidth, setSeqWidth] = useState(0);
    const [copyCount, setCopyCount] = useState(ANIMATION_CONFIG.MIN_COPIES);
    const [isHovered, setIsHovered] = useState(false);

    const effectiveHoverSpeed = useMemo(() => {
      if (hoverSpeed !== undefined) return hoverSpeed;
      if (pauseOnHover === true) return 0;
      return undefined;
    }, [hoverSpeed, pauseOnHover]);

    const targetVelocity = useMemo(() => speed, [speed]);
    const updateDimensions = useCallback(() => {
      const containerWidth = containerRef.current?.clientWidth ?? 0;
      const seqWidthValue = seqRef.current?.getBoundingClientRect?.().width ?? 0;
      if (seqWidthValue > 0) {
        setSeqWidth(Math.ceil(seqWidthValue));
        const copiesNeeded = Math.ceil(containerWidth / seqWidthValue) + ANIMATION_CONFIG.COPY_HEADROOM;
        setCopyCount(Math.max(ANIMATION_CONFIG.MIN_COPIES, copiesNeeded));
      }
    }, []);

    useResizeObserver(updateDimensions, [containerRef, seqRef], [logos, gap, logoHeight]);
    useImageLoader(seqRef, updateDimensions, [logos, gap, logoHeight]);
    useAnimationLoop(trackRef, targetVelocity, seqWidth, isHovered, effectiveHoverSpeed);

    const cssVars = useMemo(
      () => ({
        '--logoloop-gap': `${gap}px`,
        '--logoloop-logoHeight': `${logoHeight}px`,
        ...(fadeOutColor && { '--logoloop-fadeColor': fadeOutColor }),
      }),
      [gap, logoHeight, fadeOutColor]
    );

    const rootClass = useMemo(
      () =>
        ['logoloop', fadeOut && 'logoloop--fade', scaleOnHover && 'logoloop--scale-hover', className]
          .filter(Boolean)
          .join(' '),
      [fadeOut, scaleOnHover, className]
    );

    const renderLogo = useCallback(
      (item, key) => {
        const content = item.node ? (
          <span className="logoloop__node">{item.node}</span>
        ) : (
          <img src={item.src} alt={item.alt ?? ''} height={logoHeight} draggable={false} loading="lazy" />
        );
        return (
          <li className="logoloop__item" key={key}>
            {item.href ? (
              <a href={item.href} target="_blank" rel="noreferrer noopener">
                {content}
              </a>
            ) : (
              content
            )}
          </li>
        );
      },
      [logoHeight]
    );

    const logoLists = useMemo(
      () =>
        Array.from({ length: copyCount }, (_, copyIndex) => (
          <ul className="logoloop__list" key={copyIndex} ref={copyIndex === 0 ? seqRef : undefined}>
            {logos.map((item, i) => renderLogo(item, `${copyIndex}-${i}`))}
          </ul>
        )),
      [copyCount, logos, renderLogo]
    );

    return (
      <div
        ref={containerRef}
        className={rootClass}
        style={{ maxWidth: '100%', width: toCssLength(width), ...cssVars, ...style }}
        role="region"
        aria-label={ariaLabel}
      >
        <div
          className="logoloop__track"
          ref={trackRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {logoLists}
        </div>
      </div>
    );
  }
);

LogoLoop.displayName = 'LogoLoop';
export default LogoLoop;
