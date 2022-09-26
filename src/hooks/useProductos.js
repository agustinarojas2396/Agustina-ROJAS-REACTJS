import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where} from 'firebase/firestore'
import { db } from '../firebase/config'

export const useProductos = () => {
    const [item, setItem] = useState([])
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)
        const productosRef = collection(db, 'alimentos')
        const q = itemId 
                    ? query(productosRef, where('category', '==', itemId) )
                    : productosRef

        getDocs(q)
            .then((resp) => {
                const productosDB = resp.docs.map( (doc) => ({id: doc.id, ...doc.data()}) )
                console.log(productosDB)

                setItem(productosDB)
            })
            .finally(() => {
                setLoading(false)
            })

    }, [itemId])

    return ({
        item, loading
    })
}