import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './Page/Home';
import NotFound from './Page/NotFound';
import ProductDetail from './Page/ProductDetail';
import ProductList from './Page/ProductList';

function App() {
	return (
		<BrowserRouter>
			<Header />
			<main className="App">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/products" element={<ProductList />} />
					<Route path="/products/:id" element={<ProductDetail />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</main>
		</BrowserRouter>
	);
}

export default App;
