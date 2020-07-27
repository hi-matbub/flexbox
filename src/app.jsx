import React from 'react';
import Demo from './comps/demo_page';
import {Pagehead} from '@primer/components';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const Header = () => {
  return (
    <Pagehead>
      {/* prettier-ignore */}
      <h1 style={{color: '#979797', fontFamily: '\'Rubik\', sans-serif'}}>
        Flexbox Generator
      </h1>
    </Pagehead>
  );
};

const Footer = () => {
  return (
    <footer style={{marginTop: '40px'}}>
      <div>
        <a
          href="https://www.buymeacoffee.com/himatbub"
          target="_blank"
          rel="noopener noreferrer">
          <img
            src="https://cdn.buymeacoffee.com/buttons/default-blue.png"
            alt="Buy Me A Coffee"
            style={{height: '51px', width: '217px'}}
          />
        </a>
      </div>
    </footer>
  );
};

const NotFound = () => {
  return (
    <>
      <h1>{'404'}</h1>
      <p>{'Whoops, that wasnt there!'}</p>
      <a href="/flexbox-visualization">Go Home</a>
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/flexbox-visualization" render={() => <Demo />} />
          <Route render={() => <NotFound />} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
