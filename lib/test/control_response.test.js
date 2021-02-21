import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ControlResponse from '../comps/coming-soon_.jsx';

it('renders smoke test without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ControlResponse />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders snapshot as expected', () => {
  const tree = renderer.create(<ControlResponse />).toJSON();
  expect(tree).toMatchSnapshot();
});
