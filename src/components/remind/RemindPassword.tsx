import { ChangeEvent, FormEvent, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaUserAstronaut } from "react-icons/fa";
import './remindPassword.scss';

export const RemindPassword = () => {

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

  const formSubmit = (e: FormEvent) => {
    e.preventDefault();



    setFormData({
      email: '',

    })
  }


  return (
    <div className="login-form-container">

      <div><a href="/#home" className="close-login-btn">< AiOutlineClose /></a></div>

      <form onSubmit={formSubmit}>
        <h3><FaUserAstronaut /> Remind Password</h3>
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