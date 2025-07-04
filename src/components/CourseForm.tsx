import { Plus } from "lucide-react";

interface CourseFormProps {
  newCourse: { title: string; instructor: string };
  onCourseChange: (course: { title: string; instructor: string }) => void;
  onAddCourse: () => void;
}

export const CourseForm = ({ newCourse, onCourseChange, onAddCourse }: CourseFormProps) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200 mb-4">
      <h4 className="font-bold text-slate-800 mb-3">Add New Course</h4>
      <div className="flex gap-2">
        <input
          type="text"
          value={newCourse.title}
          onChange={(e) => onCourseChange({ ...newCourse, title: e.target.value })}
          placeholder="Course title"
          className="flex-1 px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          value={newCourse.instructor}
          onChange={(e) => onCourseChange({ ...newCourse, instructor: e.target.value })}
          placeholder="Instructor name"
          className="flex-1 px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={onAddCourse}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
        >
          <Plus size={16} />
        </button>
      </div>
    </div>
  );
};