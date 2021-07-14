import React from "react"
import styled
 from "styled-components"
function Footer(props){
    const {copyright} = props

    const Footers = styled.div`
    color:lightgray;
    margin: 1rem 1rem 1rem 1rem;
   `

    return (
        <Footers>
            <h4>Photo from {copyright}</h4>
        </Footers>
    )
}

export default Footer