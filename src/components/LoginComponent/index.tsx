import React from "react";

const LoginComponent = (props:any) => {
	return (
		<button>
			<a href="http://143.110.236.149:8180/auth/realms/DQLabLogin/protocol/openid-connect/auth?client_id=online-shop-application&response_type=code&redirect_uri=http://localhost:3000/callback">Sign in With DQ</a>
		</button>
	)
}

export default LoginComponent;