import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios'
import Gallery from './components/Gallery'
import Content from "./components/Content";
import Header from "./components/Header";
import Footer from './components/Footer'
import styled from "styled-components";
import { apiKey } from "./API";


function App(props) {
  const [contents, setContents] = useState([])

  const Container = styled.div`
  *{
    padding:0px;
    margin:0px;
  }
    background: url("https://cdn.wallpapersafari.com/56/11/OIf0lp.jpg");
    background-position:center;
    background-repeat: no-repeat;
    background-size:cover;
    display:flex;
    flex-flow: column nowrap;
    align-items:center;
    justify-content:space-between;
    min-height: 100vh;
    box-sizing:border-box;
    `
  

  
    
  
  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=2012-03-14`)
    .then(response => {
      setContents(response.data)
      console.log(response.data)
    })
    .catch(err =>
      console.log(err)
    )}, [])






  return (
    <Container className="container">
      <Header title={contents.title} date={contents.date}/>
      <Gallery pic={contents.url}/>
      <Content explanation={contents.explanation}/>
      <Footer copyright={contents.copyright}/>
      </Container>
  );
}

export default App;
