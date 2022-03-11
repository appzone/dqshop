import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import { CartIcon } from "../icons";
import { connect } from 'react-redux';
import { setLanguage } from "../../helpers/i18n/i18n"

const Header = (props: any) => {
	console.log('props', props);
	const { cart  }  = props;
	return (
		<>
			<header className="header">
				<Link to='/'>Store</Link>
				<Link to='/about'>About</Link>
				<Link to='/address'>Address</Link>
				<Link to='/cart'><CartIcon />Cart ({cart.itemCount})</Link>
				<button onClick={() => setLanguage('en')}>EN</button>
				<button onClick={() => setLanguage('id')}>ID</button>
				<br/>
				{ cart.error }
			</header>
		</>
	)
}
const mapStateToProps = (state: any) => {
	return({
		cart: state.cart
	})
}

export default connect(mapStateToProps)(Header);