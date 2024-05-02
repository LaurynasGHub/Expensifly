import { useState } from 'react';

import './user.scss';

function User() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [logIn, setLogIn] = useState(false);

  //TODO make function to handle login
  //get data from backend and check user

  const handleLogIn = async (e) => {
    e.preventDefault();

    setLogIn(true);

    const form = e.currentTarget;
    // if (!form.checkValidality()) return;

    console.log(username, password);
  };

  return (
    <div class="col-md-8 mx-auto text-center p-3">
      <div className="logInText my-5 ">
        <h4>Hi! welcome to Expensifly</h4>
        <h4 className="my-3">Please log in</h4>
      </div>
      <div className="logInInputs">
        <h5 className="mt-3">User name</h5>
        <input type="text" id="userName" placeholder="user name"></input>
        <h5 className="mt-4">Password</h5>
        <input type="text" id="password" placeholder="password"></input>
      </div>
      <button type="button" className="my-4 btn" onClick={handleLogIn}>
        Log in
      </button>
    </div>
  );
}

export default User;
