import { ChangeEvent, FormEvent, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaSignInAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { UserLoginRes } from 'types';
import { apiUrl } from '../../config/api';
import { changeUserId, changeUserLogStatus, changeUserName } from "../../features/auth/authSlice";
import { RootState } from "../../features/store";
import { messagesValidation as messages, singinFunctionFormValidation as formValidation } from "../../utils/logs.utils";
import './login.scss';

export const Login = () => {

  const dispatch = useDispatch();
  const { isUserLogged } = useSelector((store: RootState) => store.auth);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password, } = formData;
  const navigate = useNavigate();

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
    const userData = {
      email, password
    }

    try {
      const res = await fetch(`${apiUrl}/users/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      })

      // @TODO zwalidowac res.json

      const data: UserLoginRes = await res.json();

      if (data.message) {
        toast.info(data.message)
      }
      if (res.ok) {
        // debugger;
        // console.log(data._id, data.name)
        dispatch(changeUserLogStatus(true));
        localStorage.setItem('isUserLogged', JSON.stringify(true));
        localStorage.setItem('token', JSON.stringify(data.token));

        // console.log(isUserLogged)

        if (data._id) {
          dispatch(changeUserId(data._id));
          localStorage.setItem('userId', JSON.stringify(data._id));
        }
        if (data.name) {
          dispatch(changeUserName(data.name));
          localStorage.setItem('userName', JSON.stringify(data.name));
        }

        navigate('/');
      }


    }

    finally {
      // changeLoadingLogData(false);
      setFormData({
        email: '',
        password: '',
      })

    }

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