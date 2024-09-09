import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from './Layout.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import User from './components/User.jsx'
import Github ,{ githubInfoLoader} from './components/Github.jsx'
import { RouterProvider , createBrowserRouter} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/react-deploy',
    element: <Layout/>,
    children: [
      {
        path: '/react-deploy',
        element: <Home/>,
      },
      {
        path: '/react-deploy/about',
        element: <About/>,
      },
      {
        path: '/react-deploy/contact',
        element: <Contact/>,
      },
      {
        path: '/react-deploy/user/:username',
        element: <User/>,
      },
      {
        loader:(githubInfoLoader),
        path: '/react-deploy/github',
        element: <Github/>,
      },
    ],
  },
])
  

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/> 
  </React.StrictMode>,
)
