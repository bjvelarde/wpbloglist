import React, { useEffect } from 'react';
import Header from '../Header';
import PostHero from '../PostHero';
import Spinner from '../Spinner';
import { useParams } from "react-router-dom";
import { usePosts } from '../../context';
import moment from 'moment';
import SC from './style';

const Post = () => {
  let { slug } = useParams();
  const { state, fetchPost } = usePosts();

  useEffect(() => {
    async function fetchData() {
      await fetchPost(slug);
    }
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>
    {state.post ? (
      <>
        <Header>
          <PostHero banner={state.post.featured_image} />
        </Header>
        <SC.Container>
          <SC.Title dangerouslySetInnerHTML={{__html: `${state.post.title}`}} />
          <SC.Author>
            <SC.Avatar>
              <img
                src={state.post.author.avatar_URL}
                alt="avatar"
              />
            </SC.Avatar>
            <SC.AuthorDetails>
              <SC.AuthorName>{state.post.author.name}</SC.AuthorName>
              <SC.TimeStamp>{moment(state.post.date).format('MMM Do, Y')}</SC.TimeStamp>
            </SC.AuthorDetails>
          </SC.Author>
          <SC.Contents dangerouslySetInnerHTML={{__html: `${state.post.content}`}} />
        </SC.Container>
      </>
    ) : <Spinner /> }
  </>;
};

export default Post;