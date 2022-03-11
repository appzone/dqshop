import React from "react";
import Layout from "../../components/Layout";
import CartComponent from "../../components/Cart";


class Cart extends React.Component {
	render() {
		return (
			<Layout title="DQSHOP - Cart Page" description="This is dqshop cart page">
				<div>
					<div className="text-center mt-5">
						<h1>Cart</h1>
						<p>This is cart page</p>
					</div>
				</div>
				<CartComponent />
			</Layout>
		)
	}
}

export default Cart;