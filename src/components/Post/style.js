import styled from 'styled-components';

const Container = styled.div`
  margin: 20px;

  @media only screen and (min-width: 768px) {
    max-width: 960px;
    margin: 0 auto;
  }
`;
const Title = styled.h1`
  font-size: 24px;
  text-align: left;

  @media only screen and (min-width: 768px) {
    font-size: 48px;
  }
`;

const Author = styled.div`
  text-align: left;
  display: flex;
`;

 const Avatar = styled.div`
  display: inline-block;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;

  > img {
    width: 60px;
  }
`;

const AuthorDetails = styled.div`
  display: inline-block;
  padding: 16px;
`;

const AuthorName = styled.div`
  font-weight: bold;
  font-size: 14px;
`;

const TimeStamp = styled.div`
  color: #666;
  font-size: 12px;
`;

const Contents = styled.div`
  margin-top: 30px;
  margin-bottom: 60px;
  text-align: left;

  figure {
    text-align: center;

    > img {
      max-width: 300px;
      height: auto;
    }

    @media only screen and (min-width: 768px) {
      text-align: unset;

      > img {
        max-width: unset;
      }
    }
  }
`;

const SC = {
  Container,
  Title,
  Avatar,
  Author,
  AuthorDetails,
  AuthorName,
  TimeStamp,
  Contents
};

export default SC;