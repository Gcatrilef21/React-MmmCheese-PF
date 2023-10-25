import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) =>{

    const [cart, serCart] = useState([])

    return(

        <CartContext.Provider value= {{cart}}>
            {children}
        </CartContext.Provider>
    )
}