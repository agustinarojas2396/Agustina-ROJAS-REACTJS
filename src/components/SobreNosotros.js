

const Nosotros = () => {

    const handleClick = (e) => {
        console.log(e)
    }

    const handleSaludar = (name) => {
        console.log(name)
    }
    return (
        <div className="container my-5">
            <h2 onClick={() => handleSaludar("Alesio Adrover")}>Nosotros</h2>
            <h2 onClick={handleClick}>Nosotros</h2>gy
            
            <hr></hr>
        </div>
    )
}

export default Nosotros