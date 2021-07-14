
import React from 'react';
import styled from 'styled-components';
function Pic(props) {
  const { pic } = props;


  const Image = styled.img `
  border: 4px solid black;
  margin: 1rem 0 2rem 0 ;
  height: 60vh;
  `


  return (
    <div>
      <Image src={pic} alt="Outer Space"/>
    </div>
  )
}

export default Pic