import React, { useEffect } from 'react';
import Categories from '../Categories';
import Card from '../Card';
import Pagination from '../Pagination';
import { usePosts } from '../../context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYinYang } from '@fortawesome/free-solid-svg-icons';
import SC from './style';

const Articles = () => {
  const { state, fetchPosts } = usePosts();

  const showCards = () => {
    return state.data.posts.map(post => {
      return <Card key={post.slug} post={post} />;
    });
  };

  useEffect(() => {
    async function fetchData() {
      await fetchPosts({
        page: state.page,
        category: state.category
      });
    }
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ state.page, state.category ]);

  return <SC.Container>
    <SC.Title>Latest Articles</SC.Title>
    <Categories />
    {state.data ? (
      <>
        <SC.Cards>
          {showCards()}
        </SC.Cards>
        <Pagination totalCount={state.data.found} />
      </>
    ) : <FontAwesomeIcon icon={faYinYang} spin size="3x" color="#1a425e"/> }
  </SC.Container>;
};

export default Articles;