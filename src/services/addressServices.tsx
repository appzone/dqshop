import { httpApi } from "../helpers/axios"
const getAddressData = async () => {
	return await httpApi.get('/transaction-service/address?page=0&contentPerPage=1000')
}

const addAddress = async(payload: any) => {
	return await httpApi.post('/transaction-service/address', payload)
}

const editAddress = async(payload: any) => {
	return await httpApi.patch(`/transaction-service/address/${payload.id}`, payload)
}

const checkout = async(payload: any) => {
	return await httpApi.post(`/transaction-service/transactions/checkout`, payload)
}


export {
	getAddressData,
	addAddress,
	editAddress,
	checkout
}