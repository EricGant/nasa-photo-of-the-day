import React from "react"
import styled from "styled-components"

export default function Footer(props){
    const {copyright} = props

    const Footers = styled.div`
    color:lightgray;
    margin: 0rem 1rem 1rem 1rem;`

    return (
        <Footers>
            <h4>Photo by {copyright}</h4>
        </Footers>
    )
}