import styled from "styled-components";

export const ProfileWrapper = styled.div`
  margin-top: 50px;
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-areas: "picture vr information";
  grid-template-columns: 8fr 1fr 12fr;

  @media screen and (max-width: 772px) {
    display: grid;
    grid-template-areas:
      "picture"
      "information";
    grid-template-columns: 1fr;
    grid-gap: 5%;
  }
`;

export const AvatarWrapper = styled.div`
  text-align: center;
`;

export const Vr = styled.div`
  border-left: 1px solid #e5e5e5;
`;
export const StyledLoader = styled.div`
  margin-top: 20%;
  margin-left: 45%;
`;
