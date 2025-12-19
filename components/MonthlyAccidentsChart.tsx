
import React from 'react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from 'recharts';
import { CalendarRange, Info } from 'lucide-react';
import { MONTHLY_ACCIDENTS_DATA } from '../constants';

export const MonthlyAccidentsChart: React.FC = () => {
  return (
    <div className="bg-white rounded-[32px] p-6 shadow-sm border border-slate-100 h-full flex flex-col">
      <div className="flex items-center space-x-2 mb-4">
        <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center">
          <CalendarRange size={16} className="text-white" />
        </div>
        <span className="text-[10px] font-black tracking-widest uppercase text-orange-500">2022-2024月度统计</span>
      </div>
      
      <h2 className="text-lg font-bold text-slate-900 mb-4">历年各月事故对比</h2>
      
      <div className="h-[220px] w-full flex-grow">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={MONTHLY_ACCIDENTS_DATA} margin={{ top: 5, right: 20, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
            <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fontSize: 10, fontWeight: 600}} />
            <YAxis axisLine={false} tickLine={false} tick={{fontSize: 10}} />
            <Tooltip 
              contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 8px 16px rgba(0,0,0,0.1)'}}
              itemStyle={{fontSize: '10px', fontWeight: 'bold'}}
            />
            <Legend verticalAlign="top" align="right" iconType="circle" wrapperStyle={{paddingBottom: '10px', fontSize: '10px'}} />
            <Line type="monotone" dataKey="2022年" stroke="#3b82f6" strokeWidth={2} dot={{r: 2}} activeDot={{r: 4}} />
            <Line type="monotone" dataKey="2023年" stroke="#f97316" strokeWidth={2} dot={{r: 2}} activeDot={{r: 4}} />
            <Line type="monotone" dataKey="2024年" stroke="#ef4444" strokeWidth={2} dot={{r: 2}} activeDot={{r: 4}} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 pt-4 border-t border-slate-50">
        <p className="text-[10px] text-slate-500 leading-relaxed italic">
          注：2024年事故分布呈现常态化趋势，10月为全年峰值（44起）。
        </p>
      </div>
    </div>
  );
};
