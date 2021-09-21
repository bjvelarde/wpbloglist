import { render, screen, waitForElementToBeRemoved } from '../../test-utils/testing-library-utils';
import { Router } from 'react-router-dom';
import {createMemoryHistory} from 'history';
import Categories from '.';

test('renders with dynamic options', async () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <Categories />
    </Router>
  );

  await waitForElementToBeRemoved(() => screen.getByTestId(/load-categories/i));

  const comboBox = screen.getByRole('combobox', {name: /categories/i});
  expect(comboBox).toBeInTheDocument();

  const options = screen.getAllByRole('option');
  expect(options.length).toBeGreaterThan(0);
});