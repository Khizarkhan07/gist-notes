import React from 'react';
import "../pages/gists/gists.css"
import ProfileLogo from "./profileLogo";
import logo from "../assets/images/logo.png"
import profile from "../assets/images/pro-image.jpg"
import {Link} from "react-router-dom";
function GistCard(props) {
    const {gist, singleGist} = props;
    const style = singleGist? "single-col": "column";
    const card = singleGist? "card-left": "card"
    return (
            <div className={`${style} mt-5`}>

                {singleGist && (
                    <div className={"mb-4"}>
                        <span>
                            <img className={"mr-3"} src={profile} height={30} width={30} style={{'borderRadius': '50%'}} alt=""/>
                            <a href={`/gist/${gist.id}`}>{gist.name}/{gist.noteBookName}</a>
                        </span>
                        <span style={{float: "right"}}>

                            <a href={"/"}>Stars</a>
                            <span className="badge badge-pill badge-light mr-1 ml-1">9</span>
                            <a href={"/"}>forks</a>
                            <span className="badge badge-pill badge-light mr-1 ml-1">9</span>


                        </span>
                        <div className={"text-muted ml-5"}>
                            Created:{new Date(gist.date).toDateString()}
                        </div>
                        <hr/>
                    </div>

                )}


                <div className={`${card}`}>
                    {singleGist && (
                        <div className={"ml-3"}>
                            <Link to={'/'}>{gist.noteBookName}</Link>
                        </div>
                    )}



                    <span className={"text-muted"}>
                         <ol className="code">
                            <li>getBadgeClasses()</li>
                            <li>   let classes = "badge m-2 badge-";</li>
                            <li></li>
                            <li> classes += (this.props.counter.value === 0 ? "warning" : "primary")</li>


                        </ol>

                    </span>

                    {!singleGist && (<div>
                        <hr/>
                        <div>
                            <ProfileLogo src={logo}/>
                            <a href={`/gist/${gist.id}`}>{gist.name}/{gist.noteBookName}</a>
                        </div>
                        <div className={"text-muted"}>
                            Created:{new Date(gist.date).toDateString()}
                        </div>

                    </div>)}

                </div>
            </div>

    );
}

export default GistCard;