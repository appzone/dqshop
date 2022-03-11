import React, { useEffect } from "react";
import './index.css';
// import { dummyProducts } from "../../services/dummy";
import { useProducts } from "../../hooks/useProducts";

import ProductItem from "../ProductItem";
import { connect} from "react-redux";
import { getAllProducts } from "../../actions";


const ProductGrid = (props: any) => {
	
	// const products = dummyProducts;
	// const { products } = useProducts();

	const { products: { products}, getAllProducts } = props;
	
	useEffect(() => {
		getAllProducts();
	},[ ])

	return (
		<div className='p__container'>
			<div className="row">
				<div className="col-sm-8">
					<div className="py-3">
						{products.length} Products
					</div>
				</div>
				<div className="col-sm-4">
					<div className="form-group">
						<input type="text" name="search" placeholder="Search product" className="form-control" id="search" />
					</div>
				</div>
			</div>
			<div className="p__grid">
				{
					products.map((product: any) => (
						<ProductItem key={product.id} product={product} />
					))
				}
			</div>

		</div>

	)

}

const mapStateToProps = (state:any) => {
	return ({
		products: state.products
	})
}

export default connect(mapStateToProps, { getAllProducts })(ProductGrid)