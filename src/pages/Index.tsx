
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import CourseCard from '@/components/CourseCard';
import { getFeaturedCourses } from '@/data/courses';
import { Link } from 'react-router-dom';
import { GraduationCap, Users, Award, MapPin, ChevronRight, CheckCircle } from 'lucide-react';

const Index = () => {
  const featuredCourses = getFeaturedCourses();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Empowering Futures with 
              <span className="block text-yellow-300">Skill-Based Education</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100">
              Your pathway to professional success. Join thousands of students who have transformed their careers with our comprehensive technical and safety training programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-4">
                <Link to="/courses">Explore Courses</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 py-4 bg-transparent border-white text-white hover:bg-white hover:text-primary">
                <Link to="/admissions">Apply Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-in">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-8 w-8" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">25+</h3>
              <p className="text-gray-600">Years of Excellence</p>
            </div>
            <div className="text-center animate-fade-in">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">5000+</h3>
              <p className="text-gray-600">Successful Graduates</p>
            </div>
            <div className="text-center animate-fade-in">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">15+</h3>
              <p className="text-gray-600">Professional Courses</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Jhang Polytechnic Institute</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Established in 1998, Jhang Polytechnic Institute has been at the forefront of technical education in Punjab. 
                We began our journey with DAE programs and have evolved to become a leading institution for modern technical 
                and safety training.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Today, we focus on industry-relevant courses that prepare students for the digital economy and workplace safety standards. 
                Our commitment to quality education and practical training has made us a trusted name in skill development.
              </p>
              <Button asChild variant="outline" size="lg">
                <Link to="/about">Learn More About Us <ChevronRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
            <div className="animate-fade-in">
              <div className="bg-gradient-to-br from-primary/10 to-primary/20 rounded-lg p-8 h-80 flex items-center justify-center">
                <GraduationCap className="h-32 w-32 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Courses</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our most popular courses designed to meet industry demands and boost your career prospects.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredCourses.map((course, index) => (
              <div key={course.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CourseCard {...course} />
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Button asChild size="lg">
              <Link to="/courses">View All Courses <ChevronRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Experienced Faculty',
                description: 'Learn from industry professionals with years of practical experience.',
                icon: Users
              },
              {
                title: 'Modern Infrastructure',
                description: 'State-of-the-art labs and equipment for hands-on learning.',
                icon: Award
              },
              {
                title: 'Industry Partnerships',
                description: 'Strong connections with leading companies for internships and placements.',
                icon: CheckCircle
              },
              {
                title: 'Flexible Learning',
                description: 'Multiple batches and flexible schedules to suit your needs.',
                icon: GraduationCap
              },
              {
                title: 'Career Support',
                description: 'Comprehensive job placement assistance and career guidance.',
                icon: Users
              },
              {
                title: 'Affordable Fees',
                description: 'Quality education at competitive prices with installment options.',
                icon: Award
              }
            ].map((feature, index) => (
              <Card key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 hero-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of successful graduates and transform your career today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-4">
              <Link to="/admissions">Apply Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 py-4 bg-transparent border-white text-white hover:bg-white hover:text-primary">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Visit Our Campus</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <MapPin className="h-6 w-6 text-primary mr-3" />
                  <h3 className="text-xl font-semibold">Our Location</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Located in the heart of Jhang, our campus is easily accessible and equipped with modern facilities 
                  to provide the best learning environment for our students.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong>Address:</strong> Main Campus, Jhang, Punjab, Pakistan</p>
                  <p><strong>Phone:</strong> +92-47-1234567</p>
                  <p><strong>Email:</strong> info@jhangpolytechnic.edu.pk</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-200 rounded-lg h-80 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <MapPin className="h-16 w-16 mx-auto mb-4" />
                <p>Interactive Map</p>
                <p className="text-sm">Visit us at our Jhang campus</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
