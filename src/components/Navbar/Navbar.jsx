import React from 'react';
import { NavLink } from 'react-router-dom';

import './navbar.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faReceipt,
  faDollarSign,
  faTag,
} from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <nav className="navContainer">
      <div className="navTitleContainer">
        {/* <NavLink to="/"> */}
        <h1 className="navTitle">Expensifly</h1>
        {/* </NavLink> */}
        <p className="navTitlePar mb-0">Budgeting reimagined</p>
      </div>
      <ul className="mb-0">
        <li>
          <NavLink to="/receipts">Receipts/ expenses</NavLink>
          <FontAwesomeIcon icon={faReceipt} />
        </li>
        <li>
          <NavLink to="/expenses">Budget</NavLink>
          <FontAwesomeIcon icon={faDollarSign} />
        </li>
        <li>
          <NavLink to="/current-prices">Current prices </NavLink>
          <FontAwesomeIcon icon={faTag} />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
