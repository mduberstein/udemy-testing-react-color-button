import { render, screen } from '@testing-library/react';
import App from './App';
// import {logRoles} from '@testing-library/react';

// find an element with a role of button and text of 'Change to blue'
test('button has correct initial color', () => {
  // const {container} = render(<App />);
  // logRoles(container);
  render(<App />)

  const colorButton = screen.getByRole('button', {name:'Change to blue' }); 
  // expect the background color to be red
  expect(colorButton).toHaveStyle({backgroundColor: 'red'});
});

test('button turns blue when clicked', () => {

});

// test('renders learn react link', () => {
//   // throw new Error('Test failed');
//   render(<App />);
//   // const linkElement = screen.getByText('Learn React');
//   const linkElement = screen.getByRole('link', {name: /learn react/i});
//   expect(linkElement).toBeInTheDocument();
// });

