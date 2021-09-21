import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import SC from './style';

const MainHero = ({ scrollTo }) => {
  const executeScroll = () => scrollTo.current.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });

  return <SC.BannerContainer >
    <h1>The Truecaller Blog</h1>
    <SC.Chevron onClick={executeScroll} data-testid="click-down">
      <FontAwesomeIcon icon={faChevronDown} size="3x" color="white"/>
    </SC.Chevron>
  </SC.BannerContainer>;
};

export default MainHero;