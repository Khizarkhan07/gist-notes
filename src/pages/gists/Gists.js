import React, {useContext, useState, useEffect} from 'react';
import {GistsStore} from "../../contexts/GistContext";
import GistsTable from "./GistsTable"
import './gists.css'
import GistCard from "../../components/GistCard";
import ButtonWIthIcon from "../../components/ButtonWIthIcon";
import {getGists} from "../../utils/ClientApi";

function Gists() {
    const [layout, setLayout] = useState('list')

    const {state, dispatch} = useContext(GistsStore);

    const [currentPage, setCurrentPage] = useState(1,)
    const [gistPerPage, setGistsPerPage] = useState(15,)

    const indexOfLastGist = currentPage * gistPerPage;
    const indexOfFirstGist = indexOfLastGist - gistPerPage;
    const currentGists = state.myData.slice(indexOfFirstGist, indexOfLastGist);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(state.myData.length / gistPerPage); i++) {
        pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {

        return (

            <button className={"mr-1 btn btn-success"}
                    key={number}
                    id={number}
                    onClick={(e)=> {setCurrentPage(Number(e.target.id))}}
            >
                {number}
            </button>


        );
    });

    useEffect(() => {
        getGists( window.localStorage.getItem('token') ).then(data=>{
            console.log(data)
            if(data){
                dispatch({type: "FETCH_GISTS", payload: data})
            }
        })

    }, [dispatch])



    return (


        <div className={"container"}>
            <div className={"layout-buttons"}>
                <button className="btn btn-white mr-1"
                        onClick={
                            ()=> setLayout('list')
                        }>
                    <i className="fa fa-list"></i>
                </button>

                <span className={'text-muted'}>|</span>

                <button className="btn btn-white ml-1"
                 onClick={
                     ()=> setLayout('grid')
                 }>
                    <i className="fa fa-th"></i>
                </button>
            </div>


            <div className={"container"}>

                {
                    layout === 'list' && (
                        <div className={"gist gist-list"}>
                            <GistsTable gists ={currentGists}/>
                        </div>
                    )
                }

                {
                    layout === 'grid' && (
                        <div className={"gist"}>
                            <div className={"row"}>
                                {currentGists.map(gist => (
                                    <GistCard key={gist.id} gist = {gist}/>
                                ))}
                            </div>



                        </div>
                    )
                }
            </div>
            <div className={"footer mt-2 mb-2"}>
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
            </div>



        </div>
    );
}

export default Gists;