import React from 'react';

import Generated from './generated_';
import Activity from './activity_';
import Code from './code_';
import ControlPanel from './control_panel_';

import '../styles/layout.css';

const Layout = () => {
  return (
    <main>
      <div className="col">
        <div className="container">{/* layouts generated */}</div>
        <div className="container">{/* activity chart */}</div>
        <div className="container">{/* code block */}</div>
      </div>
      <div className="col">
        <div className="container">{/* control panel */}</div>
      </div>
    </main>
  );
};
