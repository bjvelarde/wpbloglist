import React, { useMemo } from 'react';
import { Link } from "react-router-dom";
import { usePosts } from '../../context';
import moment from 'moment';
import SC from './style';

const COLORS = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'indigo',
  'violet',
  'salmon',
  'tomato',
  'khaki',
  'lime',
  'aqua',
  'chocolate',
  'lavender',
  'beige'
];

const categoryNames = (categories) => {
  return categories ?
    categories.map(cat => cat.name) :
    [];
};

const Category = ({ category }) => {
  const { state } = usePosts();
  const categoryNameList = useMemo(() => categoryNames(state.categories), [state.categories]);
  const categoryIndex = categoryNameList.indexOf(category);

  return <>
    <SC.ColoredDot color={COLORS[categoryIndex]} />
    <SC.CategoryName>{category}</SC.CategoryName>
  </>
};

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

  const showCategories = () => {
    return Object.keys(categories).map(category => <Category key={category} category={category} />);
  }

  return <SC.Container>
    <Link to={`/post/${slug}`}>
      <SC.Category>
        <h3>{showCategories()}</h3>
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