import SmallMediaWelcomeSectionBgSvg from '../../assets/SmallMediaWelcomeSectionBgSvg';
import './Home.css'

const Home = () => {
   return (
      <div id='home-container'>
         <section
            className='welcome-section'
         >
            <div
               className='welcome-section-bg'
            >
               <SmallMediaWelcomeSectionBgSvg />
            </div>
            <h1 className='welcome-message'>
               Welcome to my digital space. I'm thrilled to have you here!
            </h1>
         </section>

      </div>
   );
}
 
export default Home;