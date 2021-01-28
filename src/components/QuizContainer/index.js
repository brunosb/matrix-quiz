import styled from 'styled-components';

const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  z-index: 5;
  position: absolute;
  top: 0;
  @media screen and (max-width: 500px) {
    margin:auto;
    padding: 15px;
  }
`;

export default QuizContainer;
