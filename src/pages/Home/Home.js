import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
// import './Home.css'
import { useRef } from 'react';
import WelcomeBgSvg from '../../assets/icons/WelcomeBgSvg';
import CallSvgIcon from '../../assets/icons/CallSvgIcon';
import MailSvgIcon from '../../assets/icons/MailSvgIcon';
import GitHubSvgIcon from '../../assets/icons/GitHubSvgIcon';
import LinkedInSvgIcon from '../../assets/icons/LinkedInSvgIcon';
import InstagramSvgIcon from '../../assets/icons/InstagramSvgIcon';
import TwitterSvgIcon from '../../assets/icons/TwitterSvgIcon';
import DiscordSvgIcon from '../../assets/icons/DiscordSvgIcon';

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
      gsap.set('#navbar', {
         display: 'none'
      })

      gsap.timeline()
      .set('#welcome-message p', {
         opacity: 0
      })
      .from('#welcome-message h1', {
         xPercent: -110,
         duration: 1.5,
         ease: 'bounce.out'
      })
      .to('#welcome-message p', {
         opacity: 0.7,
         duration: 0.2
      })
      .to('#welcome-message p', {
         opacity: 0.3,
         duration: 0.4
      })
      .to('#welcome-message p', {
         opacity: 0.5,
         duration: 0.04
      })
      .to('#welcome-message p', {
         opacity: 0.1,
         duration: 0.3
      })
      .to('#welcome-message p', {
         opacity: 0.55,
         duration: 0.15
      })
      .to('#welcome-message p', {
         opacity: 0.33,
         duration: 0.23
      })
      .to('#welcome-message p', {
         opacity: 0.65,
         duration: 0.05
      })
      .to('#welcome-message p', {
         opacity: 0.15,
         duration: 0.10
      })
      .to('#welcome-message p', {
         opacity: 0.1,
         duration: 0.3
      })
      .to('#welcome-message p', {
         opacity: 1,
         duration: 0.3
      })
   })

   const partOfDay = () => {
      const currentTime = new Date()

      if (5 <= currentTime.getHours() && currentTime.getHours() <= 11) {
         return "morning"
      } else if (12 <= currentTime.getHours() && currentTime.getHours() <= 17) {
         return "efternoon"
      } else {
         return "evening"
      }
   }

   return (
      <div id='home'>

         <section id='welcome' >

            <div id='bg-image-filter' ></div>

            <div id='welcome-message' >
               <p>Good { partOfDay() }, I'm</p>
               <h1>Muano.</h1>
               <p>Welcome to my digital space</p>
            </div>

            <div id='welcome-contact-div'>
               <CallSvgIcon />
               <MailSvgIcon />
               <GitHubSvgIcon />
               <LinkedInSvgIcon />
               <TwitterSvgIcon />
               <InstagramSvgIcon />
               <DiscordSvgIcon />
            </div>
         </section>

         <section id='introduction' >

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