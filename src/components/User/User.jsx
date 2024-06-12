import { useRef, useState, useContext } from 'react';

import { cfg } from '../../cfg/cfg';

import { LogInContext } from '../../context/logInContext';
import { UserIdContext } from '../../context/userIdContext';

import './user.scss';

function User() {
  const { logIn, setLogIn } = useContext(LogInContext);
  const [logInError, setLogInError] = useState('');
  const [registerError, setRegisterError] = useState('');
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  const { userId, setUserId } = useContext(UserIdContext);
  const [loading, setLoading] = useState(false);

  const getUsername = useRef();
  const getPassword = useRef();
  const getRegisterUsername = useRef();
  const getRegisterPassword = useRef();

  const handleLogIn = async (e) => {
    e.preventDefault();

    const username = getUsername.current.value;
    const password = getPassword.current.value;

    try {
      setLoading(true);

      const response = await fetch(`${cfg.API.HOST}/user/login`, {
        method: 'POST',
        headers: {
          'Content-type': 'Application/json',

          Authorization: 'Bearer token',
        },

        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        setLogInError('username or password is incorrect');
        throw new Error('username or password is incorrect');
      } else {
        setLogInError('');
        const user = await response.json();
        console.log('successfully logged in', user);
        setUserId(user);
        setLogIn(true);
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  const registerUser = async (e) => {
    e.preventDefault();

    const username = getRegisterUsername.current.value;
    const password = getRegisterPassword.current.value;

    try {
      setLoading(true);

      const response = await fetch(`${cfg.API.HOST}/user`, {
        method: 'POST',
        headers: {
          'Content-type': 'Application/json',

          Authorization: 'Bearer token',
        },

        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        setRegisterError('username already exists');
        throw new Error('username already exists');
      } else {
        setRegisterError('');
        const user = await response.json();
        console.log('successfully registered', user);
        setRegisterError('successfully registered');
        // setUserId(user);
        // setLogIn(true);
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="col-md-8 mx-auto text-center p-3">
      {!logIn ? (
        <>
          <div className="logInText my-5 ">
            <h4>Hi! welcome to Expensifly</h4>
            <h4 className="my-3">Please log in</h4>
          </div>
          <form className="logInInputs">
            <h5 className="mt-3">User name</h5>
            <input
              type="text"
              id="userName"
              placeholder="user name"
              ref={getRegisterUsername}
            ></input>
            <h5 className="mt-4">Password</h5>
            <input
              type="password"
              id="password"
              placeholder="password"
              autoComplete="on"
              ref={getRegisterPassword}
            ></input>
          </form>
          <div className="error-message mt-3">{logInError}</div>

          <div className="user-login-register">
            <button type="button" className="btn" onClick={handleLogIn}>
              Log in
            </button>
            <div>-</div>
            <button className="btn" onClick={() => setShowRegisterForm(true)}>
              Not a member yet? Register
            </button>
          </div>
        </>
      ) : null}

      {showRegisterForm ? (
        <div className="mt-4">
          <form className="logInInputs">
            <h5 className="mt-3">PLease enter your desired user name</h5>
            <input
              type="text"
              id="userName"
              placeholder="user name"
              ref={getRegisterUsername}
            ></input>
            <h5 className="mt-4">Choose a strong password</h5>
            <input
              type="password"
              id="password"
              placeholder="password"
              autoComplete="on"
              ref={getRegisterPassword}
            ></input>
          </form>
          <div className="error-message mt-3">{registerError}</div>

          <div className="user-login-register">
            <button type="button" className="btn" onClick={registerUser}>
              Register
            </button>
          </div>
        </div>
      ) : null}

      {logIn ? (
        <div className="logged-in-successfully m-5">LOGGED IN SUCCESSFULLY</div>
      ) : null}
    </div>
  );
}

export default User;
