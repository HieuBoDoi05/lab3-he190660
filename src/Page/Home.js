import { Link } from 'react-router-dom';

function Home() {
	return (
		<section>
			<h1>Home</h1>
			<p>Browse our products.</p>
			<Link to="/products">View products</Link>
		</section>
	);
}

export default Home;
