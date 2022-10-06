import "../scss/Counter.scss"


const Counter = ({max, counter, setCounter, handleAgregar}) => {

    const handleRestar = () => {
        if (counter > 0) {
            setCounter(counter - 1)
        }
    }
    
    const handleSumar = () => {
        if (counter < max ) {
            setCounter(counter + 1)
        }
    }


    return (
        <div>
            <button 
                className={`btn mx-2 ${counter === 0 ? "btn-outline-danger" : "restar btn-outline-primary"} ${counter === 0 ? 'counter-disabled' :''}`}
                onClick={handleRestar}
            >
                -
            </button>

            <span className="mx-3">{counter}</span>

            <button 
                className={counter === max ? "btn btn-danger" : " sumar btn btn-primary"}

                onClick={handleSumar}
            >
                +
            </button>

            <br/>
            <button disabled={counter === 0} onClick={handleAgregar} className="agregar btn btn-success my-2">
                Agregar al carrito
            </button>
        </div>
    )
}

export default Counter