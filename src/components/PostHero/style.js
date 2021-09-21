import styled from 'styled-components';

const BannerContainer = styled.div`
  padding-top: 45px;
  width: 100%;
  background-image: url(${props => props.banner || "/images/header-mobile.jpg"});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
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
    background-position-y: unset;
    min-height: 660px;

    > h1 {
      font-size: 64px;
    }
  }
`;

const SC = {
  BannerContainer
};

export default SC;