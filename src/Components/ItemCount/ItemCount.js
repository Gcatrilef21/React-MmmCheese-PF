import '../../App.css'
import { useState } from 'react';

const Count = ({initial, stock, onAdd}) =>{

    const [ quantity, setQuantity ] = useState( initial );

    const increase = () =>{
        if (quantity < stock){
            setQuantity ( quantity + 1);
        }
    };

    const decrease = () =>{
        if (quantity < stock){
            setQuantity ( quantity - 1);
        }
    };

    return (
        <>
            <div className="counter">
                <button className="button-count" onClick={decrease}> - </button>
                <h4>{quantity}</h4>
                <button className="button-count" onClick={increase}> + </button>
                <button className="button-count btn-add" onClick={() => onAdd(quantity)} disabled = {!stock} > Agregar </button>
            </div>
        </>
    )

}

export default Count 