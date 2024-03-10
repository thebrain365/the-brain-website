import gsap from 'gsap';
import TextPlugin from 'gsap/TextPlugin';
import { useGSAP } from '@gsap/react';
import './Home.css'
import IntroSectionBgSvg from '../../assets/IntroSectionBgSvg';

gsap.registerPlugin(useGSAP, TextPlugin)

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
         'title': 'Is cyber security mandatory',
         'body': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit necessitatibus dolorem dignissimos tempore similique voluptatum!'
      }
   }

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

         <section className='intro'>
            <h3>A little bit about myself</h3>
            <p className='p1'>
               I am a very passionate and versatile techie. I wear multiple hats in the tech industry—being a software developer, a data analyst, and an up coming penetration tester. This website is your gateway to exploring my journey and the diverse range of skills I bring to the table. Whether you're interested in innovative software projects, cutting-edge data science solutions, or the intricacies of cybersecurity, you'll find it all here.
            </p>
            <p>
               Take a stroll through my portfolio, delve into my blogs for insightful articles, and feel free to reach out if you share a passion for technology or if you're looking to collaborate on exciting projects. Let's connect, explore, and innovate together!
            </p>
         </section>

         <section className='latest-blogs' >
            <h2>Latest blogs...</h2>
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
            <div>
               <h1>Software Engineering</h1>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, ducimus!</p>
               <ul>
                  <li>Software Design</li>
                  <li>Database Design</li>
                  <li>Software Development</li>
                  <li>Testing</li>
               </ul>
            </div>

            <div>
               <h1>Data Analysis</h1>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, ducimus!</p>
               <ul>
                  <li>Statistical Analysis</li>
                  <li>Data Visualisation</li>
                  <li>Data Pipelines</li>
               </ul>
            </div>

            <div>
               <h1>Cybersecurity</h1>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, ducimus!</p>
               <ul>
                  <li>Penetration Testing / Ethical Hacking</li>
                  <li>IDS/IPS</li>
               </ul>
            </div>
         </section>
      </div>
   );
}
 
export default Home;