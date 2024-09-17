export interface Course {
    title: string;
    lessons: number;
    duration: string;
    skillLevel: string;
    views: number;
  }
  
  export interface Publisher {
    name: string;
    role: string;
    avatar: string;
    bio: string;
    rating: number;
    reviews: number;
    students: number;
    courses: number;
  }
  
  export interface SuggestedCourse {
    title: string;
    instructor: string;
    thumbnail: string;
  }
  