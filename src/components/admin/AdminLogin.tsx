import { ChangeEvent, FormEvent, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaSignInAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { apiUrl } from "../../config/api";
import {
  changeAccess,
  changeAccessToken,
  changeRefreshToken,
} from "../../features/admin/adminAuthSlice";
import {
  changeCurrentPage,
  changePhrase,
} from "../../features/search/searchSlice";
import { RootState } from "../../features/store";
// import "./login.scss";

interface Props {
  access: boolean;
  changeAccess: (value: boolean) => void;
}

export const AdminLogin = () => {
  const dispatch = useDispatch();
  const { access } = useSelector((store: RootState) => store.adminAuth);

  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });

  const [warning, setWarning] = useState<string>("");

  const { name, password } = formData;
  const navigate = useNavigate();

  const change = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const clearForms = () => {
    setWarning("");
    setFormData({
      name: "",
      password: "",
    });
  };

  const formSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const userData = {
      name,
      password,
    };

    try {
      const res = await fetch(`${apiUrl}/admin/login`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const data = await res.json();

      if (!res.ok) {
        if (data.warning) {
          setWarning(data.warning);
        }
      }

      if (res.ok) {
        dispatch(changeAccess(true));
        dispatch(changeAccessToken(data.accessToken));
        dispatch(changeRefreshToken(data.refreshToken));
        dispatch(changePhrase(""));
        dispatch(changeCurrentPage(1));

        setFormData({
          name: "",
          password: "",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleCloseBtn = () => {
    changeAccess(false);
    dispatch(changeAccess(false));
    dispatch(changeAccessToken(""));
    dispatch(changeRefreshToken(""));
  };

  return (
    <div className="login-form-container">
      <div>
        <a href="/#home" className="close-login-btn" onClick={handleCloseBtn}>
          <AiOutlineClose />
        </a>
      </div>

      <form onSubmit={formSubmit}>
        <h3>
          <FaSignInAlt /> Admin Login
        </h3>
        {warning && <span style={{ color: "red" }}>{warning}</span>}

        <input
          className="box"
          type="name"
          name="name"
          placeholder="Name"
          value={name}
          onChange={change}
          required
        />

        <input
          className="box"
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={change}
          required
        />
        <button type="submit" className="btn btn-block">
          Submit
        </button>
      </form>
    </div>
  );
};
