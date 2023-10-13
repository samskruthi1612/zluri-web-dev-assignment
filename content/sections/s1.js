import React from "react";
import styled from "styled-components";
import { Container, Wrapper } from "./style";

const S1 = () => {
  return (
    <StyledWrapper>
      <Container>
        <Title>
          <h4>Solution Here</h4>
          <p>Answer below this.</p>
        </Title>
        <GridContainer>
          <div>1st</div>
          <div>2nd</div>
          <div>3rd</div>
          <div>4th</div>
        </GridContainer>
      </Container>
    </StyledWrapper>
  );
};

export default S1;

const StyledWrapper = styled(Wrapper)`
  background: #f6f7f9;
`;

const Title = styled.div`
  h4 {
    font-size: 32px;
    font-family: Lexend Medium;
    font-style: normal;
    font-weight: 500;
    line-height: 40px;
    letter-spacing: -0.4px;
    span {
      background: #fae090;
    }
  }
  p {
    font-size: 18px;
    font-family: Lexend Regular;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
  }
`;
const QuestionsDiv = styled.div`
  ul {
    display: flex;
    flex-direction: column;
  }
  li {
    font-size: 20px;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: fit-content(100px) fit-content(100px);
  gap: 20px;

  div {
    padding: 80px;
    border: 1px solid #000000;
    border-radius: 20px;
  }
`;
