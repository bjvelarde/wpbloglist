import { render, screen } from '../../test-utils/testing-library-utils';
import { Router } from 'react-router-dom';
import {createMemoryHistory} from 'history';
import PostHero from '.';

test('renders hero/banner for post page', async () => {
  const history = createMemoryHistory();

  render(
    <Router history={history}>
      <PostHero />
    </Router>
  );

  const hero = screen.getByTestId('post-hero');
  expect(hero).toBeInTheDocument();
});