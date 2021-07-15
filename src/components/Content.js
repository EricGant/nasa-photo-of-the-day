import React from 'react'
import styled from 'styled-components'

function Content(props) {
const {explanation, hdpic, url} = props;

    const Contents = styled.div`
    display:flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content:space-between;

    .hdPicRedirect {
        display:flex;
        justify-content: center;
        align-items: center;
        padding: .5rem;
        margin: 1rem 0 1rem 0;
        color:#d9d9d9;
        background:#0d0d0d;
        border:2px solid black;
        border-radius: 1rem;
        font-size:1rem;
            &:hover {
            cursor: pointer;
        }
    }
      
    p {
        font-weight: 300;
        margin-bottom: 1rem;
        width: 75%;
        padding:1%;
        line-height: 1.5;
        color:#d9d9d9;
        background: #0d0d0d;
        border: 2px solid black;
        border-radius:1rem;
        text-align:center;
        font-size: 1.3rem;
    }`

      return (
          <Contents>
              {url.includes('youtube')?null:<a href={hdpic} style={{textDecoration: "none"}}><button className="hdPicRedirect">Click to view HD Photo</button></a>}
              <p>{explanation}</p>
          </Contents>)
}
export default Content