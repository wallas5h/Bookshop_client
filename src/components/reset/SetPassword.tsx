import { ChangeEvent, FormEvent, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaUserAstronaut } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { apiUrl } from '../../config/api';
import { messagesValidation as messages, setPasswordFormValidation } from "../../utils/logs.utils";
import './remindPassword.scss';

export const SetPassword = () => {

  const { token } = useParams();

  const [form, setForm] = useState({
    password: '',
    password2: '',
  });

  const navigate = useNavigate();

  const change = (e: ChangeEvent<HTMLInputElement>) => {
    setForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const formSubmit = async (e: FormEvent) => {
    e.preventDefault();


    const validation = setPasswordFormValidation(form);

    if (!validation.password || !validation.password2) {
      if (!validation.password) {
        toast.error(messages.password__incorect)
      }
      if (!validation.password2) {
        toast.error(messages.password2__incorect)
      }
      return;
    }

    try {
      const res = await fetch(`${apiUrl}/password/set`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          password: form.password,
          token,
        })
      })

      const data = await res.json();

      !res.ok && toast.error(data.message);

      if (res.ok) {
        toast.info(data.message)
        navigate('/')
      }

    }
    catch {

    }
  }


  return (
    <div className="login-form-container">

      <div><a href="/#home" className="close-login-btn">< AiOutlineClose /></a></div>

      <form onSubmit={formSubmit}>
        <h3><FaUserAstronaut /> Reset Password</h3>
        {/* {warning && <span style={{ color: 'red' }}>{warning}</span>} */}
        <span>Password</span>
        <input
          className="box"
          type='password'
          name="password"
          placeholder="Enter your password"
          value={form.password}
          onChange={change}
          required
        />
        <span>Confirm Password</span>
        <input
          className="box"
          type='password'
          name="password2"
          placeholder="Confirm password"
          value={form.password2}
          onChange={change}
          required />
        <button type="submit" className="btn btn-block" >Submit</button>
      </form>

    </div>
  )
}