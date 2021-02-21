import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ProTip from '../comps/protip.jsx';

it('renders smoke test without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProTip />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders snapshot as expected', () => {
  const tree = renderer.create(<ProTip />).toJSON();
  expect(tree).toMatchSnapshot();
});
