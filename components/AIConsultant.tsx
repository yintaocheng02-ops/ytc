
import React, { useState } from 'react';
import { geminiService } from '../services/geminiService';
import { Bot, Send, ShieldCheck, Zap, Info } from 'lucide-react';

export const AIConsultant: React.FC = () => {
  const [experience, setExperience] = useState('beginner');
  const [month, setMonth] = useState('5');
  const [loading, setLoading] = useState(false);
  const [advice, setAdvice] = useState<string | null>(null);

  const handleAnalyze = async () => {
    setLoading(true);
    const result = await geminiService.getSafetyAdvice(
      "秦岭鳌太线全线",
      experience === 'beginner' ? '初级户外爱好者（无高海拔长途经验）' : '资深户外玩家（有5天以上重装经验）',
      "常规三季装备，无卫星通讯，无专业急救毯"
    );
    setAdvice(result);
    setLoading(false);
  };

  return (
    <div className="bg-slate-900 rounded-[48px] p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/10 blur-[100px] -z-10"></div>
      
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="flex-1">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-orange-600 rounded-xl flex items-center justify-center">
              <Bot size={20} className="text-white" />
            </div>
            <span className="text-xs font-black tracking-widest uppercase text-orange-500">AI 风险自测系统 / Beta</span>
          </div>
          
          <h2 className="text-4xl serif-title mb-6 leading-tight">基于历史数据的<br/>计划安全评估</h2>
          
          <div className="space-y-6">
            <div>
              <label className="text-[10px] font-black text-slate-400 uppercase mb-3 block tracking-widest">您的经验水平</label>
              <div className="flex gap-4">
                {['beginner', 'expert'].map((lvl) => (
                  <button
                    key={lvl}
                    onClick={() => setExperience(lvl)}
                    className={`flex-1 py-4 rounded-2xl text-xs font-bold transition-all border ${
                      experience === lvl ? 'bg-orange-600 border-orange-600 text-white' : 'bg-slate-800 border-slate-700 text-slate-400 hover:border-slate-500'
                    }`}
                  >
                    {lvl === 'beginner' ? '初涉高海拔' : '经验丰富'}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-[10px] font-black text-slate-400 uppercase mb-3 block tracking-widest">计划穿越月份</label>
              <select 
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-2xl px-4 py-4 text-sm font-bold focus:outline-none focus:border-orange-600"
              >
                <option value="5">5月（气候剧变期）</option>
                <option value="7">7月（雷雨季）</option>
                <option value="10">10月（霜冻雨雪期）</option>
                <option value="1">1月（生命禁区）</option>
              </select>
            </div>

            <button
              onClick={handleAnalyze}
              disabled={loading}
              className="w-full bg-white text-slate-900 py-4 rounded-2xl font-black text-sm flex items-center justify-center space-x-2 hover:bg-orange-500 hover:text-white transition-all disabled:opacity-50"
            >
              {loading ? <Zap className="animate-spin" /> : <Send size={18} />}
              <span>{loading ? '模型深度分析中...' : '生成定制风险预警'}</span>
            </button>
          </div>
        </div>

        <div className="lg:w-[450px]">
          <div className="bg-slate-800/50 border border-slate-700 rounded-[32px] p-8 h-full min-h-[300px] flex flex-col">
            {advice ? (
              <div className="prose prose-invert prose-sm max-w-none">
                <div className="flex items-center space-x-2 mb-4 text-orange-500">
                  <ShieldCheck size={18} />
                  <span className="text-xs font-black uppercase tracking-widest">分析结果</span>
                </div>
                <p className="text-slate-300 leading-relaxed text-sm whitespace-pre-line">
                  {advice}
                </p>
              </div>
            ) : (
              <div className="flex-grow flex flex-col items-center justify-center text-center">
                <Info size={40} className="text-slate-600 mb-4" />
                <p className="text-slate-500 text-sm font-medium px-8">
                  输入计划参数后，AI 将结合鳌太线历史死亡案例数据为您提供专业的避险建议。
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
