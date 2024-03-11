import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import './Home.css'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const Home = () => {

   let myBlogs = {
      '1': {
         'id': 1,
         'title': 'Why you need data science',
         'body': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit necessitatibus dolorem dignissimos tempore similique voluptatum!'
      },
      '2': {
         'id': 2,
         'title': 'How to think of software in the context of your business',
         'body': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit necessitatibus dolorem dignissimos tempore similique voluptatum!'
      },
      '3': {
         'id': 3,
         'title': 'Is cyber security mandatory?',
         'body': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit necessitatibus dolorem dignissimos tempore similique voluptatum!'
      }
   }

   useGSAP(() => {
      const mm = gsap.matchMedia()

      mm.add('(max-width: 479px)', () => {
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

         gsap.set([ '#p2', '#p3' ], {
            opacity: 0,
            top: '150px'
         })
         gsap.to('#p2', {
            scrollTrigger: {
               trigger: '#p2',
               start: 'top 100%',
               end: 'top 40%',
               toggleActions: "play none none reverse",
               scrub: true
            },
            top: '0',
            opacity: 1,
            ease: 'sine.inOut',
         })

         gsap.to('#p3', {
            scrollTrigger: {
               trigger: '#p3',
               start: 'top 100%',
               end: 'top 40%',
               toggleActions: "play none none reverse",
               scrub: true
            },
            top: '0',
            opacity: 1,
            ease: 'sine.inOut',
         })

         gsap.from([ '.latest-blogs h2', '.latest-blogs div' ], {
            scrollTrigger: {
               trigger: '.latest-blogs h2',
               start: 'top 70%',
               toggleActions: "play none none reverse",
            },
            rotateY: '-90deg',
            duration: 1,
            ease: 'sine.inOut',
            stagger: 0.15
         })

         gsap.from('.services h2', {
            scrollTrigger: {
               trigger: '.services h2',
               start: 'top 85%',
               toggleActions: "play none none reverse",
            },
            rotateY: '-90deg',
            duration: 0.5,
            ease: 'sine.inOut',
         })

         gsap.from('#services-1', {
            scrollTrigger: {
               trigger: '#services-1',
               start: 'top 95%',
               toggleActions: "play none none reverse",
            },
            rotateX: '90deg',
            duration: 0.5,
            ease: 'sine.inOut',
         })

         gsap.from('#services-2', {
            scrollTrigger: {
               trigger: '#services-2',
               start: 'top 95%',
               toggleActions: "play none none reverse",
            },
            rotateX: '90deg',
            duration: 0.5,
            ease: 'sine.inOut',
         })

         gsap.from('#services-3', {
            scrollTrigger: {
               trigger: '#services-3',
               start: 'top 95%',
               toggleActions: "play none none reverse",
            },
            rotateX: '90deg',
            duration: 0.5,
            ease: 'sine.inOut',
         })
      })
   })

   

   return (
      <div id='home-container'>
         {/* <section id='home-bg'>
            <div id='circle-1'></div>
            <div id='circle-2'></div>
            <div id='square-1'></div>
            <div id='square-2'></div>
         </section> */}
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

         <section className='intro'>
            <h3>A little bit about myself</h3>
            <p id='p1'>
               I am a very passionate and versatile techie. I wear multiple hats in the tech industry—being a full-stack developer, a data analyst, and an up coming penetration tester.
            </p>
            <p id='p2'>
               This website is your gateway to exploring my journey and the diverse range of skills I bring to the table. Whether you're interested in innovative software projects, cutting-edge data science solutions, or the intricacies of cybersecurity, you'll find it all here.   
            </p>
            <p id='p3'>
               Take a stroll through my portfolio, delve into my blogs for insightful articles, and feel free to reach out if you share a passion for technology or if you're looking to collaborate on exciting projects. Let's connect, explore, and innovate together!
            </p>
         </section>

         <section className='latest-blogs' >
            <h2>Latest blogs</h2>
            {
               Object.values(myBlogs).map(blog => (
                  <div key={ blog.id } >
                     <h1>{ blog.title }</h1>
                     <p>{ blog.body }</p>
                  </div>
               ))
            }
         </section>

         <section className='services' >
            <h2>Services</h2>
            <div id='services-1' >
               <h1>Software Engineering</h1>
               <ul>
                  <li>Software Development</li>
                  <li>Database Design</li>
                  <li>Software Design</li>
                  <li>UI/UX Design</li>
                  <li>Testing</li>
               </ul>
            </div>

            <div id='services-2' >
               <h1>Data Analysis</h1>
               <ul>
                  <li>Statistical Analysis</li>
                  <li>Data Visualisation</li>
                  <li>Building Models</li>
                  {/* <li>Data Pipelines</li> */}
               </ul>
            </div>

            <div id='services-3' >
               <h1>Cybersecurity</h1>
               <ul>
                  <li>Pen Testing / Ethical Hacking</li>
                  <li>Computer Networking</li>
                  {/* <li>IDS/IPS</li> */}
               </ul>
            </div>
         </section>
      </div>
   );
}
 
export default Home;