import Item from "./item";
import '../scss/ItemList.scss'


const ItemList = ( {productos = []} ) => {

    return (
        <div className="container my-5">
            <h2>¡Comprá lo mejor para tu mascota, desde tu casa cualquier día!</h2>
            <hr/>

            { productos.map((prod) => <Item ClassName="Marcas" productos={prod} key={prod.id}/>)}
        </div>
    )
}

export default ItemList

