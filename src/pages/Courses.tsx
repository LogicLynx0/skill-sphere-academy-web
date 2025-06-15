import { useState, useMemo } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import CourseCard from '@/components/CourseCard';
import FAQ from '@/components/FAQ';
import { courses } from '@/data/courses';
import { Search, Filter, X } from 'lucide-react';

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [sortBy, setSortBy] = useState('title');
  const [showUnavailable, setShowUnavailable] = useState(false);

  const filteredAndSortedCourses = useMemo(() => {
    let filtered = courses.filter(course => {
      const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          course.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = categoryFilter === 'All' || course.category === categoryFilter;
      const matchesAvailability = showUnavailable || course.available;
      
      return matchesSearch && matchesCategory && matchesAvailability;
    });

    // Sort courses
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'title':
          return a.title.localeCompare(b.title);
        case 'duration':
          return a.duration.localeCompare(b.duration);
        case 'students':
          return b.students - a.students;
        case 'category':
          return a.category.localeCompare(b.category);
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, categoryFilter, sortBy, showUnavailable]);

  const clearFilters = () => {
    setSearchTerm('');
    setCategoryFilter('All');
    setSortBy('title');
    setShowUnavailable(false);
  };

  const availableCount = courses.filter(c => c.available).length;
  const unavailableCount = courses.filter(c => !c.available).length;

  const coursesFAQs = [
    {
      question: 'How do I enroll in a course?',
      answer: 'You can enroll by visiting our Admissions page, filling out the application form, and selecting your desired course. Our admissions team will contact you within 24 hours to guide you through the process.'
    },
    {
      question: 'What are the prerequisites for tech courses?',
      answer: 'Most tech courses require basic computer knowledge and at least matriculation level education. Specific requirements vary by course - Graphics Design needs creative aptitude, while Web Development benefits from basic programming understanding.'
    },
    {
      question: 'Are online classes available?',
      answer: 'We offer hybrid learning options with both in-person and online components. Some theoretical portions can be attended online, while practical sessions require physical presence in our labs.'
    },
    {
      question: 'What certification do I receive upon completion?',
      answer: 'You receive industry-recognized certificates. Tech courses provide skill-based certificates, while Safety courses (IOSH, NEBOSH) provide international certifications recognized globally.'
    },
    {
      question: 'Do you provide job placement assistance?',
      answer: 'Yes, we have a dedicated placement cell that helps students with job placement, resume building, interview preparation, and connecting with industry partners.'
    },
    {
      question: 'What is the duration of courses?',
      answer: 'Course duration varies: Tech courses range from 2-6 months, Safety courses are typically 1-3 months, and Government courses (when available) can be 1-3 years depending on the program.'
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 gradient-text">Our Courses</h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto zoom-in">
            Explore our comprehensive range of technical and safety courses designed to boost your career prospects.
          </p>
        </div>

        {/* Course Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
            <h3 className="text-2xl font-bold text-green-800">{availableCount}</h3>
            <p className="text-green-600">Available Courses</p>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
            <h3 className="text-2xl font-bold text-blue-800">{courses.length}</h3>
            <p className="text-blue-600">Total Courses</p>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-center">
            <h3 className="text-2xl font-bold text-yellow-800">{unavailableCount}</h3>
            <p className="text-yellow-600">Government Courses*</p>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
          <p className="text-sm text-yellow-800">
            <strong>*Note:</strong> Government courses are offered periodically based on approvals and are currently unavailable. 
            Private courses are available year-round with flexible scheduling.
          </p>
        </div>

        {/* Filters and Search */}
        <div className="bg-white border rounded-lg p-6 mb-8 shadow-sm">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between mb-4">
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search courses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9"
                />
              </div>

              {/* Category Filter */}
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All">All Categories</SelectItem>
                  <SelectItem value="Tech">Tech Courses</SelectItem>
                  <SelectItem value="Safety">Safety Courses</SelectItem>
                  <SelectItem value="Government">Government Courses</SelectItem>
                </SelectContent>
              </Select>

              {/* Sort */}
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="title">Sort by Title</SelectItem>
                  <SelectItem value="duration">Sort by Duration</SelectItem>
                  <SelectItem value="students">Sort by Popularity</SelectItem>
                  <SelectItem value="category">Sort by Category</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowUnavailable(!showUnavailable)}
                className={showUnavailable ? 'bg-primary text-white' : ''}
              >
                <Filter className="h-4 w-4 mr-2" />
                Show Unavailable
              </Button>
              
              <Button variant="ghost" size="sm" onClick={clearFilters}>
                <X className="h-4 w-4 mr-2" />
                Clear Filters
              </Button>
            </div>
          </div>

          {/* Active Filters */}
          <div className="flex flex-wrap gap-2">
            {searchTerm && (
              <Badge variant="secondary" className="gap-1">
                Search: {searchTerm}
                <X className="h-3 w-3 cursor-pointer" onClick={() => setSearchTerm('')} />
              </Badge>
            )}
            {categoryFilter !== 'All' && (
              <Badge variant="secondary" className="gap-1">
                Category: {categoryFilter}
                <X className="h-3 w-3 cursor-pointer" onClick={() => setCategoryFilter('All')} />
              </Badge>
            )}
            {showUnavailable && (
              <Badge variant="secondary" className="gap-1">
                Including Unavailable
                <X className="h-3 w-3 cursor-pointer" onClick={() => setShowUnavailable(false)} />
              </Badge>
            )}
          </div>
        </div>

        {/* Results */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredAndSortedCourses.length} of {courses.length} courses
          </p>
        </div>

        {/* Course Grid */}
        {filteredAndSortedCourses.length === 0 ? (
          <div className="text-center py-12">
            <div className="bg-gray-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
              <Search className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No courses found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search criteria or filters</p>
            <Button onClick={clearFilters}>Clear All Filters</Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAndSortedCourses.map((course, index) => (
              <div 
                key={course.id} 
                className="animate-fade-in" 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CourseCard {...course} />
              </div>
            ))}
          </div>
        )}

        {/* FAQ Section */}
        <FAQ 
          title="Frequently Asked Questions"
          subtitle="Common questions about our courses and enrollment process"
          faqs={coursesFAQs}
        />

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-primary/5 rounded-lg p-8 card-hover hover:shadow-lg transition-all duration-300">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Can't find what you're looking for?</h2>
            <p className="text-gray-600 mb-6">
              Contact us to discuss custom training programs or get more information about upcoming courses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="hover-glow">
                <a href="/contact">Contact Us</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="hover-glow">
                <a href="/admissions">Apply for Available Courses</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
