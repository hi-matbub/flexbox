import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ComingSoon from '../comps/coming-soon_.jsx';

it('renders smoke test without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ComingSoon />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders snapshot as expected', () => {
  const tree = renderer.create(<ComingSoon />).toJSON();
  expect(tree).toMatchSnapshot();
});
