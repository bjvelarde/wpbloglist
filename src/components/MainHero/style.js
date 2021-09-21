import styled from 'styled-components';

const BannerContainer = styled.div`
  position: relative;
  padding-top: 45px;
  width: 100%;
  background-image: url("/images/header-mobile.jpg");
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
    background-image: url("/images/header.jpg");
    background-size: cover;
    background-position-y: unset;
    min-height: 660px;

    > h1 {
      font-size: 64px;
    }
  }
`;

const Chevron = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  padding-bottom: 60px;
  cursor: pointer;
`;

const SC = {
  BannerContainer,
  Chevron
};

export default SC;