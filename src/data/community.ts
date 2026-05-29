// ==========================================================================
// 社区层 Mock 数据 — 软标标签/搭子匹配/本地通问答
// ==========================================================================

import type { SoftTag, BuddyMatch, QAItem } from '@/types';

/** 软标标签云数据 */
export const softTags: SoftTag[] = [
  // 餐饮类
  { id: 'tag-1', name: '支持支付宝', category: 'service', count: 327, sentiment: 'positive' },
  { id: 'tag-2', name: '分量足', category: 'food', count: 284, sentiment: 'positive' },
  { id: 'tag-3', name: '口味正宗', category: 'food', count: 256, sentiment: 'positive' },
  { id: 'tag-4', name: '上菜慢', category: 'service', count: 189, sentiment: 'negative' },
  { id: 'tag-5', name: '太咸了', category: 'food', count: 142, sentiment: 'negative' },
  { id: 'tag-6', name: '素食友好', category: 'food', count: 98, sentiment: 'positive' },
  { id: 'tag-7', name: '麻辣够劲', category: 'food', count: 203, sentiment: 'positive' },
  { id: 'tag-8', name: '不收小费', category: 'service', count: 312, sentiment: 'positive' },
  // 交通类
  { id: 'tag-9', name: '地铁5分钟', category: 'transport', count: 365, sentiment: 'positive' },
  { id: 'tag-10', name: '末班车太早', category: 'transport', count: 178, sentiment: 'negative' },
  { id: 'tag-11', name: '共享单车多', category: 'transport', count: 221, sentiment: 'positive' },
  { id: 'tag-12', name: '公交不准时', category: 'transport', count: 156, sentiment: 'negative' },
  // 环境类
  { id: 'tag-13', name: '隔音差', category: 'environment', count: 267, sentiment: 'negative' },
  { id: 'tag-14', name: '有蟑螂', category: 'environment', count: 231, sentiment: 'negative' },
  { id: 'tag-15', name: '阳光好', category: 'environment', count: 184, sentiment: 'positive' },
  { id: 'tag-16', name: '暖气足', category: 'environment', count: 295, sentiment: 'positive' },
  { id: 'tag-17', name: '网速快', category: 'environment', count: 312, sentiment: 'positive' },
  { id: 'tag-18', name: '没空调', category: 'environment', count: 143, sentiment: 'negative' },
  // 安全类
  { id: 'tag-19', name: '夜路安全', category: 'safety', count: 278, sentiment: 'positive' },
  { id: 'tag-20', name: '路灯暗', category: 'safety', count: 156, sentiment: 'negative' },
  { id: 'tag-21', name: '有门禁', category: 'safety', count: 223, sentiment: 'positive' },
  { id: 'tag-22', name: '警力巡逻', category: 'safety', count: 145, sentiment: 'positive' },
  // 社交类
  { id: 'tag-23', name: '国人扎堆', category: 'social', count: 342, sentiment: 'neutral' },
  { id: 'tag-24', name: '华人超市近', category: 'social', count: 289, sentiment: 'positive' },
  { id: 'tag-25', name: '社交活跃', category: 'social', count: 198, sentiment: 'positive' },
  { id: 'tag-26', name: 'local氛围浓', category: 'social', count: 167, sentiment: 'positive' },
];

/** 同频搭子匹配数据 */
export const buddyMatches: BuddyMatch[] = [
  {
    id: 'buddy-1',
    name: '张同学',
    avatar: '',
    school: '上海外国语大学',
    destination: '纽约大学 (NYU)',
    departureDate: '2026-08-16',
    commonTags: ['游戏开黑', '自己做饭', '周末旅行', '纽约'],
    matchScore: 94,
    bio: 'Steam库存500+，什么游戏都能陪你打。做饭水平中等偏上，求室友一起探索纽约美食！',
  },
  {
    id: 'buddy-2',
    name: '李同学',
    avatar: '',
    school: '深圳中学',
    destination: '哥伦比亚大学',
    departureDate: '2026-08-14',
    commonTags: ['健身达人', '篮球', '早睡早起', '纽约'],
    matchScore: 88,
    bio: '每天健身房2小时，会做健身餐。找运动搭子和靠谱室友~',
  },
  {
    id: 'buddy-3',
    name: '王同学',
    avatar: '',
    school: '北京四中',
    destination: 'UCL',
    departureDate: '2026-09-01',
    commonTags: ['摄影', '逛博物馆', '英剧爱好者', '伦敦'],
    matchScore: 85,
    bio: '全画幅+3镜头到处拍，找个一起逛大英博物馆和看英超的朋友！',
  },
  {
    id: 'buddy-4',
    name: '陈同学',
    avatar: '',
    school: '广州执信中学',
    destination: '悉尼大学',
    departureDate: '2026-07-20',
    commonTags: ['冲浪', '咖啡探店', '学做饭', '悉尼'],
    matchScore: 91,
    bio: '广东人离不开早茶！准备学做饭，交换食谱的同时一起冲浪～',
  },
  {
    id: 'buddy-5',
    name: '赵同学',
    avatar: '',
    school: '成都七中',
    destination: '多伦多大学',
    departureDate: '2026-08-20',
    commonTags: ['火锅', '羽毛球', '追番', '多伦多'],
    matchScore: 82,
    bio: '成都人自带火锅底料！求一起涮火锅+打球+聊新番的朋友',
  },
];

