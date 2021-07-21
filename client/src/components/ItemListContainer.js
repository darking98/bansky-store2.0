import React, {useEffect, useState} from 'react'
import ItemProduct from './ItemProduct'
import ItemDetail from './ItemDetail';


const ItemListContainer = ({setDetail}) => {


    const [products, setProducts] = useState([]);

    const getCategory = async () =>{
        let llamada = fetch(`http://localhost:4000/products`);
        llamada = await llamada;
        llamada = await llamada.text();
        setProducts(JSON.parse(llamada));
    }

    useEffect(()=>{
        getCategory();
    },[])

    return (
        <div className="item-list-container">
            {
                products.length === 0 ? <h2>Loading...</h2> :
                products.map(product => (
                    <ItemProduct product = {product} setDetail={setDetail}/>
                ))
            }
        </div>
    )
}

export default ItemListContainer
