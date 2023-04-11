import './ItemCount.css'
import { useState } from "react"

const ItemCount = ({ stock, inicial }) => {

    const [itemCount, setItemCount] = useState(inicial);

    const sumar = () => {
        if (itemCount < stock) {
            setItemCount(itemCount + 1);
        }
    }

    const restar = () => {
        if (itemCount > inicial) {
            setItemCount(itemCount - 1);
        }
    }

    const agregarAlCarrtito = () => {
        console.log(`Se han agregado ${itemCount} items al carrito`);
    }

    return (
        <div className='d-flex justify-content-center my-4'>
        <div className='ItemCount_container'>
            <div class="btn_container d-flex justify-content-evenly align-items-center">
                <div className='btn_border d-flex justify-content-between align-items-center'>
                    <button className='btn1' onClick={restar}> - </button>
                    <strong className='item__count'> {itemCount} </strong>
                    <button className='btn1' onClick={sumar} > + </button>
                </div>
            </div>
            <button onClick={agregarAlCarrtito}> Agregar al Carrito </button>
        </div>
        </div>
    )
}

export default ItemCount