# React Hooks Examples and Projects

## Table of Contents

1. [Introduction to React Hooks](#introduction-to-react-hooks)
2. [Conversion Calculator Project](#conversion-calculator-project)
3. [Understanding useState](#understanding-usestate)
4. [Understanding useEffect](#understanding-useeffect)
5. [Understanding useRef](#understanding-useref)
6. [Form Validation Example](#form-validation-example)
7. [Fetching Data Periodically Example](#fetching-data-periodically-example)
8. [Synchronizing UI with URL Query Params](#synchronizing-ui-with-url-query-params)

## Introduction to React Hooks

React hooks are powerful tools that allow you to use state and other React features in functional components. In this project, we’ll explore three essential hooks: `useState`, `useEffect`, and `useRef`, by creating a simple conversion calculator that converts values between centimeters and inches. This use case provides a practical way to understand how these hooks work together to build interactive and dynamic applications.

## Conversion Calculator Project

First, let's set up a basic React project and create a new component for our conversion calculator.

```jsx
import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const cmRef = useRef(null);
  const inchesRef = useRef(null);
  const [cm, setCm] = useState(0.0);
  const [inches, setInches] = useState(0.0);

  const cmChange = (event) => {
    setCm(event.target.value);
  };

  const inchesChange = (event) => {
    setInches(event.target.value);
  };

  useEffect(() => {
    if (document.activeElement === cmRef.current) {
      setInches(cm / 2.54);
    } else if (document.activeElement === inchesRef.current) {
      setCm(inches * 2.54);
    }
  }, [inches, cm]);

  return (
    <div>
      <label>
        CM: <input type="number" onChange={cmChange} step="0.01" value={cm} ref={cmRef} />
      </label>
      <br />
      <label>
        Inches: <input type="number" onChange={inchesChange} step="0.01" value={inches} ref={inchesRef} />
      </label>
    </div>
  );
}

export default App;
