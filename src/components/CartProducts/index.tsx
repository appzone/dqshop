import React from "react";
import { dummyCart } from "../../services/dummyCart";
import CartItem from "../../components/CartItem";
import { connect } from 'react-redux';


const CartProducts = (props: any) => {
	// const cartItems = dummyCart;
	const { 
		cart: { cartItems }
	} = props;

	return (
		<div className="p__container">
			<div className="card card-body border-0">
				{
					cartItems.map((product: any) => <CartItem key={product.id} product={product}/> )
				}
			</div>
		</div>
	)
}

const mapStateToProps = (state: any) => {
	return ({
		cart: state.cart
	})
}

export default connect(mapStateToProps)(CartProducts);