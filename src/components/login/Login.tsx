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

  const [warning, setWarning] = useState<string>('');

  const [resendVerificationLink, setResendVerificationLink] = useState<boolean>(false);

  const { email, password, } = formData;
  const navigate = useNavigate();

  const change = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))

  }

  const clearForms = () => {
    setResendVerificationLink(false);
    setWarning('');
    setFormData({
      email: '',
      password: '',
    })

    console.log(resendVerificationLink, warning);
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
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      })

      const data: UserLoginRes = await res.json();

      if (!res.ok) {
        if (data.warning) {
          setWarning(data.warning);
        }

        if (data.resendVerificationLink) {
          setResendVerificationLink(data.resendVerificationLink)
        }
      }

      if (res.ok) {

        toast.info(data.message);

        dispatch(changeUserLogStatus(true));

        if (data._id) {
          dispatch(changeUserId(data._id));
        }
        if (data.name) {
          dispatch(changeUserName(data.name));
        }

        navigate('/');

        setFormData({
          email: '',
          password: '',
        })
      }

    } catch (error) {
      console.log(error);
    }

  }

  const handleResendVerificationEmail = async () => {

    if (!formData.email) return;

    try {
      const res = await fetch(`${apiUrl}/users/resendRegisterVerification`, {
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
        clearForms();
        toast.info(data.message);

        setTimeout(() => { navigate(0) }, 3000);
      }

    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div className="login-form-container">

      <div><a href="/#home" className="close-login-btn">< AiOutlineClose /></a></div>

      <form onSubmit={formSubmit}>
        <h3><FaSignInAlt /> Login</h3>
        <a href=""></a>
        {warning && <span style={{ color: 'red' }}>{warning}</span>}
        {/* {resendVerificationLink && <button style={{ color: 'blue' }} onClick={handleResendVerificationEmail}>Click here to resend verification email.</button>} */}
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
        {resendVerificationLink && <button className="btn btn-block" onClick={handleResendVerificationEmail}>resend verification email</button>}
        <p>forget password ? <a href="/login/remind">click here</a></p>
        <p>don't have an account ? <a href="/register">create one</a></p>
      </form>

    </div>
  )
}


