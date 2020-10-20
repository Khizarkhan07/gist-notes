import React, {useEffect, useState} from 'react';
import {gistsById} from "../../utils/ClientApi";
import GistCard from "../../components/GistCard";
import {Link} from "react-router-dom";

function EditGist({match}) {
    const id = match.params.gistId

    const [gist, setGist] = useState('');
    useEffect(()=> {
        gistsById(id).then(data=> {
            if(data){
                setGist(data)
            }
        })
    }, [])
    console.log(gist)
    return (
        <div>
            {gist.owner&& (
                <div>
                    <GistCard edit={true} singleGist={true} gist={gist}/>

                </div>


                )}
        </div>
    );
}

export default EditGist;