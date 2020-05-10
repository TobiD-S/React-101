import React from "react"
import NameTobi from "./NameTobi"
import NavBar from "./NavBar"
import Footer from "./Footer"

function MyInfo() {
    return ( 
    <div style={{backgroundColor: "lightblue"}}> 
    <NavBar/>
        <h1 style={{color: 'red'}} >Tobi</h1> 
        <p> I'm 23, I'm scared for my future, but I'm taking it a day at a time..I also love my family and Gbolahan. God is the best! </p> 
        <ol>
            <li> Greece </li> 
            <li> Cayman Islands </li> 
            <li> Turks and Caicos </li> 
        </ol> 
        <NameTobi/>
        <Footer/> 
    </div> )

}

    export default MyInfo