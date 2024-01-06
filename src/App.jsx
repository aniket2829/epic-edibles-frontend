import React from 'react'
import "../index.css"
import Navbar from "./components/Navbar/Navbar"
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'

export default function App(){
  return(
    <>
    <Navbar title="EPIC EDIBLES"/>
    <Home/>
    <Footer/>
    </>
  )

}