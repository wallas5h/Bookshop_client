
import './register.scss';

import { ChangeEvent, FormEvent, useState } from "react";
import { FaUserAlt } from "react-icons/fa";

import { AiOutlineClose } from 'react-icons/ai';
import { toast } from "react-toastify";
import { apiUrl } from '../../config/api';

import { useNavigate } from 'react-router-dom';
import { UserRegisterRes } from 'types';
import { messagesValidation as messages, singupFunctionFormValidation as formValidation } from "../../utils/logs.utils";



export const Register = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
    terms: false
  });

  const { name, email, password, password2, terms } = formData;

  const [validationErrors, setValidationErrors] = useState({
    name: false,
    email: false,
    password: false,
    password2: false,
    terms: false
  })

  const navigate = useNavigate();
  // const dispatch = useDispatch();

  // const { user, isLoading, isError, isSuccess, message } = useSelector(
  //   (state: any) => state.auth
  // )

  const change = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        [e.target.name]: e.target.checked
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        [e.target.name]: e.target.value
      }))
    }
  }

  const formSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const validation = formValidation(formData);

    if (!validation.correct) {
      !validation.name && toast.error(messages.name__incorect)
      !validation.email && toast.error(messages.email__incorect)
      !validation.password && toast.error(messages.password__incorect)
      !validation.password2 && toast.error(messages.password2__incorect)
      !validation.terms && toast.error(messages.terms__incorect)
      return
    }

    const userData = {
      name, email, password, terms
    }

    try {
      const res = await fetch(`${apiUrl}/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      })

      // @TODO zwalidowac res.json

      const data: UserRegisterRes = await res.json();

      if (data.message) {
        toast.info(data.message)
      }
      if (res.ok) {
        navigate('/')
      }

    }

    finally {
      // changeLoadingLogData(false);
      setFormData({
        name: '',
        email: '',
        password: '',
        password2: '',
        terms: false
      })
    }






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
          name="name"
          id="name"
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
        <label htmlFor="terms">
          <input
            className="box"
            type="checkbox"
            name='terms'
            id='terms'
            required
            checked={formData.terms}
            onChange={change}
          />
          I agree to the <a href={`${apiUrl}/terms`}>terms of service</a>
        </label>

        <button type="submit" className="btn btn-block" >Sign Up</button>

      </form>

    </div>
  )
}