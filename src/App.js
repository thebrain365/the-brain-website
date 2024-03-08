import './App.css'
import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
   <div>
      <NavBar />

      <main id='app-container'>
         <Outlet />
      </main>
   </div>
  );
}

export default App;
