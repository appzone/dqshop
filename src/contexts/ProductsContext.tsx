import React, { createContext, useState } from "react";
import { dummyProducts } from "../services/dummy";

export const ProductsContext = createContext({ products: [ {id: 0, name: "", price: 0, photo: "" }]})


const ProductsContextProvider = ({ children}: any) => {
	const [ products ] = useState(dummyProducts);

	return (
		<ProductsContext.Provider value={{ products }}>
			{ children }
		</ProductsContext.Provider>
	)
}

export default ProductsContextProvider