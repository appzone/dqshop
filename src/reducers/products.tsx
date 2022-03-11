import { 
	GET_ALL_PRODUCTS
} from "../constants/actionTypes"

const initialState = {
	products: [] as any
} as any
const products = ( state: any = initialState, action: any) => {
	switch(action.type) {
		
		case GET_ALL_PRODUCTS:
			return {
				...state,
				products: action.payload.products
			}
		default:
			return state;
	}
}

export default products;