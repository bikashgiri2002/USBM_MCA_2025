// import React from 'react'

import { useState } from "react"

const Form = () => {
    const [username, setUsername] = useState("");
    const handleChange = (e) => {
        setUsername(e.target.value);

        alert(`wellcome ${username}`)
    }
  return (
    <div className='flex justify-center items-center'>
        <form  className="text-center">
            <label htmlFor="">Name : </label>
            <input className="border p-2" type="text" placeholder="Enter your name" onChange={handleChange}/>
            <br />
            <label htmlFor="">Email : </label>
            <input type="email"  
            className="border p-2"
            placeholder="abc@123gmail.com"/>
            <br />
            <button className="bg-blue-600 mt-2 p-2 rounded-lg">Submit</button>
        </form>
    </div>
  )
}

export default Form