import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Subscribe from '../comps/subscribe.jsx';

it('renders smoke test without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Subscribe />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders snapshot as expected', () => {
  const tree = renderer.create(<Subscribe />).toJSON();
  expect(tree).toMatchSnapshot();
});
