import { ChangeEvent, FormEvent, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaUserAstronaut } from "react-icons/fa";
import { toast } from "react-toastify";
import { apiUrl } from '../../config/api';
import { messagesValidation as messages, singinFunctionFormValidation as formValidation } from "../../utils/logs.utils";
import './remindPassword.scss';

export const ResetPassword = () => {

  const [formData, setFormData] = useState({
    email: '',
  });

  const { email } = formData;

  const change = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))

  }

  const formSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const validation = formValidation(formData);

    if (!validation.email) {
      toast.error(messages.email__incorect)
    }

    try {
      const res = await fetch(`${apiUrl}/password/reset`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: formData.email
        })
      })

      const data = await res.json();

      if (res.ok) {
        setFormData({
          email: '',
        })
        toast.info(data.message);

      }

    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div className="login-form-container">

      <div><a href="/#home" className="close-login-btn">< AiOutlineClose /></a></div>

      <form onSubmit={formSubmit}>
        <h3><FaUserAstronaut /> Reset Password</h3>
        <span>Email</span>
        <input
          className="box"
          type='email'
          name="email"
          id="email"
          placeholder="Enter your email"
          value={email}
          onChange={change}
          required />

        <button type="submit" className="btn btn-block" >Submit</button>
        <p>don't have an account ? <a href="/register">create one</a></p>
      </form>

    </div>
  )
}