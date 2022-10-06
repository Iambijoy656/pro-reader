import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './components/ErrorPage'
import Header from './components/Header'
import Home from './components/Home'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home></Home>,
      errorElement: <ErrorPage></ErrorPage>
    },
    {
      path: '/home',
      element: <Home></Home>
    },
  ])

  return (
    <div>
      <Header></Header>

      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
