import { render, screen, waitForElementToBeRemoved } from '../../test-utils/testing-library-utils';
import { Router } from 'react-router-dom';
import {createMemoryHistory} from 'history';
import Articles from '.';

test('renders with logo, banner and article list', async () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <Articles />
    </Router>
  );
  const logo = screen.getByRole('link', { name: /logo/i });
  expect(logo).toBeInTheDocument();
  const banner = screen.getByRole('banner', { name: /banner/i });
  expect(banner).toBeInTheDocument();

  await waitForElementToBeRemoved(() => screen.getByTestId(/spinner/i));

  const titleText = screen.getByRole('heading', { name: /latest articles/i });
  expect(titleText).toBeInTheDocument();
});