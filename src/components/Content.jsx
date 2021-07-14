import React from 'react'
import styled from 'styled-components'

function Content(props) {
const {explanation} = props;

const Contents = styled.div`
    display:flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content:space-between;
    
    p {
      width: 60%;
      line-height: 1.5;
      font-weight: 400;
      background: lightgray;
      color:black;

      border: 2px solid black;
      text-align:center;
      font-size: 1.3rem;
    }
    .btn {
      padding: 7px;
      margin: 10px;
      color:black;
      background:gold;
      border:none;
      border-radius: 15px;
      font-size:1rem;
      &:hover {
        cursor: pointer;
      }
    }
      `
      return (
          <Contents>
              <p>{explanation}</p>
          </Contents>)
}
export default Content