import React,{useContext, useEffect} from 'react';
import {GistsStore} from "../../contexts/gistContext";
import GistCard from "../../components/gistCard";
import {getGists} from "../../utils/clientApi"

function SingleGist({obj}) {

    

    const {state, dispatch} = useContext(GistsStore);
    console.log(state)
    const gistId= obj.match.params.gistId
    console.log(gistId)
    const gist = state.myData?.find(gist => gist.id === gistId)
    console.log(gist)

    useEffect(() => {
        getGists().then(data=>{
            if(data){
                dispatch({type: "FETCH_GISTS", payload: data})
            }
        })

    }, [])

    return (
        <div>
            <GistCard singleGist={true} gist={gist}/>
        </div>
    );
}

export default SingleGist;