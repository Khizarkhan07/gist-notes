import React, {useContext, useState} from 'react'
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
    margin-left: 30%;
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

    const {state} = useContext(UsersStore);
    //const userState = useContext(UsersStore)
    const globalGist = useContext(GistsStore)
    const {dispatch} = globalGist;
    const [search, setSearch] = useState('');



    return (


        <nav className="navbar justify-content-between" style= {{'background': '#5acba1'}}>
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
                        <ButtonWIthIcon text={"Login"} color={"blue"} background={"white"}/>
                    )
                }

                {
                    state.name && (

                        <Link to={`/user/${state.id}`}>
                            <ProfileLogo src={profile}  />
                        </Link>


                    )
                }

            </form>



        </nav>

    )
}