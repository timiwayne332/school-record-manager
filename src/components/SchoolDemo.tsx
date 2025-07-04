import { useState } from "react";
import { Users, BookOpen, GraduationCap } from "lucide-react";
import { StatsCard } from "./StatsCard";
import { TabNavigation } from "./TabNavigation";
import { StudentForm } from "./StudentForm";
import { StudentsTable } from "./StudentsTable";
import { CourseForm } from "./CourseForm";
import { CourseCard } from "./CourseCard";

interface Student {
  id: number;
  name: string;
  grade: string;
  subject: string;
  attendance: number;
}

interface Course {
  id: number;
  title: string;
  instructor: string;
  students: number;
}

export const SchoolDemo = () => {
  const [activeTab, setActiveTab] = useState<"students" | "courses">("students");
  const [students, setStudents] = useState<Student[]>([
    { id: 1, name: "John Smith", grade: "A", subject: "Mathematics", attendance: 95 },
    { id: 2, name: "Sarah Johnson", grade: "B+", subject: "Physics", attendance: 88 },
    { id: 3, name: "Mike Davis", grade: "A-", subject: "Chemistry", attendance: 92 }
  ]);
  
  const [courses, setCourses] = useState<Course[]>([
    { id: 1, title: "Advanced Mathematics", instructor: "Dr. Brown", students: 25 },
    { id: 2, title: "Physics Fundamentals", instructor: "Prof. Wilson", students: 30 },
    { id: 3, title: "Chemistry Lab", instructor: "Dr. Garcia", students: 20 }
  ]);

  const [newStudent, setNewStudent] = useState({ name: "", subject: "" });
  const [newCourse, setNewCourse] = useState({ title: "", instructor: "" });

  const addStudent = () => {
    if (newStudent.name.trim() && newStudent.subject.trim()) {
      setStudents([...students, {
        id: Date.now(),
        name: newStudent.name,
        grade: "N/A",
        subject: newStudent.subject,
        attendance: 0
      }]);
      setNewStudent({ name: "", subject: "" });
    }
  };

  const addCourse = () => {
    if (newCourse.title.trim() && newCourse.instructor.trim()) {
      setCourses([...courses, {
        id: Date.now(),
        title: newCourse.title,
        instructor: newCourse.instructor,
        students: 0
      }]);
      setNewCourse({ title: "", instructor: "" });
    }
  };

  const deleteStudent = (id: number) => {
    setStudents(students.filter(student => student.id !== id));
  };

  const deleteCourse = (id: number) => {
    setCourses(courses.filter(course => course.id !== id));
  };

  const averageAttendance = students.length > 0 
    ? Math.round(students.reduce((acc, student) => acc + student.attendance, 0) / students.length)
    : 0;

  return (
    <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-xl">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-slate-800 mb-2">
          School Management System
        </h3>
        <p className="text-slate-600">Manage students, courses, and academic records</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <StatsCard
          icon={<Users size={20} />}
          value={students.length}
          label="Total Students"
          bgColor="bg-blue-100"
          iconColor="text-blue-600"
        />
        <StatsCard
          icon={<BookOpen size={20} />}
          value={courses.length}
          label="Active Courses"
          bgColor="bg-green-100"
          iconColor="text-green-600"
        />
        <StatsCard
          icon={<GraduationCap size={20} />}
          value={`${averageAttendance}%`}
          label="Avg Attendance"
          bgColor="bg-purple-100"
          iconColor="text-purple-600"
        />
      </div>

      {/* Tab Navigation */}
      <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Students Tab */}
      {activeTab === "students" && (
        <div>
          <StudentForm
            newStudent={newStudent}
            onStudentChange={setNewStudent}
            onAddStudent={addStudent}
          />
          <StudentsTable
            students={students}
            onDeleteStudent={deleteStudent}
          />
        </div>
      )}

      {/* Courses Tab */}
      {activeTab === "courses" && (
        <div>
          <CourseForm
            newCourse={newCourse}
            onCourseChange={setNewCourse}
            onAddCourse={addCourse}
          />
          <div className="grid gap-4">
            {courses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                onDeleteCourse={deleteCourse}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};