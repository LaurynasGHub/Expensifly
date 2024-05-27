import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import './navbar.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faReceipt,
  faDollarSign,
  faUser,
  faTag,
} from '@fortawesome/free-solid-svg-icons';

import { LogInContext } from '../../context/logInContext';

function Navbar() {
  const { logIn } = useContext(LogInContext);

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

        {/* TODO
        check if user is logged in, if yes then show expenses tab, else hide it */}

        {logIn && (
          <li className="p-2">
            <NavLink to="/current-prices">Current prices </NavLink>
            <FontAwesomeIcon className="p-4" icon={faTag} />
          </li>
        )}
        <li className="p-2">
          <NavLink className={'hideOnResize'} to="/user">
            User
          </NavLink>
          <NavLink to="/user">
            <FontAwesomeIcon className="p-4" icon={faUser} />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
