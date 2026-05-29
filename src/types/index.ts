// ==========================================================================
// Kickoff 共享类型定义
// ==========================================================================

/** 优先级 */
export type Priority = 'high' | 'medium' | 'low';

/** 行前检查清单项 */
export interface ChecklistItem {
  id: string;
  category: 'visa' | 'flight' | 'housing' | 'arrival';
  title: string;
  description: string;
  deadline: string;
  priority: Priority;
  tips?: string[];
  iconName?: string;
}

/** 硬标指标 */
export interface MetricItem {
  name: string;
  value: string;
  standard: string;
  iconName?: string;
  description?: string;
}

/** 硬标类别 */
export interface HardMetric {
  category: '住宿' | '餐饮' | '交通' | '医疗';
  categoryEn: 'housing' | 'dining' | 'transport' | 'medical';
  description: string;
  metrics: MetricItem[];
}

/** 风险预警项 */
export interface DangerWarning {
  id: string;
  type: 'scam' | 'unsafe_area' | 'closed_business' | 'fraud';
  title: string;
  description: string;
  riskLevel: Priority;
  location?: string;
  date?: string;
  tips: string[];
}

/** 风险区域 */
export interface RiskZone {
  id: string;
  name: string;
  city: string;
  country: string;
  riskLevel: number; // 1-100
  riskType: string;
  description: string;
  incidents: number;
}

/** 软标标签 */
export interface SoftTag {
  id: string;
  name: string;
  category: 'food' | 'transport' | 'service' | 'environment' | 'safety' | 'social';
  count: number;
  sentiment: 'positive' | 'neutral' | 'negative';
}

/** 搭子匹配 */
export interface BuddyMatch {
  id: string;
  name: string;
  avatar: string;
  school: string;
  destination: string;
  departureDate: string;
  commonTags: string[];
  matchScore: number;
  bio: string;
}

/** 问答项 */
export interface QAItem {
  id: string;
  question: string;
  answer: string;
  author: string;
  tags: string[];
  likes: number;
  date: string;
}

/** 收入流 */
export interface RevenueStream {
  source: string;
  payer: string;
  valueProposition: string;
  profitPoint: string;
  estimatedShare: number; // 百分比
  iconName?: string;
}

/** 路线图阶段 */
export interface RoadmapPhase {
  id: string;
  phase: number;
  title: string;
  period: string;
  description: string;
  milestones: string[];
  status: 'completed' | 'in_progress' | 'planned';
}

/** 功能特性卡片 */
export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  pagePath: string;
  highlights: string[];
}

/** 核心指标 */
export interface CoreMetric {
  label: string;
  value: number;
  suffix: string;
  prefix?: string;
  description: string;
}

/** 竞品对比 */
export interface CompetitorComparison {
  feature: string;
  kickoff: string;
  xiaohongshu: string;
  dianping: string;
  xuelvjia: string;
}
