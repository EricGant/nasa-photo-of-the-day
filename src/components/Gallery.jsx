import React from 'react'
import Pic from './Pic'

function Gallery(props){
    const {pic} = props;

    return (
        <div>
            <Pic pic={pic}/>
        </div>
    )
    
}

export default Gallery