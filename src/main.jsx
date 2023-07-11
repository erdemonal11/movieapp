import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import Movie1 from './pages/Movie1.jsx';
import Movie2 from './pages/Movie2.jsx';
import Movie3 from './pages/Movie3.jsx';
import Movie4 from './pages/Movie4.jsx';
import Movie5 from './pages/Movie5.jsx';
import Movie6 from './pages/Movie6.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Home />
  },
  {
    path: "movie-1",
    element: <Movie1/>
  },
  {
    path: "movie-2",
    element: <Movie2/>
  },
  {
    path: "movie-3",
    element: <Movie3/>
  },
  {
    path: "movie-4",
    element: <Movie4/>
  },
  {
    path: "movie-5",
    element: <Movie5/>
  },
  {
    path: "movie-6",
    element: <Movie6/>
  }

]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
