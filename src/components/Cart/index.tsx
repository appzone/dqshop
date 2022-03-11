import React from "react";
import { dummyCart } from "../../services/dummyCart";
import CartProducts from "../../components/CartProducts"
import { formatCurrency } from "../../helpers/utils";

import { connect } from 'react-redux';
import { emptyCart } from '../../actions';
import { useHistory } from "react-router-dom";

const CartComponent = (props: any) => {
	// const cartItems = dummyCart;
	const history = useHistory()
	const { 
		cart: { cartItems, itemCount, total },
		emptyCart
	} = props

	const handleCheckout = () => {
		history.push('/payment')
	}
	
	return (
		<>
			<div className="row no-gutters justify-content-center">
				<div className="col-sm-9 p-3">
					{
						cartItems.length > 0 ?
						<CartProducts /> :
						<div className="p-3 text-center text-muted">
							Your cart is empty
						</div>
					}
				</div>
				{
					cartItems.length > 0 &&
					<div className="col-sm-3 p-3">
						<div className="card card-body">
							<p className="mb-1">Total Items</p>
							<h4 className="mb-3 txt-right">{itemCount}</h4>
							<p className="mb-1">Total Payment</p>
							<h3 className="mb-0 txt-right">{formatCurrency(total)}</h3>
							<hr className="my-4"/>
							<div className="text-center">
								<button type="button" className="btn btn-primary mb-2" onClick={()=> handleCheckout()}>CHECKOUT</button>
								<button 
									onClick={() => emptyCart()}
									type="button" className="btn btn-outlineprimary btn-sm">
									CLEAR
								</button>
							</div>
						</div>
					</div>
				}
			</div>
		</>
	)
}

const mapStateToProps = (state: any) => {
	return ({
		cart: state.cart
	})
}

export default connect(mapStateToProps, { emptyCart })(CartComponent);