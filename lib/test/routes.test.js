import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';

import renderer from 'react-test-renderer';
import Routes from '../comps/routes_.jsx';

it('renders smoke test without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Router>
      <Routes />
    </Router>,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('renders snapshot as expected', () => {
  const tree = renderer
    .create(
      <Router>
        <Routes />
      </Router>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
