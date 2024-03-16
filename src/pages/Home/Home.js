import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import './Home.css'
import { useRef } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger)

const Home = () => {

   const tl = useRef()

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

         // Welcome
         gsap.timeline()
         .from('#welcome-message', {
            scale: 0,
            duration: 1.8,
            ease: 'bounce'
         })
         .from('#name', {
            duration: 2,
            ease: 'sine.inOut',
            text: "",
         }, '>-0.9')

         // Introduction
         const introductionParagraphs = document.querySelectorAll('.introduction-p')
         introductionParagraphs.forEach(p => {
            if (!p.id.includes('p1')) {
               gsap.set(p, {
                  opacity: 0,
                  top: '300px'
               })
            }
         })
         introductionParagraphs.forEach(p => {
            if (!p.id.includes('p1')) {
               gsap.to(p, {
                  scrollTrigger: {
                     trigger: p,
                     start: 'top 100%',
                     toggleActions: "play none none reverse",
                  },
                  top: '0',
                  opacity: 1,
                  ease: 'sine.inOut',
                  duration: 1.2
               })
            }
         })

         // Latest Blogs
         gsap.from('#latest-blogs div', {
            scrollTrigger: {
               trigger: '#latest-blogs h2',
               start: 'top 70%',
               toggleActions: "play none none reverse",
            },
            rotateY: '-90deg',
            duration: 1.5,
            ease: 'power1.inOut',
            stagger: 0.15
         })

         // Services
         document.querySelectorAll('.service').forEach(service => {
            gsap.from(service, {
               scrollTrigger: {
                  trigger: service,
                  start: 'top 95%',
                  toggleActions: "play none none reverse",
               },
               rotateX: '90deg',
               duration: 0.5,
               ease: 'sine.inOut',
            })
         })
      })
   })

   

   return (
      <div id='home'>

         <section id='welcome' >

            <div id='welcome-message'>

               <h1>Hi, welcome to my digital space. My name is</h1>
            
               <h1>&lt; <span id='name'>Muano</span> /&gt;</h1>

               <h1>and I'm thrilled to have you here!</h1>

            </div>

         </section>

         <section id='introduction'>

            <h3 className='section-title' >A little bit about myself</h3>

            <p id='introduction-p1' className='introduction-p'>
               I am a very passionate and versatile techie. I wear multiple hats in the tech industry—being a full-stack developer, a data analyst, and an up coming penetration tester.
            </p>

            <p id='introduction-p2' className='introduction-p'>
               This website is your gateway to exploring my journey and the diverse range of skills I bring to the table. Whether you're interested in innovative software projects, cutting-edge data science solutions, or the intricacies of cybersecurity, you'll find it all here.   
            </p>

            <p id='introduction-p3' className='introduction-p'>
               Take a stroll through my portfolio, delve into my blogs for insightful articles, and feel free to reach out if you share a passion for technology or if you're looking to collaborate on exciting projects. Let's connect, explore, and innovate together!
            </p>

         </section>

         <section id='latest-blogs' >

            <h2 className='section-title' >Latest blogs</h2>

            {
               Object.values(myBlogs).map(blog => (
                  <div key={ blog.id } >
                     <h1>{ blog.title }</h1>
                     <p>{ blog.body }</p>
                  </div>
               ))
            }

         </section>

         <section id='services' >

            <h2 className='section-title' >Services</h2>

            <div id='service-1' className='service' >
               <h1>Software Engineering</h1>
               <ul>
                  <li>Software Development</li>
                  <li>Database Design</li>
                  <li>Software Design</li>
                  <li>UI/UX Design</li>
                  <li>Testing</li>
               </ul>
            </div>

            <div id='service-2' className='service' >
               <h1>Data Analytics</h1>
               <ul>
                  <li>Statistical Analysis</li>
                  <li>Data Visualisation</li>
                  <li>Building Models</li>
               </ul>
            </div>

         </section>
      </div>
   );
}
 
export default Home;