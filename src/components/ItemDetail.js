import {  useState } from "react";
import { Link } from "react-router-dom";
import Counter from "./Counter";
import Select from "./Select"


const ItemDetail = ({item}) => {


    const [cantidad, setCantidad] = useState(1)
    const [kg,setkg] = useState(item.options[0].value)

    
    const handleAgregar = () => {
        const itemToCart = {
            id: item.id,
            precio: item.price,
            nombre: item.name,
            kg,
        }
        
        console.log(itemToCart)
    }

    return (

        <div className="container my-5">
            <h3>{item.name}</h3>
            <img src={item.img} alt="Foto de la marca"/>
            <h4>{item.price}</h4>
            <p>{item.descripcion}</p>
            <hr/>
            <hr/>
            <Select options= {item.options} onSelect={setkg}/>
            <hr/>


            
            {
                console.log(item.id)
                ?   <Link to="/cart" className="btn btn-success my-2">Terminar mi compra</Link>
                :   <Counter 
                        max={item.stock}
                        counter={cantidad}
                        setCounter={setCantidad}
                        handleAgregar={handleAgregar}
                    />
            }



        </div>
    )
}

export default ItemDetail


