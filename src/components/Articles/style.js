import styled from 'styled-components';

const Title = styled.h1`
  color: #000;
  font-size: 36px;
  text-align: left;

  @media only screen and (min-width: 768px) {
    font-size: 64px;
  }
`;

const Container = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px 0;
  margin: 20px 0;
  flex-direction: column;


  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const SC = {
  Title,
  Container,
  Cards
};

export default SC;