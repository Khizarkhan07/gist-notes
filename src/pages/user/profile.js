import React, {useContext} from 'react';
import {UsersStore} from "../../contexts/userContext";
import {GistsStore} from "../../contexts/gistContext";
import profile from '../../assets/images/pro-image.jpg'
import ButtonWIthIcon from "../../components/buttonWIthIcon";
import GistCard from "../../components/gistCard";
import styled from "styled-components";
import ProfileLogo from "../../components/profileLogo";
import {isAuthenticated} from "../../utils/sessionStorage";

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
    const userGists = state.myData.filter(gist => gist.userId === userId);
    const user = isAuthenticated();

    return (
        <div className={"container mt-5"}>
            <StyledProfileDiv>

                <StyledAvatarDiv>
                    <ProfileLogo src={user.avatar_url} profile={true}/>
                    <h6 className={"mt-4 mb-4"}>{user.login}</h6>
                    <ButtonWIthIcon color={'blue'} text={"View Github Profile"} handleClick = {()=> {
                        window.location.href= user.html_url;
                    }}/>
                </StyledAvatarDiv>

                <StyledVrDiv>

                </StyledVrDiv>

                <div className={"gists mb-5"}>
                    {userGists[0] &&(
                        userGists.map(gist=>
                                <GistCard singleGist={true} gist={gist}/>
                            )
                    )}
                    {!userGists[0] &&(
                        <h6>No gist found!</h6>
                    )}


                </div>
            </StyledProfileDiv>
        </div>
    );
}

export default Profile;