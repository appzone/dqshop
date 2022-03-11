import React from "react";
import Layout from "../../components/Layout";

class About extends React.Component {
	render() {
		return (
			<Layout title="DQSHOP - About Page" description="This is dqshop about page">
				<div>
					<div className="text-center mt-5">
						<h1>About</h1>
						<p>This is about page</p>
					</div>
				</div>
			</Layout>
		)
	}
}

export default About;