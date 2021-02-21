import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Code from '../comps/code_.jsx';

it('renders smoke test without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Code />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders snapshot as expected', () => {
  const tree = renderer.create(<Code />).toJSON();
  expect(tree).toMatchSnapshot();
});
