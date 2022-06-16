
import './register.scss';

import { ChangeEvent, FormEvent, useState } from "react";
import { FaUserAlt } from "react-icons/fa";

import { AiOutlineClose } from 'react-icons/ai';
import { toast } from "react-toastify";



export const Register = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = formData;

  // const navigate = useNavigate();
  // const dispatch = useDispatch();

  // const { user, isLoading, isError, isSuccess, message } = useSelector(
  //   (state: any) => state.auth
  // )

  const change = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))

  }

  const formSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (password !== password2) {
      toast.error('Password do not match')
    }
    else {

      const userData = {
        name, email, password
      }

      // dispatch(register(userData))
    }



    setFormData({
      name: '',
      email: '',
      password: '',
      password2: ''
    })
  }


  return (
    <div className="login-form-container">

      <div><a href="/#home" className="close-login-btn">< AiOutlineClose /></a></div>

      <form onSubmit={formSubmit}>
        <h3><FaUserAlt /> Register</h3>
        <span>Name</span>
        <input
          className="box"
          type='text'
          name="text"
          id="text"
          placeholder="Enter your name"
          value={name}
          onChange={change}
          required />
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
        <label htmlFor="password2">
          <span>Confirm Password</span>
          <input
            className="box"
            type='password'
            name="password2"
            id="password2"
            placeholder="Confirm password"
            value={password2}
            onChange={change}
            required />
        </label>

        <button type="submit" className="btn btn-block" >Submit</button>

      </form>

    </div>
  )
}