
import React from 'react';

interface StatCardProps {
  label: string;
  value: string | number;
  subLabel?: string;
  trend?: 'up' | 'down';
  icon?: React.ReactNode;
}

export const StatCard: React.FC<StatCardProps> = ({ label, value, subLabel, trend, icon }) => {
  return (
    <div className="bg-white p-8 rounded-[32px] shadow-sm border border-orange-50 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group">
      <div className="flex justify-between items-center mb-6">
        <span className="text-sm font-bold text-slate-500">{label}</span>
        <div className="text-orange-200 group-hover:text-orange-500 transition-colors duration-500">{icon}</div>
      </div>
      <div className="flex items-baseline space-x-3 mb-2">
        <h3 className="text-4xl font-bold text-slate-900 tracking-tight">{value}</h3>
        {trend && (
          <span className={`text-xs font-bold px-3 py-1 rounded-full ${trend === 'up' ? 'bg-orange-50 text-orange-600' : 'bg-green-50 text-green-600'}`}>
            {trend === 'up' ? '呈上升趋势' : '同比下降'}
          </span>
        )}
      </div>
      {subLabel && <p className="text-xs font-medium text-slate-400">{subLabel}</p>}
    </div>
  );
};