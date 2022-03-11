import React, { useEffect, useState } from 'react';
import qs from 'query-string';
import { httpClient } from '../../helpers/axios';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { saveAuthInfo } from '../../actions';


const Callback = (props:any) => {
	// const [ isLogin, setIsLogin ] = useState(false)
	console.log('props', props);
	const { 
		auth: { access_token },
		saveAuthInfo,
	} = props

	useEffect(() => {
		const parsedVar = qs.parse(window.location.search)
		console.log("data callback", parsedVar)
		const payload = {	
			client_id: 'online-shop-application',
			client_secret: 'T2noNhPBf4umIVh7iiwRkAO2tZe6E3Wm',
			grant_type: 'authorization_code',
			code: parsedVar.code,
			redirect_uri: 'http://localhost:3000/callback'
		}
		httpClient.post('/auth/realms/DQLabLogin/protocol/openid-connect/token', qs.stringify(payload)).then((res) => {
			console.log('access token is ', res.data.access_token );
			if(res.data) {
				saveAuthInfo(res.data);
			}
		})
	}, [])

	if(access_token) {
		return <Redirect to="/" />
	} 

	return <>
		Login Failed / Not authorized		
		</>

}

const mapStateToProps = (state: any) => {
	return ({
		auth: state.auth.authInfo
	})
}


export default connect(mapStateToProps, { saveAuthInfo })(Callback);