import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
// import './Home.css'
import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import WelcomeBgSvg from '../../assets/icons/WelcomeBgSvg';
import CallSvgIcon from '../../assets/icons/CallSvgIcon';
import MailSvgIcon from '../../assets/icons/MailSvgIcon';
import GitHubSvgIcon from '../../assets/icons/GitHubSvgIcon';
import LinkedInSvgIcon from '../../assets/icons/LinkedInSvgIcon';
import InstagramSvgIcon from '../../assets/icons/InstagramSvgIcon';
import TwitterSvgIcon from '../../assets/icons/TwitterSvgIcon';
import DiscordSvgIcon from '../../assets/icons/DiscordSvgIcon';
import useFetch from '../../hooks/useFetch';
import { useQuery, gql } from '@apollo/client';

gsap.registerPlugin(useGSAP, ScrollTrigger)

const BLOGS = gql`
query GetBlogs {
   blogs {
     data {
       id
       attributes {
         title
         content
         createdAt
         updatedAt
         categories {
           data {
             attributes {
               category
             }
           }
         }
       }
     }
   }
 }
`

const Home = () => {

   let { data: myBlogs, loading, error } = useQuery(BLOGS)

   const welcomeMessageTimeline = useRef()
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

   const whichMonth = givenMonth => {
      const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

      let result = ''
      months.forEach((month, index) => {
         if (givenMonth == index) {
            result = month
         }
      })
      return result
   }

   const blogHelper = (blog, component) => {
      if (component === 'title') {
         return blog.attributes.title
      } else if (component === 'text') {
         return blog.attributes.content.find(item => item.type === 'paragraph').children[0].text
      } else if (component === 'categories') {
         return blog.attributes.categories.data
      } else if (component === 'datePosted') {
         let date = new Date(blog.attributes.createdAt)
         return `${ date.getDay() } ${ whichMonth(date.getMonth()) } ${ date.getFullYear() }`
      } else if (component === 'timePosted') {
         let date = new Date(blog.attributes.createdAt)
         return `${ date.getHours() }:${ date.getMinutes() }`
      } else if (component === 'dateUpdated') {
         let date = new Date(blog.attributes.updatedAt)
         return `${ date.getDay() } ${ whichMonth(date.getMonth()) } ${ date.getFullYear() }`
      } else if (component === 'timeUpdated') {
         let date = new Date(blog.attributes.updatedAt)
         return `${ date.getHours() }:${ date.getMinutes() }`
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
                  myBlogs && 

                  myBlogs.blogs.data.map(blog => (
                     <div className='blog-container'>
                        <div className='blog' key={ blog.id }>
                           <div className='category-container'>
                              {
                                 blogHelper(blog, 'categories').map(categoryItem => (
                                    <span className='category'>{ categoryItem.attributes.category }</span>
                                 ))
                              }
                           </div>
                           <h1>{ blogHelper(blog, 'title').length > 35 ? `${blogHelper(blog, 'title').substring(0, 35)}...` : blogHelper(blog, 'title') }</h1>
                           <p>{ blogHelper(blog, 'text').length > 150 ? `${blogHelper(blog, 'text').substring(0, 150)}...` : blogHelper(blog, 'text') }</p>
                           <Link to={`/blog/${ blog.id }`} >
                              <div className='button' typeof='button' >Read more</div>
                           </Link>
                           <div className="dates">
                              <span className="date-container">
                                 <span className='dateLabel updated'>updated on : </span>
                                 {
                                    blogHelper(blog, 'datePosted') != blogHelper(blog, 'dateUpdated') &&
                                    blogHelper(blog, 'timePosted') != blogHelper(blog, 'timeUpdated') && 
                                    <span className='date updated'>{ blogHelper(blog, 'dateUpdated') } | { blogHelper(blog, 'timeUpdated') }</span>
                                 }
                              </span>
                              <br />
                              <span className="date-container">
                                 <span className='dateLabel posted'>created on : </span>
                                 <span className='date posted'>{ blogHelper(blog, 'datePosted') } | { blogHelper(blog, 'timePosted') }</span>
                              </span>
                           </div>
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
               <h1 className='heading'>Quant</h1>
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