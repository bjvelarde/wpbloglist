import { render, screen } from '../../test-utils/testing-library-utils';
import { Router } from 'react-router-dom';
import {createMemoryHistory} from 'history';
import MainHero from '.';

test('renders title text and chevron', async () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <MainHero />
    </Router>
  );

  const chevron = screen.getByTestId('click-down');
  expect(chevron).toBeInTheDocument();

  const titleText = screen.getByRole('heading', {name: /the truecaller blog/i} );
  expect(titleText).toBeInTheDocument();
});