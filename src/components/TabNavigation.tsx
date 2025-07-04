import { Users, BookOpen } from "lucide-react";

interface TabNavigationProps {
  activeTab: "students" | "courses";
  onTabChange: (tab: "students" | "courses") => void;
}

export const TabNavigation = ({ activeTab, onTabChange }: TabNavigationProps) => {
  return (
    <div className="flex bg-white rounded-lg p-1 mb-6 shadow-sm border border-slate-200">
      <button
        onClick={() => onTabChange("students")}
        className={`flex-1 py-2 px-4 rounded-md font-medium transition-colors ${
          activeTab === "students"
            ? "bg-blue-600 text-white"
            : "text-slate-600 hover:text-slate-800"
        }`}
      >
        <Users size={16} className="inline mr-2" />
        Students
      </button>
      <button
        onClick={() => onTabChange("courses")}
        className={`flex-1 py-2 px-4 rounded-md font-medium transition-colors ${
          activeTab === "courses"
            ? "bg-blue-600 text-white"
            : "text-slate-600 hover:text-slate-800"
        }`}
      >
        <BookOpen size={16} className="inline mr-2" />
        Courses
      </button>
    </div>
  );
};