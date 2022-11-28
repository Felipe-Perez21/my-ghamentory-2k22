import React,{Component} from "react";
import '../App.css';


class Movies extends Component{
    render(){
        return(
           <div className="Cartelera">
                {
                    this.props.cartelera.map((peli,index)=> // Entrar en la cartelera, y partir dos secciones una con la imagen y la otra con la info 
                        <div key={index} className="Peliculas">
                            
                            <div className="Poster"> 
                                <img src={peli.url} alt="x.x no hay imagen"/> 
                            </div>
                            
                            <div className="Descripcion">
                                <h3>{peli.nombre}</h3>
                                <h3>{peli.idioma}</h3>
                                <h3>{peli.clasificacion}</h3>
                                <h3>{peli.duracion}</h3>
                                <div className="Horarios">
                                <button onClick={()=>this.props.agregar(peli,peli.horarios[0])}>{peli.horarios[0]}</button>
                                <button onClick={()=>this.props.agregar(peli,peli.horarios[1])}>{peli.horarios[1]}</button>
                                <button onClick={()=>this.props.agregar(peli,peli.horarios[2])}>{peli.horarios[2]}</button>
                                </div>
                            </div>

                        </div>
                    
                    )
                }
           </div> 
        );
    }
} 

export default Movies;