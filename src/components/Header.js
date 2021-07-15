import React from 'react'
import styled from 'styled-components'

function Header(props){
    const {title} = props

    const Headers = styled.div`
    display:flex;
    flex-flow: column nowrap;
    align-items: center;    
    h1, h2, h3 {
        color:#d9d9d9
    }
    
    h1 {
        font-size:2rem;
        margin-top: 1rem;
    }
    h2 {
        font-weight:450;
    }
    h3{
        margin-top: .3rem;
        font-size:1.5rem;
    }
    `

    return (
    <Headers>
        <h1>Nasa's Astronomy Picture of the Day</h1>
        <h3>{title}</h3>
    </Headers>
    )
}
export default Header