import React from 'react';
import { Microscope, Eye, ArrowRight, CheckCircle } from 'lucide-react';

interface ProductsProps {
  onProductSelect: (productId: number) => void;
}

const Products: React.FC<ProductsProps> = ({ onProductSelect }) => {
  const products = [
    {
      id: 1,
      name: 'Multitome Maker',
      tagline: 'Advanced precision needle bending',
      description: 'Revolutionary multi-spectral tomography device that provides unprecedented detail in retinal imaging. Our Multitome Maker combines multiple imaging modalities to deliver comprehensive eye health assessments.',
      image: 'img6.png',
      video: 'Media1.mp4',
      features: [
        'High-resolution retinal imaging',
        'Multi-spectral analysis capabilities',
        'AI-powered diagnostic assistance',
        'Real-time image processing'
      ],
      icon: <Microscope className="h-8 w-8" />
    },
    {
      id: 2,
      name: 'Eyelead',
      tagline: 'Smart Eye Tracking System',
      description: 'Next-generation eye tracking technology that monitors eye movements and patterns for early detection of neurological conditions. Eyelead provides precise, non-invasive monitoring for better patient outcomes.',
      image: 'https://images.pexels.com/photos/5752243/pexels-photo-5752243.jpeg?auto=compress&cs=tinysrgb&w=800',
      video: 'https://videos.pexels.com/video-files/7089020/7089020-uhd_2560_1440_25fps.mp4',
      features: [
        'Precise eye movement tracking',
        'Neurological condition detection',
        'Non-invasive monitoring',
        'Advanced pattern recognition'
      ],
      icon: <Eye className="h-8 w-8" />
    }
  ];

  const [hoveredProduct, setHoveredProduct] = React.useState<number | null>(null);

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cutting-edge eyecare solutions designed to transform how we diagnose, 
            monitor, and treat vision-related conditions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 ${
              index % 2 === 0 ? 'lg:transform lg:hover:scale-105' : 'lg:transform lg:hover:scale-105'
              }`}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className="aspect-video overflow-hidden">
                {hoveredProduct === product.id ? (
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src={product.video} type="video/mp4" />
                  </video>
                ) : (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                )}
              </div>
              
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <div className="text-blue-600">
                      {product.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{product.name}</h3>
                    <p className="text-blue-600 font-medium">{product.tagline}</p>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {product.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button 
                  onClick={() => onProductSelect(product.id)}
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center group"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;