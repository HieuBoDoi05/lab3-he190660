import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { products } from '../data/products';
import SearchBar from '../components/SearchBar';

function ProductList() {
	const [searchParams, setSearchParams] = useSearchParams();
	const [searchInput, setSearchInput] = useState(searchParams.get('search') || '');
	const searchTerm = (searchParams.get('search') || '').trim().toLocaleLowerCase();
	const filteredProducts = products.filter((product) =>
		product.name.toLocaleLowerCase().includes(searchTerm)
	);

	useEffect(() => {
		setSearchInput(searchParams.get('search') || '');
	}, [searchParams]);

	function handleSearch(event) {
		event.preventDefault();
		const nextParams = new URLSearchParams(searchParams);
		const keyword = searchInput.trim();

		if (keyword) {
			nextParams.set('search', keyword);
		} else {
			nextParams.delete('search');
		}

		setSearchParams(nextParams);
	}

	const query = searchParams.toString();

	return (
		<section>
			<h1>Products</h1>
			<SearchBar
				value={searchInput}
				onChange={(event) => setSearchInput(event.target.value)}
				onSubmit={handleSearch}
			/>
			{filteredProducts.length === 0 ? (
				<p>No products found.</p>
			) : (
				<table>
					<thead>
						<tr>
							<th scope="col">Name</th>
							<th scope="col">Category</th>
							<th scope="col">Price</th>
							<th scope="col">Details</th>
						</tr>
					</thead>
					<tbody>
						{filteredProducts.map((product) => (
							<tr key={product.id}>
								<td>{product.name}</td>
								<td>{product.category}</td>
								<td>{product.price.toLocaleString()} VND</td>
								<td>
									<Link to={`/products/${product.id}${query ? `?${query}` : ''}`}>
										View Detail
									</Link>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			)}
		</section>
	);
}

export default ProductList;
