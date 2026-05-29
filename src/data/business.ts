// ==========================================================================
// 商业模式 Mock 数据 — 收入模型/竞品对比/运营路线图
// ==========================================================================

import type { RevenueStream, RoadmapPhase, CoreMetric, CompetitorComparison, FeatureItem } from '@/types';

// ==========================================================================
// 收入模型 — 三边生态收入流
// ==========================================================================

export const revenueStreams: RevenueStream[] = [
  {
    source: 'C端会员订阅',
    payer: '留学生用户',
    valueProposition: '解锁AI行程规划高级功能、硬标数据深度对比、独家避雷预警',
    profitPoint: '基础功能免费，高级功能$4.99/月，边际成本近乎为零',
    estimatedShare: 40,
    iconName: 'User',
  },
  {
    source: 'B端商家入驻',
    payer: '留学服务机构/公寓/航司',
    valueProposition: '精准触达25万+准留学生决策期流量，认证商家获得硬标检测徽章',
    profitPoint: '基础入驻$99/月，认证硬标检测套餐$499/月',
    estimatedShare: 35,
    iconName: 'Building2',
  },
  {
    source: '数据服务 API',
    payer: '留学中介/国际学校',
    valueProposition: '城市安全数据、院校周边生活成本指数、签证拒签率趋势等数据订阅',
    profitPoint: 'API按调用量计费，$0.01/次，高毛利数据服务',
    estimatedShare: 15,
    iconName: 'BarChart3',
  },
  {
    source: '翻译增值服务',
    payer: '留学生用户',
    valueProposition: 'AI合同翻译+法律风险审查，单次付费$9.99/份',
    profitPoint: 'AI自动化完成，单次服务成本<$0.05',
    estimatedShare: 5,
    iconName: 'FileText',
  },
  {
    source: '品牌广告合作',
    payer: '航空公司/保险/通信',
    valueProposition: '高意向留学生流量，购买转化率远超通用平台',
    profitPoint: 'CPC $0.5-1.0 或月度品牌广告位$2000',
    estimatedShare: 5,
    iconName: 'Megaphone',
  },
];

// ==========================================================================
// 单位经济模型
// ==========================================================================

export const unitEconomics = {
  ltv: 89.99,       // 用户生命周期价值 ($)
  cac: 2.50,        // 用户获取成本 ($)
  ltvCacRatio: 36,   // LTV/CAC 比率
  grossMargin: 0.75, // 毛利率
  retentionRate: 0.62, // 年度留存率
  arpu: 14.99,       // 每用户平均月收入 ($)
  payConversion: 0.08, // 付费转化率
  monthlyActiveUsers: 25000, // 月活
  avgSessionMinutes: 8.5, // 平均使用时长 (分钟)
};

// ==========================================================================
// 核心数据亮点 (首页展示)
// ==========================================================================

export const coreMetrics: CoreMetric[] = [
  { label: '决策效率提升', value: 80, suffix: '%', description: '用户出行准备时间平均缩短比例' },
  { label: '种子用户', value: 3200, suffix: '+', description: 'Beta版已积累的注册用户数' },
  { label: '毛利率', value: 75, suffix: '%', description: '预估规模化后综合毛利率' },
  { label: 'LTV/CAC', value: 36, suffix: 'x', description: '用户生命周期价值与获客成本比值' },
];

// ==========================================================================
// 竞品对比
// ==========================================================================

export const competitorComparisons: CompetitorComparison[] = [
  {
    feature: '信息维度',
    kickoff: '硬标（实测）+软标（用户Tag）双维度',
    xiaohongshu: '纯软标（主观体验贴）',
    dianping: '好评/差评二元打分',
    xuelvjia: '房源基础信息+简单评分',
  },
  {
    feature: '数据客观性',
    kickoff: '分贝仪/网速仪/实地测量，防作弊机制',
    xiaohongshu: '依赖KOL个人主观评价',
    dianping: '存在刷分现象',
    xuelvjia: '商家自行填写，缺乏验证',
  },
  {
    feature: '目标人群',
    kickoff: '精准聚焦15-25岁中国留学生',
    xiaohongshu: '泛年轻女性用户',
    dianping: '全年龄本地生活用户',
    xuelvjia: '海外租房学生',
  },
  {
    feature: 'AI集成',
    kickoff: 'AI行程规划+合同翻译+个性化推荐',
    xiaohongshu: '基础AI搜索辅助',
    dianping: '基础推荐算法',
    xuelvjia: '无AI能力',
  },
  {
    feature: '避雷机制',
    kickoff: '众包预警+区域热力图+诈骗话术库',
    xiaohongshu: '用户自发避雷贴，无系统整理',
    dianping: '差评机制',
    xuelvjia: '无专项避雷功能',
  },
  {
    feature: '社区匹配',
    kickoff: '同校/同航班/同城搭子智能匹配',
    xiaohongshu: '兴趣推荐关注',
    dianping: '无社交功能',
    xuelvjia: '无社区功能',
  },
  {
    feature: '盈利模式',
    kickoff: 'B2B2C多边生态（订阅+入驻+数据服务）',
    xiaohongshu: '广告+电商',
    dianping: '商家广告+团购抽成',
    xuelvjia: '商家佣金+房源展示费',
  },
];

