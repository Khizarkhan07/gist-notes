import React, { useEffect, useState } from "react";
import ProfileLogo from "./ProfileLogo";

import { Link } from "react-router-dom";
import useApi from "../hooks/useApi";

import {
  StyledCardDiv,
  StyledCardLeftDiv,
  StyledColDiv,
  StyledSingleColDiv,
} from "./Card.styles";

const Card = (props) => {
  const { readGits, gistsForks } = useApi("");

  const { gist, singleGist, edit } = props;
  const StyledOuterDiv = singleGist ? StyledSingleColDiv : StyledColDiv;
  const StyledInnerDiv = singleGist ? StyledCardLeftDiv : StyledCardDiv;
  const [forks, setForks] = useState(0);
  const [gistData, setGistData] = useState([]);

  useEffect(() => {
    gistsForks(gist.forks_url, window.localStorage.getItem("token")).then(
      (data) => {
        setForks(data.length);
      }
    );

    readGits(gist.files[Object.keys(gist.files)[0]].raw_url).then((data) => {
      setGistData(data.split("\n"));
    });
  }, []);
  const fileName = Object.keys(gist.files)[0];
  return (
    <StyledOuterDiv className={`mt-5`}>
      {singleGist && (
        <div className={"mb-4"}>
          <span>
            <img
              className={"mr-3"}
              src={gist.owner.avatar_url}
              height={30}
              width={30}
              style={{ borderRadius: "50%" }}
              alt=""
            />
            <a href={`/gist/${gist.id}`}>
              {gist.owner.login}/{fileName}
            </a>
          </span>
          <span style={{ float: "right" }}>
            <a href={"/"}>Stars</a>
            <span className="badge badge-pill badge-light mr-1 ml-1">9</span>
            <a href={"/"}>forks</a>
            <span className="badge badge-pill badge-light mr-1 ml-1">
              {forks}
            </span>
          </span>
          <div className={"text-muted ml-5"}>
            Created:{new Date(gist.created_at).toDateString()}
          </div>
          <hr />
        </div>
      )}

      <StyledInnerDiv>
        {singleGist && (
          <div className={"ml-3"}>
            <Link to={"/"}>{fileName}</Link>
          </div>
        )}

        {singleGist && edit && (
          <div>
            <textarea
              cols={100}
              className={"text-muted"}
              value={gistData}
              onChange={(e) => {
                setGistData(e.target.value.split("\n"));
              }}
            />
            <br />
            <button className="badge badge-secondary mt-2">Submit</button>
          </div>
        )}

        <span className={"text-muted"}>
          <ol>
            {gistData.slice(0, 5).map((gist) => (
              <li>{gist.substr(0, 20)}</li>
            ))}
          </ol>
        </span>

        {!singleGist && (
          <div>
            <hr />
            <div>
              <ProfileLogo src={gist.owner.avatar_url} />
              <Link to={`/gist/${gist.id}`}>
                {gist.owner.login}/{fileName.substr(0, 10)}
              </Link>{" "}
            </div>
            <div className={"text-muted"}>
              Created:{new Date(gist.created_at).toDateString()}
            </div>
          </div>
        )}
      </StyledInnerDiv>
    </StyledOuterDiv>
  );
};

export default Card;
