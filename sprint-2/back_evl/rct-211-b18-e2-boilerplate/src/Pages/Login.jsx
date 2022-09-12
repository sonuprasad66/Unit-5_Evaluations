import React from "react";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {useLocation, useNavigate} from "react-router-dom";
import {login} from "../Redux/AuthReducer/action";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const comingFrom = location.state?.data || "/";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && password) {
      dispatch(login({email, password})).then((res) => {
        navigate(comingFrom, {replace: true});
      });
    }
  };

  return (
    <div>
      <h2>LOGIN</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>User Email</label>
          <br />
          <input
            data-testid="login-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>User Password</label>
          <br />
          <input
            data-testid="login-password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" data-testid="login-submit">
          Loading
        </button>
      </form>
    </div>
  );
};

export default Login;
