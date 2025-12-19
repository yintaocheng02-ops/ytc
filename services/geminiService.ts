
import { GoogleGenAI } from "@google/genai";

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    // 准则：必须使用 new GoogleGenAI({ apiKey: process.env.API_KEY })
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }

  async getSafetyAdvice(route: string, experience: string, equipment: string) {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: `作为一个户外运动安全专家，请针对以下情况提供详细的安全分析和建议：
路线：${route}
经验水平：${experience}
携带装备：${equipment}

重点分析：该路线的历史风险（特别是鳌太线）、可能遇到的气候剧变、以及针对个人的预防措施。请以专业、严谨且易读的格式返回建议。`,
        config: {
          thinkingConfig: { thinkingBudget: 2048 }
        }
      });
      return response.text;
    } catch (error) {
      console.error("Gemini API Error:", error);
      return "抱歉，分析服务暂时不可用，请稍后再试。";
    }
  }

  async analyzeCauseTrend(data: any) {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `分析以下中国户外徒步死亡数据并总结主要趋势和深层原因：${JSON.stringify(data)}。请给出未来三年的风险预测和政策建议。`,
      });
      return response.text;
    } catch (error) {
      console.error("Gemini API Error:", error);
      return "无法获取智能分析趋势。";
    }
  }
}

export const geminiService = new GeminiService();
