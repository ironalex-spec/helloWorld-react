import axios from "axios"
import { useEffect, useState } from "react"

export const Product = () => {
    const [product, setProduct] = useState(null)

    useEffect(() => {
        axios.get('https://masterclass.kimitsu.it-incubator.io/api/products/1')
            .then((res) => {
                debugger
                const product = res.data
                setProduct(product)
            })
    }, [])

    return (
        <h1>Product</h1>
    )
}