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

   const welcomeMessageTimeline = useRef()
   const navbarTimeline = useRef()

   let myBlogs = {
      '1': {
         'id': 1,
         'title': 'Why you need data science',
         'body': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit necessitatibus dolorem dignissimos tempore similique voluptatum!'
      },
      '2': {
         'id': 2,
         'title': 'How to think of software in the context of your business',
         'body': 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis, dicta odio architecto doloribus quidem sapiente iusto molestiae magni sint nobis earum asperiores laboriosam molestias quis excepturi at temporibus possimus aperiam. Illum rerum similique molestiae ipsa facilis commodi? Amet officiis voluptate rem quod sit, voluptatem mollitia commodi error tempora ipsam laboriosam ducimus eos ipsum necessitatibus dolore. Quod nemo ipsam porro voluptatem provident beatae assumenda ea alias nihil maiores odio iusto deleniti illum quam hic sapiente perferendis voluptatum soluta quibusdam tempora atque, rerum nulla omnis? Commodi, at animi exercitationem veritatis doloribus corporis assumenda eveniet dolores ab beatae accusamus ut sapiente fuga error, fugit consectetur, voluptatibus velit recusandae laudantium vero enim autem. Enim quod nemo eos, laboriosam non, vel animi accusantium alias incidunt, iure corrupti ducimus provident. Accusantium saepe nesciunt reiciendis consequuntur, non sequi fugiat adipisci eius modi alias! Sunt voluptatibus quae et, iusto minima officiis alias? Molestiae architecto eligendi eveniet itaque perferendis voluptas libero laudantium. Libero, aut nisi. Nostrum tenetur officia numquam doloribus adipisci fugiat eligendi ipsa eveniet molestiae repellat odio placeat neque nemo, similique atque rerum blanditiis! Quis quidem quam eius.'
      },
      '3': {
         'id': 3,
         'title': 'Is cyber security mandatory?',
         'body': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit necessitatibus dolorem dignissimos tempore similique voluptatum!'
      }
   }

   useGSAP(() => { 
      
      welcomeMessageTimeline.current = gsap.timeline()
      
      welcomeMessageTimeline.current.set('#welcome-message p, #welcome-message h1', {
         opacity: 0
      })
      .from('#welcome-message h1', {
         xPercent: -110,
         opacity: 1,
         duration: 0.8,
         ease: 'sine',
         delay: 0.6
      })
      .from('#welcome-contact-div', {
         top: '100%',
         opacity: 1,
         duration: 0.8,
         ease: 'sine',
      }, '>-100%')
      
      const opacityValues = [0, 0.7, 0.3, 0.5, 0.1, 0.55, 0.33, 0.65, 0.15, 0.1, 1];
      const durations = [0, 0.2, 0.4, 0.04, 0.3, 0.15, 0.23, 0.05, 0.1, 0.3, 0.3];
      
      opacityValues.forEach((opacity, index) => {
         welcomeMessageTimeline.current.to('#welcome-message p', {
            opacity: opacity,
            duration: durations[index]
         })
      })

      const mm = gsap.matchMedia()
   
      mm.add('(min-width: 720px)', () => {
         gsap.from('#navbar-title, #menu-icon', {
            scrollTrigger: {
               trigger: '#welcome',
               toggleActions: 'play none none reset',
               start: 'bottom 60px',
               end: 'bottom -100px',
               scrub: true,
            },
            translateX: '100%'
   
         })
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
               I am a very passionate and versatile techie. I wear multiple hats in the tech industry—being a full-stack developer, a penetration tester, and a database designer.
            </p>

            <p id='introduction-p2' className='introduction-p'>
               This website is your gateway to exploring my journey and the diverse range of skills I bring to the table. Whether you're interested in innovative software projects, cutting-edge data science solutions, or the intricacies of database design, you'll find it all here.   
            </p>

            <p id='introduction-p3' className='introduction-p'>
               Take a stroll through my portfolio, delve into my blogs for insightful articles, and feel free to reach out if you share a passion for technology or if you're looking to collaborate on exciting projects. Let's connect, explore, and innovate together!
            </p>

         </section>

         <section id='latest-blogs' >

            <h3 className='section-title' >Latest blogs</h3>
            
            <div id="blogs">
               {
                  Object.values(myBlogs).map(blog => (
                     <div className="blog-container">
                        <div className='blog' key={ blog.id } >
                           <h1>{ blog.title.length > 35 ? `${blog.title.substring(0, 35)}...` : blog.title }</h1>
                           {/* <p>{ blog.body.substring(0, 150) }...</p> */}
                           <p>{ blog.body.length > 150 ? `${blog.body.substring(0, 150)}...` : blog.body }</p>
                        </div>
                     </div>
                  ))
               }
            </div>

         </section>

         <section id='services' >

            <h3 className='section-title' >Services</h3>

            <div id='service-1' className='service' >
               <h1 className='heading'>Software Engineering</h1>
               <div className='list'>
                  <span>Software Development</span>
                  <span>Web and Mobile Application Development</span>
                  <span>Database Design</span>
                  <span>Software Design</span>
                  <span>UI/UX Design</span>
                  <span>Software Testing</span>
                  <span>Business Emails</span>
               </div>
            </div>

            <div id='service-2' className='service' >
               <h1 className='heading'>Cyber Security</h1>
               <div className='list'>
                  <span>Pen Tests</span>
                  <span>Ethical Hacking</span>
                  <span>Vulnerability Assessment</span>
                  <span>Web and mobile Application Security</span>
                  <span>Network Security</span>
                  <span>IDS/IPS</span>
               </div>
            </div>

            <div id='service-3' className='service' >
               <h1 className='heading'>Data Analytics</h1>
               <div className='list'>
                  <span>Statistical Analysis</span>
                  <span>Data Visualisation</span>
                  <span>Data Models</span>
                  <span>Reporting and Analytics</span>
               </div>
            </div>

         </section>

      </div>
   );
}
 
export default Home;