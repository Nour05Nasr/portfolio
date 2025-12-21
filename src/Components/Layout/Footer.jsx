import React, { Component, useState } from 'react';
import { supabase } from '../../Supabase';
import Input from '../Common/Input'
import H1 from '../Common/H1';
import H3 from '../Common/H3';
import P from '../Common/P';
import logo from '../../Assets/logo.svg';
import Button from '../Common/Button';
import {Link} from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const [Name,setName] = useState("");
    const [Number,setNumber] = useState("");
    const [Email,setEmail] = useState("");
    const [Msg,setMsg] = useState("");

    async function sendMsg(){
        const  res = await supabase.from("Messages").insert({"FullName":Name});
    }

    return ( <>
     <section class="connect_temp">
                <section class="section2_temp top_temp2">
                    <H1 title='Let’s Connect' />
                    <div className='top_temp2'>
                    <P title='Do you need a new website, app, or complete brand identity?' />
                    <P title='let’s connect and build your next project together ;)' />
                    </div>
                    <div class="section2_temp top_temp2">
                        <form class="section_temp0" onSubmit={sendMsg}> 
                        <input class="input" onChange={(i)=>{setName(i.target.value)}} placeholder="Full Name"  type="text" />
                        <input class="input" onChange={(i)=>{setNumber(i.target.value)}} placeholder="E-mail"  type="text" />
                        <input class="input" onChange={(i)=>{setEmail(i.target.value)}} placeholder="Number"  type="text" />
                        <input class="input" onChange={(i)=>{setMsg(i.target.value)}} placeholder="Message"  type="text" />
                        {/* <Button onClick={sendMsg}  title="Send" /> */}
                          {/* <Input  title='Your Full Name'/>
                          <Input title='Your E-mail'/>
                          <Input title='Your Number'/>
                          <Input title='Your Message'/> */}
                          <button className='cta_temp_1'>Send</button>
                        </form>
                        {/* <button className='cta_temp_1' onClick={()=>{console.log(Name)}}>send</button> */}
                        {/* <Link className='top_temp2' to="/ContactMe"><Button title='Let;s Connect' /></Link> */}
                    </div>
                </section>
        
                <footer class="footer-section">
                    <div class="footer_container">
                        <div class="footer-content pt-5 pb-5">
                            <div class="footer_top">
                                <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
                                    <div class="footer-widget">
                                        <div class="footer-widget-heading">
                                          <H3 title='Be The Frist To Know!' />
                                          <P title='Get Updated with my various design related blogs and limited offers!' />
                                        </div>
                                        <div class="footer-text mb-25">
                                        </div>
                                        <div class="subscribe-form">
                                            <form action="#">
                                              <Input title='Enter Your E-mail Address' />
                                                <button><i class="fab fa-telegram-plane"></i></button>
                                            </form>
                                        </div>
                                        <div class="section_temp0 top_temp2">
                                            <P class="p_temp" title='E-mail: nour.a.nasr05@gmail.com' />
                                            <P class="p_temp" title='LinkedIn: https://www.linkedin.com/in/nour-nasr05' />
                                            <P class="p_temp" title='Behance: https://www.behance.net/nournasr10' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="copyright-area">
                        <div class="container">
                            <div class="footer_row">
                                <div class="col-xl-6 col-lg-6 text-center text-lg-left">
                                    <div class="copyright-text">
                                        <p>Copyright &copy; 2025, All Right Reserved <a href="#">Nour Nasr</a></p>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-lg-4 mb-50">
                                    <div class="footer-widget">
                                        <div class="footer-logo">
                                            <img className='nav-logo' src={logo} alt="logo" />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                                    <div class="footer-menu">
                                        <ul>
                                            <li><a href="#">Home</a></li>
                                            <li><a href="#">Terms</a></li>
                                            <li><a href="#">Privacy</a></li>
                                            <li><a href="#">Policy</a></li>
                                            <li><a href="#">Contact</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </section>
    </> );
}
 
export default Footer;