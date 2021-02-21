import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from './comps/routes_';
import MobileWarn from './pages/mobile_warning';
import './styles/global.css';

import Window from './comps/helpers/handleWindow';

const App = () => {
  const {width} = Window();
  return <Router>{width > 576 ? <Routes /> : <MobileWarn />}</Router>;
};

export default App;
