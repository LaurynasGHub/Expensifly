import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function InputButton(placeHolder1, placeHolder2) {
  <div className="addButton">
    <div className="input-group my-3 mb-3">
      <input
        type="text"
        id="expenseName"
        className="form-control"
        placeholder={placeHolder1}
        aria-label={placeHolder1}
        aria-describedby="basic-addon2"
      />
      <input
        type="text"
        className="form-control"
        id="expensePrice"
        placeholder={placeHolder2}
        aria-label={placeHolder2}
        aria-describedby="basic-addon2"
      />
      <div className="input-group-append">
        <button className="btn btn-outline-secondary" type="submit">
          <FontAwesomeIcon className="buttonSvg" icon={faPlus} />
        </button>
      </div>
    </div>
  </div>;
}

export default InputButton;
