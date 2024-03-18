// import './NavBar.css'
import BrainLogoSvg from "../../assets/icons/BrainLogoSvg";
import MenuCircles from '../../assets/icons/MenuCircles';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { createBrowserHistory } from "@remix-run/router";

gsap.registerPlugin(useGSAP)

const NavBar = () => {

   const tl = useRef()
   const history = createBrowserHistory()

   const { contextSafe } = useGSAP(() => {
      const mm = gsap.matchMedia()

      mm.add('(max-width: 479.99px)', () => {
         tl.current = gsap.timeline({ paused: true, ease: 'sine.inOut' })         
         .set('#menu-wrapper', {
            left: '0%',
         })
         .to('#menu-icon', {
            rotation: -315,
            transformOrigin: '50% 50%',
            duration: 0.45,
            ease: 'sine.inOut',
            scale: 0.75,
            fill: 'red'
         })
         .to('#menu-wrapper', {
            opacity: 1,
            duration: 0.45,
         }, '-=0.4')
         .to('#menu', {
            rotateZ: '360deg'
         }, '-=0.05')
         .to('#menu', {
            height: 'auto',
            duration: 0.45
         })
         .reverse()
      }) 
   })

   const handleMenuClicked = contextSafe((e) => {
      e.stopPropagation()
      tl.current.reversed(!tl.current.reversed())
   })

   useEffect(() => {
      const unlisten = history.listen(({ location, action }) => {
         if (!tl.current.reversed()) {
            tl.current.reversed(!tl.current.reversed())
         }
      })

      return () => unlisten()
   })

   return (
         <nav id='navbar'>
            <div id='logo-container' >
            <BrainLogoSvg handleMenuClicked={ handleMenuClicked }/>
            </div>

            <h1 id='navbar-title' >thebrain.dev</h1>

            <MenuCircles handleMenuClicked={ handleMenuClicked } />

            <div id='menu-wrapper' onClick={ handleMenuClicked } >
               <menu id='menu' >
                  <div>
                     <Link to="/services" className='menu-item' onClick={ handleMenuClicked } ><li>Services</li></Link>
                     <Link to="/blogs" className='menu-item' onClick={ handleMenuClicked } ><li>Blogs</li></Link>
                     <Link to="/portfolio" className='menu-item' onClick={ handleMenuClicked } ><li>Portfolio</li></Link>
                     <Link to="/aboutme" className='menu-item' onClick={ handleMenuClicked } ><li>About Me</li></Link>
                     <Link to="" className='menu-item' onClick={ handleMenuClicked } ><li>Get In Touch</li></Link>
                  </div>
               </menu>
            </div>
         </nav>
   );
}
 
export default NavBar;