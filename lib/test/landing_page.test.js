import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import LandingPage from '../pages/landing_page.jsx';

it('renders smoke test without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LandingPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders snapshot as expected', () => {
  const tree = renderer.create(<LandingPage />).toJSON();
  expect(tree).toMatchSnapshot();
});
