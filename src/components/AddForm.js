import { memo, useRef } from "react";


export const AddForm = memo(({click})=>{
  const inputText = useRef(null);
  const handlerClick = ()=>{
    click(inputText.current.value);
  }

  console.log('AddForm render');

  return (
    <div className="row">
      <div className="col-10">
        <input type="text" ref={inputText} />
      </div>
      <div className="col-2">
        <button type="button" onClick={ handlerClick }>Click</button>
      </div>
    </div>
  )  
});
