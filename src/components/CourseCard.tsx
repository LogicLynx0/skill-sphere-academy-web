
import { Clock, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

interface CourseCardProps {
  id: string;
  title: string;
  category: 'Tech' | 'Safety' | 'Government';
  description: string;
  duration: string;
  students: number;
  image?: string;
  available: boolean;
}

const CourseCard = ({ id, title, category, description, duration, students, image, available }: CourseCardProps) => {
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

  return (
    <Card className={`course-card h-full ${!available ? 'opacity-60' : ''}`}>
      <CardHeader className="pb-4">
        <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/20 rounded-lg mb-4 flex items-center justify-center">
          {image ? (
            <img src={image} alt={title} className="w-full h-full object-cover rounded-lg" />
          ) : (
            <Award className="h-12 w-12 text-primary" />
          )}
        </div>
        <div className="flex items-center justify-between mb-2">
          <Badge className={getCategoryColor(category)}>{category}</Badge>
          {!available && <Badge variant="secondary">Unavailable</Badge>}
        </div>
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription className="text-sm">{description}</CardDescription>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Users className="h-4 w-4" />
            <span>{students}+ enrolled</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="pt-0">
        <div className="flex space-x-2 w-full">
          <Button asChild variant="outline" className="flex-1">
            <Link to={`/courses/${id}`}>View Details</Link>
          </Button>
          {available && (
            <Button asChild className="flex-1">
              <Link to="/admissions">Enroll Now</Link>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
