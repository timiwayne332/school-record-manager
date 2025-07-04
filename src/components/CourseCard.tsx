import { Users, Calendar, Trash2 } from "lucide-react";

interface Course {
  id: number;
  title: string;
  instructor: string;
  students: number;
}

interface CourseCardProps {
  course: Course;
  onDeleteCourse: (id: number) => void;
}

export const CourseCard = ({ course, onDeleteCourse }: CourseCardProps) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200">
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <h5 className="font-bold text-slate-800 mb-1">{course.title}</h5>
          <p className="text-sm text-slate-600 mb-2">Instructor: {course.instructor}</p>
          <div className="flex items-center gap-4 text-sm text-slate-500">
            <span className="flex items-center gap-1">
              <Users size={14} />
              {course.students} students
            </span>
            <span className="flex items-center gap-1">
              <Calendar size={14} />
              Active
            </span>
          </div>
        </div>
        <button
          onClick={() => onDeleteCourse(course.id)}
          className="text-red-500 hover:text-red-700 transition-colors"
        >
          <Trash2 size={16} />
        </button>
      </div>
    </div>
  );
};