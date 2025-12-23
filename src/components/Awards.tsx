import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Award, Trophy, Star, Medal } from 'lucide-react';

const Awards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const awards = [
    {
      id: 1,
      title: 'Emerging Entrepreneur Award',
      organization: 'Vellore Institute of Technology',
      image: 'img15.jpg',
      description: 'Recognized for fostering innovation and entrepreneurship'
    },
    {
      id: 2,
      title: 'Makeathon Winner',
      organization: 'Vellore Institute of Technology',
      image: 'img16.jpg',
      description: 'Outstanding innovation in medical device development'
    },
    {
      id: 3,
      title: 'ACEi Hack Award',
      organization: 'Aravind Eye Care System',
      image: 'img17.jpg',
      description: 'Excellence in digital health transformation'
    },
    {
      id: 4,
      title: 'GSEA Kerala State Finalist',
      organization: 'Kerala Startup Mission',
      image: 'img18.jpg',
      description: 'exceptional startup growth and potential'
    },
    {
      id: 5,
      title: 'LVPEI Startup Award',
      organization: 'L V Prasad Eye Institute',
      image: 'img20.jpg',
      description: 'Innovative solutions in eye care technology'
    },
    {
      id: 6,
      title: 'BIS Speaker',
      organization: 'Bureau of Indian Standards',
      image: 'img21.jpg',
      description: 'Speaker on medical device standardization'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === awards.length - 3 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? awards.length - 3 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Awards & Recognition
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our commitment to innovation and excellence has been recognized by leading organizations
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>

          {/* Awards Carousel */}
          <div className="overflow-hidden mx-12">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 33.333}%)` }}
            >
              {awards.map((award) => (
                <div key={award.id} className="w-1/3 flex-shrink-0 px-4">
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={award.image}
                        alt={award.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center mb-3">
                        <div className="bg-yellow-100 p-2 rounded-lg mr-3">
                          <Trophy className="h-5 w-5 text-yellow-600" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900">{award.title}</h3>
                          <p className="text-sm text-blue-600 font-medium">{award.organization}</p>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm">{award.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: awards.length - 2 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentIndex === index ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Recognition Stats */}
        <div className="grid md:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">8+</h3>
            <p className="text-gray-600">Industry Awards</p>
          </div>
          
          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Trophy className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">3</h3>
            <p className="text-gray-600">Innovation Prizes</p>
          </div>
          
          <div className="text-center">
            <div className="bg-yellow-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Star className="h-8 w-8 text-yellow-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">100%</h3>
            <p className="text-gray-600">Commitment towards growth</p>
          </div>
          
          <div className="text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Medal className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">100%</h3>
            <p className="text-gray-600">Team involvement</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;