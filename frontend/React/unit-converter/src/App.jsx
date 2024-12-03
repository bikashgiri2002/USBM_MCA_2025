import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const cmRef = useRef(null);
  const inchesRef = useRef(null);
  const [cm, setCm] = useState(0.0);
  const [inches, setInches] = useState(0.0);
  // handle changes using useState
  const cmChange = (event) => {
    setCm(event.target.value);
  }
  const inchesChanges = (event) => {
    setInches(event.target.value);
  }
  // add dependencies using useEffect
  useEffect(() => {
    // access the element in js using useRef
    if(document.activeElement === cmRef.current) {
      setInches(cm / 2.54);
    }else if (document.activeElement === inchesRef.current) {
      setCm(inches * 2.54);
    }
  },[inches,cm])
  return (
    <>
      <div>
      CM : <input type="number" onChange={cmChange} step="0.01" value={cm} ref={cmRef}/>
      <br />
      Inches : <input type="number" onChange={inchesChanges} step="0.01" value={inches} ref={inchesRef} />
      </div>
    </>
  )
}

export default App
