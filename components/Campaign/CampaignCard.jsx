import { Button } from "reactstrap";

const ProductCard = ({ item, onClick }) => {

	return (
		<div className="card h-100">
			<img
				src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
				className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
			</div>
			<div className="card-footer">
				<small className="text-muted">Last updated 3 mins ago</small>
			</div>
		</div>
	);
}

export default ProductCard;