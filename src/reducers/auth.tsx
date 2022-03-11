import { 
	SAVE_AUTH_INFO,
	RENEW_TOKEN_REQUEST

} from "../constants/actionTypes"
import { takeEvery, call, put, takeLatest, race, take, all, select, putResolve } from "redux-saga/effects";

import { 
	renewToken
} from "../services/authServices"
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


const initialState = {
	authInfo: {} as any,
	dataSaga: '',
} as any


export const reducer = 
	persistReducer(
	{ storage, key : 'dqshop-auth'},
	( state: any = initialState, action: any) => {
	switch(action.type) {	
		case SAVE_AUTH_INFO:
			return {
				...state,
				authInfo: action.payload
			}
		case RENEW_TOKEN_REQUEST:
			return {
				...state,
				authInfo: {}
			}
		default:
			return state;
	}
})

// export default auth;
export function* saga() {
	yield takeEvery(RENEW_TOKEN_REQUEST, function* renewTokenRequest({ payload } : any): any {
		try {
			console.log('renew token', payload);
			const data = yield call(renewToken, payload);
			console.log('dataa', data)
		} catch (error) {
			console.log('error renew token ' , error);
		}
	})
}