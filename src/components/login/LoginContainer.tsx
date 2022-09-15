// import { useSelector } from "react-redux";
// import { RootState } from "../../features/store";
import { useEffect, useState } from "react";
import { UserMeRes } from "types";
import { apiUrl } from '../../config/api';
import { LoginInfo } from "./LogginInfo";
import { Login } from "./Login";


export const LoginContainer = () => {

  const [email, setEmail] = useState<string | null>('')

  useEffect(() => {
    (async () => {
      const res = await fetch(`${apiUrl}/users/me`,
        {
          method: 'GET',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
            // 'Authorization': `Bearer ${token}`,
          }
        }
      );

      if (!res.ok) {
        return;
      }

      const data: UserMeRes = await res.json();

      if (data.email) {
        setEmail(data.email)
      }
    })()
  }, [])

  return (
    <>
      {email ? <LoginInfo email={email} /> : <Login />}
    </>
  )
}