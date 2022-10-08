import Item from "./item";
import '../scss/ItemList.scss'


const ItemList = ( {productos = []} ) => {

    return (
        <div className="container my-5">
            <h2>¡El Pet Store que estabas buscando!</h2>
            <hr/>
            <div className="cards">{productos.map((prod) => <Item className="Marcas" producto={prod} key={prod.id}/>)}</div>
        </div>
    )
}

export default ItemList

