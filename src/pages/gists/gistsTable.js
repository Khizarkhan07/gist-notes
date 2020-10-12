import React from 'react';
import {Link} from "react-router-dom";
import logo from '../../assets/images/logo.png'
import ButtonWIthIcon from "../../components/buttonWIthIcon";
import ProfileLogo from "../../components/profileLogo";


function GistsTable({gists}) {
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
                    gists.map( gist => (
                        <tr key={gist.id}>
                            <th scope="row"><input type={"checkbox"}/></th>
                            <th>
                                <Link to={`/user/${gist.userId}`}>
                                    <ProfileLogo src={logo}/>

                                </Link>

                            </th>
                            <td>{gist.name}</td>
                            <td>{new Date(gist.date).toDateString()}</td>
                            <td>{new Date(gist.time).toDateString()}</td>
                            <td>{gist.keyword}</td>
                            <td>  <Link to={`/gist/${gist.id}`}>{gist.noteBookName}</Link></td>
                            <td>
                                <ButtonWIthIcon icon={"fa fa-star"}/>
                                <ButtonWIthIcon icon={"fa fa-code-fork"}/>
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