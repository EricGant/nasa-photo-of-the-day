import { Player } from 'video-react';
import React from 'react';

function Video(props){
    const { vid } = props

    return (
        <div>
            <Player playsInLine poster = {vid} src={vid}/>
        </div>
    )
}
export default Video