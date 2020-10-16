import React, {Component, useContext, useEffect, useState} from 'react';
import {createAccessToken, getUser} from "../../utils/ClientApi";
import {UsersStore} from "../../contexts/UserContext";
import {autheticate} from "../../utils/SessionStorage";
import {Redirect} from "react-router-dom";
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
const queryString = require('query-string');


function OAuth() {

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

                        <Loader
                            type="Puff"
                            color="#00BFFF"
                            height={100}
                            width={100}

                        />


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