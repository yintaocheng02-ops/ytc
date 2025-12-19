
import React from 'react';
import { CheckCircle2, Wind, ThermometerSnowflake, Navigation, HeartPulse } from 'lucide-react';

const GEAR_TIPS = [
  { icon: <Wind className="text-blue-500" />, title: '防风策略', desc: '鳌太线核心区常伴 8 级以上阵风，层叠穿衣法（硬壳+中间保暖层）是预防失温的第一道防线。' },
  { icon: <ThermometerSnowflake className="text-red-500" />, title: '体温管理', desc: '一旦浑身发抖并伴随意识模糊，立即停止行走并搭建帐篷。失温从二级进入三级仅需不到10分钟。' },
  { icon: <Navigation className="text-orange-500" />, title: '迷路自救', desc: '在导航架大雾中，禁止单独寻找路线。原地固守或沿原路返回是生存率最高的操作方案。' },
  { icon: <HeartPulse className="text-pink-500" />, title: '生理极限', desc: '海拔 3500m 以上氧气含量仅为平原 60%。保持平稳心率，严禁在身体不适时强行冲顶。' }
];

export const SurvivalGuide: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {GEAR_TIPS.map((tip, idx) => (
        <div key={idx} className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-xl hover:border-orange-100 transition-all duration-500">
          <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center mb-6">
            {tip.icon}
          </div>
          <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-center justify-between">
            {tip.title}
            <CheckCircle2 size={16} className="text-slate-200" />
          </h4>
          <p className="text-sm text-slate-500 leading-relaxed font-medium">
            {tip.desc}
          </p>
        </div>
      ))}
    </div>
  );
};
