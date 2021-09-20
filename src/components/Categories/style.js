import styled from 'styled-components';

const Select = styled.select`
  background-color: white;
  border: thin solid white;
  border-radius: 4px;
  display: inline-block;
  font: inherit;
  font-weight: bold;
  line-height: 1.5em;
  padding: 1em;
  width: 100%;

  margin: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;

  background-image:
    linear-gradient(45deg, transparent 50%, gray 50%),
    linear-gradient(135deg, gray 50%, transparent 50%),
    linear-gradient(to right, #ccc, #ccc);
  background-position:
    calc(100% - 20px) calc(1.5em + 2px),
    calc(100% - 15px) calc(1.5em + 2px),
    calc(100% - 2.5em) 1em;
  background-size:
    5px 5px,
    5px 5px,
    1px 1.5em;
  background-repeat: no-repeat;

  &:focus {
    background-image:
    linear-gradient(45deg, gray 50%, transparent 50%),
    linear-gradient(135deg, transparent 50%, green 50%),
    linear-gradient(to right, #ccc, #ccc);
    background-position:
      calc(100% - 15px) 1.5em,
      calc(100% - 20px) 1.5em,
      calc(100% - 2.5em) 1em;
    background-size:
      5px 5px,
      5px 5px,
      1px 1.5em;
    background-repeat: no-repeat;
    border-color: white;
    outline: 0;
  }

  @media only screen and (min-width: 768px) {
    width: 23.5%;
  }
`;

const Container = styled.section`
  text-align: left;
`;

const SC = {
  Select,
  Container
};

export default SC;