import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import NotFoundPage from '../pages/not-found_page.jsx';

it('renders smoke test without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NotFoundPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders snapshot as expected', () => {
  const tree = renderer.create(<NotFoundPage />).toJSON();
  expect(tree).toMatchSnapshot();
});
