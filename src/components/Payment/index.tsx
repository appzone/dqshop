import React from "react";
import { connect } from 'react-redux';
import { handleCheckout } from '../../actions'
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';

const initialValues = {
	bank: "BCA",
}


const PaymentComponent = (props: any) => {
		console.log('props payment', props);
		const { 
			cart: { cartItems, itemCount, total, checkout, transferDestination },
			emptyCart,
			handleCheckout
		} = props

		const formik = useFormik({
			initialValues,
			onSubmit: (values: any) => {
				console.log('values on submit', values);
				handleCheckout(values);
			}
		})

		return (
			<>
				{
					checkout 
					? <div className="p-3 text-center text-success">
						<p>Checkout is successful. Please pay to {transferDestination}</p> 
						<Link to="/">BUY MORE</Link>
					</div>
					: 	cartItems.length > 0 && 
					<>
						<form 
							id="addAddress" 
							onSubmit={formik.handleSubmit}	
						>
							<div className="row">
								<div className="col-sm-9">
									<div className="row">
										<div className="col-sm-10">Select bank</div>
										<div className="col-sm-2">
											<select
												name="color"
												value={formik.values.bank}
												onChange={(e) => formik.setFieldValue("bank", e.target.value)}
											>
												<option value="BCA" label="BCA" key="BCA" />
												<option value="MANDIRI" label="MANDIRI" key="MANDIRI" />

											</select>
										</div>
									</div>
								</div>
							</div>
							<div>
								<button type="button" className="btn btn-primary mb-2" onClick={() => handleCheckout()}>CHECKOUT</button>
							</div>
						</form>
					</>
				}
				
			</>
		)
}

const mapStateToProps = (state: any) => {
	return ({
		cart: state.cart
	})
}

export default connect(mapStateToProps, { handleCheckout })(PaymentComponent);