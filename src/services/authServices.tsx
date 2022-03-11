
// export async function saveData(payload : any) {
// 	return `Payload is >>> ${JSON.stringify(payload)}`
// }
import { httpClient } from "../helpers/axios";
import qs from 'query-string';

const renewToken = async(payload: any) => {
	const bodyPayload = {	
		client_id: 'online-shop-application',
		client_secret: 'T2noNhPBf4umIVh7iiwRkAO2tZe6E3Wm',
		grant_type: 'refresh_token',
		refresh_token: payload.refresh_token
	}
	console.log("body p", bodyPayload)
	return await httpClient.post(`/auth/realms/DQLabLogin/protocol/openid-connect/token`,  qs.stringify(bodyPayload))
}


export {
	renewToken
}