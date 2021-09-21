import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYinYang } from '@fortawesome/free-solid-svg-icons';

const Spinner = ({size = '3x', color = '#1a425e', testid = 'spinner'}) => {

  return <div data-testid={testid}>
    <FontAwesomeIcon icon={faYinYang} spin size={size} color={color}/>
  </div>;
};

export default Spinner;