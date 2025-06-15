
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { MapPin, Phone, Mail, Clock, MessageCircle, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      inquiryType: '',
      message: ''
    });

    setIsSubmitting(false);
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = '+923001234567';
    const message = 'Hello! I would like to get more information about Jhang Polytechnic Institute.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: ['Main Campus, Jhang', 'Punjab, Pakistan'],
      color: 'text-red-500'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+92-47-1234567', '+92-300-1234567'],
      color: 'text-green-500'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@jhangpolytechnic.edu.pk', 'admissions@jhangpolytechnic.edu.pk'],
      color: 'text-blue-500'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: ['Monday - Friday: 9:00 AM - 5:00 PM', 'Saturday: 9:00 AM - 2:00 PM'],
      color: 'text-purple-500'
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Contact Us</h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with us for any questions about our courses, admissions, or general inquiries. 
            We're here to help you start your journey to success.
          </p>
        </div>

        {/* Contact Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <Card key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader>
                <div className={`${info.color} w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-gray-50 rounded-full`}>
                  <info.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg">{info.title}</CardTitle>
              </CardHeader>
              <CardContent>
                {info.details.map((detail, i) => (
                  <p key={i} className="text-gray-600 text-sm mb-1">{detail}</p>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card>
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
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <Label htmlFor="inquiryType">Inquiry Type *</Label>
                      <Select value={formData.inquiryType} onValueChange={(value) => handleInputChange('inquiryType', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Information</SelectItem>
                          <SelectItem value="admission">Admission Inquiry</SelectItem>
                          <SelectItem value="courses">Course Information</SelectItem>
                          <SelectItem value="fees">Fee Structure</SelectItem>
                          <SelectItem value="career">Career Guidance</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Tell us how we can help you..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending Message...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Quick Contact Options */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Button
                variant="outline"
                size="lg"
                onClick={handleWhatsAppClick}
                className="bg-green-50 border-green-200 text-green-700 hover:bg-green-100 w-full"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                WhatsApp Us
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100 w-full"
              >
                <a href="tel:+92471234567">
                  <Phone className="h-5 w-5 mr-2" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>

          {/* Map and Additional Info */}
          <div className="space-y-6">
            {/* Map Placeholder */}
            <Card>
              <CardHeader>
                <CardTitle>Our Location</CardTitle>
                <CardDescription>Visit our campus in Jhang, Punjab</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <MapPin className="h-16 w-16 mx-auto mb-4" />
                    <p className="font-medium">Interactive Map</p>
                    <p className="text-sm">Jhang Polytechnic Institute</p>
                    <p className="text-sm">Main Campus, Jhang, Punjab</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Campus Information */}
            <Card>
              <CardHeader>
                <CardTitle>Campus Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Main Campus</h4>
                  <p className="text-sm text-blue-700 mb-2">
                    Our main campus is located in the heart of Jhang city, easily accessible by public transport.
                  </p>
                  <p className="text-sm text-blue-700">
                    <strong>Facilities:</strong> Modern labs, library, cafeteria, parking
                  </p>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Transportation</h4>
                  <p className="text-sm text-green-700">
                    Well-connected location with easy access to public transportation. 
                    Free parking available for students and visitors.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card>
              <CardHeader>
                <CardTitle>Connect With Us</CardTitle>
                <CardDescription>Follow us on social media for updates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  <a href="#" className="bg-blue-50 p-3 rounded-full text-blue-600 hover:bg-blue-100 transition-colors">
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a href="#" className="bg-pink-50 p-3 rounded-full text-pink-600 hover:bg-pink-100 transition-colors">
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a href="#" className="bg-blue-50 p-3 rounded-full text-blue-700 hover:bg-blue-100 transition-colors">
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a href="#" className="bg-sky-50 p-3 rounded-full text-sky-600 hover:bg-sky-100 transition-colors">
                    <Twitter className="h-6 w-6" />
                  </a>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  Stay updated with the latest news, course announcements, and student achievements.
                </p>
              </CardContent>
            </Card>

            {/* FAQ */}
            <Card>
              <CardHeader>
                <CardTitle>Frequently Asked</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">What are your office hours?</h4>
                  <p className="text-sm text-gray-600">Monday to Friday: 9:00 AM - 5:00 PM, Saturday: 9:00 AM - 2:00 PM</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">How quickly do you respond?</h4>
                  <p className="text-sm text-gray-600">We typically respond to inquiries within 24 hours during business days.</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Can I visit the campus?</h4>
                  <p className="text-sm text-gray-600">Yes! Campus visits are welcome. Please call ahead to schedule a tour.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
