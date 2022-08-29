import { useState } from "react"


const ItemCount = ({stock, addToCart}) => {

    const [counter, setCounter] = useState(0)
    const [agregar, setAgregar] = useState(true)

    const handleSumar = () => {
        if(counter < stock){
            setCounter(counter + 1)
        }
    }

    const handleRestar = () => {
        if (counter > 0 ) {
            setCounter(counter  - 1)
        }
    }

    const handleAgregar = () => {
        setAgregar(!agregar)
    
    }
    //useEffect( () => {
    //    console.log("Contador Montado!")
        
    //    return () => {
    //        console.log("Contador Desmontado")
    //    }
    //}, [] )
    
    //useEffect(() => {
    //   if (counter % 2 === 0) {
    //        console.log(counter)
    //    }
        
    //}, [counter])

    return (
        <div className="container my-5">
            <h2>Contador de Producto</h2>
            <hr/>

            <button onClick={handleRestar} className="btn btn-outline-primary">-</button>
            <span className="mx-2">{counter}</span>
            <button onClick={handleSumar} className="btn btn-primary">+</button>
            <hr></hr>

            <button 
                onClick={handleAgregar} 
                className={agregar ? "btn btn-success" : "btn btn-info"}
            >
                { agregar ? "Agregar al carrito" : "Se agregó con éxito!" }
            </button>
        </div>
    )
}


export default ItemCount