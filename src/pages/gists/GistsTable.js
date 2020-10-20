import React from 'react';
import {Link} from "react-router-dom";
import ButtonWIthIcon from "../../components/ButtonWIthIcon";
import ProfileLogo from "../../components/ProfileLogo";


function GistsTable(props) {

    const thead = {
        background: '#def5ec'
    }
    return (
        <div>
            <table className="table">
                <thead style={thead}>
                <tr>
                    <th scope="col"><input type={"checkbox"}/></th>
                    <th></th>
                    <th scope="col">Name</th>
                    <th scope="col">Date</th>
                    <th scope="col">Time</th>
                    <th scope="col">Keyword</th>
                    <th scope="col">Notebook</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>


                {
                    props.gists.map( gist => (
                        <tr key={gist.id}>
                            <th scope="row"><input type={"checkbox"}/></th>
                            <th>
                                <Link to={`/user/${gist.owner.id}`}>
                                    <ProfileLogo src={gist.owner.avatar_url}/>

                                </Link>

                            </th>
                            <td>{gist.owner.login}</td>
                            <td>{new Date(gist.created_at).toDateString()}</td>
                            <td>{new Date(gist.created_at).toLocaleTimeString()}</td>

                            <td>{Object.keys(gist.files)[0].substr(0,10)}</td>
                            <td>  <Link to={`/gist/${gist.id}`}>{Object.keys(gist.files)[0].substr(0,10)}</Link></td>
                            <td>
                                <span>
                                    <ButtonWIthIcon icon={"fa fa-star"} on/>
                                    <ButtonWIthIcon icon={"fa fa-code-fork"}/>

                                </span>


                            </td>
                        </tr>
                    ))
                }


                </tbody>
            </table>


        </div>
    );
}

export default GistsTable;