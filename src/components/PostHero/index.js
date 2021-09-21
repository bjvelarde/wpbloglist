import React from 'react';
import SC from './style';

const PostHero = ({ banner }) => {
  return <SC.BannerContainer banner={banner} data-testid="post-hero" />;
};

export default PostHero;