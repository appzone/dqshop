import React from "react";
import { formatCurrency  } from "../../helpers/utils";
import { useCart } from "../../hooks/useCart";


import { connect } from 'react-redux';
import { addToCart, addMore } from "../../actions"; 

const ProductItem = (props: any) => {

	// const { addProduct } = useCart();
	const { product, addToCart, addMore, cart } = props;

	const isInCart = (product:any) => {
		return !!cart.cartItems.find((item: any) => item.id === product.id);
	}

	return (
		<div className="card card-body">
			<img style={{display: "block", margin: "0 auto 10px", maxHeight: "200px"}} className="img-fluid" src={product.photo} alt="photo"/>
			<p>{product.name}</p>
			<h3 className="text-left">{formatCurrency(product.price)}</h3>
			<div className="text-right">
				{
					isInCart(product) &&
					<button 
						onClick={() => addMore(product)}
						className="btn btn-primary btn-sm">Add more</button>
				}

				{
					!isInCart(product) &&
					<button 
						onClick={() => addToCart(product)}
						className="btn btn-primary btn-sm">Add to cart</button>
				}
			</div>
		</div>
	)
}

const mapStateToProps = (state : any) => {
	return ({
		cart: state.cart,
	})
}

export default connect(mapStateToProps, { addToCart, addMore })(ProductItem);