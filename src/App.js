// import './App.css'
import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP)

function App() {

   useGSAP(() => {
      gsap.to('#label-1, #label-3', {
         left: '-100%',
         duration: 100
      })
      gsap.to('#label-2, #label-4', {
         left: '100%',
         duration: 100
      })
   })

  return (
   <div id='app-container'>
      <div id='app-bg'>
         <h1 id='label-1' className='label'>thebrain.dev  thebrain.dev  thebrain.dev  thebrain.dev</h1>
         <h1 id='label-2' className='label'>thebrain.dev  thebrain.dev  thebrain.dev  thebrain.dev</h1>
         <h1 id='label-3' className='label'>thebrain.dev  thebrain.dev  thebrain.dev  thebrain.dev</h1>
         <h1 id='label-4' className='label'>thebrain.dev  thebrain.dev  thebrain.dev  thebrain.dev</h1>
      </div>

      <NavBar />

      <main id='app-content'>
         <Outlet />
      </main>

      <footer id='app-footer'>
         <Footer />
      </footer>
   </div>
  );
}

export default App;
