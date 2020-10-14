import React, {useContext, useState, useEffect} from 'react'

import {UsersStore} from "../../contexts/userContext";
import {GistsStore} from "../../contexts/gistContext";
import logo from '../../assets/images/logo.png'
import profile from '../../assets/images/pro-image.jpg'
import InputField from "../../components/inputField";
import ButtonWIthIcon from "../../components/buttonWIthIcon";
import ProfileLogo from "../../components/profileLogo"
import {Link} from "react-router-dom";
import styled from "styled-components";

const StyledDiv = styled.div`
    
    font-size: 25px;
    font-weight: 500;
    display: grid;
    width: 40%;
    color: #ffffff;
    gap: 20px;
    grid-template-columns: 2fr 2fr 2fr 2fr 2fr 2fr;
    grid-template-areas: "E M U M B A";
`;

export const Navbar = () => {
    const {state, userDispatch} = useContext(UsersStore);

    const userState = useContext(UsersStore)
    const globalGist = useContext(GistsStore)
    const {dispatch} = globalGist;
    const [search, setSearch] = useState('');

    useEffect(()=> {
        userDispatch({type:'Current_User'})
    }, [userDispatch])

    return (


        <nav className="navbar justify-content-between" style= {{'background': '#5acba1'}}>
            <div className={"container"}>
                <div className="navbar-brand">

                    <StyledDiv>
                        <div>
                            <Link to={"/"}>
                                <img src={logo} width="30" height="30"  alt=""/>
                            </Link>
                        </div>
                        <div>M</div>
                        <div>U</div>
                        <div>M</div>
                        <div>B</div>
                        <div>A</div>
                    </StyledDiv>

                </div>


                <form  className="form-inline" id="navbarNav">
                    <InputField type={"Search"} placeholder={"Search"} handleChange = {(e) => setSearch(e.target.value)}/>
                    <ButtonWIthIcon icon = {"fa fa-search"} handleClick = {(e)=> {
                        e.preventDefault();
                        dispatch({type: 'SEARCH_GISTS', payload: {search: search}})
                    }} />

                    {
                        !state.name && (


                            <ButtonWIthIcon text={"Login"} color={"blue"} font={"small"} background={"white"} handleClick={
                                (e)=> {
                                    e.preventDefault()
                                    window.location.href = 'https://github.com/login/oauth/authorize?client_id=01b5f613e35062481297';
                                }
                            }/>
                        )
                    }

                    {
                        state.name && (
                            <div className="dropdown">
                                <Link

                                    id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false" to={``}>
                                    <ProfileLogo src={profile}  />
                                </Link>

                                <div className="dropdown-menu dropdown-menu-right mt-2" aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item" href={`/user/${state.id}`}><span style={{'fontSize': 'small'}}>Signed in as <br/> {state.name}</span></a>
                                    <hr/>
                                    <a className="dropdown-item" href={`/user/${state.id}`}><span style={{'fontSize': 'small'}}>Your gists</span></a>
                                    <a className="dropdown-item" href={`/user/${state.id}`}><span style={{'fontSize': 'small'}}>Help</span></a>
                                    <button className="dropdown-item"
                                            onClick={(e)=>{
                                                e.preventDefault();

                                                console.log("here")
                                                userDispatch({type: 'Logout'})}

                                            }

                                    >
                                        <span style={{'fontSize': 'small'}} >Signout</span>
                                    </button>
                                </div>



                            </div>




                        )
                    }

                </form>
            </div>




        </nav>

    )
}