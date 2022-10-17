import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import {replaceCamelWithSpaces} from './App';

// import {logRoles} from '@testing-library/react';

// find an element with a role of button and text of 'Change to Midnight Blue'
test('button has correct initial color and updates when clicked', () => {
  // const {container} = render(<App />);
  // logRoles(container);
  render(<App />)

  const colorButton = screen.getByRole('button', {name:'Change to Midnight Blue' }); 
  // expect the background color to be Medium Violet Red
  expect(colorButton).toHaveStyle({backgroundColor: 'MediumVioletRed'});

  // click button
  fireEvent.click(colorButton);
  // expect the background color to be Medium Violet Red
  expect(colorButton).toHaveStyle({backgroundColor: 'MidnightBlue'});
  // expect the text to be 'Change to Medium Violet Red'
  expect(colorButton).toHaveTextContent('Change to Medium Violet Red');
});

test('intitial conditions', ()=> {
  render(<App />);

  // check that the button starts out enabled
  const colorButton = screen.getByRole('button', {name:'Change to Midnight Blue'});
  expect(colorButton).toBeEnabled();
  // check that the checkbox starts out unchecked
  const checkbox = screen.getByRole('checkbox')
  expect(checkbox).not.toBeChecked();
})

test('checkbox disables button on first click adn enables on second click', () => {
  render(<App />);

  const colorButton = screen.getByRole('button', {name: 'Change to Midnight Blue'});
  const checkbox = screen.getByRole('checkbox', {name: 'Disable button'});
  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();
  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
});

test('Disabled button has gray background and reverts to Medium Violet Red', ()=>{
  render(<App />);

  const colorButton = screen.getByRole('button', {name: 'Change to Midnight Blue'});
  const checkbox = screen.getByRole('checkbox', {name: 'Disable button'});

  // disable button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({backgroundColor: 'gray'});
  // re-enable button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({'background-color': 'MediumVioletRed'});
});

test('Clicked disabled button has gray background and reverts to Midnight Blue', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', {name: 'Change to Midnight Blue'});
  const checkbox = screen.getByRole('checkbox', {name: 'Disable button'});

  // change button to Midnight Blue
  fireEvent.click(colorButton);
  // disable button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle('background-color: gray');
  // reenable button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({backgroundColor: 'MidnightBlue'});

});

describe('spaces before camel-case capital letters', () => {
  test('works for no inner capital letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red');
  });

  test('works for one inner capital letter', () => {
    expect(replaceCamelWithSpaces('MignightBlue')).toBe('Mignight Blue');
  });

  test('works for two inner capital letters', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
  });
});



//#region Experiments before Clip 14
// test('button turns MidnightBlue when clicked', () => {
//   render(<App />);
//   const colorButton = screen.getByRole('button', {name:'Change to MidnightBlue' });
// });

// test('renders learn react link', () => {
//   // throw new Error('Test failed');
//   render(<App />);
//   // const linkElement = screen.getByText('Learn React');
//   const linkElement = screen.getByRole('link', {name: /learn react/i});
//   expect(linkElement).toBeInTheDocument();
// });
//#endregion

