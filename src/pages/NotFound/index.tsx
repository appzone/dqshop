import React from "react";
import Layout from "../../components/Layout";

class NotFound extends React.Component {
	render() {
		return (
			<Layout title="DQSHOP - Store Page" description="This is dqshop store page">
				<div>
					<div className="text-center mt-5">
						<h1>404 Page</h1>
						<p>This is 404 Page.</p>
					</div>
				</div>
			</Layout>
		)
	}
}

export default NotFound;