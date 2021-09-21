import { render, screen } from '../../test-utils/testing-library-utils';
import { Router } from 'react-router-dom';
import {createMemoryHistory} from 'history';
import Header from '.';

test('renders with logo and child element', async () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <Header>
        <h1>Dummy Title</h1>
      </Header>
    </Router>
  );

  const logo = screen.getByRole('link', {name: /logo/i} );
  expect(logo).toBeInTheDocument();

  const child = screen.getByRole('heading', {name: /dummy title/i} );
  expect(child).toBeInTheDocument();
});