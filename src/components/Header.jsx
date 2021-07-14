import { findByLabelText } from '@testing-library/dom'
import React from 'react'
import { flushSync } from 'react-dom'
import styled from 'styled-components'


    
function Header(props){
    const {title, date} = props

    const Headers = styled.div`
    display:flex;
    flex-flow: column nowrap;
    margin-top: 10px;
    align-items: center;    
    
    h3 {
        padding:10px;
    }
    h2 {
        color:lightblue;
        margin-top:15px;
        font-weight:600;
        padding: 10px
    }
    `
    return (
    <Headers>
        <h1>Nasa's Astronomy Photo of the Day</h1>
        <h2>Date: {date}</h2>
        <h3>{title}</h3>
    </Headers>
    )
}
export default Header