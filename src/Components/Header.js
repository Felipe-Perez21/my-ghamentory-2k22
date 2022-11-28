import React,{Component} from "react";
import '../App.css';
import logo from '../logo.jpg'
import magia from '../lamagiadelcine.jpg'

class Header extends Component{
    render(){
        return(
            <div className = "App-header">
               <img className="App-logo" src = {logo} alt = "Sin imagen x.x"/>
               <img className="App-logo" src ={magia} alt = "Sin imagen x.x"/>
            </div> 
        );
    }
} 

export default Header;