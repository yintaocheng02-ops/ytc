
import React from 'react';
import { 
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Legend, Cell
} from 'recharts';
import { CloudRain, Thermometer, AlertCircle, Database, ShieldCheck } from 'lucide-react';
import { REAL_HISTORY_24H, YEARLY_CLIMATE, CLIMATE_SOURCE } from '../constants';

export const ClimateAnalytics: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
      {/* 24小时真实事故气象实测 */}
      <div className="bg-white rounded-[40px] p-8 border border-slate-100 shadow-sm flex flex-col">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold flex items-center gap-2 text-slate-900">
            <Thermometer className="text-red-500" size={20} />
            <span>24h 实测温差与降水波动</span>
          </h3>
          <div className="flex items-center gap-1 bg-red-50 text-red-600 px-3 py-1 rounded-full text-[10px] font-black">
            <AlertCircle size={12} />
            <span>2017.05.04 事故日实测</span>
          </div>
        </div>
        <p className="text-[11px] text-slate-500 mb-6 font-medium">数据还原了导致 2017 年多名登山者遇难的极端“黑色五一”气象过程。</p>
        
        <div className="h-[280px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={REAL_HISTORY_24H} margin={{ top: 20, right: 0, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{fontSize: 10, fontWeight: 700}} dy={10} />
              <YAxis axisLine={false} tickLine={false} tick={{fontSize: 10}} />
              <Tooltip 
                cursor={{fill: '#f8fafc'}}
                contentStyle={{borderRadius: '20px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)'}}
              />
              <Legend verticalAlign="top" align="right" iconType="circle" />
              <Bar dataKey="temp" name="气温 (℃)" radius={[4, 4, 0, 0]}>
                {REAL_HISTORY_24H.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.temp < 0 ? '#3b82f6' : '#f97316'} />
                ))}
              </Bar>
              <Bar dataKey="rainfall" name="降水量 (mm)" fill="#0ea5e9" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        <div className="mt-4 p-4 bg-slate-50 rounded-2xl flex flex-col gap-2">
          <p className="text-[11px] text-slate-600 leading-relaxed italic">
            * 关键点：16:00 气温骤降 20℃ 且伴随强降雪。这种瞬时的剧变是人体难以支撑且装备无法应对的核心致死原因。
          </p>
          <div className="flex items-center gap-1.5 text-[9px] text-slate-400 font-bold border-t border-slate-200 pt-2">
            <Database size={10} />
            <span>数据源：陕西省气象局太白山自动站历史数据库 / 事故调查组官方通报</span>
          </div>
        </div>
      </div>

      {/* 年度气象起伏分析 */}
      <div className="bg-white rounded-[40px] p-8 border border-slate-100 shadow-sm flex flex-col">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold flex items-center gap-2 text-slate-900">
            <CloudRain className="text-blue-500" size={20} />
            <span>年度温差与降水全景图</span>
          </h3>
          <div className="flex items-center gap-1 text-[10px] font-black text-green-600 bg-green-50 px-3 py-1 rounded-full uppercase">
            <ShieldCheck size={12} />
            <span>官方气象站验证</span>
          </div>
        </div>
        <p className="text-[11px] text-slate-500 mb-6 font-medium">展示鳌太线全年的平均气温分布与降水周期，揭示登山窗口期的极度短促。</p>
        
        <div className="h-[280px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={YEARLY_CLIMATE} margin={{ top: 20, right: 0, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fontSize: 10, fontWeight: 700}} dy={10} />
              <YAxis axisLine={false} tickLine={false} tick={{fontSize: 10}} />
              <Tooltip 
                cursor={{fill: '#f8fafc'}}
                contentStyle={{borderRadius: '20px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)'}}
              />
              <Legend verticalAlign="top" align="right" iconType="circle" />
              <Bar dataKey="temp" name="均温 (℃)" fill="#f59e0b" radius={[4, 4, 4, 4]} />
              <Bar dataKey="rain" name="降水 (mm)" fill="#2563eb" radius={[4, 4, 4, 4]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-auto pt-6 border-t border-dashed border-slate-100 flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <p className="text-[10px] text-slate-400 tracking-tight font-medium flex items-center gap-1">
              <Database size={10} />
              {CLIMATE_SOURCE}
            </p>
            <span className="text-[10px] font-black text-orange-600 bg-orange-50 px-3 py-1 rounded-lg">严禁在11-5月尝试</span>
          </div>
          <p className="text-[9px] text-slate-300">注：数据基于海拔3410m观测点，实际山脊（3500m+）环境将更为严酷，气温通常低3-5℃。</p>
        </div>
      </div>
    </div>
  );
};
