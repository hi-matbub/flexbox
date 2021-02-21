import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import License from '../pages/license.jsx';

it('renders smoke test without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<License />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders snapshot as expected', () => {
  const tree = renderer.create(<License />).toJSON();
  expect(tree).toMatchSnapshot();
});
