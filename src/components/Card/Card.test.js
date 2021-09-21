import { render, screen } from '../../test-utils/testing-library-utils';
import { Router } from 'react-router-dom';
import {createMemoryHistory} from 'history';
import Card from '.';

test('renders with correct properties', async () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <Card post={{
        slug: 'dummy-slug',
        categories: { 'Dummy Category': {} },
        post_thumbnail: { URL: 'https://dummyimage.com/600x400/000/fff' },
        title: 'Dummy Title',
        date: '2021-06-26'
      }}/>
    </Router>
  );

  const category = screen.getByText(/dummy category/i);
  expect(category).toBeInTheDocument();

  const title = screen.getByRole('heading', {name: /dummy title/i});
  expect(title).toBeInTheDocument();
});