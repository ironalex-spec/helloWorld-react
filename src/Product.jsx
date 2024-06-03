import axios from "axios"
import { useEffect, useState } from "react"
import rating from "./assets/img/rating.svg"
import cartWhite from "./assets/img/cartWhite.svg"
import arrow from "./assets/img/arrowBack.svg"
import { useNavigate, useParams } from "react-router-dom"

export const Product = () => {
    const [product, setProduct] = useState(null)

    let { productId } = useParams(); // Such Parameters Use set in Routing 

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://masterclass.kimitsu.it-incubator.io/api/products/${productId}`)
            .then((res) => {
                debugger
                const product = res.data
                setProduct(product)
            })
    }, [])

    const toPreviousPageHandler  = () => {
        navigate('/')
    }

    return (
        <div>
            <div className="arrowBack">
                <button onClick={toPreviousPageHandler}>
                    <img src={arrow} alt="" />
                    Back to Best Seller
                </button>
            </div>

            {
                product === null ? ("Loading.....") :
                    (
                        <div className="product">
                            <img src={product.image} alt="" />
                            <div className="info">
                                <p className="title">{product.title}</p>
                                <p className="price">$ {product.price}</p>
                                <div className="rating">
                                    <p>Rating: {product.rating.rate}</p>
                                    <img src={rating} alt="" />
                                </div>
                                <div className="category">
                                    <span>Category:</span>
                                    <p>{product.category}</p>
                                </div>
                                <p className="description">{product.description}</p>
                                <button>
                                    <img src={cartWhite} alt="" />
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    )}

        </div>
    )
}