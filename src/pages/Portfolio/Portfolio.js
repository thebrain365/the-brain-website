// import './Portfolio.css'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import UpArrowSvg from '../../assets/icons/UpArrowSvg';

gsap.registerPlugin(useGSAP, ScrollTrigger)

const Portfolio = () => {

   const witsContentTimeline = useRef()
   const qyfContentTimeline = useRef()
   const thebrainContentTimeline = useRef()
   const mzansirentsContentTimeline = useRef()
   const atravelContentTimeline = useRef()
   const htbpentestcertContentTimeline = useRef()

   const contentTimelines = [
      {
         id: 'wits-content',
         timeline: witsContentTimeline
      },
      {
         id: 'qyf-internship-content',
         timeline: qyfContentTimeline
      },
      {
         id: 'thebrain-content',
         timeline: thebrainContentTimeline
      },
      {
         id: 'mzansirents-content',
         timeline: mzansirentsContentTimeline
      },
      {
         id: 'atravel-content',
         timeline: atravelContentTimeline
      },
      {
         id: 'htb-pentest-cert-content',
         timeline: htbpentestcertContentTimeline
      }
   ]

   const toggleContentTimeline = id => {
      const contentTimeline = contentTimelines.find(tl => tl.id === id)
      contentTimeline.timeline.current.reversed(!contentTimeline.timeline.current.reversed())
   }

   useGSAP(() => {
      document.querySelectorAll('.content').forEach(content => {
         const contentTimeline = contentTimelines.find(tl => tl.id === content.id)
         contentTimeline.timeline.current =  gsap.timeline()
               .to(content, {
                  height: 'auto',
                  duration: 0.5,
                  ease: 'sine.inOut',
                  yoyo: true
               })
               .to(content, {
                  opacity: 1,
                  duration: 0.5,
                  visibility: 'visible',
                  ease: 'sine.inOut',
                  yoyo: true
               }, 0.3)
               .reverse()
      })
   })

   return (
      <div id='portfolio' >

         {/* <h1 id='page-title' >Welcome to my portfolio</h1> */}

         <section id='education'>

            <h2 id='edu-bg-title' className='section-title'>Educational Background</h2>

            <h2
               id='wits-title'
               className='heading'
               onClick={ () => toggleContentTimeline("wits-content") }
               typeof='button'
            >
               University of the Witwatersrand<br/>
               <span>2021 Feb - 2023 Dec</span>
            </h2>

            <div id='wits-content' className="content" >

               <div id='wits-majors' >

                  <div id='math' >
                     <h3 className='sub-heading'>Math</h3>
                     <p>
                        Algebra I, Calculus I, Multivariable Calculus, Basic Analysis, Transition to Abstract Mathematics II, Abstract Mathematics II, Linear Algebra II, Introduction to Mathematical Statistics, Positive Linear Systems III (Leontif Systems), Group Theory III, Real Analysis III, Complex Analysis III
                     </p>
                  </div>

                  <div id='comp' >
                     <h3 className='sub-heading'>
                        Computer Science
                     </h3>
                     <p>
                        Computational and Applied Mathematics I, Basic Computer Organisation I, Discrete Computational Structures I, Introduction to Data Structures and Algorithms I, Introduction to Algorithms and Programming I, Database Fundamentals II, Mobile Computing II, Analysis of Algorithms II, Computer Networks II, Formal Languages and Automata, Advanced Analysis of Algorithms III, Software Design III, Operating Systems and System Programming III
                     </p>
                  </div>
                  
                  <div id='econ-and-fin' >
                     <h3 className='sub-heading'>Economics and Finance</h3>
                     <p>
                        Economic Theory 1A - Microeconomics for Economists, Economic Theory 1B - Macroeconomics for Economists, Corporate Finance, Investment II
                     </p>
                  </div>
               </div>

               <div
                  className='up-arrow'
                  onClick={ 
                     () => {
                        document.getElementById('wits-title').scrollIntoView({ block: 'center', behavior: 'smooth' })
                        toggleContentTimeline("wits-content")
                     }
                  }
                  typeof='button'
               >
                  <UpArrowSvg />
               </div>
            </div>
         </section>
         
         <section id='internship-programmes'>

            <h2 id='internship-programmes-title' className='section-title' >Internship Programmes</h2>

            <h2
               id='qyf-title'
               className='heading'
               onClick={ () => toggleContentTimeline("qyf-internship-content") }
               typeof='button'
            >
               QFY Virtual Intership Programme<br/>
               <span>2023 Jan - 2023 Feb</span>
            </h2>

            <div id='qyf-internship-content' className="content">

               <p>Exposure to real-life work experience with FirstRand, Absa, and Nedbank</p>
               <p>Exposure to data: framing, exploration, interpretation, modelling, and visualization</p>
               <p>Development of core skills: critical thinking, creativity, collaboration & communication</p>
               <p>Team-based projects facilitated by FirstRand, Absa, and Nedbank</p>

               <div
                  className='up-arrow'
                  onClick={
                     () => {
                        document.getElementById('qyf-title').scrollIntoView({ block: 'center', behavior: 'smooth' })
                        toggleContentTimeline("qyf-internship-content")
                     }
                  }
                  typeof='button'
               >
                  <UpArrowSvg />
               </div>
            </div>
         </section>

         <section id="certifications">
            <h2 id='certifications-title' className='section-title'>Certifications</h2>

            <h2
               id='htb-pentest-cert-title'
               className='heading'
               onClick={ () => toggleContentTimeline("htb-pentest-cert-content") }
               typeof='button'
            >
               HTB Certified Penetration Testing Specialist<br/>
               <span></span>
            </h2>

            <div id='htb-pentest-cert-content' className="content">

               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis dolorem dolore sequi officia aliquid cumque recusandae earum, sed error? Vero nesciunt quis laborum, assumenda consequuntur temporibus! Repellendus deserunt mollitia illo!</p>

               <div
                  className='up-arrow'
                  onClick={
                     () => {
                        document.getElementById('htb-pentest-cert-title').scrollIntoView({ block: 'center', behavior: 'smooth' })
                        toggleContentTimeline("htb-pentest-cert-content")
                     }
                  }
                  typeof='button'
               >
                  <UpArrowSvg />
               </div>
            </div>
         </section>

         <section id='books-and-courses'>

            <h2 id='books-and-courses-title' className='section-title'>Books & Courses</h2>

            <h2
               id='comp-net-title'
               className='heading'
               // onClick={ () => toggleContentTimeline("comp-net-content") }
               typeof='button'
            >
               Computer Networking<br/>
               <span>A Top-Down Approach 8th Ed. James F. Kurose, Keith W. Ross</span>
            </h2>

            <h2
               id='databs-sys-title'
               className='heading'
               // onClick={ () => toggleContentTimeline("databs-sys-content") }
               typeof='button'
            >
               Database Systems<br/>
               <span>Design, Implementation, and Management 12 Ed. Carlos Coronel, Steven Morris</span>
            </h2>

            <h2
               id='stats-for-bus-and-econ-title'
               className='heading'
               // onClick={ () => toggleContentTimeline("stats-for-bus-and-econ-content") }
               typeof='button'
            >
               Statistics for Business and Economics<br/>
               <span>5th Ed. Anderson, Sweeney, Williams, Camm, Cochran, Freeman, Shoesmith</span>
            </h2>          
         </section>

         <section id='projects'>

            <h2 id='projects-title' className='section-title'>Projects</h2>

            <h2
               id='thebrain-title'
               className='heading'
               onClick={ () => toggleContentTimeline("thebrain-content") }
               typeof='button'
            >
               thebrain.dev<br/>
               <span>2023 Dec - *</span>
            </h2>

            <div id='thebrain-content' className="content">

               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis dolorem dolore sequi officia aliquid cumque recusandae earum, sed error? Vero nesciunt quis laborum, assumenda consequuntur temporibus! Repellendus deserunt mollitia illo!</p>

               <div
                  className='up-arrow'
                  onClick={
                     () => {
                        document.getElementById('thebrain-title').scrollIntoView({ block: 'center', behavior: 'smooth' })
                        toggleContentTimeline("thebrain-content")
                     }
                  }
                  typeof='button'
               >
                  <UpArrowSvg />
               </div>
            </div>

            <h2
               id='mzansirents-title'
               className='heading'
               onClick={ () => toggleContentTimeline("mzansirents-content") }
               typeof='button'
            >
               MzansiRents<br/>
               <span>2023 Dec - *</span>
            </h2>

            <div id='mzansirents-content' className="content">

               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis dolorem dolore sequi officia aliquid cumque recusandae earum, sed error? Vero nesciunt quis laborum, assumenda consequuntur temporibus! Repellendus deserunt mollitia illo!</p>

               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae voluptate sint alias incidunt iure enim temporibus animi, maiores recusandae commodi porro accusantium quas quod ducimus architecto autem corrupti sapiente nisi debitis. Incidunt maiores quaerat, sapiente ad in adipisci voluptas eos numquam ut iste, corrupti cum dolorum consectetur aperiam, saepe error.</p>

               <div
                  className='up-arrow'
                  onClick={
                     () => {
                        document.getElementById('mzansirents-title').scrollIntoView({ block: 'center', behavior: 'smooth' })
                        toggleContentTimeline("mzansirents-content")
                     }
                  }
                  typeof='button'
               >
                  <UpArrowSvg />
               </div>
            </div>

            <h2
               id='atravel-title'
               className='heading'
               onClick={ () => toggleContentTimeline("atravel-content") }
               typeof='button'
            >
               A-Travel<br/>
               <span>2023 Dec - *</span>
            </h2>

            <div id='atravel-content' className="content">

               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis dolorem dolore sequi officia aliquid cumque recusandae earum, sed error? Vero nesciunt quis laborum, assumenda consequuntur temporibus! Repellendus deserunt mollitia illo!</p>

               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae voluptate sint alias incidunt iure enim temporibus animi, maiores recusandae commodi porro accusantium quas quod ducimus architecto autem corrupti sapiente nisi debitis. Incidunt maiores quaerat, sapiente ad in adipisci voluptas eos numquam ut iste, corrupti cum dolorum consectetur aperiam, saepe error.</p>

               <div
                  className='up-arrow'
                  onClick={
                     () => {
                        document.getElementById('atravel-title').scrollIntoView({ block: 'center', behavior: 'smooth' })
                        toggleContentTimeline("atravel-content")
                     }
                  }
                  typeof='button'
               >
                  <UpArrowSvg />
               </div>
            </div>
         </section>

      </div>
   );
}
 
export default Portfolio;