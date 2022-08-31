import stock from './Productos'

const pedirDatos = () => {
    return new Promise (( resolve, reject ) => {
        setTimeout (() => {
            resolve(stock)
        },3000)
    }) 
}


export default pedirDatos;