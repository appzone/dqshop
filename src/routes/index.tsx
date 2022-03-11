import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";

import Store from '../pages/store';
import NotFound from '../pages/NotFound';
import Address from '../pages/Address';
import About from '../pages/About';
import Cart from '../pages/Cart';
import Payment from '../pages/Payment';
import Login from "../pages/Login";
import Callback from "../pages/Callback";

class Routes extends React.Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path="/" component={Store} />
					<Route exact path="/address" component={Address} />
					<Route exact path="/about" component={About} />
					<Route exact path="/cart" component={Cart} />
					<Route exact path="/payment" component={Payment} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/callback" component={Callback} />
					
					<Route path="*" component={NotFound} />
				</Switch>
			</Router>
		)
	}
}

export default Routes;