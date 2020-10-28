import styled from "styled-components";

export const StyledColDiv = styled.div`
  float: left;
  width: 33%;
  padding: 0 10px;

  @media screen and (max-width: 772px) {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }
`;

export const StyledSingleColDiv = styled.div`
  padding: 0 10px;
  margin-left: 5%;
  margin-right: 5%;

  @media screen and (max-width: 772px) {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }
`;

export const StyledCardLeftDiv = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 16px;
  text-align: left;
  background-color: #ffffff;
`;

export const StyledCardDiv = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 16px;
  text-align: center;
  background-color: #ffffff;
`;