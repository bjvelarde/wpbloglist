import { render, screen } from '../../test-utils/testing-library-utils';
import { Router } from 'react-router-dom';
import {createMemoryHistory} from 'history';
import Footer from '.';

test('renders with copy text', async () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <Footer />
    </Router>
  );

  const copyText = screen.getByText(/true software scandinavia ab/i);
  expect(copyText).toBeInTheDocument();
});