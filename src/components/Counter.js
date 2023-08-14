import { useState, useCallback } from "react";
import { AddForm } from "./AddForm";


function Counter(){
  const [arr, setArr] = useState([]);
  const handleClickOne = (val)=>{
    setArr([...arr, val]);
  };
  const handleClickTwo = useCallback((val)=>{
    setArr((arr)=>[...arr, val]);
  }, []);
  console.log('Component rendered');

  return (
    <div className="container">
      <AddForm click={handleClickOne} />
      <AddForm click={handleClickTwo} />
      <ul>
        {arr.map(item => <li>{item}</li>)}
      </ul>
    </div>
  );
}

export default Counter;