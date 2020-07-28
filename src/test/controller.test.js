import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ControlPanel from '../comps/controller/controller_.jsx';

it('renders smoke test without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ControlPanel />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders snapshot as expected', () => {
  const tree = renderer.create(<ControlPanel />).toJSON();
  expect(tree).toMatchSnapshot();
});
