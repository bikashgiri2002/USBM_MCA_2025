// import React from 'react'

const Button = ({titel, fn, bg}) => {
  return (
    <button className={`rounded ${bg} px-4 py-2 text-white`} onClick={fn}>{titel}</button>
  )
}

export default Button