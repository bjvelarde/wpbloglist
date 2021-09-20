import React from 'react';
import { Link } from "react-router-dom";
import SC from './style';

const Header = ({ children }) => {
  return <header>
    <Link to="/">
      <SC.LogoContainer>
        <SC.Logo src="/images/truecaller.svg" alt="logo" />
      </SC.LogoContainer>
    </Link>
    {children}
  </header>;
};

export default Header;