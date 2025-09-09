import React from 'react';
import { ArrowLeft, CheckCircle, Star, Users, Calendar, Award, Microscope, Eye } from 'lucide-react';

interface ProductDetailProps {
  productId: number;
  onBack: () => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ productId, onBack }) => {
  const productData = {
    1: {
      name: 'Multitome Maker',
      tagline: 'Advanced Diagnostic Imaging',
      shortDescription: 'Revolutionary multi-spectral tomography device that provides unprecedented detail in retinal imaging.',
      fullDescription: 'The Multitome Maker represents a breakthrough in ophthalmic imaging technology. By combining multiple imaging modalities including OCT, fundus photography, and fluorescein angiography into a single, streamlined device, we provide healthcare professionals with comprehensive retinal analysis capabilities. Our proprietary AI algorithms analyze imaging data in real-time, offering diagnostic assistance and early detection of conditions such as diabetic retinopathy, macular degeneration, and glaucoma.',
      icon: <Microscope className="h-12 w-12" />,
      heroImage: 'img6.png',
      gallery: [
        'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/4021769/pexels-photo-4021769.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      features: [
        'High-resolution retinal imaging up to 2μm axial resolution',
        'Multi-spectral analysis with 7 different wavelengths',
        'AI-powered diagnostic assistance with 95% accuracy',
        'Real-time image processing and analysis',
        'Automated report generation',
        'DICOM compatibility for seamless integration',
        'Non-invasive patient examination',
        'Cloud-based data storage and analytics'
      ],
      specifications: [
        { label: 'Imaging Resolution', value: '2μm axial, 5μm lateral' },
        { label: 'Scan Speed', value: '100,000 A-scans per second' },
        { label: 'Wavelengths', value: '7 spectral bands (400-1000nm)' },
        { label: 'Patient Interface', value: 'Non-contact, automated alignment' },
        { label: 'Data Output', value: 'DICOM, PDF reports, raw data' },
        { label: 'Processing Time', value: '<30 seconds per scan' }
      ],
      benefits: [
        'Early detection of retinal diseases',
        'Improved diagnostic accuracy',
        'Reduced examination time',
        'Enhanced patient comfort',
        'Comprehensive documentation',
        'Streamlined workflow integration'
      ]
    },
    2: {
      name: 'Eyelead',
      tagline: 'Smart Eye Tracking System',
      shortDescription: 'Next-generation eye tracking technology that monitors eye movements and patterns for early detection of neurological conditions.',
      fullDescription: 'Eyelead is an advanced eye tracking system that goes beyond traditional gaze monitoring. Using sophisticated computer vision algorithms and machine learning, our system can detect subtle changes in eye movement patterns that may indicate early signs of neurological conditions such as Parkinson\'s disease, multiple sclerosis, and traumatic brain injury. The system provides precise, non-invasive monitoring that can be integrated into routine clinical examinations or used for ongoing patient monitoring.',
      icon: <Eye className="h-12 w-12" />,
      heroImage: 'img7.jpg',
      gallery: [
        'https://images.pexels.com/photos/8376277/pexels-photo-8376277.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/7089020/pexels-photo-7089020.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      features: [
        'Precise eye movement tracking at 1000Hz sampling rate',
        'Neurological condition detection algorithms',
        'Non-invasive monitoring with infrared technology',
        'Advanced pattern recognition and analysis',
        'Real-time data visualization',
        'Longitudinal tracking capabilities',
        'Integration with electronic health records',
        'Portable and clinic-friendly design'
      ],
      specifications: [
        { label: 'Tracking Accuracy', value: '0.1° visual angle' },
        { label: 'Sampling Rate', value: '1000Hz binocular tracking' },
        { label: 'Calibration', value: '9-point automatic calibration' },
        { label: 'Operating Distance', value: '50-80cm from screen' },
        { label: 'Data Export', value: 'CSV, JSON, DICOM formats' },
        { label: 'Setup Time', value: '<2 minutes per patient' }
      ],
      benefits: [
        'Early neurological condition detection',
        'Objective measurement of eye function',
        'Non-invasive patient assessment',
        'Quantitative progress monitoring',
        'Research-grade data collection',
        'Clinical workflow integration'
      ]
    }
  };

  const product = productData[productId as keyof typeof productData];

  if (!product) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Product not found</h2>
          <button
            onClick={onBack}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-50 to-white pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={onBack}
            className="flex items-center text-blue-600 hover:text-blue-700 font-medium mb-8 transition-colors group"
          >
            <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Products
          </button>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-4 rounded-xl mr-4">
                  <div className="text-blue-600">
                    {product.icon}
                  </div>
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900">{product.name}</h1>
                  <p className="text-xl text-blue-600 font-medium mt-2">{product.tagline}</p>
                </div>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {product.fullDescription}
              </p>
              <div className="flex items-center space-x-6 text-sm text-gray-500">
                <div className="flex items-center">
                  <Award className="h-5 w-5 mr-2 text-blue-600" />
                  <span>FDA Approved</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-2 text-blue-600" />
                  <span>Clinical Tested</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 mr-2 text-blue-600" />
                  <span>Award Winning</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src={product.heroImage}
                alt={product.name}
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {product.features.map((feature, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-colors">
                <CheckCircle className="h-6 w-6 text-green-500 mb-3" />
                <p className="text-gray-700 font-medium">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Product Gallery</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {product.gallery.map((image, index) => (
              <div key={index} className="aspect-video overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <img
                  src={image}
                  alt={`${product.name} view ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Technical Specifications</h2>
              <div className="space-y-4">
                {product.specifications.map((spec, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-700">{spec.label}</span>
                    <span className="text-gray-900 font-semibold">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Clinical Benefits</h2>
              <div className="space-y-4">
                {product.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Practice?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact us to learn more about {product.name} and how it can enhance your eyecare capabilities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              Request Demo
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Download Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;