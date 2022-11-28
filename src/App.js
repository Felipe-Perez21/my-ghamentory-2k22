import './App.css';
import { Component } from 'react';
import Header from './Components/Header';
import Movies from './Components/Movies';
import Tickets from './Components/Tickets';



class App extends Component{
  // El state va aqui
  constructor() {
    super();
    this.state = {
      compra:[],
      cartelera:[
        {codigo:1,nombre:"Halloween Kills", idioma:'SUB', clasificacion:'C',horarios:['13:00','17:50','20:30'],duracion:'106 min',url:'https://static.cinepolis.com/img/peliculas/37049/1/1/37049.jpg'},
        {codigo:2,nombre:"Los Locos Addams 2", idioma:'ESP', clasificacion:'A',horarios:['9:00','11:30','13:30'],duracion:'93 min',url:'https://static.cinepolis.com/img/peliculas/37048/1/1/37048.jpg'},
        {codigo:3,nombre:"Sin Tiempo Para Morir", idioma:'ESP', clasificacion:'B',horarios:['11:00','13:50','19:40'],duracion:'164 min',url:'https://static.cinepolis.com/img/peliculas/36792/1/1/36792.jpg'},
        {codigo:4,nombre:"Venom: Carnage Liberado", idioma:'ESP', clasificacion:'B',horarios:['10:30','14:20','18:30'],duracion:'98 min',url:'https://static.cinepolis.com/img/peliculas/36934/1/1/36934.jpg'},
      ],
    };
  }


  // Las funciones van aqui 
  
  agregar=(_peli,_x)=>{

    const objpeliselect = {
      cantidad: 0,
      clasificacion: _peli.clasificacion,
      duracion: _peli.duracion,
      horario: _x,
      idioma: _peli.idioma,
      nombre: _peli.nombre,
      total: 0
    }

    this.setState({
      compra: [objpeliselect]
    })

  }

  Calcular=(_pelicalcular,_e)=>{
    console.log(_pelicalcular)
    console.log(_e)

    let objpeliselect = {};

    if(_e>=1){
      if(_pelicalcular.clasificacion === "A"){
        objpeliselect = {
          cantidad: _e,
          clasificacion: _pelicalcular.clasificacion,
          duracion: _pelicalcular.duracion,
          horario: _pelicalcular.horario,
          idioma: _pelicalcular.idioma,
          nombre: _pelicalcular.nombre,
          total: 50
        }
      }
      else{
        if(_pelicalcular.clasificacion === "B"){
          objpeliselect = {
            cantidad: _e,
            clasificacion: _pelicalcular.clasificacion,
            duracion: _pelicalcular.duracion,
            horario: _pelicalcular.horario,
            idioma: _pelicalcular.idioma,
            nombre: _pelicalcular.nombre,
            total: 80
          }
        }
        else{
          objpeliselect = {
            cantidad: _e,
            clasificacion: _pelicalcular.clasificacion,
            duracion: _pelicalcular.duracion,
            horario: _pelicalcular.horario,
            idioma: _pelicalcular.idioma,
            nombre: _pelicalcular.nombre,
            total: 95
          }
        }
      }
      this.setState({
        compra: [objpeliselect]
      })
    }

  }

  EliminarCompra=()=>{
    this.setState({
      compra:[],
    })
    alert("Compra eliminada :(")
  }

  Comprar=(_cantidad)=>{
    if(_cantidad>=1 && _cantidad<11){
      alert("Gracias por su compra :)")
      this.setState({
        compra:[],
      })
    }
    else{
      alert("Checa tu numero de boletos :/")
    }

  }
  
  
  // Cosas de componentes
  render(){
    return (
      <div className="App">
        <Header/>
        
        <div className="Containers">
          <Movies
          cartelera={this.state.cartelera}
          agregar={this.agregar}
          />

          <Tickets
          compra={this.state.compra}
          Calcular={this.Calcular}
          Comprar={this.Comprar}
          EliminarCompra={this.EliminarCompra}
          />

        </div>
      </div> 

    );
  }
}

export default App;