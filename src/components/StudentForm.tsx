import { Plus } from "lucide-react";

interface StudentFormProps {
  newStudent: { name: string; subject: string };
  onStudentChange: (student: { name: string; subject: string }) => void;
  onAddStudent: () => void;
}

export const StudentForm = ({ newStudent, onStudentChange, onAddStudent }: StudentFormProps) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200 mb-4">
      <h4 className="font-bold text-slate-800 mb-3">Add New Student</h4>
      <div className="flex gap-2">
        <input
          type="text"
          value={newStudent.name}
          onChange={(e) => onStudentChange({ ...newStudent, name: e.target.value })}
          placeholder="Student name"
          className="flex-1 px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          value={newStudent.subject}
          onChange={(e) => onStudentChange({ ...newStudent, subject: e.target.value })}
          placeholder="Subject"
          className="flex-1 px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={onAddStudent}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
        >
          <Plus size={16} />
        </button>
      </div>
    </div>
  );
};