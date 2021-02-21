import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import AboutPage from '../pages/about_page.jsx';

it('renders smoke test without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AboutPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders snapshot as expected', () => {
  const tree = renderer.create(<AboutPage />).toJSON();
  expect(tree).toMatchSnapshot();
});
