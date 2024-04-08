import React from 'react';
import { NavLink } from 'react-router-dom';

import './navbar.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faReceipt,
  faDollarSign,
  faTag,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <nav className="navContainer p-4">
      <div className="navTitleContainer">
        {/* <NavLink to="/"> */}
        <h1 className="navTitle">Expensifly</h1>
        {/* </NavLink> */}
        <p className="navTitlePar mb-0">Budgeting reimagined</p>
      </div>
      <ul className="mb-0">
        <li className="p-2">
          <NavLink to="/expenses">Expenses</NavLink>
          <FontAwesomeIcon className="p-4" icon={faReceipt} />
        </li>
        <li className="p-2">
          <NavLink to="/budget">Budget</NavLink>
          <FontAwesomeIcon className="p-4" icon={faDollarSign} />
        </li>
        <li className="p-2">
          <NavLink to="/current-prices">Current prices </NavLink>
          <FontAwesomeIcon className="p-4" icon={faTag} />
        </li>
        <li className="p-2">
          <NavLink to="/user">User </NavLink>
          <FontAwesomeIcon className="p-4" icon={faUser} />
        </li>
        <li>
          {/* dropdown doesnt open */}
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown button
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="ref1">
                Action
              </a>
              <a class="dropdown-item" href="ref2">
                Another action
              </a>
              <a class="dropdown-item" href="ref3">
                Something else here
              </a>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