/** 本地通问答数据 */
export const qaItems: QAItem[] = [
  {
    id: 'qa-1',
    question: 'NYU附近哪些区域租房性价比最高？',
    answer: '推荐Jersey City和Long Island City。JC: 通勤PATH 20分钟到校区，1B1B约$2500-3000；LIC: 地铁20分钟，略贵但新楼多，1B1B约$3200-3800。两个区域都比曼哈顿便宜30-40%，且华人超市多。避雷：Harrison虽然便宜但通勤太久（50分钟+）。',
    author: 'NYU大二 学长',
    tags: ['租房', '纽约', 'NYU'],
    likes: 247,
    date: '2026-03-15',
  },
  {
    id: 'qa-2',
    question: '美国留学必须打的疫苗有哪些？',
    answer: '各校要求不同，但基本都需要：MMR（麻疹腮腺炎风疹）2针、Tdap（破伤风白喉百日咳）1针、水痘2针、乙肝3针、脑膜炎1针。NYU额外要求COVID疫苗。建议：国内打完记录带过来做翻译公证，比在美国打便宜很多。校医院可以做抗体检测，如果抗体够就不用补打。',
    author: '医学预科 学姐',
    tags: ['疫苗', '健康', '入学准备'],
    likes: 189,
    date: '2026-02-28',
  },
  {
    id: 'qa-3',
    question: '第一次出国要带什么？哪些是智商税？',
    answer: '必带：转换插头×3、常用药（感冒/肠胃/过敏/消炎）、眼镜2副（美国验光贵！）、少量现金$500-1000、电饭煲（小的！）。智商税：大量衣物（去了会买新的，风格也不一样）、床上用品（尺寸不合）、大量文具（美国也没贵到哪去）。重点：带一个月的量即可，剩下的Amazon开学季送到。',
    author: '多国留学经验 向导',
    tags: ['行李', '新生攻略', '省钱'],
    likes: 564,
    date: '2026-01-10',
  },
  {
    id: 'qa-4',
    question: '澳洲留学生怎么找兼职？',
    answer: '学生签证允许每两周工作48小时。找兼职渠道：1) Seek/Indeed网站投递 2) 学校CareerHub校内岗位 3) 华人微信群/小红书（中餐馆/奶茶店）。推荐：校内图书馆/IT Support时薪$25-30且轻松；避雷：华人餐厅现金工$10-15低于法定最低工资且无保障。',
    author: '悉尼大学 毕业生',
    tags: ['兼职', '打工', '澳洲'],
    likes: 312,
    date: '2026-04-02',
  },
  {
    id: 'qa-5',
    question: '英国租房要避开哪些坑？',
    answer: '五大坑：1)Council Tax——学生免但要自己申请豁免，不申请默认收费 2)Holding Deposit——合法但确认没霸王条款再交 3)Inventory Check——入住时拍所有瑕疵避免退房被扣钱 4)Bills included——确认包含哪些，暖气费冬天可能£100+/月 5)二房东——必须见房东本人或正规中介。推荐用Rightmove/Zoopla找房。',
    author: 'UCL 学长',
    tags: ['租房', '英国', '避坑'],
    likes: 423,
    date: '2026-05-20',
  },
  {
    id: 'qa-6',
    question: '怎么快速融入国外社交圈？',
    answer: '三步走：1) 加入学校中国学生会，先有安全区 2) 参加社团活动（运动/桌游/志愿者），选你感兴趣的才能坚持 3) 做小组作业时主动和外国同学组队，这是最自然的社交场景。心理准备：前3个月孤独感正常，不要因此怀疑自己的决定。90%的留学生都在第4个月后感觉好转。',
    author: '心理咨询专业 学姐',
    tags: ['社交', '心理', '适应'],
    likes: 298,
    date: '2026-04-18',
  },
];
