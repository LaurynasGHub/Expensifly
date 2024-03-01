import React from 'react';
import './navbar.scss';
import { NavLink } from 'react-bootstrap';
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
        {/* <h1 className="navTitle">Expensifly</h1> */}
        <NavLink to="/">
          <h1 className="navTitle">Expensifly</h1>
        </NavLink>
        <p className="navTitlePar mb-0">Budgeting reimagined</p>
      </div>
      <ul className="mb-0">
        <li>
          <NavLink to="">Receipts</NavLink>
          <FontAwesomeIcon icon={faReceipt} />
        </li>
        <li>
          <NavLink to="">Expenses</NavLink>
          <FontAwesomeIcon icon={faDollarSign} />
        </li>
        <li className="navbarCurrentPrices">
          <NavLink to="">Current prices </NavLink>
          <FontAwesomeIcon icon={faTag} />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
