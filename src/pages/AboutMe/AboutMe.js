import './AboutMe.css'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger)

const AboutMe = () => {

   useGSAP(() => {
      const mm = gsap.matchMedia()

      mm.add('(max-width: 479px)', () => {

         const bioSections = document.querySelectorAll('.bio-section h2, .bio-section p')
         
         bioSections.forEach(element => {
            gsap.set(element, {
               opacity: 0,
               top: '300px'
            })
         })

         gsap.to(['#location h2', '#location .p1'], {
            opacity: 1,
            top: '0',
            ease: 'sine.inOut',
            duration: 1.2
         })

         bioSections.forEach(element => {
            if (!(element.parentNode.id === 'location')) {
               gsap.to(element, {
                  scrollTrigger: {
                     trigger: element,
                     start: 'top bottom+=75px',
                     toggleActions: "play none none reverse",
                  },
                  opacity: 1,
                  top: '0',
                  ease: 'sine.inOut',
                  duration: 1.2,
               })
            }
         })
      })
   })

   return (
      <div id='aboutme'>
         <section id='profile' >

            <img id="muano" src="/muano3.jpg" alt='muano thebrain makhokha' />
            <div id='image-overlay'></div>
            <div id='names' >Muano<br/>Makhokha</div>

         </section>

         <section id='bio' >

            <div id='location' className='bio-section' >
               <h2 className='bio-section-title' >Location</h2>
               <p className='p1' >
                  Based in Soweto, Gauteng, South Africa
               </p>
            </div>

            <div id='journey' className='bio-section' >
               <h2 className='bio-section-title' >How far I've come</h2>
               <p className='p1' >
                  I grew up in Muledane, Thohoyandou and I attended Thohoyandou Technical High School, where I did Mathematics, Physical Sciences, Civil Technology, and Engineering Graphics and Design. I excelled in all of these subjects, and what I liked most about them was that they helped me to become a creative person.
               </p>
               <p className='p2' >
                  Because of my deep interest in Mathematics, I then pursued my education at the University of the Witwatersrand where I majored in Mathematics and Computer Science. I had never done anything related to computers before and had no clue what it was all about. Looking back at it, it's one of the best decisions I've ever made.
               </p>
               <p className='p3' >
                  On my first year I did a lot of introduction stuff like binaries, algorithms and data structures and some basic coding using Python and C++. These weren't really fun at all but I still kept it up. It was in my second year where I really started liking it. I saw what those basics were building up to, and I thought to myself "this whole thing of computers is just pure genius". I loved it and that's when I knew that I would be passionate about this field and a few years later it was so.
               </p>
            </div>

            <div id='where-to-next' className='bio-section' >
               <h2 className='bio-section-title' >Where to next</h2>
               <p className='p1' >
                  Along my journey in Computer Science I came across multiple areas that have sparked my interest. Which are Software Engineering, Data Science and Cyber Security. To me, these are very different areas, and the difference I appreciate the most is the process of thinking within each area.
               </p>
               <p className='p2' >
                  To most these may be too many skills to focus on, and I agree. But this boils down to my personality. I personally prefer to be a "Jack of all trades". Although my specialty lies in Software Engineering.
               </p>
               <p className='p3' >
                  I prefer diversity and having the ability to think and solve problems within different environments. Perhaps, this stems from my desire to be an entreprenuer, where it is common to do everything by yourself, especially in the beginning.
               </p>
            </div>

            <div id='interests' className='bio-section' >
               <h2 className='bio-section-title' >Interests</h2>
               <p className='p1' >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi iusto repellendus optio, laborum ut ex quos consequuntur pariatur tempore est.
               </p>
            </div>

            <div id='qoutes' className='bio-section' >
               <h2 className='bio-section-title' >Favourite quotes</h2>
               <p>
                  A man who does more than he is paid for... will soon be paid for more than he does.
               </p>
               <p>
                  Failing to plan is planning to fail
               </p>
               <p>
                  Hard work beats talent if talent doesn't work hard
               </p>
            </div>

            <p>
               There is so much to know and learn about me, so if you're interested don't hasitate to reach out.
            </p>
         </section>
      </div>
   );
}
 
export default AboutMe;

            // <div id='work-environment' >
            //    <div>
            //       <p>
            //          I am open to working with different people and organizations. If I had to rank, I would place small businesses at the top. With the current unemployment situation in South Africa and the lack of experience among the youth, I feel that it is important to collaborate with small businesses as much as we can. I see this being beneficial in the following ways.
            //       </p>

            //       <ul>
            //          <li>
            //             Learning Opportunities: Startups often have a dynamic environment where employees wear multiple hats. As a result, you can gain experience in various aspects of a business, allowing for a broader skill set and a more well-rounded professional profile.
            //          </li>
            //          <li>
            //             Responsibilities: Startups typically have smaller teams, providing fresh graduates with the opportunity to take on significant responsibilities early in their careers. This can lead to faster skill development and increased confidence in decision-making.
            //          </li>
            //          <li>
            //             Fast Career Progression: In a startup, there is often a flatter organizational structure, meaning fewer hierarchical layers. This can lead to quicker career progression and more opportunities for advancement, especially for individuals who demonstrate initiative and dedication.
            //          </li>
            //          <li>
            //             Entrepreneurial Experience: Working with a startup exposes you to the entrepreneurial mindset. You can witness firsthand the challenges and rewards of building a business, gaining valuable insights into what it takes to start and grow a company.
            //          </li>
            //          <li>
            //             Flexibility and Agility: Startups are generally more flexible and agile than larger corporations. This flexibility can lead to a more adaptive and dynamic work environment, providing opportunities for you to learn how to navigate and thrive in rapidly changing circumstances.
            //          </li>
            //          <li>
            //             Stock Options and Equity: Some startups offer stock options or equity as part of their compensation packages. While the financial rewards may not be immediate, if the startup succeeds, your equity could become valuable over time, providing an additional incentive for your commitment and hard work.
            //          </li>
            //          <li>
            //             Impactful Work: In a startup, your contributions can have a direct impact on the company's success. This sense of purpose and the ability to see the tangible results of your efforts can be highly motivating and fulfilling.
            //          </li>
            //       </ul>

            //       <p>
            //          It's also important to note that working with startups also comes with its own set of challenges, such as uncertainty, limited resources, and a fast-paced environment. However, for those who thrive in such conditions, the benefits can outweigh the drawbacks, offering a unique and rewarding career experience.
            //       </p>
            //    </div>
            // </div>