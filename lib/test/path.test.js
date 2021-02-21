import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';

import renderer from 'react-test-renderer';
import Path from '../comps/path_.jsx';

it('renders smoke test without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Router>
      <Path />
    </Router>,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('renders snapshot as expected', () => {
  const tree = renderer
    .create(
      <Router>
        <Path />
      </Router>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
