import { RouterProvider } from 'react-router-dom'
import './App.css'
import router from './router'
import { useEffect } from 'react'
import checkAuth from './service/checkAuth'
import { Toaster } from 'react-hot-toast'

function App() {
  useEffect(() => {
    checkAuth()
  }, [])

  return (
    <>
      <Toaster position="top-right" />
      <RouterProvider router={router} />
    </>
  )
}

export default App
