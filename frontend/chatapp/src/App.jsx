import { useState } from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from './components/HomePage';
import Signup from './components/Signup';
import Login from './components/Login';
import './App.css'

const router = createBrowserRouter([
  {
    path:"/",
    element:<HomePage/>
  },
  {
    path:"/signup",
    element:<Signup/>
  },
  {
    path:"/login",
    element:<Login/>
  },
])

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
        {/* <button className="btn btn-soft">Default</button>
        <button className="btn btn-soft btn-secondary">Secondary</button>
        <button className="btn btn-soft btn-accent">Accent</button>
        <button className="btn btn-soft btn-info">Info</button>
        <button className="btn btn-soft btn-success">Success</button>
        <button className="btn btn-soft btn-warning">Warning</button> */}
        <div className="p-4 h-screen flex items-center justify-center">
          <RouterProvider router={router}/>
        </div>
    </div>
  )
}

export default App
