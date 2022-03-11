import { persistReducer } from 'redux-persist';
import storage from "redux-persist/lib/storage";
import { takeEvery, call, put, takeLatest, race, take, all, select, putResolve, delay } from "redux-saga/effects";

import {
	getAddressData,
	addAddress,
	editAddress,
	checkout
} from "../services/addressServices"

import {
	ADD_ITEM,
	ADD_MORE,
	REDUCE_QUANTITY,
	EMPTY_CART,
	REMOVE_ITEM,
	GET_ADDRESS_REQUEST,
	GET_ADDRESS_SUCCESS,
	GET_ADDRESS_FAILED,
	ADD_ADDRESS_REQUEST,
	ADD_ADDRESS_SUCCESS,
	ADD_ADDRESS_FAILED,
	EDIT_ADDRESS_REQUEST,
	EDIT_ADDRESS_SUCCESS,
	EDIT_ADDRESS_FAILED,
	CHECKOUT_REQUEST,
	CHECKOUT_SUCCESS,
	CHECKOUT_FAILED,
} from '../constants/actionTypes';

const initialState = {
	cartItems: [] as any,
	itemCount: 0,
	total: 0,
	address: [] as any,
	error: '',
} as any

export const sumItems = (cartItems: any) => {
	let itemCount = cartItems.reduce((total: any, product: any) => total + product.quantity, 0);
    let total = cartItems.reduce((total: any, product: any) => total + product.price * product.quantity, 0).toFixed(2);
    return { itemCount, total }
}

export const reducer = 
	persistReducer(
	{ storage, key : 'dqshop-cart'},
	(state: any = initialState, action : any) => {
	switch(action.type) {
		case ADD_ITEM:
			if(!state.cartItems.find((item: { id: any; }) => item.id === action.payload.id)) {
				state.cartItems.push({
					...action.payload,
					quantity: 1
				})
			}

			return {
				...state,
				...sumItems(state.cartItems),
				checkout: false,
				cartItems: [ ...state.cartItems ]
			}
		case ADD_MORE:
			state.cartItems[state.cartItems.findIndex((item: any) => item.id === action.payload.id)].quantity++
			return {
				...state,
				checkout: false,
				...sumItems(state.cartItems),
				cartItems: [ ...state.cartItems ]
			}
		case REDUCE_QUANTITY:
			state.cartItems[state.cartItems.findIndex((item: any) => item.id === action.payload.id)].quantity--
			return {
				...state,
				...sumItems(state.cartItems),
				cartItems: [ ...state.cartItems ]
			}	
		case REMOVE_ITEM:
			return {
				...state,
				...sumItems(state.cartItems.filter((item: any) => item.id !== action.payload.id)),
				cartItems: [ ...state.cartItems.filter((item: any) => item.id !== action.payload.id) ]
			}
		case EMPTY_CART:
			return {
				...state,
				...sumItems([]),
				cartItems: []
			}	
		case GET_ADDRESS_REQUEST:
		case ADD_ADDRESS_REQUEST:
		case EDIT_ADDRESS_REQUEST:
		case CHECKOUT_REQUEST:
			return {
				...state,
				isLoading: true,
				error: null
			}
		case GET_ADDRESS_SUCCESS:
			return {
				...state,
				address: action.payload,
				isLoading: false,
				error: ''
			}
		case GET_ADDRESS_FAILED:
		case CHECKOUT_FAILED:
			return {
				...state,
				isLoading: false,
				error: action.payload
			}
		case ADD_ADDRESS_SUCCESS:
		case ADD_ADDRESS_FAILED:
			return {
				...state,
				isLoading: false,
			}
		case CHECKOUT_SUCCESS: 
			return {
				...state,
				isLoading: false,
				error: '',
				transferDestination: action.payload.transactionId,
				checkout : true,
				...sumItems([]),
				cartItems: []
			}
		default:
			return state;
	}
})

// export default cart;

export function* saga() {
	yield takeEvery(GET_ADDRESS_REQUEST, function* getAddressRequest(): any {
		try {
			console.log('get address');
			const data = yield call(getAddressData);
			yield put({
				type: GET_ADDRESS_SUCCESS,
				payload: data
			})
		} catch (error) {
			console.log('error get address ' , error);
			yield put({
				type: GET_ADDRESS_FAILED,
				payload: error
			})
		}
	})

	yield takeEvery(ADD_ADDRESS_REQUEST, function* addAddressRequest({ payload } : any): any {
		try {
			console.log('add address');
			const data = yield call(addAddress, payload);
			yield put({
				type: GET_ADDRESS_REQUEST
			})
		} catch (error) {
			console.log('error add address ' , error);
			yield put({
				type: ADD_ADDRESS_FAILED,
				payload: error
			})
		}
	})


	yield takeEvery(EDIT_ADDRESS_REQUEST, function* editAddressRequest({ payload } : any): any {
		try {
			console.log('edit address');
			const data = yield call(editAddress, payload);
			yield put({
				type: GET_ADDRESS_REQUEST
			})
		} catch (error) {
			console.log('error edit address ' , error);
			yield put({
				type: EDIT_ADDRESS_FAILED,
				payload: error
			})
		}
	})

	yield takeEvery(CHECKOUT_REQUEST, function* checkoutRequest({ payload }: any): any {
		try {
			console.log('checkout' , payload);
			const data = yield call(checkout, payload);
			console.log('data', data);
			yield put({
				type: CHECKOUT_SUCCESS,
				payload: data
			})
		} catch (error) {
			console.log('error checkout ' , error);
			yield put({
				type: CHECKOUT_FAILED,
				payload: error
			})
		}
	})


}