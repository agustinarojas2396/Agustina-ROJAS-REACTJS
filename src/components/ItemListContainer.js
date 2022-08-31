import { useEffect, useState } from "react";
import { pedirDatos } from "../helpers/pedirDatos";
import ItemList from "./ItemList";
import '../css/ItemListContainer.css';


const ItemListContainer = () => {
    const [productos, setProductos] = useState([])

    useEffect(() => {
        pedirDatos()
            .then( (res) => {
                setProductos(res)
            })
            .catch( (error) => {
                console.log(error)
            })
            .finally(() => {
            })
    }, [])


    return (
        <div>
            <ItemList className="productos" productos={productos}/>
        </div>
    )
}

export default ItemListContainer