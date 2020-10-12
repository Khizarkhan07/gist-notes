import React,{useContext} from 'react';
import {GistsStore} from "../../contexts/gistContext";
import GistCard from "../../components/gistCard";


function SingleGist({obj}) {
    const {state} = useContext(GistsStore);

    const gistId= obj.match.params.gistId

    const gist = state.gists.find(gist => gist.id === gistId)


    return (
        <div>
            <GistCard singleGist={true} gist={gist}/>
        </div>
    );
}

export default SingleGist;