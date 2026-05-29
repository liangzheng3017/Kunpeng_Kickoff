// ==========================================================================
// 避雷雷达 Mock 数据 — 诈骗案例/风险区域/倒闭商户预警
// ==========================================================================

import type { DangerWarning, RiskZone } from '@/types';

/** 风险预警案例 */
export const dangerWarnings: DangerWarning[] = [
  {
    id: 'warn-1',
    type: 'scam',
    title: '冒充领事馆电话诈骗',
    description: '诈骗分子冒充中国驻外使领馆工作人员，声称你涉及刑事案件/签证问题，要求转账"保证金"或提供银行信息。真实使领馆不会电话通知涉案、不会要求转账。',
    riskLevel: 'high',
    tips: [
      '直接挂断，拨打官方领事保护电话核实',
      '不要提供任何个人信息',
      '记住：使领馆不会通过电话要求转账',
      '全球领事保护热线：+86-10-12308',
    ],
  },
  {
    id: 'warn-2',
    type: 'scam',
    title: '租房"钓鱼"押金诈骗',
    description: '在社交媒体/租房群看到"超低价"好房源，对方以"看房人多需要先交押金锁定"为由要求转账。付款后对方失联，房屋根本不存在或照片盗用。',
    riskLevel: 'high',
    tips: [
      '务必实地看房或视频连线核实',
      '不要在看房前支付任何费用',
      '使用学校官方合作的租房平台',
      '核实房东身份：要求出示ID+房产证明',
    ],
  },
  {
    id: 'warn-3',
    type: 'scam',
    title: '换汇"杀猪盘"',
    description: '微信群中有人以"急出美金""汇率优惠"为由换汇，小额交易建立信任后，诱导大额转账后消失。常见于新生季。',
    riskLevel: 'high',
    tips: [
      '只通过银行正规渠道换汇',
      '不要轻信"熟人介绍"的换汇渠道',
      '警惕超高汇率诱惑',
      '大额换汇建议银行电汇或支付宝跨境汇款',
    ],
  },
  {
    id: 'warn-4',
    type: 'unsafe_area',
    title: '布鲁克林 Brownsville 区域',
    description: '该区域犯罪率高于纽约市平均3倍，夜间不建议逗留。多名学生反馈晚上8点后被尾随、遭遇抢劫未遂。',
    riskLevel: 'high',
    location: 'Brooklyn, Brownsville',
    tips: ['如必须前往，白天结伴出行', '避免佩戴显眼贵重物品', '保持手机电量充足'],
  },
  {
    id: 'warn-5',
    type: 'unsafe_area',
    title: '南洛杉矶 Vernon 区域',
    description: '工业区夜间人流稀少，路灯覆盖率低，近期发生多起夜间抢劫事件。',
    riskLevel: 'high',
    location: 'Los Angeles, Vernon',
    tips: ['夜间避免独自步行', '使用Uber/Lyft而非步行', '走主要道路，避免小巷'],
  },
  {
    id: 'warn-6',
    type: 'unsafe_area',
    title: '芝加哥 South Side 部分区域',
    description: '某些街区帮派活动活跃，警方建议非必要不前往。部分公交线路夜间运营不安全。',
    riskLevel: 'high',
    location: 'Chicago, Englewood/West Englewood',
    tips: ['远离高中校园附近放学时段', '城铁夜间尽量乘坐第一节车厢（靠近司机）'],
  },
  {
    id: 'warn-7',
    type: 'closed_business',
    title: 'NYU附近"天一饼店"已关闭',
    description: 'Google Maps上仍显示营业的"天一饼店"已于2025年11月永久关闭，勿前往。',
    riskLevel: 'medium',
    tips: ['确认商家营业状态可用Yelp最新评论', 'Gmaps上的"营业中"可能不准确'],
  },
  {
    id: 'warn-8',
    type: 'fraud',
    title: '盗刷信用卡"刷单"诱饵',
    description: '以"在家兼职日结$200"为诱饵，要求你用自己的信用卡购买礼品卡并交出卡号密码。本质是洗钱+盗刷，参与者可能被控金融犯罪。',
    riskLevel: 'high',
    tips: ['任何要求购买礼品卡并交出信息的"工作"都是诈骗', '合法兼职不会让你垫付'],
  },
  {
    id: 'warn-9',
    type: 'scam',
    title: '假冒房东"二房东"转租陷阱',
    description: '二房东未经房东允许转租，收押金后跑路，真正房东收回房屋，租客钱财两空。',
    riskLevel: 'high',
    tips: ['要求查看房东同意转租的书面证明', '最好直接与房东签约', '押金不要超过一个月租金'],
  },
  {
    id: 'warn-10',
    type: 'unsafe_area',
    title: '伦敦 Elephant & Castle 夜间',
    description: '地铁站附近夜间有扒窃团伙活动，手机被抢走案例频发。',
    riskLevel: 'medium',
    location: 'London, Elephant & Castle',
    tips: ['手机不要拿在手里走路', '背包背在前面'],
  },
];

/** 风险区域热力数据 (简化为城市级别) */
export const riskZones: RiskZone[] = [
  { id: 'zone-1', name: 'Brownsville', city: '纽约', country: '美国', riskLevel: 85, riskType: '暴力犯罪', description: '犯罪率高于城市平均3倍', incidents: 47 },
  { id: 'zone-2', name: 'Vernon', city: '洛杉矶', country: '美国', riskLevel: 72, riskType: '抢劫盗窃', description: '夜间孤独区域抢劫频发', incidents: 31 },
  { id: 'zone-3', name: 'Englewood', city: '芝加哥', country: '美国', riskLevel: 90, riskType: '帮派活动', description: '警方发布安全警示区域', incidents: 58 },
  { id: 'zone-4', name: 'Elephant & Castle', city: '伦敦', country: '英国', riskLevel: 65, riskType: '扒窃团伙', description: '地铁站附近扒窃密集', incidents: 22 },
  { id: 'zone-5', name: 'Redfern', city: '悉尼', country: '澳大利亚', riskLevel: 55, riskType: '夜间骚扰', description: '部分街道夜间安全建议', incidents: 15 },
  { id: 'zone-6', name: 'DTES', city: '温哥华', country: '加拿大', riskLevel: 78, riskType: '流浪者聚集', description: '流浪者密集区域安全建议', incidents: 35 },
  { id: 'zone-7', name: 'Kings Cross', city: '悉尼', country: '澳大利亚', riskLevel: 45, riskType: '酒吧区纠纷', description: '周末夜间酒吧区注意安全', incidents: 18 },
  { id: 'zone-8', name: 'Jamaica', city: '纽约', country: '美国', riskLevel: 68, riskType: '地铁站周边', description: '部分地铁站夜间安全注意', incidents: 29 },
];

/** 常见诈骗话术库 */
export const scamPhrases = [
  '您好，这里是中国驻XX大使馆...',
  '您的签证出现问题，请立即处理...',
  '您有一个重要包裹被海关扣留...',
  '恭喜您中奖！请提供银行信息领取奖金...',
  '急出美金，汇率优惠，支付宝秒到...',
  '先交押金锁定房源，其他人也在抢...',
  '在家兼职，日赚$200，只需按要求购买礼品卡...',
  '我是房东，目前人在国外，先转账我把钥匙寄给你...',
  '您的SSN出现异常使用记录...',
  '提供代写服务，100%通过，先付定金...',
];
