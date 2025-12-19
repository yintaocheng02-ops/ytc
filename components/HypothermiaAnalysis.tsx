
import React from 'react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from 'recharts';
import { Activity, Skull, Database, Info } from 'lucide-react';
import { HYPOTHERMIA_RISK_DATA } from '../constants';

export const HypothermiaAnalysis: React.FC = () => {
  return (
    <div className="mt-12 bg-white rounded-[40px] p-8 border border-slate-100 shadow-sm overflow-hidden relative">
      <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-4">
        <div>
          <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
            <Activity className="text-red-600" />
            <span>失温生理临界状态分析 / Physiological Critical States</span>
          </h3>
          <p className="text-sm text-slate-500 mt-1">
            当核心体温偏离 37℃ 常温时，机体各项生理机能的风险崩溃概率
          </p>
        </div>
        <div className="flex items-center gap-2 bg-slate-50 text-slate-400 px-4 py-2 rounded-2xl text-[10px] font-bold uppercase tracking-widest border border-slate-100">
          <Database size={12} className="text-slate-400" />
          <span>数据源: Swiss Staging System & WMS Guidelines</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3 h-[320px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={HYPOTHERMIA_RISK_DATA} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorHal" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorComa" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.4}/>
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorDeath" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ef4444" stopOpacity={0.5}/>
                  <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis 
                dataKey="temp" 
                reversed 
                axisLine={false} 
                tickLine={false} 
                tick={{fontSize: 11, fontWeight: 700}} 
                label={{ value: '核心体温 (°C)', position: 'insideBottom', offset: -5, fontSize: 10, fill: '#94a3b8' }}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{fontSize: 10}} 
                unit="%"
                label={{ value: '发生概率', angle: -90, position: 'insideLeft', fontSize: 10, fill: '#94a3b8' }}
              />
              <Tooltip 
                contentStyle={{borderRadius: '20px', border: 'none', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)'}}
                itemStyle={{fontSize: '12px', fontWeight: 'bold'}}
              />
              <Legend verticalAlign="top" align="right" iconType="circle" />
              <Area type="monotone" dataKey="hallucination" name="出现幻觉概率" stroke="#8b5cf6" fillOpacity={1} fill="url(#colorHal)" />
              <Area type="monotone" dataKey="coma" name="昏迷/无意识概率" stroke="#3b82f6" fillOpacity={1} fill="url(#colorComa)" />
              <Area type="monotone" dataKey="death" name="生命终结(致死)率" stroke="#ef4444" fillOpacity={1} fill="url(#colorDeath)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="flex flex-col justify-center space-y-4">
          <div className="p-5 bg-purple-50 rounded-3xl border border-purple-100">
            <h4 className="text-sm font-black text-purple-900 mb-1 flex items-center justify-between">
              反常脱衣现象
              <span className="text-[10px] bg-purple-200 px-2 py-0.5 rounded-full">31°C 临界</span>
            </h4>
            <p className="text-xs text-purple-700 leading-relaxed font-medium">
              失温导致丘脑体温调节中枢失灵，产生错觉性过热。这是死亡前最后的生理幻觉。
            </p>
          </div>
          <div className="p-5 bg-red-50 rounded-3xl border border-red-100">
            <h4 className="text-sm font-black text-red-900 mb-1 flex items-center justify-between">
              不可逆损伤
              <Skull size={14} />
            </h4>
            <p className="text-xs text-red-700 leading-relaxed font-medium">
              低于 28°C 时，心脏极易发生心室纤颤，此时若搬运不当可能导致心脏骤停。
            </p>
          </div>
          <div className="flex items-center gap-1 text-[9px] text-slate-400 italic px-2">
            <Info size={10} />
            <span>注：核心体温指内脏与大脑温度，非体表。</span>
          </div>
        </div>
      </div>
    </div>
  );
};
