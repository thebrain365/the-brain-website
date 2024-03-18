// import './App.css'
import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

function App() {
  return (
   <div id='app-container'>
      {/* <header id='app-header'> */}
         <NavBar />
      {/* </header> */}

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
