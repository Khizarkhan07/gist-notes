import React, { useEffect, useState} from 'react';
import GistCard from "../../components/GistCard";
import {Link} from "react-router-dom";
import {isAuthenticated} from "../../utils";
import useApi from "../../hooks/useApi";
function SingleGist({obj}) {
    const {gistsById} = useApi('')
    const gistId= obj.match.params.gistId
    const [gist, setGist] = useState('')

    useEffect(()=> {
        gistsById(gistId).then(data=> {
            if(data){
               setGist(data)
            }
        })
    }, [])
    console.log(gist)
    return (
        <div>
            {gist.owner && (

                <GistCard singleGist={true} gist={gist}/>



            )}
            { gist.owner && isAuthenticated() && isAuthenticated().id===gist.owner.id && (
                <div className={"mt-2 container"}>
                    <Link to={`/edit/${gistId}`}>
                        <span className="badge badge-secondary">Edit</span>
                    </Link>
                </div>
            )}


        </div>
    );
}

export default SingleGist;