import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios'
import Pic from './components/Pic'
import Content from "./components/Content";
import Header from "./components/Header";
import Footer from './components/Footer'
import styled from "styled-components";
import { apiKey } from "./API";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import dateFormat from "dateformat";
import ReactPlayer from "react-player";

function App(props) {
    const [contents, setContents] = useState([])
    const [date, setDate] = useState(new Date());
    const [url, setUrl] = useState("")
    let formatDate = dateFormat(date,'yyyy-mm-dd')

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

    .react-datepicker__input-container input{
      padding: .5rem 0 .5rem 0 ;
      text-align: center;
      margin: 1rem 0 0 0;
      color:#d9d9d9;
      background:#0d0d0d;
      border:2px solid black;
      border-radius: 1rem;
      font-size: 1rem;
      font-weight:600;
      &:hover {
        cursor: pointer;
        background:#333333;
        transition: 1s;
      }
    }`
  
  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${formatDate}`)
    .then(response => {
      setUrl(response.data.url)
      setContents(response.data)
      console.log(response.data)
    })
    .catch(err =>
      console.log(err)
    )}, [formatDate])

  return (
    <Container className="container">
      <Header title={contents.title}/>
      <DatePicker dateFormat = "MMMM d, yyyy" className = "newClass" selected={date} placeholderText="Click to select a date" withPortal showMonthDropdown showYearDropdown dropdownMode= "select" onChange={(date) => setDate(date)} />
      {url.includes('youtube')?<div className ='player-wrapper'><ReactPlayer url={contents.url} /></div>:<Pic pic={contents.url}/>}
      <Content hdpic ={contents.hdurl} explanation={contents.explanation} url={url}/>
      {contents.copyright === undefined?null:<Footer copyright={contents.copyright}/>}
      </Container>
  );
}

export default App;