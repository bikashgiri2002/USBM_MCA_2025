import React from 'react'

function Card({name, age, roll, img}) {
  return (
    <div className='flex flex-col w-80 h-96 border-solid border-2 border-sky-500 mt-5 rounded-xl'>
        <div className='h-1/2 rounded-xl p-2'>
            <img src={img} alt="" className='h-full w-full  ' />
        </div>
        <div className='h-1/2 rounded-xl p-2 flex flex-col justify-center items-center'>
            <h2>Name : {name}</h2>
            <h3>Age : {age}</h3>
            <h3>Roll No : pm {roll}</h3>
        </div>
    </div>
  )
}

export default Card