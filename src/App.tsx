import { RouterProvider } from 'react-router-dom'
import './App.css'
import router from './router'
import { useEffect } from 'react'
import checkAuth from './service/checkAuth'


function App() {
  useEffect(() => {
    checkAuth()
  })
  return (
    <RouterProvider router={router} />
  )
}

export default App
