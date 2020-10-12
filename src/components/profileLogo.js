import React from 'react';
import styled from "styled-components";

const StyledImg = styled.img`
   width:  ${props => props.profile  ? "" : "30px"};
   height: ${props => props.profile  ? "" : "30px"};
   border-radius: 50%
`;


function ProfileLogo(props) {
    const {handleClick, profile} = props

    return (
        <StyledImg src={props.src} profile={profile} onClick={handleClick} alt={""}/>
    );
}

export default ProfileLogo;