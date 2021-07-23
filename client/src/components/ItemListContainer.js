import React, {useEffect, useState} from 'react'
import ItemProduct from './ItemProduct'
import ItemDetail from './ItemDetail';
import { getCategory } from '../fetch/getItems';
import { useParams } from 'react-router';


const ItemListContainer = () => {


    const [products, setProducts] = useState([]);

    const { id } = useParams()


    useEffect(()=>{
        if(id !== undefined){
        
            getCategory().then(res => setProducts(res.filter(element => element.gender ===id )))
        }else{
            getCategory().then(res => setProducts(res))

        }
    },[id])


    return (
        <div className="item-list-container">
            {
                products.length === 0 ? <h2>Loading...</h2> :
                products.map(product => (
                    <ItemProduct product = {product}/>
                ))
            }
        </div>
    )
}

export default ItemListContainer
