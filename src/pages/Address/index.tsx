import React from "react";
import Layout from "../../components/Layout";
import AddressList from "../../components/AddressList";

class Address extends React.Component {
	render() {
		return (
			<Layout title="DQSHOP - Address Page" description="This is dqshop address page">
				<div>
					<div className="text-center mt-5">
						<h1>Address</h1>
						<p>This is address page</p>
						<AddressList />
					</div>
				</div>
			</Layout>
		)
	}
}

export default Address;