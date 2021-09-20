import styled from 'styled-components';

const Container = styled.section`
  background-color: white;
  flex: 0 1 calc(25% - 1em);
  margin: 10px 0;
  cursor: pointer;

  > a {
    text-decoration: none;
    color: #000;
  }

  &:hover {
    box-shadow: 10px 5px 5px #cfcfcf;

    img {
      transform: scale(1.5);
    }
  }
`;

const Category = styled.section`
  text-align: left;
  padding-left: 20px;

  > h3 {
    font-weight: bold;
    font-size: 14px;

    > span {
      margin-right: 10px;
      width: 12px;
      height: 12px;
      display: inline-block;
      border-radius: 50%;
      background-color: red;
    }
  }
`;

const ImageBox = styled.div`
  max-height: 150px;
  overflow: hidden;

  > img {
    width: 100%;
    transition: transform .2s;
  }
`;

const Title = styled.div`
  text-align: left;
  padding: 0 30px;

  > h2 {
    font-size: 20px;
    margin-bottom: 8px;
  }
`;

const LastUpdate = styled.div`
  text-align: left;
  font-size: 10px;
  color: #aaa;
  padding-left: 30px;
  padding-bottom: 30px;
`;

const SC = {
  Container,
  Category,
  ImageBox,
  Title,
  LastUpdate
};

export default SC;