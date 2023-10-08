import './ItemCount.css'

const Count = ({initial, stock, onAdd}) =>{

    const [ quantity, setQuantity ] = useState( initial );

    const incrase = () =>{
        if (quantity < stock){
            setQuantity ( quantity + 1);
        }
    };

    const decrase = () =>{
        if (quantity < stock){
            setQuantity ( quantity - 1);
        }
    };

    return (
        <>
            <div className="counter">
                <button className="button" onClick={decrease}> - </button>
                <h4>{quantity}</h4>
                <button className="button" onClick={increse}> + </button>
            </div>
            <div>
                <button className="button" onClick={() => onAdd(quantity)} disabled = {!stock} > Añadir </button>
            </div>
        </>

    )

}

export default Count 