function SearchBar({ value, onChange, onSubmit }) {
	return (
		<form onSubmit={onSubmit}>
			<label htmlFor="product-search">Search Product:</label>{' '}
			<input
				id="product-search"
				name="search"
				type="search"
				value={value}
				onChange={onChange}
			/>{' '}
			<button type="submit">Search</button>
		</form>
	);
}

export default SearchBar;
