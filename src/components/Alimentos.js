

const Alimentos  = () => {

    const handleSaludar = (name) => {
        console.log(name)
    }
    return (
        <div className="container my-5">
            <h2 onClick={() => handleSaludar("Alesio Adrover")}>Alimentos</h2>
            <hr></hr>
        </div>
    )
}

export default Alimentos 