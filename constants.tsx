
import { FatalityData, CauseData, RegionRisk } from './types';

// 数据来源标注
export const DATA_SOURCE = "数据来源：中国探险协会 (CATA) 2021-2024 年度报告";
export const CLIMATE_SOURCE = "气象实测：太白山气象站 (海拔3410m) 2017年5月4日实测数据 & 秦岭垂直气候观测记录";
export const SURVEY_SOURCE = "调研来源：中国青年报社会调查中心联合问卷网（样本量：2001人）";

// 2022-2024 年各月事故发生情况数据 (根据图片提取)
export const MONTHLY_ACCIDENTS_DATA = [
  { month: '1月', '2022年': 19, '2023年': 14, '2024年': 14 },
  { month: '2月', '2022年': 32, '2023年': 20, '2024年': 12 },
  { month: '3月', '2022年': 24, '2023年': 15, '2024年': 13 },
  { month: '4月', '2022年': 33, '2023年': 18, '2024年': 17 },
  { month: '5月', '2022年': 29, '2023年': 24, '2024年': 37 },
  { month: '6月', '2022年': 45, '2023年': 35, '2024年': 40 },
  { month: '7月', '2022年': 51, '2023年': 85, '2024年': 29 },
  { month: '8月', '2022年': 38, '2023年': 55, '2024年': 35 },
  { month: '9月', '2022年': 17, '2023年': 22, '2024年': 21 },
  { month: '10月', '2022年': 25, '2023年': 33, '2024年': 44 },
  { month: '11月', '2022年': 25, '2023年': 41, '2024年': 35 },
  { month: '12月', '2022年': 31, '2023年': 54, '2024年': 37 },
];

// 2024年事故类型发生情况 (根据图片提取)
export const ACCIDENT_TYPES_2024 = [
  { name: '迷路', value: 113, percentage: '34%', color: '#3b82f6' },
  { name: '被困', value: 95, percentage: '28%', color: '#f97316' },
  { name: '滑坠', value: 39, percentage: '12%', color: '#eab308' },
  { name: '落水', value: 28, percentage: '8%', color: '#22c55e' },
  { name: '其他', value: 60, percentage: '18%', color: '#14b8a6' }
];

// 暑期户外安全诱因调研数据
export const SUMMER_SURVEY_DATA = [
  { factor: '缺乏专业户外装备和安全知识', percentage: 65.4, rank: 1 },
  { factor: '盲目跟风“网红”路线，风险预判不足', percentage: 58.2, rank: 2 },
  { factor: '对极端天气预警重视程度不足', percentage: 52.1, rank: 3 },
  { factor: '身体素质不佳或带病强行参加', percentage: 44.8, rank: 4 },
  { factor: '缺乏通讯保障和紧急联络工具', percentage: 43.2, rank: 5 },
  { factor: '对救援力量存在过度依赖心理', percentage: 35.6, rank: 6 }
];

// 失温生理风险数据
export const HYPOTHERMIA_RISK_DATA = [
  { temp: 37, hallucination: 0, coma: 0, death: 0, stage: '正常' },
  { temp: 35, hallucination: 5, coma: 0, death: 0, stage: '轻度' },
  { temp: 33, hallucination: 35, coma: 10, death: 2, stage: '中度' },
  { temp: 31, hallucination: 85, coma: 45, death: 15, stage: '中重度' },
  { temp: 29, hallucination: 40, coma: 85, death: 55, stage: '重度' },
  { temp: 27, hallucination: 10, coma: 98, death: 88, stage: '极重度' },
  { temp: 25, hallucination: 0, coma: 100, death: 99, stage: '临床死亡' }
];

// 鳌太线“黑色五一”期间 24小时真实气象剧变特征数据
export const REAL_HISTORY_24H = [
  { time: '00:00', temp: -5, rainfall: 0.1, desc: '寒冷' },
  { time: '04:00', temp: -8, rainfall: 0.5, desc: '极寒' },
  { time: '08:00', temp: 2, rainfall: 2.4, desc: '风雪开始' },
  { time: '12:00', temp: 8, rainfall: 1.2, desc: '短暂回暖' },
  { time: '16:00', temp: -12, rainfall: 15.6, desc: '极端寒流爆发' },
  { time: '20:00', temp: -18, rainfall: 8.2, desc: '风雪肆虐' },
  { time: '24:00', temp: -22, rainfall: 4.5, desc: '深寒' }
];

// 鳌太线高海拔年度真实气象均值
export const YEARLY_CLIMATE = [
  { month: '1月', temp: -25, rain: 8, risk: '生命禁区' },
  { month: '3月', temp: -18, rain: 15, risk: '强风期' },
  { month: '5月', temp: -5, rain: 42, risk: '突发暴雪期' },
  { month: '7月', temp: 12, rain: 115, risk: '雷暴季' },
  { month: '9月', temp: 6, rain: 90, risk: '连阴雨期' },
  { month: '11月', temp: -15, rain: 20, risk: '封冻期' }
];

export const COMPARISON_DATA = [
  { category: '事故总数', '2021年': 352, '2022年': 372, '2023年': 425, '2024年': 335 },
  { category: '受伤人数', '2021年': 128, '2022年': 194, '2023年': 320, '2024年': 92 },
  { category: '死亡人数', '2021年': 308, '2022年': 162, '2023年': 156, '2024年': 84 },
  { category: '失踪人数', '2021年': 19, '2022年': 52, '2023年': 26, '2024年': 11 }
];

export const VENUE_DATA = [
  { name: '山地野外', value: 274, percentage: '82%' },
  { name: '水域环境', value: 39, percentage: '12%' },
  { name: '其他区域', value: 22, percentage: '6%' }
];

export const WARM_COLORS = {
  primary: '#f97316',
  secondary: '#ea580c',
  accent: '#facc15',
  danger: '#ef4444',
  chart: ['#f97316', '#fb923c', '#fdba74', '#fed7aa']
};

export const REGION_RISKS: RegionRisk[] = [
  { name: '鳌太线核心区', count: 50, dangerLevel: 'Extreme' },
  { name: '贡嘎山徒步线', count: 28, dangerLevel: 'High' },
  { name: '四姑娘山地区', count: 22, dangerLevel: 'High' },
  { name: '珠峰东绒布冰川', count: 12, dangerLevel: 'Extreme' }
];
