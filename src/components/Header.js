import { Link } from 'react-router-dom';

function Header() {
	return (
		<header className="site-header">
			<nav aria-label="Main navigation">
				<Link to="/">Home</Link>
				<Link to="/products">Products</Link>
			</nav>
		</header>
	);
}

export default Header;
