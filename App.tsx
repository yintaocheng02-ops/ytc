
import React, { useState } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  PieChart, Pie, Cell
} from 'recharts';
import { 
  AlertTriangle, Activity, Mountain, Calendar, Layers, HelpCircle, Info, ShieldAlert, HeartPulse, Navigation
} from 'lucide-react';
import { StatCard } from './components/StatCard';
import { AotaiMap } from './components/AotaiMap';
import { MonthlyAccidentsChart } from './components/MonthlyAccidentsChart';
import { AccidentTypeChart } from './components/AccidentTypeChart';
import { SurvivalGuide } from './components/SurvivalGuide';
import { SurvivalGearSolutions } from './components/SurvivalGearSolutions';
import { ClimateAnalytics } from './components/ClimateAnalytics';
import { HypothermiaAnalysis } from './components/HypothermiaAnalysis';
import { SummerSafetySurvey } from './components/SummerSafetySurvey';
import { VENUE_DATA, REGION_RISKS, COMPARISON_DATA, DATA_SOURCE, WARM_COLORS } from './constants';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'aotai' | 'overview'>('aotai');

  const heroConfig = {
    overview: {
      title: "全国徒步路线安全分析与对策",
      subtitle: "基于历史大数据，洞察中国户外运动安全趋势",
      image: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=2073&auto=format&fit=crop"
    },
    aotai: {
      title: "鳌太线·专项深度风险剖面",
      subtitle: "致敬自然，敬畏生命：针对“死亡路线”的专项解析",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop"
    }
  };

  const currentHero = heroConfig[activeTab];

  return (
    <div className="flex flex-col min-h-screen selection:bg-orange-100 selection:text-orange-900">
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 md:px-12 flex justify-between items-center transition-all bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="flex items-center space-x-3 group cursor-pointer">
          <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center transition-transform group-hover:rotate-12">
            <Mountain className="text-white w-5 h-5" />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">中国户外安全研究报告</span>
        </div>
        <div className="flex space-x-12">
          <button 
            onClick={() => setActiveTab('aotai')}
            className={`text-sm font-bold transition-all ${activeTab === 'aotai' ? 'text-orange-600' : 'text-slate-400 hover:text-slate-600'}`}
          >
            鳌太线专项分析
          </button>
          <button 
            onClick={() => setActiveTab('overview')}
            className={`text-sm font-bold transition-all ${activeTab === 'overview' ? 'text-orange-600' : 'text-slate-400 hover:text-slate-600'}`}
          >
            全国徒步安全分析
          </button>
        </div>
      </nav>

      <main className="flex-grow pt-24">
        <section className="px-6 md:px-12 mb-12">
          <div className="relative rounded-[40px] overflow-hidden aspect-[21/5] md:h-[280px] flex items-center shadow-2xl transition-all duration-700">
            <img 
              src={currentHero.image} 
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
              alt="户外景观"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/40 to-transparent"></div>
            <div className="relative z-10 px-12 md:px-20 max-w-4xl text-white">
              <span className="text-xs font-black tracking-[0.2em] text-orange-500 mb-3 block uppercase">RESEARCH REPORT 2024-2025</span>
              <h1 className="text-4xl md:text-6xl serif-title leading-tight mb-4 drop-shadow-lg">
                {currentHero.title}
              </h1>
              <p className="text-base text-white/80 max-w-xl leading-relaxed font-light drop-shadow-md">
                {currentHero.subtitle}
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-6 md:px-12">
          {activeTab === 'aotai' && (
            <div className="space-y-12 pb-20">
              <section>
                <div className="mb-8">
                   <h2 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
                     鳌太线·风险因子集成分析
                   </h2>
                   <div className="mt-4 bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-3xl">
                      <div className="flex items-start gap-3">
                        <Info className="text-orange-600 mt-1 flex-shrink-0" size={20} />
                        <p className="text-orange-900 text-sm leading-relaxed font-medium">
                          鳌太线是纵贯秦岭鳌山与太白山主脉的徒步穿越路线，全长约150公里，需翻越17座3000米以上高山 。其气候多变、地形复杂，事故频发，被称为“死亡路线” 。2018年起，相关部门已明令禁止穿越 。
                        </p>
                      </div>
                   </div>
                </div>
                <AotaiMap />
                <ClimateAnalytics />
                <HypothermiaAnalysis />
                <div className="mt-20">
                   <h3 className="text-2xl font-bold text-slate-900 mb-8">核心生存指南 / Protocol Highlights</h3>
                   <SurvivalGuide />
                </div>
                <SurvivalGearSolutions />
              </section>
            </div>
          )}

          {activeTab === 'overview' && (
            <div className="space-y-12 pb-20">
              <section>
                <div className="mb-10">
                  <h2 className="text-4xl md:text-5xl serif-title text-slate-900 mb-4 tracking-tight leading-tight">不是人类征服了山，<br className="hidden md:block"/>而是山放过了你。</h2>
                  <p className="text-lg text-slate-500 font-light max-w-2xl">
                    我们应该从全国户外安全事故中汲取深刻教训，探寻预防策略。
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                  <StatCard label="事故总计" value="335" subLabel="较去年有所回落" icon={<Activity size={20}/>} />
                  <StatCard label="山地野外占比" value="82%" subLabel="核心高危场域" trend="up" icon={<Layers size={20}/>} />
                  <StatCard label="遇难人数" value="156" subLabel="包含失踪及死亡" trend="down" icon={<AlertTriangle size={20}/>} />
                  <StatCard label="记录年份" value="2024" subLabel="最新年度统计" icon={<Calendar size={20}/>} />
                </div>
              </section>

              {/* 第一排核心图表：月度对比与历年趋势 */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
                <div className="lg:col-span-2">
                  <MonthlyAccidentsChart />
                </div>
                <div className="bg-white rounded-[32px] p-6 shadow-sm border border-slate-100 flex flex-col h-full">
                  <h3 className="text-lg font-bold mb-1">历年事故趋势</h3>
                  <p className="text-slate-400 text-[10px] mb-6">2021-2024 年度对比</p>
                  <div className="h-[200px] flex-grow">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={COMPARISON_DATA} margin={{ top: 0, right: 0, left: -25, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
                        <XAxis dataKey="category" stroke="#94a3b8" tick={{fontSize: 9, fontWeight: 700}} axisLine={false} tickLine={false} dy={10} />
                        <YAxis stroke="#94a3b8" axisLine={false} tickLine={false} tick={{fontSize: 9}} />
                        <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 8px 16px rgba(0,0,0,0.1)' }} />
                        <Bar dataKey="2024年" fill="#f97316" radius={[4, 4, 4, 4]} barSize={12} />
                        <Bar dataKey="2023年" fill="#fdba74" radius={[4, 4, 4, 4]} barSize={12} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                  <p className="text-right text-[8px] text-slate-400 mt-4 tracking-wider">{DATA_SOURCE}</p>
                </div>
              </div>

              {/* 第二排：分布权重与高风险区域 */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
                 <div className="bg-white rounded-[32px] p-6 shadow-sm border border-slate-100 flex flex-col h-full">
                  <h3 className="text-lg font-bold mb-1">事故场域分布</h3>
                  <p className="text-slate-400 text-[10px] mb-6">环境风险权重</p>
                  <div className="h-[200px] flex flex-col items-center flex-grow">
                    <ResponsiveContainer width="100%" height="80%">
                      <PieChart>
                        <Pie
                          data={VENUE_DATA}
                          cx="50%"
                          cy="50%"
                          innerRadius={40}
                          outerRadius={60}
                          paddingAngle={6}
                          dataKey="value"
                        >
                          {VENUE_DATA.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={WARM_COLORS.chart[index]} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                    <div className="flex flex-wrap justify-center gap-2 mt-2">
                      {VENUE_DATA.map((entry, index) => (
                        <div key={index} className="flex items-center space-x-1">
                          <div className="w-2 h-2 rounded-full" style={{backgroundColor: WARM_COLORS.chart[index]}}></div>
                          <span className="text-[9px] font-bold text-slate-500">{entry.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <p className="text-right text-[8px] text-slate-400 mt-4 tracking-wider">{DATA_SOURCE}</p>
                </div>
                
                <AccidentTypeChart />

                <div className="bg-slate-900 rounded-[32px] p-6 text-white shadow-2xl flex flex-col h-full">
                  <h2 className="text-lg font-bold mb-1">高风险徒步区域</h2>
                  <p className="text-slate-400 text-[10px] mb-6 font-light leading-relaxed">
                    热门区域事故密度统计
                  </p>
                  <div className="flex-grow">
                    <ResponsiveContainer width="100%" height="100%" minHeight={200}>
                      <BarChart layout="vertical" data={REGION_RISKS} margin={{left: 0, right: 30}}>
                        <XAxis type="number" hide />
                        <YAxis dataKey="name" type="category" stroke="#ffffff80" width={80} tick={{fill: '#fff', fontWeight: 600, fontSize: 10}} axisLine={false} tickLine={false} />
                        <Tooltip cursor={{fill: 'rgba(255,255,255,0.1)'}} />
                        <Bar dataKey="count" fill="#f97316" radius={[0, 10, 10, 0]} barSize={15} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                  <p className="text-right text-[8px] text-slate-500 mt-4 tracking-widest">{DATA_SOURCE}</p>
                </div>
              </div>

              {/* 底部：暑期安全调研表格 */}
              <section>
                <SummerSafetySurvey />
              </section>

              {/* 户外徒步安全倡议 */}
              <section className="mt-12">
                <div className="bg-orange-600 rounded-[48px] p-8 md:p-16 text-white shadow-2xl relative overflow-hidden">
                  <div className="absolute top-[-20%] right-[-10%] w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-[-20%] left-[-10%] w-64 h-64 bg-black/10 rounded-full blur-3xl"></div>
                  
                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row gap-12 items-start md:items-center">
                      <div className="flex-shrink-0">
                        <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-3xl flex items-center justify-center border border-white/30 shadow-xl">
                          <ShieldAlert size={40} className="text-white" />
                        </div>
                      </div>
                      <div className="flex-grow">
                        <h2 className="text-3xl md:text-4xl font-black mb-6 tracking-tight">户外徒步安全倡议 / Safety Initiative</h2>
                        <div className="space-y-6 text-white/90 text-base md:text-lg leading-relaxed font-medium">
                          <p className="bg-white/10 p-6 rounded-3xl border border-white/10">
                            在此，我们郑重呼吁广大户外爱好者：<span className="text-yellow-300 font-black">坚决远离未开发徒步路线</span>。未开发区域无明确标识、无安全防护设施，地质结构与气象条件极不稳定，极易引发滑坡、坠崖、迷路等安全事故。
                          </p>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                            <div className="flex gap-4">
                              <Navigation className="flex-shrink-0 text-yellow-300" size={24} />
                              <p>徒步前务必规划正规路线，提前了解目的地天气与地形；规范穿戴专业装备，登山鞋、护膝、头盔、登山杖缺一不可，同时携带定位设备与通讯工具。</p>
                            </div>
                            <div className="flex gap-4">
                              <HeartPulse className="flex-shrink-0 text-yellow-300" size={24} />
                              <p>备足应急物资，足量饮用水、高热量食品、急救包、保暖衣物需随身携带。请摒弃“征服自然”的冒险心态，敬畏自然规律，让徒步成为一场安全、愉悦的户外体验。</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-12 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4">
                      <p className="text-sm font-black tracking-widest uppercase">生命至上 · 安全第一 / Safety Above All</p>
                      <div className="flex gap-4">
                        <div className="px-6 py-2 bg-white text-orange-600 rounded-full font-black text-xs uppercase tracking-widest shadow-lg">尊重自然</div>
                        <div className="px-6 py-2 bg-black/20 backdrop-blur-sm border border-white/20 text-white rounded-full font-black text-xs uppercase tracking-widest">敬畏规律</div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          )}
        </div>
      </main>

      <footer className="bg-white border-t border-slate-100 py-12 px-6 md:px-12">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">© 2024 户外安全数据研究组</p>
            <p className="text-[10px] text-orange-600 font-black tracking-widest uppercase">尊重生命 · 科学探险 · 敬畏自然</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
