import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import "../scss/item.scss";

    const Item = ( {producto} ) => {
        
        const { name, img } = producto;

        return (
            <div className="prod">
                <img className="foto" src={img} alt={name} />
                <h4 className="titulo">{producto.name}</h4>
                <p>Precio: ${producto.price}</p>
                <small>Stock disponible: {producto.stock}</small>
                <p>{producto.desc}</p>
                {
                    producto.stock > 0
                    ? <Link to={`/item/${producto.id}`} className="boton btn btn-primary my-2">Ver más</Link>
                    : <p className='btn btn-outline-danger'>No hay disponible</p>
                }
            </div>
        )
    }

export default Item