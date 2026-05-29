// ==========================================================================
// AI 行程规划 Mock 数据 — 签证/机票/住宿/落地清单
// ==========================================================================

import type { ChecklistItem } from '@/types';

/** 模拟用户输入配置 */
export interface PlannerInput {
  targetSchool: string;
  targetCountry: string;
  targetCity: string;
  budget: number; // 月预算 RMB
  habits: string[];
  departureDate: string;
}

export const defaultPlannerInput: PlannerInput = {
  targetSchool: '纽约大学 (NYU)',
  targetCountry: '美国',
  targetCity: '纽约',
  budget: 8000,
  habits: ['自己做饭', '合租', '地铁通勤', '注重安全'],
  departureDate: '2026-08-15',
};

/** 可选学校列表 */
export const schoolOptions = [
  { value: 'nyu', label: '纽约大学 (NYU)', country: '美国', city: '纽约' },
  { value: 'columbia', label: '哥伦比亚大学', country: '美国', city: '纽约' },
  { value: 'ucl', label: '伦敦大学学院 (UCL)', country: '英国', city: '伦敦' },
  { value: 'kcl', label: '国王学院 (KCL)', country: '英国', city: '伦敦' },
  { value: 'sydney', label: '悉尼大学', country: '澳大利亚', city: '悉尼' },
  { value: 'unimelb', label: '墨尔本大学', country: '澳大利亚', city: '墨尔本' },
  { value: 'utoronto', label: '多伦多大学', country: '加拿大', city: '多伦多' },
  { value: 'ubc', label: 'UBC', country: '加拿大', city: '温哥华' },
  { value: 'nus', label: '新加坡国立大学 (NUS)', country: '新加坡', city: '新加坡' },
  { value: 'waseda', label: '早稻田大学', country: '日本', city: '东京' },
];

/** 生活习惯可选项 */
export const habitOptions = [
  { value: '自己做饭', label: '🍳 自己做饭', category: 'dining' },
  { value: '外卖为主', label: '🥡 外卖为主', category: 'dining' },
  { value: '食堂就餐', label: '🍽️ 食堂就餐', category: 'dining' },
  { value: '合租', label: '🏠 合租', category: 'housing' },
  { value: '独居', label: '🔑 独居', category: 'housing' },
  { value: '学生宿舍', label: '🏫 学生宿舍', category: 'housing' },
  { value: '地铁通勤', label: '🚇 地铁通勤', category: 'transport' },
  { value: '步行可达', label: '🚶 步行可达', category: 'transport' },
  { value: '公交出行', label: '🚌 公交出行', category: 'transport' },
  { value: '注重安全', label: '🛡️ 注重安全', category: 'lifestyle' },
  { value: '社交活跃', label: '🎉 社交活跃', category: 'lifestyle' },
  { value: '安静学习', label: '📚 安静学习', category: 'lifestyle' },
];

