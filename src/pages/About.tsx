
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { GraduationCap, Users, Award, Target, Eye, Heart, Calendar } from 'lucide-react';

const About = () => {
  const timeline = [
    {
      year: '1998',
      title: 'Foundation',
      description: 'Jhang Polytechnic Institute was established with a vision to provide quality technical education.',
      icon: GraduationCap
    },
    {
      year: '1998-2019',
      title: 'DAE Programs Era',
      description: 'Offered comprehensive Diploma of Associate Engineering programs in various disciplines.',
      icon: Award
    },
    {
      year: '2015',
      title: 'Expansion',
      description: 'Introduced specialized technical and safety courses to meet industry demands.',
      icon: Target
    },
    {
      year: '2020-Present',
      title: 'Modern Focus',
      description: 'Shifted focus to industry-relevant courses including tech and safety certifications.',
      icon: Users
    }
  ];

  const faqs = [
    {
      question: 'What types of courses do you offer?',
      answer: 'We offer Tech Courses (Graphics Design, Web Development, Digital Marketing, Mobile App Development) and Safety Courses (IOSH, NEBOSH). Government courses are currently unavailable pending approvals.'
    },
    {
      question: 'Are your courses industry-recognized?',
      answer: 'Yes, our courses are designed to meet industry standards. Safety courses provide international certifications (IOSH, NEBOSH), while tech courses include industry-relevant skills and portfolio development.'
    },
    {
      question: 'Do you provide job placement assistance?',
      answer: 'We offer comprehensive career support including job placement assistance, resume building, interview preparation, and connections with industry partners.'
    },
    {
      question: 'What are the admission requirements?',
      answer: 'Requirements vary by course. Generally, we require basic educational qualifications (matriculation/intermediate) and specific prerequisites depending on the chosen program.'
    },
    {
      question: 'Do you offer flexible schedules?',
      answer: 'Yes, we offer multiple batches with morning, evening, and weekend options to accommodate working professionals and students.'
    },
    {
      question: 'What about the Government courses (DAE programs)?',
      answer: 'Government courses like DAE programs are currently unavailable due to policy changes and pending approvals. We focus on private courses that are available year-round.'
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Jhang Polytechnic Institute</h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering futures through skill-based education since 1998. We are committed to providing quality technical 
            education that prepares students for successful careers in the modern workplace.
          </p>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="animate-fade-in">
            <CardHeader className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">Our Mission</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600">
                To provide high-quality, industry-relevant technical education that empowers students with practical skills 
                and knowledge needed for successful careers in today's competitive job market.
              </p>
            </CardContent>
          </Card>

          <Card className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <CardHeader className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">Our Vision</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600">
                To be the leading technical education institute in the region, recognized for excellence in teaching, 
                innovation, and producing skilled professionals who contribute to national development.
              </p>
            </CardContent>
          </Card>

          <Card className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <CardHeader className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">Our Values</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600">
                Excellence in education, integrity in all practices, innovation in teaching methods, and commitment to 
                student success and career development.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-gray-600">
              From our humble beginnings to becoming a leading technical education institute
            </p>
          </div>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div 
                key={index} 
                className={`flex items-center animate-fade-in ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <Card>
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                          <item.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{item.title}</CardTitle>
                          <p className="text-sm text-primary font-semibold">{item.year}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg"></div>
                </div>
                <div className="flex-1"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Current Focus */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Current Focus</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Private Courses - Available Year-Round</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Tech</div>
                  <div>
                    <h4 className="font-semibold">Technology Courses</h4>
                    <p className="text-gray-600 text-sm">Graphics Design, Web Development, Digital Marketing, Mobile App Development</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Safety</div>
                  <div>
                    <h4 className="font-semibold">Safety Courses</h4>
                    <p className="text-gray-600 text-sm">IOSH, NEBOSH - International safety certifications</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-fade-in">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Government Courses Status</h3>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Calendar className="h-5 w-5 text-yellow-600" />
                    <span className="font-semibold text-yellow-800">Currently Unavailable</span>
                  </div>
                  <p className="text-sm text-yellow-700">
                    Government courses (DAE programs) are offered periodically based on government approvals and policy changes. 
                    These programs are currently suspended pending new approvals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="font-semibold text-gray-900">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        {/* Affiliations */}
        <div className="text-center">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Affiliations</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-8">
            <p className="text-lg text-gray-600 mb-6">We are proud to be affiliated with leading educational authorities:</p>
            <div className="flex flex-wrap justify-center items-center gap-8 text-2xl font-bold text-gray-400">
              <span>PSDA</span>
              <span>•</span>
              <span>TEVTA</span>
              <span>•</span>
              <span>PSDF</span>
              <span>•</span>
              <span>NAVTCC</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
