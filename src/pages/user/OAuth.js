import React, { useContext, useEffect, useState} from 'react';
import {UsersStore} from "../../contexts/UserContext";
import {autheticate} from "../../utils";
import {Redirect} from "react-router-dom";
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import useApi from "../../hooks/useApi";

const queryString = require('query-string');

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
                        <div>
                            <Loader style={{'marginTop': '20%', 'marginLeft': '45%'}}
                                type="Puff"
                                color="#00BFFF"
                                height={100}
                                width={100}

                            />
                        </div>



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