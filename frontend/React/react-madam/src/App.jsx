import { useState } from 'react'
import './App.css'
import Button from './componets/Button';

function App() {
  // let count = 0;
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount((count) => count + 1);
    // count++;
    // console.log(count);
  }
  const decrease = () => {
    (count <= 0) ? setCount(0) : setCount((prev) => --prev);
    // count--;
    // console.log(count);
  }


  return (
    <>
    <h1>learn the use of state in react</h1>
      <div className='m-5 rounded-lg border border-blue-800 h-[60px] place-content-center text-2xl shadow'>{count}</div>
      <div className='p-6 flex justify-between'>
        <Button titel='Increase' fn={increase} bg='bg-blue-500' />
        <Button titel='Decrease' fn={decrease} bg='bg-red-500' />
      </div>
    </>
  )
}

export default App
