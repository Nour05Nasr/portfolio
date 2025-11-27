import React, { useEffect, useRef } from "react";
import FigmaLogo from '../../Assets/FigmaLogo.png';
import VSCLogo from '../../Assets/VSCLogo.png';
import AELogo from '../../Assets/AELogo.png';
import AILogo from '../../Assets/AILogo.png';
import PSLogo from '../../Assets/PSLogo.png';
import ARLogo from '../../Assets/ARLogo.png';
import PRLogo from '../../Assets/PRLogo.png';
import LRLogo from '../../Assets/LRLogo.png';
import Blender from '../../Assets/Blender.png';
import "./Logos.css";

export default function Logos() {
  const loopRef = useRef(null);

  useEffect(() => {
    const container = loopRef.current;
    if (!container) return;

    // Duplicate content for seamless loop without breaking React
    const original = Array.from(container.children);
    original.forEach((node) => {
      const copy = node.cloneNode(true);
      container.appendChild(copy);
    });
  }, []);

  return (
    <div className="loop-wrapper">
      <div className="loop-track" ref={loopRef}>
        {/* Add your logos here */}
        <img src= {PSLogo} alt="Ps" />
        <img src={AILogo} alt="Ai" />
        <img src={AELogo} alt="Ae" />
        <img src={VSCLogo} alt="VS Code" />
        <img src={FigmaLogo} alt="Figma" />
        <img src={LRLogo} alt="Lr" />
        <img src={ARLogo} alt="Ar" />
        <img src={PRLogo} alt="Pr" />
        <img src={Blender} alt="Blender" />
      </div>
    </div>
  );
}

// export default Logos;