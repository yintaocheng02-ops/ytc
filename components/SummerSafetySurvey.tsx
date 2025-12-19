
import React from 'react';
import { ClipboardList, TrendingUp } from 'lucide-react';
import { SUMMER_SURVEY_DATA, SURVEY_SOURCE } from '../constants';

export const SummerSafetySurvey: React.FC = () => {
  return (
    <div className="bg-white rounded-[40px] p-8 md:p-10 shadow-sm border border-slate-100 overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center space-x-3 mb-2">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
              <ClipboardList size={20} className="text-white" />
            </div>
            <span className="text-xs font-black tracking-widest uppercase text-blue-500">公众调研数据 / Public Insight</span>
          </div>
          <h2 className="text-2xl font-bold text-slate-900">暑期户外安全诱因公众调研结果</h2>
        </div>
        <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-2xl text-[10px] font-bold border border-blue-100 flex items-center gap-2">
          <TrendingUp size={14} />
          <span>样本覆盖全国主要城市及户外爱好者群体</span>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-slate-100">
              <th className="pb-4 text-[10px] font-black text-slate-400 uppercase tracking-widest w-16 text-center">排名</th>
              <th className="pb-4 text-[10px] font-black text-slate-400 uppercase tracking-widest pl-4">事故诱因 / 风险维度</th>
              <th className="pb-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right pr-4">受访者认可比例</th>
              <th className="pb-4 text-[10px] font-black text-slate-400 uppercase tracking-widest w-64">趋势分布</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {SUMMER_SURVEY_DATA.map((item) => (
              <tr key={item.rank} className="group hover:bg-slate-50 transition-colors">
                <td className="py-6 text-center">
                  <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-xs font-black ${
                    item.rank <= 3 ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-400'
                  }`}>
                    {item.rank}
                  </span>
                </td>
                <td className="py-6 pl-4">
                  <span className="text-sm font-bold text-slate-700 group-hover:text-blue-600 transition-colors">
                    {item.factor}
                  </span>
                </td>
                <td className="py-6 text-right pr-4">
                  <span className="text-lg font-black text-slate-900">{item.percentage}%</span>
                </td>
                <td className="py-6 pr-4">
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div 
                      className="bg-blue-600 h-full rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="mt-8 pt-6 border-t border-slate-100 flex justify-between items-center">
        <p className="text-[11px] text-slate-400 font-medium italic">
          * 调研结果显示：缺乏专业知识与盲目跟风已成为威胁户外生命安全的首要人为因素。
        </p>
        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{SURVEY_SOURCE}</span>
      </div>
    </div>
  );
};
