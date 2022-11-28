import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { userState } from "../../Atoms/UserState";
import { Navigate } from "react-router-dom";
import axios from "axios";
import env from "ts-react-dotenv";

import { Background, Text, TextContainer, Button, Wrong } from "./LoginStyles";

const defaultVariable = {
  username: "",
  password: "",
};

function Login() {
  const [form, setForm] = useState(defaultVariable);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [error, setError] = useState(false);
  const [myUser, setMyUser] = useRecoilState(userState);

  const onChange = (e: any) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    axios
      .post(`${env.API_URL}api/auth/login/`, form)
      .then((res) => {
        setMyUser(res.data);
        localStorage.setItem("token", res.data.token);
        setToken(localStorage.getItem("token"));
        setError(false);
      })
      .catch((err) => {
        setError(err.message);
      });
  };
  return token ? (
    <Navigate to="/" replace />
  ) : (
    <Background>
      <TextContainer>
        {error ? <Wrong>Incorrect Username/Password</Wrong> : <></>}
        <Text
          autoComplete="username"
          name="username"
          placeholder="Username"
          onChange={onChange}
        />
        <Text
          autoComplete="current-password"
          type="password"
          name="password"
          placeholder="Password"
          onChange={onChange}
        />
      </TextContainer>
      <Button onClick={onSubmit}>Login</Button>
    </Background>
  );
}

export default Login;
