import React,{useState, useEffect} from 'react'
import {useDispatch} from 'react-redux'
import './App.css'
import authService from './appwrite/auth'
function App() {
  //loading state for conditional rendering
  const [loading, setLoading] = useState(true)
  const dispatch=useDispatch()

  return (
    <>
      
    </>
  )
}

export default App
