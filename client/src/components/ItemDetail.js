import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router'
import { getCategory } from '../fetch/getItems';

const ItemDetail = () => {

    const { id } = useParams();
    const [product, setProduct] = useState([])

    useEffect(() => {                                       
        getCategory().then(res => setProduct(res.filter(element => element.id === id)))
    },[id])
    return (
        <>
            {
                product.map(product => (
                <div className="item-detail-container">
                    <div className="item-detail-image">
                        <img src={product.image} alt="" width="500px"/>
                    </div>
                    <div className="item-detail-info">
                        <h2>{product.title}</h2>
                        <p>${product.price}.00</p>
                        <p>Stock disponible: {product.stock}</p>
                    </div>
                </div>
                ))
            }
        </>
        
    )
}

export default ItemDetail
