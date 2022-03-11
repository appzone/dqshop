import React from "react";
import Layout from "../../components/Layout";
import ProductGrid from "../../components/ProductGrid"
import { FormattedMessage, injectIntl } from 'react-intl'
const Store = () => {
	return (
		<Layout title="DQSHOP - Store Page" description="This is dqshop store page">
			<div>
				<div className="text-center mt-5">
					<h1>
						<FormattedMessage id="STORE.TITLE" defaultMessage="Not found" />
					</h1>
					<p>
						<FormattedMessage id="STORE.SUBTITLE" defaultMessage="Not found" />
					</p>
				</div>
				<ProductGrid />
			</div>
		</Layout>
	)
}

export default injectIntl(Store);