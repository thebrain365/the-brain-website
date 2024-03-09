import gsap from 'gsap';
import TextPlugin from 'gsap/TextPlugin';
import { useGSAP } from '@gsap/react';
import './Home.css'

gsap.registerPlugin(useGSAP, TextPlugin)

const Home = () => {

   useGSAP(() => {
      gsap.timeline()
      .from('.welcome-message', {
         scale: 0,
         duration: 1.8,
         ease: 'bounce'
      })
      .from('#name', {
         duration: 2,
         ease: 'sine.inOut',
         text: "",
      }, '>-0.9')
   })

   return (
      <div id='home-container'>
         <section
            className='welcome-section'
         >
            <div className='welcome-message'>
               <div id='wm-part-1' >
                  <h1>Hi, welcome to my digital space. My name is</h1>
                  <h1>&lt; <span id='name'>Muano</span> /&gt;</h1>
                  <h1>and I'm thrilled to have you here!</h1>
               </div>                           
            </div>
         </section>

      </div>
   );
}
 
export default Home;