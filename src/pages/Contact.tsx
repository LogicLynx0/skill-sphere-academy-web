
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import FAQ from '@/components/FAQ';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactFAQs = [
    {
      question: 'What are your office hours?',
      answer: 'Our office is open Monday to Friday from 9:00 AM to 5:00 PM, and Saturday from 9:00 AM to 2:00 PM. We are closed on Sundays and public holidays.'
    },
    {
      question: 'How quickly will I receive a response to my inquiry?',
      answer: 'We aim to respond to all inquiries within 24 hours during business days. For urgent matters, you can call us directly at +92-47-1234567.'
    },
    {
      question: 'Can I visit the campus for a tour?',
      answer: 'Yes! Campus tours are available by appointment. Please contact us in advance to schedule your visit and ensure our staff can provide you with a comprehensive tour of our facilities.'
    },
    {
      question: 'Do you offer counseling sessions for course selection?',
      answer: 'Absolutely! Our academic counselors are available to help you choose the right course based on your interests, career goals, and educational background. Schedule a counseling session through our contact form.'
    },
    {
      question: 'Is financial assistance available?',
      answer: 'We offer various payment plans and installment options to make education more accessible. Contact our admissions office to discuss available financial assistance programs.'
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 gradient-text">Contact Us</h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto zoom-in">
            Get in touch with us for any questions about our courses, admissions, or to schedule a campus visit.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className="animate-fade-in">
            <Card className="card-hover hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Enter your full name"
                        className="hover-glow focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="Enter your email"
                        className="hover-glow focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="Enter your phone number"
                        className="hover-glow focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-2">
                        Inquiry Type
                      </label>
                      <Select value={formData.inquiryType} onValueChange={(value) => handleInputChange('inquiryType', value)}>
                        <SelectTrigger className="hover-glow focus:ring-2 focus:ring-primary">
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="courses">Course Information</SelectItem>
                          <SelectItem value="admissions">Admissions</SelectItem>
                          <SelectItem value="campus-tour">Campus Tour</SelectItem>
                          <SelectItem value="financial">Financial Assistance</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Tell us more about your inquiry..."
                      className="hover-glow focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full hover-glow transition-all duration-300">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Card className="card-hover hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl">Get in Touch</CardTitle>
                <CardDescription>
                  Multiple ways to reach us. We're here to help!
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4 group card-hover p-3 rounded-lg transition-all duration-300 hover:bg-primary/5">
                  <div className="bg-primary/10 p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="h-6 w-6 text-primary icon-bounce" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300">Address</h3>
                    <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">Main Campus, Jhang, Punjab, Pakistan</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group card-hover p-3 rounded-lg transition-all duration-300 hover:bg-primary/5">
                  <div className="bg-primary/10 p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <Phone className="h-6 w-6 text-primary icon-bounce" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300">Phone</h3>
                    <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">+92-47-1234567</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group card-hover p-3 rounded-lg transition-all duration-300 hover:bg-primary/5">
                  <div className="bg-primary/10 p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <Mail className="h-6 w-6 text-primary icon-bounce" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300">Email</h3>
                    <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">info@jhangpolytechnic.edu.pk</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group card-hover p-3 rounded-lg transition-all duration-300 hover:bg-primary/5">
                  <div className="bg-primary/10 p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <Clock className="h-6 w-6 text-primary icon-bounce" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300">Office Hours</h3>
                    <div className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                      <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                      <p>Saturday: 9:00 AM - 2:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card className="card-hover hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <MapPin className="h-16 w-16 mx-auto mb-4 icon-bounce" />
                    <p className="text-lg font-medium">Campus Location</p>
                    <p className="text-sm">Interactive map coming soon</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <FAQ 
          title="Frequently Asked Questions"
          subtitle="Quick answers to common questions about contacting us"
          faqs={contactFAQs}
        />
      </div>
    </div>
  );
};

export default Contact;
