import React from 'react';
import '../styles/landing.css';
// import Subscribe from './subscribe';
import char001 from '../lib/static/char-001.svg';

const LearnFlexBox = () => (
  <span className="learnflexbox">
    #
    <h1>
      learn<span>flexbox</span>
    </h1>
  </span>
);

const Landing = (props) => {
  return (
    <header className="header">
      <div className="col-cont">
        <div className="lfb-cont">
          <LearnFlexBox />
          {/* <p className={'alt-text'} style={{marginBottom: '24px'}}>
            {'Subscribe for 30 days of Wire-framing Challenges.'}
          </p>
          <Subscribe /> */}
        </div>
      </div>
      <div className="col-char">
        <img src={char001} alt="character" className="char" />
      </div>
    </header>
  );
};

export default Landing;
