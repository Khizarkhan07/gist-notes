import React, {useContext, useEffect} from 'react';
import {UsersStore} from "../../contexts/userContext";
import {GistsStore} from "../../contexts/gistContext";
import profile from '../../assets/images/pro-image.jpg'
import ButtonWIthIcon from "../../components/buttonWIthIcon";
import GistCard from "../../components/gistCard";
import styled from "styled-components";
import ProfileLogo from "../../components/profileLogo";
import {isAuthenticated} from "../../utils/sessionStorage";
import {userGists} from "../../utils/clientApi";

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

    const {state, dispatch} = useContext(GistsStore)

    const userId= obj.match.params.userId
    const user = isAuthenticated();

    useEffect(()=> {
        userGists().then(data=> {
            if(data){
                dispatch({type: "USER_GISTS", payload: data})
            }
        })
    },[dispatch])


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
                    {state.myData[0] &&(
                        state.myData.map(gist=>
                                <GistCard singleGist={true} gist={gist}/>
                            )
                    )}
                    {!state.myData[0] &&(
                        <h6>No gist found!</h6>
                    )}


                </div>
            </StyledProfileDiv>
        </div>
    );
}

export default Profile;