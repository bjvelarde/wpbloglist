import React, { useEffect } from 'react';
import { usePosts } from '../../context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYinYang } from '@fortawesome/free-solid-svg-icons';
import { debounce } from 'lodash';
import SC from './style';

const Categories = () => {
  const { state, fetchCategories, filterPosts } = usePosts();

  const showOptions = () => {
    return state.categories.map(category => {
      return <option
        key={category.slug}
        value={category.slug}
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
      <SC.Select onChange={handleChange}>
        <option value="all">All Categories</option>
        {showOptions()}
      </SC.Select>
    ) : <FontAwesomeIcon icon={faYinYang} spin color="#1a425e"/> }
  </SC.Container>
};

export default Categories;