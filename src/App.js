// import './App.css'
import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

function App() {
  return (
   <div>
      <NavBar />

      <main id='app-container'>
         <Outlet />
      </main>

      <Footer />
   </div>
  );
}

export default App;
