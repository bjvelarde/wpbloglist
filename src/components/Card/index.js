import React from 'react';
import { Link } from "react-router-dom";
import moment from 'moment';
import SC from './style';

const Card = ({ post }) => {
  const {
    slug,
    categories,
    post_thumbnail,
    title,
    date
  } = post;

  const timestamp = moment(date).fromNow();

  const truncateTitle = str => {
    return str.length > 40 ? str.substr(0, 40) + '...' : str;
  }

  return <SC.Container>
    <Link to={`/post/${slug}`}>
      <SC.Category>
        <h3><span></span>{Object.keys(categories)[0]}</h3>
      </SC.Category>
      <SC.ImageBox>
        <img src={post_thumbnail.URL} alt={title} />
      </SC.ImageBox>
      <SC.Title>
        <h2 dangerouslySetInnerHTML={{__html: `${truncateTitle(title)}`}} />
      </SC.Title>
      <SC.LastUpdate>{timestamp}</SC.LastUpdate>
    </Link>
  </SC.Container>;
};

export default Card;