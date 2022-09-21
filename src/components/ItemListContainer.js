import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import '../scss/ItemListContainer.scss';
import { db } from '../../src/Firebase/config';
import { collection, getDocs, query, where } from "firebase/firestore"


const ItemListContainer = () => {
    const [productos, ] = useState([])

    useEffect(() => {
        setLoading(true)
        const productosRef = collection(db, 'productos')
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
            <ItemList className="productos" productos={productos}/>
        </div>
    )
}

export default ItemListContainer