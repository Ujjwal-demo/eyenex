import React from 'react';
import { ArrowRight, Shield, Zap, Award } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-16 relative overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-blue-600/70"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-4xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="text-white animate-pulse">Eye</span>
            <span className="text-blue-300 animate-bounce inline-block">nex</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Innovating the Future of Eyecare Through Advanced Technology
          </p>
          <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto">
            We develop cutting-edge eyecare products that combine medical expertise with 
            advanced technology to improve vision health and patient outcomes worldwide.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200 flex items-center justify-center group shadow-lg"
            >
              Explore Products
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200"
            >
              Learn More
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:transform hover:scale-105">
              <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Medical Grade</h3>
              <p className="text-gray-600">All products meet the highest medical standards and safety requirements</p>
            </div>
            
            <div className="bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:transform hover:scale-105">
              <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Innovation First</h3>
              <p className="text-gray-600">Cutting-edge technology designed to revolutionize eyecare</p>
            </div>
            
            <div className="bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:transform hover:scale-105">
              <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Award className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Team</h3>
              <p className="text-gray-600">Backed by leading medical professionals and skilled engineers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;