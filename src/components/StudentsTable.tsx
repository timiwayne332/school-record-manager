import { Trash2 } from "lucide-react";

interface Student {
  id: number;
  name: string;
  grade: string;
  subject: string;
  attendance: number;
}

interface StudentsTableProps {
  students: Student[];
  onDeleteStudent: (id: number) => void;
}

export const StudentsTable = ({ students, onDeleteStudent }: StudentsTableProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-medium text-slate-700">Name</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-slate-700">Subject</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-slate-700">Grade</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-slate-700">Attendance</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-slate-700">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {students.map((student) => (
              <tr key={student.id} className="hover:bg-slate-50">
                <td className="px-4 py-3 text-sm font-medium text-slate-800">{student.name}</td>
                <td className="px-4 py-3 text-sm text-slate-600">{student.subject}</td>
                <td className="px-4 py-3 text-sm">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    student.grade === 'A' ? 'bg-green-100 text-green-800' :
                    student.grade === 'B+' ? 'bg-blue-100 text-blue-800' :
                    student.grade === 'A-' ? 'bg-green-100 text-green-700' :
                    'bg-slate-100 text-slate-800'
                  }`}>
                    {student.grade}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm text-slate-600">{student.attendance}%</td>
                <td className="px-4 py-3 text-sm">
                  <button
                    onClick={() => onDeleteStudent(student.id)}
                    className="text-red-500 hover:text-red-700 transition-colors"
                  >
                    <Trash2 size={14} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};