import React from 'react';
import check from '../lib/static/check.svg';
import '../styles/protip.css';

const ProTip = (props) => {
  return (
    <div className="protip-wrapper">
      <div className="check_box">
        <img src={check} alt="check" />
      </div>
      <div className="pro-tip">
        <span className="pro-tip-content">{props.content}</span>
        <span className="pro-tip-author">{props.author}</span>
      </div>
    </div>
  );
};

export default ProTip;
