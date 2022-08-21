import { useEffect } from "react";
import { AiFillCheckCircle, AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export const OrderSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => { navigate('/') }, 5000)

    
  }, [])

  return (
    <div className="login-form-container-info">

      <div><a href="/#home" className="close-login-btn">< AiOutlineClose /></a></div>
      <h3 style={{ color: "green", fontSize: '6rem' }}><AiFillCheckCircle /> </h3>
      <div className="log-info">Your payment was successfull. </div>
      <span></span>
      <div>
        <button className="btn-login--info" onClick={() => navigate('/')}>Go to Shop</button>
      </div>
    </div>
  )
}