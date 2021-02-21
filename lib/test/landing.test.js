import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Landing from '../comps/landing.jsx';

it('renders smoke test without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Landing />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders snapshot as expected', () => {
  const tree = renderer.create(<Landing />).toJSON();
  expect(tree).toMatchSnapshot();
});
