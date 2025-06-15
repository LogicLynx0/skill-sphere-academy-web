
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Institute Info */}
          <div className="space-y-4 animate-fade-in">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-xl">J</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">Jhang Polytechnic</h3>
                <p className="text-sm text-gray-400">Institute</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Empowering futures with skill-based education since 1998. Your pathway to professional success.
            </p>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors duration-300 hover:underline">About Us</Link></li>
              <li><Link to="/courses" className="text-gray-400 hover:text-white transition-colors duration-300 hover:underline">Courses</Link></li>
              <li><Link to="/admissions" className="text-gray-400 hover:text-white transition-colors duration-300 hover:underline">Admissions</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors duration-300 hover:underline">Contact</Link></li>
            </ul>
          </div>

          {/* Course Categories */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h4 className="text-lg font-semibold mb-4">Course Categories</h4>
            <ul className="space-y-2">
              <li><span className="text-gray-400 hover:text-green-400 transition-colors duration-300">Tech Courses</span></li>
              <li><span className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Safety Courses</span></li>
              <li><span className="text-gray-500">Government Courses*</span></li>
            </ul>
            <p className="text-xs text-gray-500 mt-2">*Currently unavailable</p>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 group cursor-pointer card-hover p-2 rounded transition-all duration-300 hover:bg-gray-800">
                <MapPin className="h-5 w-5 text-primary mt-0.5 group-hover:scale-110 transition-transform duration-300 icon-bounce" />
                <div>
                  <p className="text-sm text-gray-400 group-hover:text-white transition-colors duration-300">Jhang, Punjab, Pakistan</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 group cursor-pointer card-hover p-2 rounded transition-all duration-300 hover:bg-gray-800">
                <Phone className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-300 icon-bounce" />
                <p className="text-sm text-gray-400 group-hover:text-white transition-colors duration-300">+92-47-1234567</p>
              </div>
              <div className="flex items-center space-x-3 group cursor-pointer card-hover p-2 rounded transition-all duration-300 hover:bg-gray-800">
                <Mail className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-300 icon-bounce" />
                <p className="text-sm text-gray-400 group-hover:text-white transition-colors duration-300">info@jhangpolytechnic.edu.pk</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="flex space-x-4 mb-4 sm:mb-0">
              <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 icon-bounce">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 icon-bounce">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 icon-bounce">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 icon-bounce">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
            <p className="text-sm text-gray-400">
              © 2024 Jhang Polytechnic Institute. All rights reserved.
            </p>
          </div>

          {/* Affiliates */}
          <div className="mt-6 pt-6 border-t border-gray-800">
            <p className="text-sm text-gray-400 text-center mb-3">Affiliated with:</p>
            <div className="flex justify-center space-x-8 text-xs text-gray-500">
              <span className="hover:text-primary transition-colors duration-300 cursor-pointer">PSDA</span>
              <span className="hover:text-primary transition-colors duration-300 cursor-pointer">TEVTA</span>
              <span className="hover:text-primary transition-colors duration-300 cursor-pointer">PSDF</span>
              <span className="hover:text-primary transition-colors duration-300 cursor-pointer">NAVTCC</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
