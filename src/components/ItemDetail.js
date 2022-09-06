const ItemDetail = ({item}) => {

    return (
        <div className="container my-5">
            <img src={item.img} alt="Foto de la marca"/>
            <h3>{item.name}</h3>
            <p>{item.desc}</p>
            <p>{item.category}</p>
            <h4>{item.precio}</h4>
        </div>
    )
}

export default ItemDetail
