import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { LogInContext } from '../../context/logInContext';
import { Button, Nav } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faReceipt,
  faDollarSign,
  faUser,
  faTag,
  faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';

import './navbar.scss';
import '../../App.scss';

function Navbar() {
  const { logIn, setLogIn } = useContext(LogInContext);

  return (
    <nav className="navContainer p-4">
      <div className="navTitleContainer">
        <h1 className="navTitle">Expensifly</h1>
        <p className="navTitlePar mb-0">Budgeting reimagined</p>
      </div>
      <ul className="mb-0">
        {logIn && (
          <li className="p-2">
            <NavLink className={'hideOnResize'} to="/expenses">
              Expenses
            </NavLink>
            <NavLink to="/expenses">
              <FontAwesomeIcon className="p-4" icon={faReceipt} />
            </NavLink>
          </li>
        )}
        {logIn && (
          <li className="p-2">
            <NavLink className={'hideOnResize'} to="/budget">
              Budget
            </NavLink>
            <NavLink to="/budget">
              <FontAwesomeIcon className="p-4" icon={faDollarSign} />
            </NavLink>
          </li>
        )}

        {logIn && (
          <li className="p-2">
            <NavLink className={'hideOnResize'} to="/current-prices">
              Current prices
            </NavLink>
            <NavLink to="/current-prices">
              <FontAwesomeIcon className="p-4" icon={faTag} />
            </NavLink>
          </li>
        )}
        {!logIn ? (
          <li className="p-2">
            <NavLink className={'hideOnResize'} to="/user">
              User
            </NavLink>
            <NavLink to="/user">
              <FontAwesomeIcon className="p-4" icon={faUser} />
            </NavLink>
          </li>
        ) : (
          <li className="p-2">
            <button
              className="non-styled-button hideOnResize"
              onClick={() => {
                setLogIn(false);
              }}
            >
              Log Out
            </button>
            <FontAwesomeIcon
              className="p-4"
              icon={faRightFromBracket}
              onClick={() => {
                setLogIn(false);
              }}
            ></FontAwesomeIcon>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
