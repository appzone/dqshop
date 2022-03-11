import React from "react";
import 'bootswatch/dist/lux/bootstrap.css';
import { Helmet } from 'react-helmet-async';
import Header from "../Header";
import Footer from "../Footer";

class Layout extends React.Component<{ title: string, description: string, children: any }> {
	render() {
		const { title, description, children } = this.props;
		
		return (
			<>
				<Helmet>
					<title> { title ? title : "Homepage" }</title>
					<meta name="description" content={description || "DQSHOP"} />
				</Helmet>
				<Header />
				<main className="container">
					{ children }
				</main>
				<Footer />
			</>
		)
	}
}

export default Layout;