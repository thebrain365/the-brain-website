import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import App from './App';
import Home from './pages/Home/Home';
import Blogs from './pages/Blogs/Blogs';
import Services from './pages/Services/Services';
import AboutMe from './pages/AboutMe/AboutMe';
import Portfolio from './pages/Portfolio/Portfolio';

const router = createBrowserRouter(
   createRoutesFromElements(
      <Route path='/' element={ <App /> } >
         <Route index element={ <Home /> } />
         <Route path='services' element={ <Services /> } />
         <Route path='blogs' element={ <Blogs /> } />
         <Route path='aboutme' element={ <AboutMe /> } />
         <Route path='portfolio' element={ <Portfolio /> } />
      </Route>
   )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={ router } />
  </React.StrictMode>
);