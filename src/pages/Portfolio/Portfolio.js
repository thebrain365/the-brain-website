import './Portfolio.css'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import UpArrowSvg from '../../assets/UpArrowSvg';

gsap.registerPlugin(useGSAP, ScrollTrigger)

const Portfolio = () => {

   const tlWitsContent = useRef()
   const tlQyfContent = useRef()

   useGSAP(() => {
      tlWitsContent.current = gsap.timeline()
         .to('.wits-content', {
            height: 'auto',
            duration: 0.5,
            ease: 'sine.inOut',
            yoyo: true
         })
         .to('.wits-content', {
            opacity: 1,
            duration: 0.5,
            visibility: 'visible',
            ease: 'sine.inOut',
            yoyo: true
         }, 0.3)
         .reverse()

      tlQyfContent.current = gsap.timeline()
         .to('.qyf-internship-content', {
            height: 'auto',
            duration: 0.3,
            ease: 'sine.inOut',
            yoyo: true
         })
         .to('.qyf-internship-content', {
            opacity: 1,
            duration: 0.5,
            visibility: 'visible',
            ease: 'sine.inOut',
            yoyo: true
         })
         .reverse()
   })

   return (
      <div id='portfolio' >
         <h1 id='page-title' >
            Welcome to my portfolio
         </h1>
         <section id='education'>
            <h2 id='edu-bg-title'>
               Educational Background
            </h2>
            <h2
               onClick={ () => tlWitsContent.current.reversed(!tlWitsContent.current.reversed()) }
               typeof='button'
            >
               University of the Witwatersrand<br/>
               <span>2021 Feb - 2023 Dec</span>
            </h2>
            <div
               className="content wits-content"
            >
               <div id='uni-majors' >
                  <div id='math' >
                     <h3>
                        Math
                     </h3>
                     <p>
                        Algebra I, Calculus I, Multivariable Calculus, Basic Analysis, Transition to Abstract Mathematics II, Abstract Mathematics II, Linear Algebra II, Introduction to Mathematical Statistics, Positive Linear Systems III (Leontif Systems), Group Theory III, Real Analysis III, Complex Analysis III
                     </p>
                  </div>
                  <div id='comp' >
                     <h3>
                        Computer Science
                     </h3>
                     <p>
                        Computational and Applied Mathematics I, Basic Computer Organisation I, Discrete Computational Structures I, Introduction to Data Structures and Algorithms I, Introduction to Algorithms and Programming I, Database Fundamentals II, Mobile Computing II, Analysis of Algorithms II, Computer Networks II, Formal Languages and Automata, Advanced Analysis of Algorithms III, Software Design III, Operating Systems and System Programming III
                     </p>
                  </div>
                  <div id='econ-and-fin' >
                     <h3>Economics and Finance</h3>
                     <p>
                        Economic Theory 1A - Microeconomics for Economists, Economic Theory 1B - Macroeconomics for Economists, Corporate Finance, Investment II
                     </p>
                  </div>
               </div>
               <div
                  className='up-arrow'
                  onClick={ () => tlWitsContent.current.reversed(!tlWitsContent.current.reversed()) }
                  typeof='button'
               >
                  <UpArrowSvg />
               </div>
            </div>
         </section>
         
         <section id='internship-programmes' >
            <h2 id='internship-programmes-title' >
               Internship Programmes
            </h2>
            <h2
               onClick={ () => tlQyfContent.current.reversed(!tlQyfContent.current.reversed()) }
               typeof='button'
            >
               QFY Virtual Intership Programme<br/>
               <span>2023 Jan - 2023 Feb</span>
            </h2>
            <div className="content qyf-internship-content">
               <ul>
                  <li>Exposure to real-life work experience with FirstRand, Absa, and Nedbank</li>
                  <li>Exposure to data: framing, exploration, interpretation, modelling, and visualization</li>
                  <li>Development of core skills: critical thinking, creativity, collaboration & communication</li>
                  <li>Team-based projects facilitated by FirstRand, Absa, and Nedbank</li>
               </ul>
               <div
                  className='up-arrow'
                  onClick={ () => tlQyfContent.current.reversed(!tlQyfContent.current.reversed()) }
                  typeof='button'
               >
                  <UpArrowSvg />
               </div>
            </div>
         </section>

         <section id='the-brain-web' >
            <h2 id='the-brain-web-title' >
               thebrain.dev
            </h2>
         </section>

         <section id='mzansi-rents' >
            <h2 id='mzansi-rents-title' >
               MzansiRents
            </h2>
         </section>

         <section id='a-travel' >
            <h2 id='a-travel-title' >
               A-Travel
            </h2>
         </section>
      </div>
   );
}
 
export default Portfolio;