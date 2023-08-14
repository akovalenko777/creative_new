import { useState } from "react"
import { BOT_TOKEN, CHAT_ID, TELEGRAM_API } from "../env"
import ky from "ky";
import { toast } from "react-toastify";
import InputField from "./InputField";
import errorsMessage from "../helpers/errorsMessage";

function MyFeedback(){
  const [values, setValue] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [errors, setError] = useState({})
  const [disabled, setDisabled] = useState(false)

  function changeHandler(target){
    setValue({...values, [target.name]: target.value})
  }

  function blurHandler(target){
    if(target.value !== "" && target.name in errors && errors[target.name]!==""){
      setError({...errors, [target.name]: '' })
    }
  }

  function isValidEmail(email) {
    const regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }

  function validateValues(values){
    const errors = {};
    if(values.name === "")
      errors.name = 'Enter your name'
    if(values.email === "")
      errors.email = 'Enter your email'
    else if (!isValidEmail(values.email))
      errors.email = 'Invalid email address'
    if(values.message === "")
      errors.message = 'Enter message text'
    return errors;
  }

  async function submitHandler(event){
    setDisabled(true)
    event.preventDefault()

    const validatedErrors = validateValues(values)
    setError(validatedErrors)

    if(Object.values(validatedErrors).length){
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

    try {
      const resp = await ky.post(`${TELEGRAM_API}${BOT_TOKEN}/sendMessage`, {
        body: formData,
      }).json();
      if(resp.ok){
        toast.success('Thanks! Your message successfully sent')
        setValue({
          name: '',
          email: '',
          message: ''
        })
      } else {
        toast.error('Something wrong')
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

      <button type="submit" className="btn btn-primary btn-block btn-lg mt-3" disabled={disabled}>Send Message</button>
    </form>
  )
}

export default MyFeedback