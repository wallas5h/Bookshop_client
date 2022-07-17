import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { apiUrl } from '../../config/api';
import { changeUserId, changeUserLogStatus, changeUserName } from "../../features/auth/authSlice";
import { RootState } from "../../features/store";
import './login.scss';

interface Props {
  email: string | null;
}

export const LoginInfo = ({ email }: Props) => {

  const dispatch = useDispatch();
  const { isUserLogged, userName } = useSelector((store: RootState) => store.auth);

  const navigate = useNavigate();

  const handleLogout = async () => {
    changeUserLogStatus(false);
    changeUserName('');
    changeUserId('');
    localStorage.setItem('isUserLogged', JSON.stringify(0))
    localStorage.setItem('token', JSON.stringify(''));
    try {
      const res = await fetch(`${apiUrl}/users/logout`);
      const data = await res.json();
      toast.info(data.message);

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className="login-form-container">

        <div><a href="/#home" className="close-login-btn">< AiOutlineClose /></a></div>
        <div>You are logged as <strong>{email}</strong></div>
        <button className="btn btn-block" onClick={handleLogout}>Log out</button>
      </div>
    </>
  )
}