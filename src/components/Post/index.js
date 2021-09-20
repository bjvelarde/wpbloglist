import React, { useEffect } from 'react';
import Header from '../Header';
import PostHero from '../PostHero';
import { useParams } from "react-router-dom";
import { usePosts } from '../../context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYinYang } from '@fortawesome/free-solid-svg-icons';
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
          <SC.Title>{state.post.title}</SC.Title>
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
    ) : <FontAwesomeIcon icon={faYinYang} spin size="3x" color="#1a425e"/> }
  </>;
};

export default Post;