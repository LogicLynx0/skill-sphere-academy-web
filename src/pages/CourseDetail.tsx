
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { getCourseById, courses } from '@/data/courses';
import { Clock, Users, Award, CheckCircle, BookOpen, Target, ArrowLeft, ChevronRight } from 'lucide-react';
import CourseCard from '@/components/CourseCard';

const CourseDetail = () => {
  const { id } = useParams<{ id: string }>();
  const course = getCourseById(id || '');

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Course Not Found</h1>
          <p className="text-gray-600 mb-6">The course you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/courses">View All Courses</Link>
          </Button>
        </div>
      </div>
    );
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Tech':
        return 'bg-blue-100 text-blue-800';
      case 'Safety':
        return 'bg-green-100 text-green-800';
      case 'Government':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  // Get related courses (same category, excluding current course)
  const relatedCourses = courses
    .filter(c => c.category === course.category && c.id !== course.id && c.available)
    .slice(0, 3);

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-primary">Home</Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <Link to="/courses" className="hover:text-primary">Courses</Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <span className="text-gray-900">{course.title}</span>
        </div>

        {/* Back Button */}
        <Button variant="ghost" asChild className="mb-6">
          <Link to="/courses">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Courses
          </Link>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Course Header */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Badge className={getCategoryColor(course.category)}>{course.category}</Badge>
                {!course.available && <Badge variant="secondary">Currently Unavailable</Badge>}
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{course.title}</h1>
              <p className="text-xl text-gray-600">{course.description}</p>
            </div>

            {/* Course Image */}
            <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/20 rounded-lg mb-8 flex items-center justify-center">
              <Award className="h-24 w-24 text-primary" />
            </div>

            {/* Course Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                <Clock className="h-8 w-8 text-primary" />
                <div>
                  <p className="text-sm text-gray-600">Duration</p>
                  <p className="text-lg font-semibold">{course.duration}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                <Users className="h-8 w-8 text-primary" />
                <div>
                  <p className="text-sm text-gray-600">Students Enrolled</p>
                  <p className="text-lg font-semibold">{course.students}+</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                <Award className="h-8 w-8 text-primary" />
                <div>
                  <p className="text-sm text-gray-600">Certificate</p>
                  <p className="text-lg font-semibold">Professional</p>
                </div>
              </div>
            </div>

            {/* Course Description */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="h-5 w-5 mr-2" />
                  Course Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">{course.fullDescription}</p>
              </CardContent>
            </Card>

            {/* Course Modules */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="h-5 w-5 mr-2" />
                  Course Modules
                </CardTitle>
                <CardDescription>What you'll learn in this course</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {course.modules.map((module, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{module}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Requirements */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Requirements</CardTitle>
                <CardDescription>What you need to get started</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {course.requirements.map((requirement, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Course Benefits</CardTitle>
                <CardDescription>What you'll gain from this course</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {course.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Award className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Unavailable Notice */}
            {!course.available && (
              <Card className="border-yellow-200 bg-yellow-50">
                <CardHeader>
                  <CardTitle className="text-yellow-800">Course Currently Unavailable</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-yellow-700 mb-4">
                    This {course.category === 'Government' ? 'government' : ''} course is currently unavailable 
                    {course.category === 'Government' ? ' due to policy changes and pending approvals' : ''}.
                    {course.category === 'Government' && ' Government courses are offered periodically based on approvals.'}
                  </p>
                  <p className="text-yellow-700">
                    Please check our available courses or contact us for more information about when this course might become available again.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Enrollment Card */}
              <Card>
                <CardHeader>
                  <CardTitle>
                    {course.available ? 'Enroll Now' : 'Course Unavailable'}
                  </CardTitle>
                  <CardDescription>
                    {course.available 
                      ? 'Start your learning journey today' 
                      : 'This course is currently not available'
                    }
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {course.available ? (
                    <>
                      <Button asChild size="lg" className="w-full">
                        <Link to="/admissions">Apply for This Course</Link>
                      </Button>
                      <Button asChild variant="outline" size="lg" className="w-full">
                        <Link to="/contact">Contact for More Info</Link>
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button asChild variant="outline" size="lg" className="w-full">
                        <Link to="/courses">View Available Courses</Link>
                      </Button>
                      <Button asChild variant="ghost" size="lg" className="w-full">
                        <Link to="/contact">Contact for Updates</Link>
                      </Button>
                    </>
                  )}
                </CardContent>
              </Card>

              {/* Quick Info */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Category:</span>
                    <Badge className={getCategoryColor(course.category)}>{course.category}</Badge>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-medium">{course.duration}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="text-gray-600">Students:</span>
                    <span className="font-medium">{course.students}+</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="text-gray-600">Status:</span>
                    <Badge variant={course.available ? 'default' : 'secondary'}>
                      {course.available ? 'Available' : 'Unavailable'}
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <Card>
                <CardHeader>
                  <CardTitle>Need Help?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <p><strong>Phone:</strong> +92-47-1234567</p>
                  <p><strong>Email:</strong> info@jhangpolytechnic.edu.pk</p>
                  <p><strong>Address:</strong> Jhang, Punjab, Pakistan</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Related Courses */}
        {relatedCourses.length > 0 && (
          <div className="mt-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Related Courses</h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-gray-600">Other courses in the {course.category} category</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedCourses.map((relatedCourse, index) => (
                <div key={relatedCourse.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CourseCard {...relatedCourse} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseDetail;
