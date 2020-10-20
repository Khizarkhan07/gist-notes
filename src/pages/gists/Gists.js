import React, {useContext, useState, useEffect, useMemo, useCallback} from 'react';
import {GistsStore} from "../../contexts/GistContext";
import GistsTable from "./GistsTable"
import GistCard from "../../components/GistCard";
import ButtonWIthIcon from "../../components/ButtonWIthIcon";
import {getGists} from "../../utils/ClientApi";
import {isAuthenticated} from "../../utils/SessionStorage";
import { SyncLoader } from "react-spinners"
import styled from "styled-components";

const StyledLayoutButton = styled.div`
    
    margin-top: 1%;
    display: flex;
    margin-right: 3%;
    float: right;
    
    button {
        padding: 3%;
    }
    
    i {
    color: #5acba1;
    }
`;

const StyledFooterDiv = styled.div`
    
    display: flex;
    margin-top: 5px;
    margin-bottom: 5px;
    
    .btn-center {
        margin-left: 50%;
    }
    
    .page-buttons {
        margin-left: 30%;
        display: flex;
    }
    
`;

const StyledGistDiv = styled.div`
    
    margin-top: 35px;
    
    .row {
        margin: 0 -5px;
    }
    
`;

function Gists() {
    const [layout, setLayout] = useState('list')

    const {state, dispatch} = useContext(GistsStore);

    const [currentPage, setCurrentPage] = useState(1,)
    const [gistPerPage] = useState(15,)



    const indexOfLastGist = useCallback(()=> {
        return (
            currentPage * gistPerPage
        )
    }, [currentPage , gistPerPage])


    const indexOfFirstGist = useCallback(()=> {
        return (
            indexOfLastGist - gistPerPage
        )
    }, [indexOfLastGist , gistPerPage])

    const currentGists = state.myData.slice(indexOfFirstGist(), indexOfLastGist());

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(state.myData.length / gistPerPage); i++) {
        pageNumbers.push(i);
    }


    useEffect(() => {
        if(isAuthenticated()){
            getGists( window.localStorage.getItem('token') ).then(data=>{
                if(data){
                    dispatch({type: "FETCH_GISTS", payload: data})
                }
            })
        }

    }, [])


    const renderGrid = useMemo(()=> {
        
        return (
            currentGists.map(gist=>
                <GistCard key={gist.id} gist={gist}/>
            )
        ) 
    }, [currentGists])

    console.log(renderGrid)



    return (

        <div>
            {!currentGists[0] && (
                <div style={{'marginTop': '20%', 'marginLeft': '45%'}}>
                    <SyncLoader
                        size={15}
                        //size={"150px"} this also works
                        color={"#5acba1"}
                        loading={true}
                    />
                </div>

            )}

            {
                currentGists[0] && (
                    <div className={"container"}>

                        <StyledLayoutButton >

                            <ButtonWIthIcon icon={"fa fa-list"} handleClick = {()=> setLayout('list')}/>
                            <span className={'text-muted mr-1'}>|</span>
                            <ButtonWIthIcon icon={"fa fa-th"} handleClick = {()=> setLayout('grid')}/>

                        </StyledLayoutButton>

                        <div className={"container"}>

                            {
                                layout === 'list' && (
                                    <StyledGistDiv>
                                        <GistsTable gists ={currentGists}/>
                                    </StyledGistDiv>
                                )
                            }

                            {
                                layout === 'grid' && (
                                    <StyledGistDiv>
                                        <div className={"row"}>
                                            {renderGrid}

                                            
                                        </div>



                                    </StyledGistDiv>
                                )
                            }
                        </div>
                        <StyledFooterDiv>
                            <div className={"btn-center"}>
                                <ButtonWIthIcon
                                    handleClick = {(e)=> {
                                        if(currentPage< pageNumbers.length)
                                            setCurrentPage(Number(currentPage+1))
                                    }}
                                    font={'small'}
                                    background={'#5acba1'}
                                    color={'white'}
                                    text={"Next Page"}
                                    icon={"fa fa-arrow-right"}
                                />
                            </div>
                            <div className={"page-buttons"}>

                                <ButtonWIthIcon
                                    handleClick = {(e)=> {
                                        if(currentPage>1){
                                            setCurrentPage(Number(currentPage-1))
                                        }

                                    }}
                                    background={'#5acba1'}
                                    color={'white'}
                                    font={'x-small'}
                                    icon={"fa fa-arrow-left"}
                                />

                                <ButtonWIthIcon
                                    handleClick = {(e)=> {
                                        if(currentPage< pageNumbers.length)
                                        setCurrentPage(Number(currentPage+1))
                                    }}
                                    background={'#5acba1'}
                                    color={'white'}
                                    font={'x-small'}
                                    icon={"fa fa-arrow-right"}
                                />
                            </div>
                        </StyledFooterDiv>
                     </div>
                )
            }
        </div>

    );
}

export default Gists;