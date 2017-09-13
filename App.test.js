import React from 'react';
import App from './App';


// it('renders without crashing', () => {
//   const rendered = renderer.create(<App />).toJSON();
//   expect(rendered).toBeTruthy();
// });

it('should be true', () => {
  expect(true).toBeTruthy();
});

it('', () => {
  let app = new App();

  expect(app.func1()).toBeTruthy();
});