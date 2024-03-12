import './AboutMe.css'

const AboutMe = () => {
   return (
      <div id='aboutme-container'>
         <section id='profile' >
            <img id="muano" src="/muano2.jpg" alt='muano thebrain makhokha' />
            <div id='image-overlay'></div>
            <div id='names' >Muano<br/>Makhokha</div>
         </section>
         <section id='bio' >
            Location
            Interests
            Hobbies
            Favourite qoute
            Personal values and principles
            How I got here
            Where I am looking to go next
            Passion
            Fun facts
            Strengths and weaknesses
         </section>
      </div>
   );
}
 
export default AboutMe;