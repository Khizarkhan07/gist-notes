import React, {useEffect, useState } from "react";
import {UserContext} from "../../contexts/UserContext";
import { autheticate } from "../../utils";
import { Redirect } from "react-router-dom";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import useApi from "../../hooks/useApi";
import { StyledLoaderDiv } from "./Profile.styles";
const queryString = require("query-string");

const OAuth = () => {
  const { createAccessToken, getUser } = useApi("");
  const { userDispatch } = UserContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const parsed = queryString.parse(window.location.search);
    createAccessToken(parsed.code).then((data) => {
      if (data) {
        const token = data.token;
        getUser(data.token).then((data) => {
          userDispatch({ type: "Login", payload: data });
          autheticate(token, data);
          setLoading(false);
        });
      }
    });
  }, []);

  return (
    <div>
      {loading && (
        <StyledLoaderDiv>
          <Loader type="Puff" color="#00BFFF" height={100} width={100} />
        </StyledLoaderDiv>
      )}
      {!loading && <Redirect to={"/"} />}
    </div>
  );
};

export default OAuth;
