import React, { useState } from "react";
import axios from "axios";

import {useCookies} from 'react-cookie';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cookies, setCookie, removeCookie] = useCookies(['isUser']);

    const handleLogin = async (e) => {
      e.preventDefault();
      if(email==='admin@gmail.com'&& password==='admin'){
                setCookie('loggedIn',true)
window.location.href='/admin'
      }
     
    };
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
