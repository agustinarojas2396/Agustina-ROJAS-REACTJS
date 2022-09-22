import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from 'react-router-dom';
import '../scss/ItemListContainer.scss';
import { db } from '../Firebase/config';
import { collection, getDocs, query, where } from "firebase/firestore";
import Loader from "./Loader"




const ItemListContainer = () => {
    const [productos, setProductos ] = useState([])
    const { categoryId } = useParams ([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        const productosRef = collection(db, 'alimentos')
        const q = categoryId 
                    ? query(productosRef, where('category', '==', categoryId) )
                    : productosRef

        getDocs(q)
            .then((resp) => {
                const productosDB = resp.docs.map( (doc) => ({id: doc.id, ...doc.data()}) )
                console.log(productosDB)

                setProductos(productosDB)
            })
            .finally(() => {
                setLoading(false)
            })

    }, [categoryId])

    return (
        <div>
            {
                loading 
                ? <Loader/>
                : <ItemList productos={productos}/>
            }
        </div>   
    )
}

export default ItemListContainer