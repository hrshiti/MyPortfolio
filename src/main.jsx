import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'

import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar.jsx'
import Contact_form from './components/Contact_form/Contact_form.jsx'
import Projects from './components/projects/Projects.jsx'
import Services from './components/services/Services.jsx'


const router = createBrowserRouter([
	{
		path: "/navbar",
		element: <Navbar />
	  },
	  {
		path: "/home",
		element: <Home />
	  },
	  {
		path: "/",
		element: <App />
	  },
	  {
		path: "/contact",
		element: <Contact_form />
	  },
	  {
		path: "/projects",
		element: <Projects />
	  },
	  {
		path: "/services",
		element: <Services />
	  },
	]);
	



ReactDOM.createRoot(document.getElementById('root')).render(
	
		<RouterProvider router={router} />
	
)