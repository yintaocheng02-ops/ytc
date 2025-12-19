
import React from 'react';
import { Shield, Thermometer, Mountain, BookOpen, ExternalLink, Zap } from 'lucide-react';

const GEAR_DATA = [
  {
    category: "针对失温 (Hypothermia)",
    icon: <Thermometer className="text-blue-500" />,
    gears: [
      { name: "三层穿衣系统", detail: "排汗层(Synthetic) + 保暖层(Down/Fleece) + 硬壳层(Gore-Tex)。严禁棉质衣物。", source: "《登山圣经》(Freedom of the Hills)" },
      { name: "紧急露营袋 (Bivy)", detail: "铝膜热反射材质，在无法搭建帐篷时提供核心热量反射保护。", source: "UIAA 安全委员会标准" },
      { name: "高热量应急餐", detail: "巧克力、能量胶、坚果。维持颤抖产热所需的葡萄糖供应。", source: "WMS 野外医学学会指南" }
    ],
    tactics: "一旦发现不自主颤抖，立即寻找避风处，停止行走，更换干衣，钻入睡袋，补充热饮。",
    sourceLabel: "核心信源：UIAA (国际登山联合会) & Wilderness Medical Society"
  },
  {
    category: "针对滑坠 (Sliding/Falling)",
    icon: <Mountain className="text-orange-500" />,
    gears: [
      { name: "Vibram 底登山鞋", detail: "提供在秦岭破碎石海(Talus)上的强力抓地性能与脚踝支撑。", source: "专业登山装备技术手册" },
      { name: "轻便冰爪/冰镐", detail: "针对鳌太线春季/初夏未融化的积雪梁及冰冻岩面。", source: "国家体育总局登山中心规范" },
      { name: "专业登山杖", detail: "铝合金材质，在通过荞麦梁等极窄地带时分担重心压。力", source: "户外安全管理白皮书" }
    ],
    tactics: "在窄脊地带保持重心向山体倾斜；石海区确保'三点不动一点动'；雨雪天强制降速。",
    sourceLabel: "核心信源：国家体育总局登山运动管理中心 & CATA 事故统计"
  }
];

export const SurvivalGearSolutions: React.FC = () => {
  return (
    <div className="mt-12 space-y-8">
      <div className="flex items-center justify-between border-b border-slate-200 pb-4">
        <div>
          <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
            <Shield className="text-orange-600" />
            <span>生存装备清单与对策 / Survival Gear & Solutions</span>
          </h3>
          <p className="text-sm text-slate-500 mt-1">基于高海拔登山标准与鳌太线特定地形的专业建议</p>
        </div>
        <div className="hidden md:flex items-center gap-2 text-[10px] font-bold text-slate-400 bg-slate-100 px-4 py-2 rounded-full uppercase tracking-tighter">
          <BookOpen size={12} />
          <span>依据国际登山医学标准及 CATA 安全手册</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {GEAR_DATA.map((item, idx) => (
          <div key={idx} className="bg-white rounded-[40px] p-8 shadow-sm border border-slate-100 flex flex-col h-full hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-800">{item.category}</h4>
            </div>

            <div className="space-y-6 flex-grow">
              {item.gears.map((gear, gIdx) => (
                <div key={gIdx} className="relative pl-6 border-l-2 border-slate-100">
                  <div className="absolute left-[-5px] top-1.5 w-2 h-2 rounded-full bg-orange-200"></div>
                  <div className="flex justify-between items-start mb-1">
                    <span className="text-sm font-black text-slate-700">{gear.name}</span>
                    <span className="text-[10px] bg-slate-50 text-slate-400 px-2 py-0.5 rounded border border-slate-100 italic">{gear.source}</span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">{gear.detail}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-dashed border-slate-200">
              <div className="flex items-start gap-3 bg-orange-50/50 p-4 rounded-2xl">
                <Zap size={16} className="text-orange-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-[11px] font-black text-orange-900 uppercase mb-1">技术对策 (Tactics)</p>
                  <p className="text-[12px] text-orange-800/80 leading-relaxed">{item.tactics}</p>
                </div>
              </div>
              <p className="text-[9px] text-slate-400 mt-4 text-right flex items-center justify-end gap-1">
                <ExternalLink size={10} />
                {item.sourceLabel}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
