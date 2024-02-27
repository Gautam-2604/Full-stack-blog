import React,{useState, useEffect} from 'react'
import {useDispatch} from 'react-redux'
import './App.css'
import authService from './appwrite/auth'
import {login, logout} from './store/authSlice'
import { Header, Footer } from './components/index'
function App() {
  //loading state for conditional rendering
  const [loading, setLoading] = useState(true)
  const dispatch=useDispatch();
  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if (userData){
        dispatch(login({userData: userData}))   //.
      }
      else{
        dispatch(logout)
      }
    })
    .finally(()=>{setLoading(false)})
  },[])

  return !loading?(
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <Footer />
      </div>
    </div>
  ):null
}

export default App
