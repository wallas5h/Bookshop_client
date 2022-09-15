import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { apiUrl } from "../../config/api";
import {
  changeAccess,
  changeAccessToken,
  changeRefreshToken,
} from "../../features/admin/adminAuthSlice";
import { RootState } from "../../features/store";

export const useRefreshTokenRequest = async () => {
  const dispatch = useDispatch();
  const { accessToken, refreshToken, access } = useSelector(
    (store: RootState) => store.adminAuth
  );
  let intervalId: any;
  const Time = 1 * 6 * 1000;

  const ref = useRef();
  const isRunned = useRef(false);

  useEffect(() => {
    !isRunned.current &&
      (() => {
        if (!access) {
          clearInterval(ref.current);
          return;
        }

        intervalId = setInterval(() => {
          fetchData();
        }, Time);
        ref.current = intervalId;
        return () => clearInterval(intervalId);
      })();
    return () => {
      isRunned.current = true;
    };
  }, []);

  const fetchData = async () => {
    const res = await fetch(`${apiUrl}/admin/refresh-token`, {
      method: "PUT",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ refreshToken }),
    });

    const data = await res.json();

    if (!res.ok) {
      console.log("res.ok problem refresh token");
      // dispatch(changeAccess(false));
      dispatch(changeAccessToken(""));
      dispatch(changeRefreshToken(""));
    }

    if (res.ok) {
      console.log(data);
      console.log("res.ok refresh token");
      dispatch(changeAccess(true));
      dispatch(changeAccessToken(data.accessToken));
    }
  };
};

export const useCheckAccessRequest = () => {
  const dispatch = useDispatch();
  const { accessToken, refreshToken, access } = useSelector(
    (store: RootState) => store.adminAuth
  );

  const isRunned = useRef(false);

  useEffect(() => {
    !isRunned.current &&
      (async () => {
        const res = await fetch(`${apiUrl}/admin/check-access`, {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (!res.ok) {
          dispatch(changeAccess(false));
        }

        if (res.ok) {
          dispatch(changeAccess(true));
        }
      })();

    return () => {
      isRunned.current = true;
    };
  }, []);
};
