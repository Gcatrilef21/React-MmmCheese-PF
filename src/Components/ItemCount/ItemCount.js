import '../../App.css'
import { useState } from 'react';

const Count = ({initial, stock, onAdd}) =>{

    const [ quantity, setQuantity ] = useState( initial );

    const increase = () =>{
        if (quantity >= stock)return
            setQuantity ( prev => prev + 1);
    };

    const decrease = () =>{
        if (quantity <= 0) return
            setQuantity ( prev => prev - 1);
        
    };
    console.log(decrease)

    return (
        <>
            <div className="counter">
                <button className="button-count" onClick={decrease}> - </button>
                <h4>{quantity}</h4>
                <button className="button-count" onClick={increase}> + </button>
            </div>
            <button className="button-count btn-add" onClick={() => onAdd(quantity)} disabled ={!stock} > Agregar </button>
        </>
    )

}

export default Count 