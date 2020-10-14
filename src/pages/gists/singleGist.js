import React,{useContext} from 'react';
import {GistsStore} from "../../contexts/gistContext";
import GistCard from "../../components/gistCard";


function SingleGist({obj}) {
    const {state} = useContext(GistsStore);

    const gistId= obj.match.params.gistId

    const gist = state.myData.find(gist => gist.id === gistId)
    console.log(gist)

    return (
        <div>
            <GistCard singleGist={true} gist={gist}/>
        </div>
    );
}

export default SingleGist;