// import './Services.css'

const Services = () => {
   return (
      <div id='services' >

         <section id='software-engineering' className="service" >

            <h1 className='section-title' >Software Engineering</h1>

            <div className='service-description' >
               <p>
                  As a recent graduate in software engineering with a specialization in full-stack development, I am excited to embark on my journey in the world of technology. Equipped with a solid foundation in both front-end and back-end development, I am eager to contribute my skills to creating impactful digital solutions.
               </p>
               <p>
                  I have a knack for developing robust REST APIs that power dynamic web and mobile applications. Through coursework and hands-on projects, I've gained experience in building scalable and efficient backend systems that meet the demands of modern software development.
               </p>
               <p>
                  My passion for design and user experience fuels my ability to craft intuitive and visually appealing interfaces that resonate with users. From wireframing to prototyping, I enjoy the creative process of bringing ideas to life and ensuring that every pixel serves a purpose.
               </p>
               <p>
                  As I embark on my professional journey, I am eager to continue learning and growing in this ever-evolving field. With a curious mindset and a passion for innovation, I am confident in my ability to make a meaningful impact as a software engineer, creating transformative digital experiences that enrich the lives of others.
               </p>
            </div>

            <div className='service-tools' >
               <h3 className='heading'>Tech Stack</h3>
               <h4 className='sub-heading'>Programming Languages</h4>
               <div className='list'>
                  <span>Java (SE & EE)</span>
                  <span>C++</span>
                  <span>JavaScript</span>
                  <span>Python</span>
                  <span>HTML/CSS</span>
               </div>
               <h4 className='sub-heading'>Frameworks</h4>
               <div className='list'>
                  <span>Spring Framework</span>
                  <span>Spring Boot</span>
                  <span>Spring MVC</span>
                  <span>Spring Security</span>
                  <span>Spring Data</span>
                  <span>React.Js</span>
                  <span>Next.Js</span>
                  <span>Node.js</span>
               </div>
               <h4 className='sub-heading'>Tools and Technology</h4>
               <div className='list'>
                  <span>Android Studio</span>
                  <span>SQL</span>
                  <span>NoSQL</span>
                  <span>GraphQL</span>
                  <span>GSAP</span>
                  <span>Git/GitHub</span>
                  <span>GitHub Actions</span>
                  <span>Docker</span>
                  <span>Firebase</span>
                  <span>Sass</span>
                  <span>WordPress</span>
                  <span>Strapi</span>
               </div>
            </div>
         </section>

         <section id="cyber-security" className="service">
            <h1 className="section-title">Cyber Security</h1>

            <div className="service-description">
               <p>
                  Specializing in penetration testing, vulnerability assessments, and web application security, I ensure robust defenses against cyber threats. With thorough testing, I identify vulnerabilities and fortify digital infrastructure, safeguarding sensitive data and preserving online integrity.
               </p>

               <p>
                  Offering tailored services in penetration testing, vulnerability assessments, and web application security, I empower organizations to stay ahead of cyber threats. Through targeted assessments and proactive measures, I bolster digital resilience, protecting against potential breaches and ensuring secure online operations.
               </p>
            </div>

            <div className="service-tools">
            </div>
         </section>

         <section id='database-design' className="service" >

            <h1 className='section-title' >Database Design and Implementation</h1>

            <div className='service-description' >
               <p>
                  I can also design and implement relational databases using ER modeling, advanced data modeling, and SQL. I have developed an understanding of database architecture, ensuring efficient and scalable solutions. By applying normalization techniques, I can optimize database structures for performance and maintainability, eliminating redundancies and update anomalies.
               </p>
               <p>
                  Advance in SQL, I have the ability to write complex queries, manipulate data, and optimize database performance. This skill allows me to extract valuable insights from data and drive informed decision-making. With a passion for innovation and a commitment to continuous learning, I want to contribute effectively to real-world projects, leveraging my expertise to create robust and reliable database solutions that empower organizations to unlock the full potential of their data.
               </p>
            </div>

            <div className='service-tools' >
            </div>
         </section>

         <section id='data-analytics' className="service" >

            <h1 className='section-title' >Quant</h1>

            <div className='service-description' >
               <h2 className="heading">Quantitative Analyst</h2>
               <p>
                  I possess a strong foundation in data analysis, spanning data framing, exploration, interpretation, modeling, and visualization. I have honed my ability to structure datasets effectively, explore patterns and relationships, and derive actionable insights.
               </p>
               <h2 className="heading">Quantitative Developer</h2>
               <p>
                  My experience includes employing statistical methods and visualization tools to uncover insights, interpret findings, and communicate results effectively. Additionally, I've delved into various modeling techniques, including regression analysis and machine learning to make informed predictions and drive decision-making processes.
               </p>
            </div>

            <div className='service-tools' >
               <h3 className='heading'>Tools</h3>
               <div className='list'>
                  <span>Python</span>
                  <span>Jupyter Notebook</span>
                  <span>Pandas</span>
                  <span>PyTorch</span>
                  <span>TensorFlow</span>
                  <span>Numpy</span>
                  <span>MS Excel</span>
                  <span>MS Powerpoint</span>
                  <span>Power BI</span>
               </div>
            </div>

         </section>

      </div>
   );
}
 
export default Services;