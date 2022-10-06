import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './components/About'
import ErrorPage from './components/ErrorPage'
import Home from './components/Home'
import Root from './components/Root'


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          // path: '/',
          index: true,
          element: <Home></Home>
        },
        {
          path: 'home',
          element: <Home></Home>
        },
        {
          path: '/about',
          element: <About></About>
        },
      ]
    },
  ])

  return (
    <div>


      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
