import * as types from '../constants/actionTypes';
import products from "../api/product";

const addToCart = (payload: any) => (dispatch : any) => {
	dispatch({ 
		type: types.ADD_ITEM,
		payload
	})
}

const addMore = (payload: any) => (dispatch : any) => {
	dispatch({ 
		type: types.ADD_MORE,
		payload
	})
}

const reduceQuantity = (payload: any) => (dispatch : any) => {
	dispatch({ 
		type: types.REDUCE_QUANTITY,
		payload
	})
}

const removeItem = (payload: any) => (dispatch : any) => {
	dispatch({ 
		type: types.REMOVE_ITEM,
		payload
	})
}


const emptyCart = () => (dispatch : any) => {
	dispatch({ 
		type: types.EMPTY_CART,
	})
}


const getAllProducts = () => (dispatch: any) => {
	products.getAllProducts((products: any) => {
		dispatch({
			type: types.GET_ALL_PRODUCTS,
			payload: { products }
		})	
	})
}

const saveAuthInfo = (payload: any) => (dispatch: any) => {
	dispatch({ 
		type: types.SAVE_AUTH_INFO,
		payload
	})
}

const getAddress = () => (dispatch: any) => {
	dispatch({
		type: types.GET_ADDRESS_REQUEST,
	})
}

const addAddress = (payload: any) => (dispatch: any) => {
	dispatch({
		type: types.ADD_ADDRESS_REQUEST,
		payload
	})
}

const editAddress = (payload: any) => (dispatch: any) => {
	console.log('editing aaddress');
	dispatch({
		type: types.EDIT_ADDRESS_REQUEST,
		payload
	})
}

const handleCheckout = (payload: any) => (dispatch: any) => {
	console.log('handling checkout');
	dispatch({
		type: types.CHECKOUT_REQUEST,
		payload
	})
}



export {
	addToCart,
	addMore,
	getAllProducts,
	reduceQuantity,
	emptyCart,
	removeItem,
	saveAuthInfo,
	getAddress,
	addAddress,
	editAddress,
	handleCheckout
}