import React, {useEffect, useState} from 'react';
import ProfileLogo from "./ProfileLogo";

import {Link} from "react-router-dom";
import {gistsForks, readGits} from "../utils/ClientApi";
import styled from "styled-components";

const StyledColDiv = styled.div`
    
    float: left;
    width: 33%;
    padding: 0 10px;
    
    @media screen and (max-width: 772px) {
    
        width: 100%;
        display: block;
        margin-bottom: 20px;
        
    }
`;

const StyledSingleColDiv = styled.div`
   
    padding: 0 10px;
    margin-left: 5%;
    margin-right: 5%;
    
    @media screen and (max-width: 772px) {
    
        width: 100%;
        display: block;
        margin-bottom: 20px;
        
    }
`;

const StyledCardLeftDiv = styled.div`
    
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    padding: 16px;
    text-align: left;
    background-color: #ffffff;
    
    
    
`;

const StyledCardDiv = styled.div`
   
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    padding: 16px;
    text-align: center;
    background-color: #ffffff;
    
   
`;




function GistCard(props) {
    const {gist, singleGist, edit} = props;
    const StyledOuterDiv = singleGist? StyledSingleColDiv : StyledColDiv;
    const StyledInnerDiv = singleGist? StyledCardLeftDiv: StyledCardDiv
    const [forks, setForks] = useState(0)
    const [gistData, setGistData] = useState([])

    useEffect(()=> {
     gistsForks(gist.forks_url, window.localStorage.getItem('token')).then(data=> {

         setForks(data.length)
     })

        readGits( gist.files[Object.keys(gist.files)[0]].raw_url ).then(data=> {
            setGistData(data.split("\n"))
        })
    },[])

    return (

            <StyledOuterDiv className={`mt-5`}>

                {singleGist && (
                    <div className={"mb-4"}>
                        <span>
                            <img className={"mr-3"} src={gist.owner.avatar_url} height={30} width={30} style={{'borderRadius': '50%'}} alt=""/>
                            <a href={`/gist/${gist.id}`}>{gist.owner.login}/{Object.keys(gist.files)[0]}</a>
                        </span>
                        <span style={{float: "right"}}>

                            <a href={"/"}>Stars</a>
                            <span className="badge badge-pill badge-light mr-1 ml-1">9</span>
                            <a href={"/"}>forks</a>
                            <span className="badge badge-pill badge-light mr-1 ml-1">{forks}</span>


                        </span>
                        <div className={"text-muted ml-5"}>
                            Created:{new Date(gist.created_at).toDateString()}
                        </div>
                        <hr/>
                    </div>

                )}


                <StyledInnerDiv>


                    {singleGist && (
                        <div className={"ml-3"}>
                            <Link to={'/'}>{Object.keys(gist.files)[0]}</Link>
                        </div>
                    )}


                    {singleGist && edit && (
                        <div>
                            <textarea cols={100} className={"text-muted"} value={gistData} onChange={
                                (e) => {
                                     setGistData( e.target.value.split("\n"))
                                }

                            }/>
                            <br/>
                            <button className="badge badge-secondary mt-2">Submit</button>
                        </div>

                    )}


                        <span className={"text-muted"}>
                        <ol>
                            {gistData.slice(0,5).map(gist=>
                                <li>
                                    {gist.substr(0,20)}
                                </li>)}
                        </ol>

                        </span>


                    {!singleGist && (<div>
                        <hr/>
                        <div>
                            <ProfileLogo src={gist.owner.avatar_url}/>
                            <Link to={`/gist/${gist.id}`}>{gist.owner.login}/{Object.keys(gist.files)[0].substr(0,10)}</Link>                        </div>
                        <div className={"text-muted"}>
                            Created:{new Date(gist.created_at).toDateString()}
                        </div>

                    </div>)}

                </StyledInnerDiv>
            </StyledOuterDiv>

    );
}

export default GistCard;