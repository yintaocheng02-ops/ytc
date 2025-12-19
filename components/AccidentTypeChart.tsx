
import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { ACCIDENT_TYPES_2024, DATA_SOURCE } from '../constants';

export const AccidentTypeChart: React.FC = () => {
  return (
    <div className="bg-white rounded-[32px] p-6 shadow-sm border border-slate-100 h-full flex flex-col">
      <h3 className="text-lg font-bold mb-1">事故诱因分布</h3>
      <p className="text-slate-400 text-[10px] mb-6">2024年核心类型权重</p>
      <div className="h-[200px] flex flex-col items-center flex-grow">
        <ResponsiveContainer width="100%" height="80%">
          <PieChart>
            <Pie
              data={ACCIDENT_TYPES_2024}
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={60}
              paddingAngle={6}
              dataKey="value"
            >
              {ACCIDENT_TYPES_2024.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)'}} />
          </PieChart>
        </ResponsiveContainer>
        <div className="flex flex-wrap justify-center gap-x-2 gap-y-1 mt-2">
          {ACCIDENT_TYPES_2024.map((entry, index) => (
            <div key={index} className="flex items-center space-x-1">
              <div className="w-2 h-2 rounded-full" style={{backgroundColor: entry.color}}></div>
              <span className="text-[9px] font-bold text-slate-500 whitespace-nowrap">
                {entry.name}
              </span>
            </div>
          ))}
        </div>
      </div>
      <p className="text-right text-[8px] text-slate-400 mt-4 tracking-wider">{DATA_SOURCE}</p>
    </div>
  );
};
