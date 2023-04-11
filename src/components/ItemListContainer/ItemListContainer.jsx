import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { getProducts, getProductosPorCategoria } from '../../asyncmock'
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = (props) => {
  const [products, setProducts] = useState([]);

  const {idCategoria} = useParams();
  useEffect( () => {

    const funcionProductos = idCategoria ? getProductosPorCategoria : getProducts;


    funcionProductos(idCategoria)
      .then(response => setProducts(response))
      .catch(error => console.error(error))
  }, [idCategoria])

  return (
    <div>
      <h2 className='ItemListContainer__h2 mx-5 my-3 d-flex justify-content-center'> {props.greeting} </h2>
      <h2 className='d-flex justify-content-center'>Productos</h2>
      <ItemList products={products}/>
    </div>
  )
}

export default ItemListContainer