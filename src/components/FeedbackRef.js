import { useState } from "react"
import { BOT_TOKEN, CHAT_ID, TELEGRAM_API } from "../env"
import ky from "ky";
import { toast } from "react-toastify";
import InputField from "./InputField";
import errorsMessage from "../helpers/errorsMessage";

function FeedbackRef(){
  const [values, setValue] = useState({
    name: '',
    email: '',
    message: '',
    agree: false
  })

  const [errors, setError] = useState({})

  const [disabled, setDisabled] = useState(false)

  function changeHandler(target){
    setValue({...values, [target.name]: target.value})
  }

  function agreeHandler(event){
    setValue({...values, "agree": event.target.checked})
    if(event.target.checked && errors.agree && errors.agree !== ""){
      setError({...errors, "agree": ''})
    }
  }

  function blurHandler(target){
    if(values[target.name] !== "" && errors[target.name] && errors[target.name]!==""){
      setError({...errors, [target.name]: ''})
    }
  }

  function isValidEmail(email) {
    const regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }

  function validate(values){
    const errors = {}
    if(values.name==="")
      errors.name = 'Enter your name'
    if(values.email==="")
      errors.email = 'Enter email address'
    else if(!isValidEmail(values.email))
      errors.email = 'Invalid email'
    if(values.message==="")
      errors.message = 'Enter message text'
    if(!values.agree)
      errors.agree = 'You must agree with privacy policy'
    return errors
  }

  async function submitHandler(event){
    setDisabled(true)
    event.preventDefault()

    const errorMessages = validate(values)
    setError(errorMessages)

    if(Object.keys(errorMessages).length){
      setDisabled(false)
      return false
    }

    const text = `
<b>Name:</b> ${values.name}
<b>Email:</b> ${values.email}
<b>Message:</b> ${values.message}
      `;

    const formData = new FormData();
    formData.append('chat_id', CHAT_ID);
    formData.append('text', text);
    formData.append('parse_mode', 'HTML');
    // console.log(formData);

    try {
      const resp = await ky.post(`${TELEGRAM_API}${BOT_TOKEN}/sendMessage`, {
        body: formData,
      }).json();
      if(resp.ok){
        toast.success('Thanks! Your message successfully sent')
        setValue({
          name: '',
          email: '',
          message: '',
          agree: false
        })
      }
    } catch ({response}){
      toast.error(errorsMessage(response.status))
    } finally {
      setDisabled(false)
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <InputField
        multy={false}
        label="Your name"
        name="name"
        value={values.name}
        change={changeHandler}
        blur={blurHandler}
        error={errors.name || ''}
      />
      <InputField
        multy={false}
        label="Your email"
        name="email"
        value={values.email}
        change={changeHandler}
        blur={blurHandler}
        error={errors.email || ''}
      />
      <InputField
        multy={true}
        label="Message"
        name="message"
        value={values.message}
        change={changeHandler}
        blur={blurHandler}
        error={errors.message || ''}
      />
      <div className="check-wrap">
        <input type="checkbox" id="agree" onChange={agreeHandler} checked={values.agree} />
        <label htmlFor="agree">I agree with privacy policy</label>
        {errors.agree && errors.agree !== '' ? (<p className="input-error">{errors.agree}</p>) : null}
      </div>
      <button type="submit" className="btn btn-primary btn-block btn-lg mt-3" disabled={disabled}>Send Message</button>
    </form>
  )
}

export default FeedbackRef