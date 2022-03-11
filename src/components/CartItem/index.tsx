import React from "react";
import { formatCurrency } from "../../helpers/utils";
import { PlusCircleIcon, MinusCircleIcon, TrashIcon } from "../../components/icons";

import { addMore, reduceQuantity, removeItem } from '../../actions';
import { connect } from 'react-redux';

const CartItem = (props: any ) => {
	const { product, addMore, reduceQuantity, removeItem } = props
	return (
		<div className="row no-gutters py-2">
			<div className="col-sm-2 p-2">
				<img 
					alt={product.name}
					style={{margin: "0px auto", maxHeight: "50px"}}
					src={product.photo} className="img-fluid d-block" />

			</div>
			<div className="col-sm-4 p-2">
				<h5 className="mb-1">{product.name}</h5>
				<p className="mb-1">Price: {formatCurrency(product.price)}</p>
			</div>
			<div className="col-sm-2 p-2 text-center">
				<p className="mb-0">Qty: {product.quantity}</p>
			</div>
			<div className="col-sm-4 p-2 text-right">
				<button 
					onClick={() => addMore(product)}
					className="btn btn-primary btn-sm mr-2 mb-1">
						<PlusCircleIcon width={"20px"} />
				</button>
				{
					product.quantity > 1 && 
					<button 
						onClick={() => reduceQuantity(product)}
						className="btn btn-danger btn-sm mr-2 mb-1">
						<MinusCircleIcon width={"20px"} />
					</button>
				}
				{
					product.quantity === 1 && 
					<button
						onClick={() => removeItem(product)} 
						className="btn btn-danger btn-sm mr-2 mb-1">
						<TrashIcon width={"20px"} />
					</button>
				}
			</div>
		</div>
	)
}
const mapStateToProps = (state : any) => {
	return ({
		cart: state.cart
	})
}

export default connect(mapStateToProps, { addMore, reduceQuantity, removeItem })(CartItem);