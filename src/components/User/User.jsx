import { useRef, useState, createContext, useContext } from 'react';

import { cfg } from '../../cfg/cfg';

import { LogInContext } from '../../context/logInContext';

import './user.scss';

function User() {
  const { logIn, setLogIn } = useContext(LogInContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const getUsername = useRef();
  const getPassword = useRef();

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
        setError('username or password is incorrect');
        throw new Error('username or password is incorrect');
      } else {
        setError('');
        const user = await response.json();
        console.log('successfully logged in', user);
        setLogIn(true);
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div class="col-md-8 mx-auto text-center p-3">
      {!logIn ? (
        <>
          <div className="logInText my-5 ">
            <h4>Hi! welcome to Expensifly</h4>
            <h4 className="my-3">Please log in</h4>
          </div>
          <div className="logInInputs">
            <h5 className="mt-3">User name</h5>
            <input
              type="text"
              id="userName"
              placeholder="user name"
              ref={getUsername}
            ></input>
            <h5 className="mt-4">Password</h5>
            <input
              type="password"
              id="password"
              placeholder="password"
              ref={getPassword}
            ></input>
          </div>
          <div className="error-message mt-3">{error}</div>
          <button type="button" className="my-4 btn" onClick={handleLogIn}>
            Log in
          </button>
        </>
      ) : null}

      {logIn ? (
        <div className="logged-in-successfully m-5">LOGGED IN SUCCESSFULLY</div>
      ) : null}
    </div>
  );
}

export default User;
