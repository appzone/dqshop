import React, { createContext, useReducer } from "react";
import { CartReducer } from "./CartReducer";

export const CartContext = createContext()

const storage = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem('cart')) : [];

const initialState = { cartItems: storage, checkout: false };

const CartContextProvider = ({ children }) => {
	const [ state, dispatch ] = useReducer(CartReducer, initialState);

	const addProduct = payload => {
		console.log("Adding product", payload);
		dispatch({ type: 'ADD_ITEM', payload})
	}

	const contextValues = {
		addProduct,
	}

	return (
		<CartContext.Provider value={contextValues}>
			{ children }
		</CartContext.Provider>
	)

}

export default CartContextProvider;
