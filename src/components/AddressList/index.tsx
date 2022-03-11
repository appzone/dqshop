import React, { useEffect } from 'react';
import { getAddress, addAddress } from "../../actions";
import { connect } from "react-redux";
import AddressItem from "../AddressItem";
import { useFormik } from 'formik';


const initialValues = {
	addressLine1: "",
	namaPenerima: '.',
	primaryAddress: true,
	kodePos: '.',
	city : { code: 'JKT', name: 'Jakarta' }
}

const AddressList = (props: any) => {
	const { 
		getAddress,
		addAddress,
		cart: {
			address,
			isLoading,
			error
		}
	} = props;

	useEffect(() => {
		getAddress()
	}, [])



	const formik = useFormik({
		initialValues,
		onSubmit: (values: any) => {
			console.log('values on submit', values);
			addAddress(values);
		}
	})

	return(
		<>		
			Address List
		
			{
				isLoading 
				? <div>Loading</div> 
				: <div className="row no-gutters justify-content-center">
					<div className="col-sm-9 p-3" >
					{
						address.map((addr: any) => (
							<AddressItem key={addr.id} address={addr} />
						))
					}
					</div>
				</div>
			}
	
			<hr/>
			<div className="row no-gutters justify-content-center">
				<form 
					id="addAddress" 
					onSubmit={formik.handleSubmit}	
				>
					<div className="col-sm-9">
						<div className="row">
							<div className="col-sm-6">
								<label>Add address : </label>
							</div>
							<div className="col-sm-6">
								<input type="text" {...formik.getFieldProps("addressLine1")} />
							</div>
						</div>
						<div>
							<button type="submit" className="btn btn-primary mb-2">SAVE</button>
						</div>
					</div>

				</form>
			</div>
		</>
	)
}

const mapStateToProps = (state : any) => {
	return ({
		cart: state.cart
	})
}


export default connect(mapStateToProps, { getAddress, addAddress } )(AddressList)