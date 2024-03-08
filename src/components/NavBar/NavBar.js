import './NavBar.css'
import BrainLogoSvg from "../../assets/BrainLogoSvg";
import MenuCircles from '../../assets/MenuCircles';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useEffect, useRef, useState } from 'react';

gsap.registerPlugin(useGSAP)

const NavBar = () => {

   const header = useRef()
   const tl = useRef()

   const { contextSafe } = useGSAP(() => {
      const mm = gsap.matchMedia()

      mm.add('(max-width: 479.99px)', () => {
         tl.current = gsap.timeline()

         // Squares drop down
         .to('#menu-circles', {
            rotation: -405,
            transformOrigin: '50% 50%',
            duration: 0.6,
            ease: 'sine.inOut',
            scale: 0.75,
            boxShadow: '-3px 3px 10px #fff'
         }, 0)

         // Menu drop down
         .to('.menu', {
            bottom: 'auto',
            duration: 0.6,
            ease: 'sine.inOut',
            boxShadow: '0px 0px 150px 30px #010101ff'
         }, 0)
         .to('.menu-wrapper', {
            bottom: 'auto',
            duration: 0.01,
            ease: 'sine.inOut'
         }, '>0')

         // Do reverse
         .reverse()
      },
         header
      ) 
   },
      { scope: header }
   )

   const handleMenuClicked = contextSafe(() => {
      tl.current.reversed(!tl.current.reversed())
   })

   return (
      <header ref={ header }>
         <nav className='navbar'>
            <div className='logo-container'>
               <BrainLogoSvg />
            </div>

            <h1 className='nav-title'>
               thebrain.dev
            </h1>


            <div 
               onClick={ handleMenuClicked } 
               className='menu-icons'>
               <MenuCircles />
            </div>
         </nav>

         <div
            className='menu-wrapper'
            onClick={ handleMenuClicked }
         />

         <menu
            className='menu'>
            <li className='menu-items' >Services</li>
            <li className='menu-items' >Blogs</li>
            <li className='menu-items' >About Me</li>
            <li className='menu-items' >Get In Touch</li>
         </menu>
      
      </header>
   );
}
 
export default NavBar;