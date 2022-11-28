import React,{Component} from "react";
import '../App.css';


class Tickets extends Component{
    render(){
        return(
            <div className="List">
                {
                    this.props.compra.length===0
                    ?
                    <h3>Selecciona una película dando click en su horario</h3>
                    :
                    <div>
                    {
                        this.props.compra.map((peli,index)=>
                        <div key={index}>
                            <p><strong>{peli.nombre}</strong> {peli.idioma}</p>
                            <p><strong>{"Hora :"}</strong> {peli.horario}</p>
                            <p><strong>{"Cantidad de boletos:"}</strong> <input type="number" min="1" max="10" value={peli.cantidad} onChange={(e)=>this.props.Calcular(peli,e.target.value)}></input></p>
                            <p><strong>{"Total: "}</strong> ${peli.total*peli.cantidad}</p>

                            <div>
                                <button onClick={()=>this.props.EliminarCompra()}>Cancelar compra</button>
                                <button onClick={()=>this.props.Comprar(peli.cantidad)}>Pagar</button>
                            </div>

                        </div>
                        )
                    }
                    </div>
                }
            </div>
        );
    }
} 

export default Tickets;