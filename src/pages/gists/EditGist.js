import React, {useEffect, useState} from 'react';
import GistCard from "../../components/GistCard";
import useApi from "../../hooks/useApi";

function EditGist({match}) {
    const id = match.params.gistId

    const [gist, setGist] = useState('');
    const {gistsById} = useApi('')
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