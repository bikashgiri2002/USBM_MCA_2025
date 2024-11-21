// import { useState } from 'react'
import "./App.css";
import Card from "./componets/Card";

function App() {
  // const [count, setCount] = useState(0)
  // const element = <h1 className='text-center'>bikash</h1>;

  return (
    <>
      <h1 className="bg-slate-50 p-2 text-center text-orange-600 rounded-xl">
        my react project
      </h1>
      <div className="flex gap-10">
        <Card name="bhagya" age={20} roll={23} img="/react.svg" />
        <Card name="bikash" age={21} roll={24} img="/G-removebg-preview.png" />
        <Card name="laxmi" age={20} roll={143} img="/vite.svg" />
      </div>
    </>
  );
}

export default App;
