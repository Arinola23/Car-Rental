import React from 'react'
import {useState} from 'react'


const signIn = () => {
  const [user, setUser] = useState()
  const [email,setEmail] = useState()
  const [password,setPassword] = useState()


  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
      {/* User field */}
        <div className='d-flex'>

        </div>
      {/* email field */}

      {/* password field */}
    </div>
    
  )
}

export default signIn