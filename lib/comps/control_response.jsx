import React from 'react';
import Copy from './copy_';
import '../styles/control_response.css';
import Char02 from '../lib/static/char-002.svg';

const ControlResponse = (props) => {
  return (
    <div className="control-response">
      <div className="footer-img">
        <img src={Char02} alt="char" />
      </div>
      <Copy data={props.data} />
    </div>
  );
};

export default ControlResponse;
