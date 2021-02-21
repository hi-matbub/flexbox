import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Copy from '../comps/copy_.jsx';

it('renders smoke test without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Copy />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders snapshot as expected', () => {
  const tree = renderer.create(<Copy />).toJSON();
  expect(tree).toMatchSnapshot();
});
