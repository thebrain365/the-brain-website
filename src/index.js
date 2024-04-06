import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import App from './App';
import Home from './pages/Home/Home';
import Blogs from './pages/Blogs/Blogs';
import Services from './pages/Services/Services';
import AboutMe from './pages/AboutMe/AboutMe';
import Portfolio from './pages/Portfolio/Portfolio';
import Blog from './components/Blog/Blog';

const client = new ApolloClient({
   uri: 'http://192.168.18.250:1337/graphql',
   cache: new InMemoryCache(),
 });

const router = createBrowserRouter(
   createRoutesFromElements(
      <Route path='/' element={ <App /> } >
         <Route index element={ <Home /> } />
         <Route path='services' element={ <Services /> } />
         <Route path='blogs' element={ <Blogs /> } />
         <Route path='aboutme' element={ <AboutMe /> } />
         <Route path='portfolio' element={ <Portfolio /> } />
         <Route path='blog/:blogId' element={ <Blog /> } />
      </Route>
   )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <ApolloProvider client={client}>
         <RouterProvider router={ router } />
      </ApolloProvider>
  </React.StrictMode>
);