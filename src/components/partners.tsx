import React from 'react';

const Partners = () => {
  const partners = [
    {
      name: 'Microsoft for Startups',
      logo: 'img11.png',
      description: 'Technology Partner & Cloud Infrastructure'
    },
    {
      name: 'L V Prasad Eye Institute',
      logo: 'img12.png',
      description: 'Clinical Research & Medical Advisory'
    },
    {
      name: 'Aravind Eye Care System',
      logo: 'img14.jpg',
      description: 'Healthcare Partnership & Clinical Validation'
    },
    {
      name: 'VIT University',
      logo: 'img19.png',
      description: 'Research & Development Collaboration'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Partners
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Collaborating with leading institutions and organizations to advance eyecare innovation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 text-center group"
            >
              <div className="h-24 flex items-center justify-center mb-6">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-200"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{partner.name}</h3>
              <p className="text-sm text-gray-600">{partner.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-blue-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Backed by Industry Leaders
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our partnerships with renowned medical institutions, technology companies, and 
              research organizations validate our commitment to developing world-class eyecare solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;