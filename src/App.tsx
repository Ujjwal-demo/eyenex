import React from 'react';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import About from './components/About';
import Contact from './components/Contact';
import ProductDetail from './components/ProductDetail';

function App() {
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

  if (selectedProduct) {
    return (
      <div className="min-h-screen bg-white">
        <ProductDetail 
          productId={selectedProduct} 
          onBack={() => setSelectedProduct(null)} 
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Products onProductSelect={setSelectedProduct} />
        <About />
        <Contact />
      </main>
    </div>
  );
}

export default App;