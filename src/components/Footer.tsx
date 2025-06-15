
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Institute Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
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
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/courses" className="text-gray-400 hover:text-white transition-colors">Courses</Link></li>
              <li><Link to="/admissions" className="text-gray-400 hover:text-white transition-colors">Admissions</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Course Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Course Categories</h4>
            <ul className="space-y-2">
              <li><span className="text-gray-400">Tech Courses</span></li>
              <li><span className="text-gray-400">Safety Courses</span></li>
              <li><span className="text-gray-500">Government Courses*</span></li>
            </ul>
            <p className="text-xs text-gray-500 mt-2">*Currently unavailable</p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm text-gray-400">Jhang, Punjab, Pakistan</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <p className="text-sm text-gray-400">+92-47-1234567</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <p className="text-sm text-gray-400">info@jhangpolytechnic.edu.pk</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="flex space-x-4 mb-4 sm:mb-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
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
              <span>PSDA</span>
              <span>TEVTA</span>
              <span>PSDF</span>
              <span>NAVTCC</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
