import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from "@testing-library/user-event"

test('renders learn react link', () => {
  render(<App />);

  // Checking if checkbox is not checked v
  expect(screen.getByTestId("checkbox")).not.toBeChecked()

  // Event: Click on the checkbox v
  userEvent.click(screen.getByTestId("checkbox"));

});


test("testing button", () => {
  render(<App />);
  //my test 
  const button = screen.getByRole("button");
  userEvent.click(button);

});


test("testing text", () => {
  render(<App />);
  //extra test
  expect(screen.getByText("Hello World")).toBeInTheDocument();
});




//npm run test