import { Link, useParams, useSearchParams } from 'react-router-dom';
import { products } from '../data/products';

function ProductDetail() {
	const { id } = useParams();
	const [searchParams] = useSearchParams();
	const product = products.find((item) => item.id === Number(id));
	const query = searchParams.toString();
	const productListPath = `/products${query ? `?${query}` : ''}`;

	if (!product) {
		return (
			<section>
				<h1>Product not found</h1>
				<Link to={productListPath}>Back to products</Link>
			</section>
		);
	}

	return (
		<section>
			<h1>{product.name}</h1>
			<p>Category: {product.category}</p>
			<p>{product.description}</p>
			<p>Price: {product.price.toLocaleString()} VND</p>
			<Link to={productListPath}>Back to products</Link>
		</section>
	);
}

export default ProductDetail;