// ==========================================================================
// 运营路线图 — 三阶段发展路径
// ==========================================================================

export const roadmapPhases: RoadmapPhase[] = [
  {
    id: 'phase-1',
    phase: 1,
    title: 'MVP 验证阶段',
    period: '2026.Q1 — 2026.Q3',
    description: '以最小可行产品验证「硬标+软标」双维度模式是否解决留学生真实痛点。聚焦1-2个核心城市，通过种子用户建立数据采集网络。',
    milestones: [
      '完成纽约、伦敦两大城市硬标数据首批采集（200+点位）',
      '上线AI行程规划1.0，覆盖签证+机票+住宿+落地4大模块',
      '积累3,000+种子用户，完播率>65%',
      '搭建社区层MVP：标签标注+问答功能',
      '与5家留学机构达成B端合作意向',
    ],
    status: 'completed',
  },
  {
    id: 'phase-2',
    phase: 2,
    title: '商业闭环阶段',
    period: '2026.Q4 — 2027.Q2',
    description: '完成商业模式验证，建立B2B2C三边网络效应。C端打磨付费转化漏斗，B端验证入驻商家ROI，数据服务API对外开放。',
    milestones: [
      '付费用户突破2,000，月度订阅收入$10K+',
      'B端入驻商家达到80家，含航司/公寓/留学中介',
      '拓展至10个热门留学城市（+悉尼/墨尔本/多伦多/温哥华等）',
      '合同AI翻译+风险审查功能上线',
      '数据服务API发布，对接5家B端客户',
      'A轮融资Close，估值$20M',
    ],
    status: 'in_progress',
  },
  {
    id: 'phase-3',
    phase: 3,
    title: '规模复制阶段',
    period: '2027.Q3 — 2028.Q4',
    description: '将已验证的「数据采集→AI处理→用户增长→商业变现」飞轮复制至更多国家和城市，成为中国留学生出国决策的第一入口。',
    milestones: [
      '覆盖全球30+热门留学城市',
      '月活突破50万，付费转化率达10%',
      'B端入驻商家500+，数据API客户50+',
      '推出「家人版」功能：家长端安全追踪+消费管理',
      '年收入突破$5M，筹备B轮融资',
      '品牌认知度：准留学生首选平台TOP3',
    ],
    status: 'planned',
  },
];

// ==========================================================================
// 首页功能特性矩阵
// ==========================================================================

export const featureItems: FeatureItem[] = [
  {
    id: 'feat-1',
    title: 'AI 行程规划',
    description: '输入学校和偏好，AI自动生成签证/机票/住宿/落地全流程Checklist，告别手忙脚乱',
    iconName: 'Calendar',
    pagePath: '/planner',
    highlights: ['智能时间线', '优先级排序', '提醒推送'],
  },
  {
    id: 'feat-2',
    title: '硬标数据库',
    description: '告别模糊好评，用分贝仪/网速仪/实地测量的硬数据对比住宿与商圈',
    iconName: 'BarChart3',
    pagePath: '/metrics',
    highlights: ['四维数据', '客观量化', '防作弊'],
  },
  {
    id: 'feat-3',
    title: '合同翻译审查',
    description: 'AI翻译租房合同，提取隐形条款和风险点，保护你的权益',
    iconName: 'FileText',
    pagePath: '/radar',
    highlights: ['OCR识别', 'AI翻译', '风险标注'],
  },
  {
    id: 'feat-4',
    title: '避雷雷达',
    description: '诈骗话术库+风险区域热力图+倒闭商户预警，安全留学不踩坑',
    iconName: 'Target',
    pagePath: '/radar',
    highlights: ['众包预警', '区域热力', '实时更新'],
  },
  {
    id: 'feat-5',
    title: '社区标签',
    description: '用数十个量化标签记录真实体验——支持支付宝？分量足？隔音好？全标注',
    iconName: 'MessageCircle',
    pagePath: '/community',
    highlights: ['标签云', '正负情感', '搜索筛选'],
  },
  {
    id: 'feat-6',
    title: '同频搭子',
    description: '匹配同校/同航班/同公寓的伙伴，出国不孤单',
    iconName: 'Users',
    pagePath: '/community',
    highlights: ['智能匹配', '共同标签', '安全社交'],
  },
];
