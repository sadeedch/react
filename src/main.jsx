import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RootLayout from './routes/RootLayout'
import NewPost from './Components/NewPost'


// a list of all the routes
const router = createBrowserRouter([
  {path: '/', element: <RootLayout/>, children: [
    {path: '/', element: <App/>},
    {path: '/create', element: <NewPost/>}
  ],}, 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
