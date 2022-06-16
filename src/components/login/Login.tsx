import { ChangeEvent, FormEvent, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaSignInAlt } from "react-icons/fa";
import './login.scss';

export const Login = () => {

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password, } = formData;

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
      password: '',
    })
  }


  return (
    <div className="login-form-container">

      <div><a href="/#home" className="close-login-btn">< AiOutlineClose /></a></div>

      <form onSubmit={formSubmit}>
        <h3><FaSignInAlt /> Login</h3>
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
        <span>Password</span>
        <input
          className="box"
          type='password'
          name="password"
          id="password"
          placeholder="Enter your password"
          value={password}
          onChange={change}
          required />
        <button type="submit" className="btn btn-block" >Submit</button>
        <p>forget password ? <a href="/login/remind">click here</a></p>
        <p>don't have an account ? <a href="/register">create one</a></p>
      </form>

    </div>
  )
}