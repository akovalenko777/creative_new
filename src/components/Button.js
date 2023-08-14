import { memo } from "react";

export const Button = memo(({click, text})=>{
  function clickHandler(){
    click('Some val');
  }

  console.log(`Button ${text} render`);

  return (
    <button type="button" onClick={clickHandler}>{text}</button>
  )
});

