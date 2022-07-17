// import { useSelector } from "react-redux";
// import { RootState } from "../../features/store";
import { useEffect, useState } from "react";
import { apiUrl } from '../../config/api';
import { LoginInfo } from "./LogginInfo";
import { Login } from "./Login";


export const LoginContainer = () => {

  const isUserLogged = localStorage.getItem('isUserLogged');
  const token = localStorage.getItem('token');

  const [email, setEmail] = useState<string | null>('')

  useEffect(() => {
    (async () => {
      // debugger;
      const res = await fetch(`${apiUrl}/users/me`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        }
      });
      const data = await res.json();

      if (data.email) {
        setEmail(data.email)
      }
    })()
  }, [])

  return (
    <>
      {/* <LoginInfo /> */}
      {console.log('email', email)}
      {email ? <LoginInfo email={email} /> : <Login />}
    </>
  )
}