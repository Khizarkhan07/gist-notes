import React, {useState, useEffect, useRef, useCallback} from "react";

import { UserContext } from "../../contexts/UserContext";
import { GistContext } from "../../contexts/GistContext";
import logo from "../../assets/images/logo.png";
import profile from "../../assets/images/pro-image.jpg";
import InputField from "../../components/InputField";
import ButtonWIthIcon from "../../components/ButtonWIthIcon";
import ProfileLogo from "../../components/ProfileLogo";
import { Link } from "react-router-dom";
import { getAuthenticatedUser, logOut } from "../../utils";
import { StyledDiv } from "./Navbar.styles";

const CLIENT_ID = '01b5f613e35062481297'

export const Navbar = () => {
  const textInput = useRef();
  const focusTextInput = () => textInput.current.focus();
  const { userDispatch } = UserContext();

  const globalGist = GistContext();
  const { dispatch } = globalGist;
  const [search, setSearch] = useState("");

  const user = getAuthenticatedUser();

  useEffect(() => {
    userDispatch({ type: "Current_User" });
  }, []);



  const handleSearch =   useCallback((e) => {
    e.preventDefault();
    dispatch({ type: "SEARCH_GISTS", payload: { search } });
  }, [search]);


  const handleSearchChange = useCallback((e)=> {
     setSearch(e.target.value)
  }, [search])

  const handleLogin = useCallback((e) => {
    e.preventDefault();
    window.location.href =
      `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}`;
  }, [CLIENT_ID]);

  const handleLogout = useCallback((e) => {
    e.preventDefault();
    logOut();
    userDispatch({ type: "Logout" });
  }, [CLIENT_ID]);



  return (
    <nav
      onClick={focusTextInput}
      className="navbar justify-content-between"
      style={{ background: "#5acba1" }}
    >
      <div className={"container"}>
        <div className="navbar-brand">
          <StyledDiv>
            <div>
              <Link to={"/"}>
                <img src={logo} width="30" height="30" alt="" />
              </Link>
            </div>
            <div>M</div>
            <div>U</div>
            <div>M</div>
            <div>B</div>
            <div>A</div>
          </StyledDiv>
        </div>

        <form className="form-inline" id="navbarNav">
          <InputField
            ref={textInput}
            type={"Search"}
            placeholder={"Search"}
            handleChange={handleSearchChange}
          />

          <ButtonWIthIcon icon={"fa fa-search"} handleClick={handleSearch} />

          {!user.login && (
            <ButtonWIthIcon
              text={"Login"}
              color={"blue"}
              font={"small"}
              background={"white"}
              handleClick={handleLogin}
            />
          )}

          {user.login && (
            <div className="dropdown">
              <Link
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                to={``}
              >
                <ProfileLogo src={profile} />
              </Link>

              <div
                className="dropdown-menu dropdown-menu-right mt-2"
                aria-labelledby="dropdownMenuButton"
              >
                <Link
                  className="dropdown-item"
                  to={`/user/${user.id}`}
                  style={{ fontSize: "small" }}
                >
                  Signed in as <br /> {user.name}{" "}
                </Link>

                <hr />
                <a className="dropdown-item" href={`/user/${user.id}`}>
                  <span style={{ fontSize: "small" }}>Your gists</span>
                </a>
                <a className="dropdown-item" href={`/user/${user.id}`}>
                  <span style={{ fontSize: "small" }}>Help</span>
                </a>

                <button className="dropdown-item" onClick={handleLogout}>
                  <span>Signout</span>
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </nav>
  );
};
