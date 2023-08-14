import { useId } from "react"
import './../assets/scss/input.scss'

function InputField({name, change, label, value, error, multy, blur}){
  const inputId = useId();

  function changeHandler(event){
    change(event.target)
  }

  function blurHandler(event){
    blur(event.target)
  }

  return (
    <div className="form-group">
      <div className={error !== '' ? 'did-floating-label-content has-error' : 'did-floating-label-content'}>
        {multy
          ? <textarea className="did-floating-input form-control form-control-lg" type="text" placeholder=" " name={name} id={inputId} onChange={changeHandler} onBlur={blurHandler} value={value} />
          : <input className="did-floating-input form-control form-control-lg" type="text" placeholder=" " name={name} id={inputId} onChange={changeHandler} onBlur={blurHandler} value={value} />
        }
        <label className="did-floating-label" for={inputId}>{ label }</label>
      </div>
      {error != '' ? (<p className="input-error">{error}</p>) : null}
    </div>
  )
}

export default InputField