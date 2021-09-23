import React, { useEffect } from 'react';
import { usePosts } from '../../context';
import Spinner from '../Spinner';
import { debounce } from 'lodash';
import SC from './style';

const Categories = () => {
  const { state, fetchCategories, filterPosts } = usePosts();

  const showOptions = () => {
    return state.categories.map(category => {
      return <option
        key={category.slug}
        value={category.slug}
        selected={category.slug === state.category}
      >{category.name}</option>;
    });
  };

  const debouncedHandler = debounce(e => filterPosts(e.target.value), 100);

  const handleChange=(e)=>{
    debouncedHandler(e);
  }

  useEffect(() => {
    async function fetchData() {
      await fetchCategories();
    }
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <SC.Container>
    {state.categories ? (
      <SC.Select title="categories" onChange={handleChange}>
        <option value="all">All Categories</option>
        {showOptions()}
      </SC.Select>
    ) : <Spinner size="1x" testid="load-categories"/> }
  </SC.Container>
};

export default Categories;