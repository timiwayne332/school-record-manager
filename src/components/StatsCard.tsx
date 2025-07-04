import { ReactNode } from "react";

interface StatsCardProps {
  icon: ReactNode;
  value: string | number;
  label: string;
  bgColor: string;
  iconColor: string;
}

export const StatsCard = ({ icon, value, label, bgColor, iconColor }: StatsCardProps) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200">
      <div className="flex items-center gap-3">
        <div className={`p-2 ${bgColor} rounded-lg`}>
          <div className={iconColor}>
            {icon}
          </div>
        </div>
        <div>
          <p className="text-2xl font-bold text-slate-800">{value}</p>
          <p className="text-sm text-slate-600">{label}</p>
        </div>
      </div>
    </div>
  );
};