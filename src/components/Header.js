import React from 'react'
import styled from 'styled-components'

function Header(props){
    const {title} = props

    const Headers = styled.div`
    margin-top: 2px;
    display:flex;
    flex-flow: column nowrap;
    align-items: center;    
    h1, h2, h3 {
        color:lightgray
    }
    
    h1, h3 {
        font-size:2rem;
        margin-top: 1rem;
    }
    h2 {
        font-weight:450;
    }`

    return (
    <Headers>
        <h1>Nasa's Astronomy Picture of the Day</h1>
        <h3>{title}</h3>
    </Headers>
    )
}
export default Header