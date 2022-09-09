const ItemDetail = ({item}) => {

    return (
        <div className="container my-5">
            <h3>{item.name}</h3>
            <img src={item.img} alt="Foto de la marca"/>
            <h4>{item.price}</h4>
            <p>{item.descripcion}</p>
        </div>
    )
}

export default ItemDetail
