import React, { useEffect, useRef } from 'react';
import Header from '../Header';
import MainHero from '../MainHero';
import Categories from '../Categories';
import Card from '../Card';
import Pagination from '../Pagination';
import Spinner from '../Spinner';
import { usePosts } from '../../context';
import SC from './style';

const Articles = () => {
  const listRef = useRef();
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

  return <>
    <Header><MainHero scrollTo={listRef} /></Header>
    <SC.Container ref={listRef}>
      <SC.Title>Latest Articles</SC.Title>
      <Categories />
      {state.data ? (
        <>
          <SC.Cards>
            {showCards()}
          </SC.Cards>
          <Pagination totalCount={state.data.found} currentPage={state.page} />
        </>
      ) : <Spinner /> }
    </SC.Container>
  </>;
};

export default Articles;