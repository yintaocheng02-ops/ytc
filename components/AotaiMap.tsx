
import React, { useState } from 'react';
import { Skull } from 'lucide-react';

interface RouteNode {
  id: string;
  name: string;
  elevation: string;
  elevationValue: number;
  x: number;
  description: string;
  fatalities: number;
  mainCause: string;
  type: 'start' | 'peak' | 'camp' | 'danger' | 'end';
}

const ROUTE_NODES: RouteNode[] = [
  { id: '1', name: '塘口村', elevation: '1750m', elevationValue: 1750, x: 5, fatalities: 0, mainCause: '无重大事故', type: 'start', description: '鳌太线西端起点。' },
  { id: '2', name: '2800营地', elevation: '2800m', elevationValue: 2800, x: 18, fatalities: 2, mainCause: '早期失温', type: 'camp', description: '森林过渡带。' },
  { id: '3', name: '鳌山大梁', elevation: '3476m', x: 30, elevationValue: 3476, fatalities: 12, mainCause: '大风失温/迷路', type: 'peak', description: '高海拔石海区。' },
  { id: '4', name: '导航架', elevation: '3460m', x: 42, elevationValue: 3460, fatalities: 28, mainCause: '极度失温/暴雪', type: 'danger', description: '事故最高发节点。' },
  { id: '5', name: '药王洞', elevation: '3350m', x: 52, elevationValue: 3350, fatalities: 5, mainCause: '夜间失温', type: 'camp', description: '避风岩洞。' },
  { id: '6', name: '荞麦梁', elevation: '3520m', x: 65, elevationValue: 3520, fatalities: 18, mainCause: '滑坠/坠落', type: 'danger', description: '极窄刀锋梁。' },
  { id: '7', name: '万仙阵', elevation: '3564m', x: 78, elevationValue: 3564, fatalities: 15, mainCause: '迷路致死', type: 'peak', description: '玛尼堆阵。' },
  { id: '8', name: '大爷海', elevation: '3590m', x: 88, elevationValue: 3590, fatalities: 8, mainCause: '高反/肺水肿', type: 'peak', description: '高山湖泊。' },
  { id: '9', name: '拔仙台', elevation: '3767m', x: 95, elevationValue: 3767, fatalities: 3, mainCause: '体力枯竭', type: 'end', description: '秦岭最高点。' },
];

export const AotaiMap: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<RouteNode | null>(ROUTE_NODES[3]);

  const SVG_WIDTH = 1000;
  const SVG_HEIGHT = 220; 

  const getY = (elevation: number) => {
    const min = 1500;
    const max = 4000;
    // 映射海拔 1500-4000 到坐标 180-40
    return SVG_HEIGHT - 40 - ((elevation - min) / (max - min)) * (SVG_HEIGHT - 80);
  };

  const getX = (percent: number) => (percent / 100) * SVG_WIDTH;

  const elevationTicks = [1500, 2000, 2500, 3000, 3500, 4000];

  return (
    <div className="bg-white rounded-[40px] p-6 shadow-sm border border-slate-100 overflow-hidden relative">
      <div className="flex flex-col md:flex-row justify-between items-end mb-4 gap-4">
        <div>
          <div className="flex items-center space-x-2 mb-1">
             <Skull size={14} className="text-red-500" />
             <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">垂直剖面与遇难统计</span>
          </div>
          <h3 className="text-xl font-bold text-slate-900">高海拔地形风险面</h3>
        </div>

        {selectedNode && (
          <div className="bg-slate-50 px-5 py-3 rounded-2xl border border-slate-100 flex items-center gap-6">
            <div>
              <p className="text-[9px] font-black text-slate-400 uppercase">当前选择</p>
              <p className="text-sm font-black text-slate-800">{selectedNode.name} <span className="text-orange-600 ml-1">{selectedNode.elevation}</span></p>
            </div>
            <div className="w-px h-8 bg-slate-200"></div>
            <div>
              <p className="text-[9px] font-black text-slate-400 uppercase">主要风险</p>
              <p className="text-sm font-black text-red-600">{selectedNode.mainCause}</p>
            </div>
          </div>
        )}
      </div>

      <div className="relative w-full overflow-x-auto pb-2 custom-scrollbar">
        <div className="min-w-[800px]">
          <svg 
            viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`} 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto select-none overflow-visible"
          >
            {/* 海拔参考刻度线与数字 */}
            {elevationTicks.map(h => (
              <g key={h}>
                <line 
                  x1="45" y1={getY(h)} 
                  x2={SVG_WIDTH} y2={getY(h)} 
                  stroke="#F1F5F9" 
                  strokeWidth="1" 
                  strokeDasharray={h % 1000 === 0 ? "0" : "4 4"}
                />
                <text 
                  x="5" y={getY(h) + 4} 
                  className="fill-slate-300 text-[10px] font-bold"
                >
                  {h}m
                </text>
              </g>
            ))}

            {/* 山体剖面填充 */}
            <path 
              d={`M ${getX(ROUTE_NODES[0].x)},${SVG_HEIGHT - 40} L ${ROUTE_NODES.map(n => `${getX(n.x)},${getY(n.elevationValue)}`).join(' L ')} L ${getX(ROUTE_NODES[ROUTE_NODES.length-1].x)},${SVG_HEIGHT - 40} Z`}
              fill="url(#mountainGradientSmall)"
              className="opacity-40"
            />
            
            <defs>
              <linearGradient id="mountainGradientSmall" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#f97316" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* 地形轮廓线 */}
            <path 
              d={`M ${ROUTE_NODES.map(n => `${getX(n.x)},${getY(n.elevationValue)}`).join(' L ')}`} 
              stroke="#cbd5e1" 
              strokeWidth="2" 
              strokeLinejoin="round" 
              strokeLinecap="round"
            />

            {/* 路线节点 */}
            {ROUTE_NODES.map((node) => {
              const xPos = getX(node.x);
              const yPos = getY(node.elevationValue);
              const isSelected = selectedNode?.id === node.id;
              
              return (
                <g key={node.id} className="cursor-pointer group" onClick={() => setSelectedNode(node)}>
                  {/* 节点外圈装饰 */}
                  {isSelected && (
                    <circle cx={xPos} cy={yPos} r={8} fill="#f97316" fillOpacity="0.1" />
                  )}
                  
                  {/* 核心节点 */}
                  <circle 
                    cx={xPos} cy={yPos} 
                    r={isSelected ? 5 : 3} 
                    fill={isSelected ? '#f97316' : '#94a3b8'} 
                    stroke="white" 
                    strokeWidth="1.5" 
                  />

                  {/* 遇难人数悬浮气泡 */}
                  {node.fatalities > 0 && (
                    <g transform={`translate(${xPos}, ${yPos - 14})`}>
                      <rect x="-8" y="-10" width="16" height="12" rx="3" fill="#ef4444" />
                      <text textAnchor="middle" y="-1" className="fill-white text-[8px] font-black">{node.fatalities}</text>
                    </g>
                  )}
                  
                  {/* 地名标注 */}
                  <text 
                    x={xPos} y={yPos + 18} 
                    textAnchor="middle" 
                    className={`text-[10px] font-bold ${isSelected ? 'fill-slate-900' : 'fill-slate-400'}`}
                  >
                    {node.name}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>
      <p className="text-[10px] text-slate-400 mt-2 italic text-right">
        注：左侧标尺为海拔高度 (meters)；节点上方红色数字为该点及周边区域历史遇难人数统计。
      </p>
    </div>
  );
};
