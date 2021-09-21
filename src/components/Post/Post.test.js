import { render, screen, waitForElementToBeRemoved } from '../../test-utils/testing-library-utils';
import { Router } from 'react-router-dom';
import {createMemoryHistory} from 'history';
import Post from '.';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useParams: () => ({
    slug: 'life-as-a-developer-manager'
  })
}));

test('renders post page with correct title', async () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <Post />
    </Router>
  );

  await waitForElementToBeRemoved(() => screen.getByTestId(/spinner/i));

  const titleText = screen.getByRole('heading', { name: /Life as a Developer Relations Manager/i });
  expect(titleText).toBeInTheDocument();
});