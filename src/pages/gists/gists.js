import React, {useContext, useState} from 'react';
import {GistsStore} from "../../contexts/gistContext";
import GistsTable from "./gistsTable"
import './gists.css'
import GistCard from "../../components/gistCard";
import ButtonWIthIcon from "../../components/buttonWIthIcon";



function Gists() {
    const [layout, setLayout] = useState('list')

    const {state} = useContext(GistsStore);

    return (
        <div className={"container"}>
            <div className={"layout-buttons"}>
                <button className="btn btn-white mr-1"
                        onClick={
                            ()=> setLayout('list')
                        }>
                    <i className="fa fa-list"></i>
                </button>

                <span className={'text-muted'}>|</span>

                <button className="btn btn-white ml-1"
                 onClick={
                     ()=> setLayout('grid')
                 }>
                    <i className="fa fa-th"></i>
                </button>
            </div>


            <div className={"container"}>

                {
                    layout === 'list' && (
                        <div className={"gist gist-list"}>
                            <GistsTable gists ={state.gists}/>
                        </div>
                    )
                }

                {
                    layout === 'grid' && (
                        <div className={"gist"}>
                            <div className={"row"}>
                                {state.gists.map(gist => (
                                    <GistCard key={gist.id} gist = {gist}/>
                                ))}
                            </div>



                        </div>
                    )
                }
            </div>
            <div className={"footer mt-2"}>
                <div className={"btn-center"}>
                    <ButtonWIthIcon font={'small'} background={'#5acba1'} color={'white'} text={"Next Page"} icon={"fa fa-arrow-right"} />
                </div>
                <div className={"page-buttons"}>

                    <ButtonWIthIcon background={'#5acba1'} color={'white'} font={'x-small'} icon={"fa fa-arrow-left"} />
                    <ButtonWIthIcon  background={'#5acba1'} color={'white'} font={'x-small'} icon={"fa fa-arrow-right"} />
                </div>
            </div>

        </div>
    );
}

export default Gists;