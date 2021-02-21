import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ProTipCol from '../comps/protip_col.jsx';

it('renders smoke test without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProTipCol />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders snapshot as expected', () => {
  const tree = renderer.create(<ProTipCol />).toJSON();
  expect(tree).toMatchSnapshot();
});
