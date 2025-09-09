import React from 'react';
import { Target, Lightbulb, Stethoscope, Code2 } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Dr. Nishwant B',
      role: 'MBBS, Resident Ophthalmologist',
      type: 'doctor',
      image: 'img1.jpg',
      expertise: 'Ophthalmology',
    },
    {
      id: 2,
      name: 'Dr. Priyankaa K',
      role: 'MBBS, Resident Ophthalmologist',
      type: 'doctor',
      image: 'img2.jpg',
      expertise: 'Ophthalmology',
    },
    {
      id: 3,
      name: 'Ujjawal Kumar',
      role: 'Mechanical Engineer',
      type: 'engineer',
      image: 'img4.jpg',
      expertise: 'Structural Design',
    },
    {
      id: 4,
      name: 'Divyanshu Ranjan',
      role: 'Computer science Engineer',
      type: 'engineer',
      image: 'img5.png',
      expertise: 'Ai/ML Development',
    },
    {
      id: 5,
      name: 'Raamachandiran A P',
      role: 'Mechanical Engineer',
      type: 'engineer',
      image: 'img3.jpg',
      expertise: 'Prototyping & Testing',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're a team of passionate innovators dedicated to advancing eyecare through technology
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <Target className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To revolutionize eyecare by developing innovative, accessible, and precise diagnostic 
              tools that empower healthcare professionals to provide better patient outcomes and 
              improve quality of life for people worldwide.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <Lightbulb className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To become the global leader in eyecare technology innovation, creating a future where 
              early detection and prevention of eye conditions is universally accessible, accurate, 
              and transformative for global health.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-4">Our Team</h3>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Meet the experts behind Eyenex - a unique blend of medical professionals and 
            engineering talent working together to advance eyecare technology
          </p>

          {/* Medical Mentors */}
          <div className="mb-12">
            <h4 className="text-xl font-semibold text-gray-800 mb-6 flex items-center justify-center">
              <Stethoscope className="h-5 w-5 mr-2 text-blue-600" />
              Medical Mentors
            </h4>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {teamMembers.filter(member => member.type === 'doctor').map((member) => (
                <div key={member.id} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 text-center group">
                  <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full ring-4 ring-blue-100 group-hover:ring-blue-200 transition-all duration-200">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                    />
                  </div>
                  <h5 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h5>
                  <p className="text-blue-600 font-medium mb-1">{member.role}</p>
                  <p className="text-sm text-gray-500">{member.expertise}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Engineering Team */}
          <div>
            <h4 className="text-xl font-semibold text-gray-800 mb-6 flex items-center justify-center">
              <Code2 className="h-5 w-5 mr-2 text-blue-600" />
              Engineering Team
            </h4>
            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.filter(member => member.type === 'engineer').map((member) => (
                <div key={member.id} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 text-center group">
                  <div className="w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full ring-4 ring-green-100 group-hover:ring-green-200 transition-all duration-200">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                    />
                  </div>
                  <h5 className="text-lg font-bold text-gray-900 mb-2">{member.name}</h5>
                  <p className="text-green-600 font-medium mb-1">{member.role}</p>
                  <p className="text-sm text-gray-500">{member.expertise}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;