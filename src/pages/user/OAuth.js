import React, { useContext, useEffect, useState} from 'react';
import {UsersStore} from "../../contexts/UserContext";
import {autheticate} from "../../utils";
import {Redirect} from "react-router-dom";
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import useApi from "../../hooks/useApi";
import styled from "styled-components";

const queryString = require('query-string');


const StyledLoaderDiv = styled.div`
    
    margin-top: 20%;
    margin-left: 45%;
    
`;

function OAuth() {
    const {createAccessToken, getUser} = useApi('')
    const {userDispatch} = useContext(UsersStore)
    const [loading, setLoading]= useState(true);

    useEffect(() => {



        const parsed = queryString.parse(window.location.search);
        createAccessToken(parsed.code).then(data => {
            if(data){

                console.log(data)
                const token = data.token;
                getUser(data.token).then(data => {
                    userDispatch({type: 'Login', payload: data})
                    autheticate(token, data)
                    setLoading(false)
                })
            }

        });

    }, [])




        return (
            <div>
                {loading && (
                        <StyledLoaderDiv>
                            <Loader
                                type="Puff"
                                color="#00BFFF"
                                height={100}
                                width={100}

                            />
                        </StyledLoaderDiv>



                )}
                {
                    !loading && (
                     <Redirect to={"/"} />
                    )
                }
            </div>
        );

}

export default OAuth;