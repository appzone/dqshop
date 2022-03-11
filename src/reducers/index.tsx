import { combineReducers } from "redux";

import * as cart from './cart';
import products from './products';
import * as auth from './auth';
import { all } from "redux-saga/effects";

export default combineReducers({
	auth: auth.reducer,
	cart: cart.reducer,
	products
})

export function* rootSaga() {
	yield all([
		auth.saga(),
		cart.saga()
	])
}