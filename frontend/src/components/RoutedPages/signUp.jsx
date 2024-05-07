import React from 'react'
import {useState} from 'react'


const signIn = () => {
  const [user, setUser] = useState()
  const [email,setEmail] = useState()
  const [password,setPassword] = useState()


  return (
    // <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
    <div className=''>
        <div className='h-screen'>
          <div className='font-serif text-5xl text-center py-5'>
            <h1>SignUp</h1>
          </div>
          {/* User field */}
        
      {/* email field */}

      {/* password field */}
        </div>
    </div>
    
  )
}

export default signIn