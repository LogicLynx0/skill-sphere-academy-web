
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { getAvailableCourses } from '@/data/courses';
import { GraduationCap, FileText, Clock, CheckCircle, Users, Award } from 'lucide-react';

const Admissions = () => {
  const { toast } = useToast();
  const availableCourses = getAvailableCourses();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    category: '',
    education: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleCourseChange = (courseId: string) => {
    const course = availableCourses.find(c => c.id === courseId);
    setFormData(prev => ({
      ...prev,
      course: courseId,
      category: course?.category || ''
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Application Submitted Successfully!",
      description: "We will contact you within 24 hours to discuss your admission.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      course: '',
      category: '',
      education: '',
      message: ''
    });

    setIsSubmitting(false);
  };

  const admissionSteps = [
    {
      step: 1,
      title: 'Submit Application',
      description: 'Fill out the admission form with your details and course preference.',
      icon: FileText
    },
    {
      step: 2,
      title: 'Document Verification',
      description: 'Submit required documents for verification and eligibility assessment.',
      icon: CheckCircle
    },
    {
      step: 3,
      title: 'Counseling Session',
      description: 'Attend a counseling session to finalize course selection and schedule.',
      icon: Users
    },
    {
      step: 4,
      title: 'Enrollment Confirmation',
      description: 'Complete fee payment and receive your enrollment confirmation.',
      icon: Award
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Admissions</h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Start your journey towards a successful career. Apply now for our industry-relevant courses 
            and join thousands of successful graduates.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-primary text-white p-6 rounded-lg text-center">
            <GraduationCap className="h-8 w-8 mx-auto mb-2" />
            <h3 className="text-2xl font-bold">{availableCourses.length}</h3>
            <p className="text-sm opacity-90">Available Courses</p>
          </div>
          <div className="bg-green-500 text-white p-6 rounded-lg text-center">
            <Users className="h-8 w-8 mx-auto mb-2" />
            <h3 className="text-2xl font-bold">95%</h3>
            <p className="text-sm opacity-90">Job Placement Rate</p>
          </div>
          <div className="bg-blue-500 text-white p-6 rounded-lg text-center">
            <Clock className="h-8 w-8 mx-auto mb-2" />
            <h3 className="text-2xl font-bold">24hrs</h3>
            <p className="text-sm opacity-90">Application Response</p>
          </div>
          <div className="bg-purple-500 text-white p-6 rounded-lg text-center">
            <Award className="h-8 w-8 mx-auto mb-2" />
            <h3 className="text-2xl font-bold">100%</h3>
            <p className="text-sm opacity-90">Practical Training</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Application Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Application Form</CardTitle>
                <CardDescription>
                  Fill out this form to apply for admission. We'll contact you within 24 hours.
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
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="education">Educational Background *</Label>
                      <Select value={formData.education} onValueChange={(value) => handleInputChange('education', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your education level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="matriculation">Matriculation</SelectItem>
                          <SelectItem value="intermediate">Intermediate</SelectItem>
                          <SelectItem value="bachelor">Bachelor's Degree</SelectItem>
                          <SelectItem value="master">Master's Degree</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="course">Select Course *</Label>
                    <Select value={formData.course} onValueChange={handleCourseChange}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose a course" />
                      </SelectTrigger>
                      <SelectContent>
                        {availableCourses.map((course) => (
                          <SelectItem key={course.id} value={course.id}>
                            {course.title} ({course.category}) - {course.duration}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Additional Message</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Any additional information or questions?"
                      rows={4}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Admission Process */}
          <div>
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-2xl">Admission Process</CardTitle>
                <CardDescription>
                  Follow these simple steps to complete your admission
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {admissionSteps.map((step, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1">{step.title}</h3>
                        <p className="text-gray-600 text-sm">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Required Documents */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Required Documents</CardTitle>
                <CardDescription>Please prepare these documents for admission</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {[
                    'Educational certificates (matriculation/intermediate)',
                    'CNIC copy (front and back)',
                    'Recent passport-size photographs (2 copies)',
                    'Character certificate from previous institution',
                    'Medical certificate (if required for specific courses)'
                  ].map((doc, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{doc}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
                <CardDescription>Contact our admission office for assistance</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm"><strong>Phone:</strong> +92-47-1234567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm"><strong>Email:</strong> admissions@jhangpolytechnic.edu.pk</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm"><strong>Office Hours:</strong> Mon-Fri, 9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm"><strong>Address:</strong> Jhang, Punjab, Pakistan</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Financial Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Affordable Fee Structure</h4>
                <p className="text-sm text-green-700">
                  We offer competitive pricing with flexible payment plans and installment options.
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Scholarships Available</h4>
                <p className="text-sm text-blue-700">
                  Merit-based scholarships and financial assistance programs for deserving students.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>What's Next?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-2">Quick Response</h4>
                <p className="text-sm text-purple-700">
                  Our admission team will contact you within 24 hours of your application.
                </p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-semibold text-orange-800 mb-2">Start Classes</h4>
                <p className="text-sm text-orange-700">
                  Multiple intake sessions throughout the year. Start as soon as next week!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Admissions;
