import React from "react";
import Layout from "../../components/Layout";
import PaymentComponent from "../../components/Payment";

class Payment extends React.Component {
	render() {
		return (
			<Layout title="DQSHOP - Payment Page" description="This is dqshop payment page">
				<div>
					<div className="text-center mt-5">
						<h1>Payment</h1>
						<p>This is payment page</p>
						<PaymentComponent />
					</div>
				</div>
			</Layout>
		)
	}
}

export default Payment;