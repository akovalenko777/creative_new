import { useState } from "react"
import { BOT_TOKEN, CHAT_ID, TELEGRAM_API } from "../env"
import ky from "ky";
import { toast } from "react-toastify";
import InputField from "./InputField";

function Feedback(){
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [values, setValue] = useState({
    name: '',
    email: '',
    message: '',
    agree: false
  })

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');

  function isValidEmail(email) {
    const regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }

  function checkName(value){
    if(value!=="" && nameError!==''){
      setNameError('');
    }
  }

  function checkEmail(value){
    if(value!=="" && isValidEmail(value) && emailError!==''){
      setEmailError('');
    }
  }

  function checkMessage(value){
    if(value!=="" && messageError!==''){
      setMessageError('');
    }
  }

  async function submitHandler(event){
    event.preventDefault()

    let isValid = true;

    if(name===""){
      setNameError('Enter your name')
      isValid = false
    } else {
      setNameError('')
    }

    if(email===""){
      setEmailError('Enter your email address')
      isValid = false
    } else {
      if(isValidEmail(email)){
        setEmailError('')
      } else {
        setEmailError('Invalid email address')
        isValid = false
      }
    }

    if(message===""){
      setMessageError('Enter message text')
      isValid = false
    } else {
      setMessageError('')
    }

    if(!isValid){
      return false
    }

    const text = `
    <b>Name:</b> ${name}
    <b>Email:</b> ${email}
    <b>Message:</b> ${message}
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
      console.log(resp);
      if(resp.ok){
        toast.success('Thanks! Your message successfully sent')
        setName('')
        setEmail('')
        setMessage('')
      }
    } catch (error){
      toast.error('Some error. Please try again later.')
    }
    
  }

  return (
    <form onSubmit={submitHandler}>
      <InputField
        multy={false}
        label="Your name"
        value={name}
        change={(val) => setName(val)}
        blur={(val) => checkName(val)}
        error={nameError}
      />
      <InputField
        multy={false}
        label="Your email"
        value={email}
        change={(val) => setEmail(val)}
        blur={(val) => checkEmail(val)}
        error={emailError}
      />
      <InputField
        multy={true}
        label="Message"
        value={message}
        change={(val) => setMessage(val)}
        blur={(val) => checkMessage(val)}
        error={messageError}
      />
      <div className="check-wrap">
        <input type="checkbox" id="agree" />
        <label htmlFor="agree">I agree with privacy policy</label>
      </div>
      <button type="submit" className="btn btn-primary btn-block btn-lg mt-3">Send Message</button>
    </form>
  )
}

export default Feedback