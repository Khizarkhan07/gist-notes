import React, {useContext} from 'react';
import {UsersStore} from "../../contexts/userContext";
import {GistsStore} from "../../contexts/gistContext";
import profile from '../../assets/images/pro-image.jpg'
import ButtonWIthIcon from "../../components/buttonWIthIcon";
import GistCard from "../../components/gistCard";
import styled from "styled-components";
import ProfileLogo from "../../components/profileLogo";

const StyledProfileDiv = styled.div`
   margin-top: 50px;
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-areas:
    "picture vr information";
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


const StyledAvatarDiv = styled.div`
   text-align: center;
    
`;

const StyledVrDiv = styled.div`
   border-left: 1px solid #e5e5e5;
    
`;

function Profile({obj}) {

    const {state} = useContext(GistsStore)
    const userState = useContext(UsersStore)
    const userId= obj.match.params.userId
    const userGists = state.gists.filter(gist => gist.userId === userId);


    return (
        <div className={"container mt-5"}>
            <StyledProfileDiv>

                <StyledAvatarDiv>
                    <ProfileLogo src={profile} profile={true}/>
                    <h6 className={"mt-4 mb-4"}>{userState.state.name}</h6>
                    <ButtonWIthIcon color={'blue'} text={"View Github Profile"}/>
                </StyledAvatarDiv>

                <StyledVrDiv>

                </StyledVrDiv>

                <div className={"gists mb-5"}>
                    {userGists.map(gist=>
                        <GistCard singleGist={true} gist={gist}/>
                    )}


                </div>
            </StyledProfileDiv>
        </div>
    );
}

export default Profile;