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
          <NavLink to="/receipts">Receipts / expenses</NavLink>
          <FontAwesomeIcon className="p-4" icon={faReceipt} />
        </li>
        <li className="p-2">
          <NavLink to="/expenses">Budget</NavLink>
          <FontAwesomeIcon className="p-4" icon={faDollarSign} />
        </li>
        <li className="p-2">
          <NavLink to="/current-prices">Current prices </NavLink>
          <FontAwesomeIcon className="p-4" icon={faTag} />
        </li>
        <li className="p-2">
          <NavLink to="/current-prices">User </NavLink>
          <FontAwesomeIcon className="p-4" icon={faUser} />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
