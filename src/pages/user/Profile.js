import React, {useEffect } from "react";
import {GistContext} from "../../contexts/GistContext";
import ButtonWIthIcon from "../../components/ButtonWIthIcon";
import Card from "../../components/Card";
import ProfileLogo from "../../components/ProfileLogo";
import { getAuthenticatedUser } from "../../utils";
import useApi from "../../hooks/useApi";
import { Redirect } from "react-router-dom";
import {
  AvatarWrapper,
  ProfileWrapper,
  Vr,
} from "./Profile.styles";

const Profile = () => {
  const { userGists } = useApi("");
  const { state, dispatch } = GistContext();

  const user = getAuthenticatedUser();

  useEffect(() => {
    userGists(window.localStorage.getItem("token")).then((data) => {
      if (data) {
        dispatch({ type: "USER_GISTS", payload: data });
      }
    });
  }, []);

  return (
    <div className={"container mt-5"}>
      {!getAuthenticatedUser() && <Redirect to={"/"} />}
      <ProfileWrapper>
        <AvatarWrapper>
          <ProfileLogo src={user.avatar_url} profile={true} />
          <h6 className={"mt-4 mb-4"}>{user.login}</h6>
          <ButtonWIthIcon
            color={"blue"}
            text={"View Github Profile"}
            handleClick={() => {
              window.location.href = user.html_url;
            }}
          />
        </AvatarWrapper>

        <Vr></Vr>

        <div className={"gists mb-5"}>
          {state.myData.length !==0 &&
            state.myData.map((gist) => <Card singleGist={true} gist={gist} />)}
          {!state.myData.length && <h6>No gist found!</h6>}
        </div>
      </ProfileWrapper>
    </div>
  );
};

export default Profile;
