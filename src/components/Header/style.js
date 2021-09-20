import styled from 'styled-components';

const LogoContainer = styled.div`
  background-color: #fff;
  padding: 25px;
  min-height: 40px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  width: 100%;
  position: fixed;
  z-index: 10000;
`;

const Logo = styled.img`
  height: 20px;
  pointer-events: none;
`;

const BannerContainer = styled.div`
  padding-top: 45px;
  width: 100%;
  background-image: url(${props => props.banner || "/images/header-mobile.jpg"});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center top;
  background-position-y: 90px;
  background-attachment: fixed;
  min-height: 500px;

  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;

  > h1 {
    width: 100%;
    color: #fff;
    font-size: 36px;
  }

  @media only screen and (min-width: 768px) {
    position: unset;
    background-image: url(${props => props.banner || "/images/header.jpg"});
    background-size: cover;
    background-position-y: unset;
    min-height: 660px;

    > h1 {
      font-size: 64px;
    }
  }
`;

const SC = {
  LogoContainer,
  BannerContainer,
  Logo
};

export default SC;