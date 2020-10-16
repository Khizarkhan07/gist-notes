import React,{useContext, useEffect} from 'react';
import {GistsStore} from "../../contexts/GistContext";
import GistCard from "../../components/GistCard";
import {getGists} from "../../utils/ClientApi"

function SingleGist({obj}) {

    

    const {state, dispatch} = useContext(GistsStore);
    console.log(state)
    const gistId= obj.match.params.gistId
    console.log(gistId)
    const gist = state.myData?.find(gist => gist.id === gistId)
    console.log(gist)



    return (
        <div>
            <GistCard singleGist={true} gist={gist}/>
        </div>
    );
}

export default SingleGist;