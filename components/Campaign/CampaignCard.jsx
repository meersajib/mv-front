import { Button } from "reactstrap";

const ProductCard = ({ item, onClick }) => {
		
	const { title, description, price, image } = item;
	return (
		<div className="card h-100">
			<img
				src={image}
				className="card-img-top" alt={title} />
			<div className="card-body">
				<h5 className="card-title">{title}</h5>
				<p className="card-text">{description}</p>
			</div>
			<div className="card-footer p-0">
				<div class="d-grid">
					<button class="btn btn-outline-dark" type="button">ORDER NOW</button>
				</div>
			</div>
		</div>
	);
}

export default ProductCard;