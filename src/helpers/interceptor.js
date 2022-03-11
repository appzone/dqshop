import { httpApi, httpClient } from './axios';


const setupInterceptor = (store) => {
	httpApi.interceptors.request.use(
		(config) => {
			const {
				auth: {
					authInfo: {
						access_token
					}
				}
			} = store.getState()
			if(access_token) {
				config.headers['Authorization'] = `Bearer ${access_token}`
			} 
			//TODO 
			//redirect to login page
			return config
		},
		(error) => {
			console.log('error on request', error)
			return Promise.reject(error);
		}
	)

	httpApi.interceptors.response.use(
		(res) => {
			if(res.status === 200 || res.status === 201) {
				return res.data
			}


			return res
		},
		(err) => {
			console.log('err', err)
			if(!err.status) {
				return Promise.reject('Something wrong, try again')	
			} else if(err.response.status === 401) {
				const {
					auth: {
						authInfo: {
							refresh_token,
						}
					}
				} = store.getState()
				store.dispatch({ type: 'RENEW_TOKEN_REQUEST', payload: { refresh_token } })
			}
			return Promise.reject('Something wrong, try again')
		}
	)

	httpClient.interceptors.response.use(
		(res) => {
			return res
		},
		(err) => {

			if(err.response.status === 400 && err.response.data.error === 'invalid_grant') {
				console.log('redirect to login')
				window.location.href = '/login'
			}
			return Promise.reject('Something wrong, try again')
		}
	)}

export default setupInterceptor;