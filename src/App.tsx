import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ProductList from './components/ProductList';
import CartPage from './pages/CartPage';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Layout>
  );
};

export default App;
