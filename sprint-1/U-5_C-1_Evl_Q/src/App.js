import {useEffect, useReducer} from "react";
import "./App.css";
import axios from "axios";
import {
  handleFail,
  handleRequest,
  handleSuccess,
  handleEmail,
  handlePassword,
} from "./actionCreators";
import {reducer} from "./reducer";
import {initialState} from "./initialState";

function App() {
  //use the useReducer function here; import the reducer function and initial state variable here.
  const [reducerState, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(handleRequest());
    axios
      .post(`https://reqres.in/api/login`, {
        email: reducerState.email,
        password: reducerState.password,
      })
      .then((res) => {
        console.log(res.data);
        dispatch(handleSuccess(res.data.token));
      })
      .catch((err) => {
        dispatch(handleFail(err));
      });
  };

  console.log();

  return (
    <div className="main-app">
      <div className="login-wrapper">
        <div style={{textAlign: "center"}}>
          <h1>LOGIN</h1>
          <div className="welcome-text">
            Welcome to the RCT-211 E1 Evaluation
          </div>
          {/* if the user is authenticated as per the reducerState, THEN ONLY show div with the token data, OTHERWISE show the Incorrect Credentials div */}

          {reducerState.isAuth ? (
            <div data-cy="token">Token:{reducerState.token}</div>
          ) : (
            <div data-cy="incorrect-credentials" style={{color: "red"}}>
              Incorrect Credentials
            </div>
          )}
        </div>
        <form onSubmit={handleSubmit}>
          <div className="email-wrapper">
            <label>Email</label>
            <input
              data-cy="email"
              type="email"
              onChange={(e) => {
                dispatch(handleEmail(e.target.value));
              }}
            />
          </div>
          <div className="password-wrapper">
            <label>Password</label>
            <input
              data-cy="password"
              type="password"
              onChange={(e) => {
                dispatch(handlePassword(e.target.value));
              }}
            />
          </div>
          <div className="submit-button-wrapper">
            <button data-cy="submit-button" type="submit">
              LOGIN
            </button>
          </div>
        </form>
        <div className="social-media-icons">
          <img src="/facebook.png" alt="facebook-icon" />
          <img src="/instagram.png" alt="facebook-icon" />
          <img src="/linkedin.png" alt="facebook-icon" />
          <img src="/twitter.png" alt="facebook-icon" />
          <img src="/github.png" alt="facebook-icon" />
        </div>
      </div>
    </div>
  );
}

export default App;
