import React from 'react';
import Demo from './comps/demo_page';
import {Pagehead} from '@primer/components';
import './comps/github_animations.scss';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import moment from 'moment';
moment().format();

const Header = () => {
  return (
    <Pagehead>
      <h1
        style={{
          color: '#979797',
          // prettier-ignore
          fontFamily: '\'Rubik\', sans-serif',
          padding: '0 40px',
          letterSpacing: '1px',
        }}>
        Flexbox Generator
      </h1>
    </Pagehead>
  );
};

const Footer = () => {
  let date = new Date().getFullYear();
  return (
    <footer style={{padding: '40px', marginTop: '40px'}}>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <div className="hover-grow">
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
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <a
            href="https://github.com/hi-matbub/flexbox/blob/master/LICENSE"
            style={{
              // prettier-ignore
              fontFamily: '\'Rubik\', sans-serif',
              lineHeight: '28px',
              letterSpacing: '1px',
            }}>
            {' '}
            License
          </a>
          <a
            href="https://github.com/hi-matbub/flexbox/blob/master/CONTRIBUTING.md"
            style={{
              fontFamily: "'Rubik', sans-serif",
              lineHeight: '28px',
              letterSpacing: '1px',
            }}>
            Contributing
          </a>
          <a
            href="https://github.com/hi-matbub/flexbox/issues"
            style={{
              fontFamily: "'Rubik', sans-serif",
              lineHeight: '28px',
              letterSpacing: '1px',
            }}>
            Report a bug
          </a>
        </div>
      </div>
      <small
        style={{
          fontFamily: '"Rubik", sans-serif',
          display: 'flex',
          justifyContent: 'center',
        }}>
        <i>
          © {date}
          &nbsp; | &nbsp;
          <a
            href="mailto:hi@matbub.co"
            target="_blank"
            rel="noopener noreferrer">
            {' '}
            hi-matbub
          </a>
        </i>
      </small>
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