/** AI 生成的 Checklist 数据 */
export const mockChecklist: ChecklistItem[] = [
  // ---- 签证阶段 ----
  {
    id: 'visa-1',
    category: 'visa',
    title: '确认I-20表格信息',
    description: '检查姓名、专业、入学日期是否与护照一致，确保SEVIS信息正确',
    deadline: '收到后3天内',
    priority: 'high',
    tips: ['拍照备份I-20所有页面', '确认第11项已签名'],
    iconName: 'FileText',
  },
  {
    id: 'visa-2',
    category: 'visa',
    title: '缴纳SEVIS I-901费',
    description: '在线缴纳$350 SEVIS费并保存收据，面签时需出示',
    deadline: '面签前至少3天',
    priority: 'high',
    tips: ['官网: fmjfee.com', '支持信用卡支付'],
    iconName: 'CreditCard',
  },
  {
    id: 'visa-3',
    category: 'visa',
    title: '填写DS-160表格',
    description: '在线填写非移民签证申请表，上传符合要求的证件照',
    deadline: '面签前1周',
    priority: 'high',
    tips: ['照片要求: 白底 51mm×51mm', '每次填完保存Application ID'],
    iconName: 'ClipboardList',
  },
  {
    id: 'visa-4',
    category: 'visa',
    title: '预约面签并缴费',
    description: '在CGI FedEx系统预约面签时间，缴纳$185签证费',
    deadline: '入学前90天内',
    priority: 'high',
  },
  {
    id: 'visa-5',
    category: 'visa',
    title: '准备面签材料',
    description: '护照、I-20、DS-160确认页、SEVIS收据、财力证明、成绩单',
    deadline: '面签当天',
    priority: 'medium',
    tips: ['建议用透明文件袋分类装好', '准备3分钟英文自我介绍'],
  },
  // ---- 机票阶段 ----
  {
    id: 'flight-1',
    category: 'flight',
    title: '购买国际机票',
    description: '建议提前2-3个月购票，8月底为旺季价格较高',
    deadline: '出发前60-90天',
    priority: 'high',
    tips: ['推荐周三/周四出发，票价较低', '留学生票通常可带2件23kg行李'],
  },
  {
    id: 'flight-2',
    category: 'flight',
    title: '预订接机服务',
    description: '到达后如何从机场到住处？可预订学校接机、机场大巴或拼车',
    deadline: '出发前2周',
    priority: 'medium',
    tips: ['NYU新生通常有免费接机', 'Uber从JFK到曼哈顿约$60-80'],
  },
  {
    id: 'flight-3',
    category: 'flight',
    title: '行李打包清单',
    description: '按航空公司行李额度规划，重点带转换插头、常用药、少量现金',
    deadline: '出发前1周',
    priority: 'medium',
  },
  // ---- 住宿阶段 ----
  {
    id: 'housing-1',
    category: 'housing',
    title: '确认住宿安排',
    description: '学生宿舍 vs 校外公寓 vs 寄宿家庭，根据预算和生活习惯选择',
    deadline: '出发前45天',
    priority: 'high',
    tips: ['校外租房用Zillow/StreetEasy查价比', '合租可降低40-60%租金'],
    iconName: 'Building2',
  },
  {
    id: 'housing-2',
    category: 'housing',
    title: '签署租房合同',
    description: '仔细审核租约条款 —— 押金、维修责任、转租限制、水电费分摊',
    deadline: '出发前30天',
    priority: 'high',
    tips: ['押金一般为1-2个月租金', '确认是否含水电暖气'],
  },
  {
    id: 'housing-3',
    category: 'housing',
    title: '购买租房保险',
    description: '大部分公寓要求租户购买Renter\'s Insurance，约$10-20/月',
    deadline: '入住前',
    priority: 'medium',
  },
  // ---- 落地必办 ----
  {
    id: 'arrival-1',
    category: 'arrival',
    title: '校内报到注册',
    description: '携带护照、I-20到国际学生办公室报到，激活SEVIS记录',
    deadline: '入境后30天内',
    priority: 'high',
  },
  {
    id: 'arrival-2',
    category: 'arrival',
    title: '办理美国手机号',
    description: '推荐T-Mobile/AT&T/Visible，套餐$25-50/月',
    deadline: '落地后3天内',
    priority: 'high',
    tips: ['Mint Mobile性价比最高，$15/月起', '部分套餐含中美通话分钟数'],
  },
  {
    id: 'arrival-3',
    category: 'arrival',
    title: '开设银行账户',
    description: 'Chase或Bank of America均可，需护照+I-20+学校录取信',
    deadline: '落地后1周内',
    priority: 'high',
    tips: ['部分银行有学生账户免月费', '同时申请信用卡积累信用记录'],
  },
  {
    id: 'arrival-4',
    category: 'arrival',
    title: '购买医疗保险/激活学校保险',
    description: '美国医疗昂贵，务必确保保险覆盖生效，了解校医院使用方法',
    deadline: '落地后立即',
    priority: 'high',
    iconName: 'Shield',
  },
  {
    id: 'arrival-5',
    category: 'arrival',
    title: '办理学生交通卡',
    description: 'NYU学生可享受地铁月卡折扣，约$65/30天（正常价$132）',
    deadline: '落地后1周内',
    priority: 'medium',
  },
  {
    id: 'arrival-6',
    category: 'arrival',
    title: '熟悉周边环境',
    description: '步行探索住所周边1km —— 超市、药店、中餐馆、地铁站、警察局',
    deadline: '落地后1周内',
    priority: 'medium',
    tips: ['标记最近的CVS/Walgreens药店位置', '加入学校中国学生会微信群'],
  },
];

/** Checklist 按类别分组 */
export const checklistCategories = [
  { key: 'visa' as const, label: '签证准备', icon: 'FileText' },
  { key: 'flight' as const, label: '机票行程', icon: 'Plane' },
  { key: 'housing' as const, label: '住宿安排', icon: 'Building2' },
  { key: 'arrival' as const, label: '落地必办', icon: 'MapPin' },
];
