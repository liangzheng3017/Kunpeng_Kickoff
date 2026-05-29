// ==========================================================================
// 硬标数据库 Mock 数据 — 住宿/餐饮/交通/医疗 客观标准
// ==========================================================================

import type { HardMetric } from '@/types';

export const hardMetricsData: HardMetric[] = [
  {
    category: '住宿',
    categoryEn: 'housing',
    description: '告别"距离学校近""环境还不错"的模糊评价，用可量化数据对比房源',
    metrics: [
      {
        name: '通勤时长',
        value: '< 25分钟',
        standard: '步行+公共交通到达校区的实测时间，含等车时间',
        iconName: 'MapPin',
        description: '实测通勤 vs 宣称通勤：不要相信"步行到地铁站3分钟"',
      },
      {
        name: '网速实测',
        value: '≥ 100Mbps',
        standard: '高峰时段（晚8-10点）Speedtest实测下载速率，非合约标称值',
        iconName: 'Zap',
        description: '标称500M ≠ 实测500M，高峰拥塞可能只剩10M',
      },
      {
        name: '噪音分贝',
        value: '< 45dB（夜间）',
        standard: '晚10点-早7点室内实测噪音值，<45dB为安静，>55dB影响睡眠',
        iconName: 'Activity',
        description: '临街/近地铁/近酒吧 = 震耳欲聋的"安静宜居"',
      },
      {
        name: '暖气/空调效能',
        value: '冬季室温 ≥ 20°C',
        standard: '冬季室内实测温度，低于18°C影响学习效率',
        iconName: 'Thermometer',
      },
      {
        name: '水压测试',
        value: '≥ 3.0 bar',
        standard: '高楼层淋浴水压实测，<1.5bar洗澡体验极差',
      },
      {
        name: '隔音等级',
        value: 'STC ≥ 45',
        standard: '墙体隔音等级，<35能听到隔壁正常对话',
      },
    ],
  },
  {
    category: '餐饮',
    categoryEn: 'dining',
    description: '从"性价比高"到可对比的量化数据：份量/价格比、菜品稳定性、口味还原度',
    metrics: [
      {
        name: '份量价格比',
        value: '≥ 3.5 分/5',
        standard: '单人单餐份量/价格满意度，3分=刚好够吃，5分=吃撑',
        iconName: 'DollarSign',
      },
      {
        name: '中餐还原度',
        value: '≥ 80%',
        standard: '对比国内同菜品的口味还原度，80%以上为"正宗中餐"',
        iconName: 'Star',
        description: '避免被"最好吃的中餐"误导——美国人觉得甜=好吃',
      },
      {
        name: '卫生评分',
        value: 'A 级（纽约卫生局）',
        standard: '当地卫生部门检查等级，A=优秀 B=合格 C=警告',
        iconName: 'Shield',
      },
      {
        name: '菜品稳定性',
        value: '≥ 85%',
        standard: '同一菜品不同时间点餐的口感一致性，避免"看厨师心情"',
      },
      {
        name: '等餐时间',
        value: '< 15分钟（午高峰）',
        standard: '午间高峰时段从下单到出餐的实测等待时间',
      },
      {
        name: '外卖覆盖',
        value: '≥ 3个平台可配送',
        standard: 'UberEats / DoorDash / Grubhub 等平台覆盖情况',
      },
    ],
  },
  {
    category: '交通',
    categoryEn: 'transport',
    description: '用真实通勤数据替代"交通便利"的模糊表述',
    metrics: [
      {
        name: '地铁站距离',
        value: '< 500米',
        standard: '步行到最近地铁站入口的实测距离，非地图直线距离',
        iconName: 'MapPin',
      },
      {
        name: '到校区时间',
        value: '< 30分钟（门到门）',
        standard: '从出门到进入教室的完整时间，含步行+乘车+等车',
      },
      {
        name: '末班车时间',
        value: '00:30 以后',
        standard: '最近地铁站末班车经过时间，太早结束影响夜间活动',
      },
      {
        name: '夜间安全指数',
        value: '≥ 4.0 / 5',
        standard: '晚10点后街道照明+人流量+警力部署综合评分',
        iconName: 'Moon',
      },
      {
        name: '共享出行密度',
        value: '叫车 < 5分钟响应',
        standard: '高峰期Uber/Lyft平均接单等待时间',
      },
      {
        name: '自行车友好度',
        value: '≥ 3.5 / 5',
        standard: '自行车道覆盖率+停车设施+城市骑行安全性',
      },
    ],
  },
  {
    category: '医疗',
    categoryEn: 'medical',
    description: '留学生医疗保障不可忽视，用硬数据帮你选靠谱医疗资源',
    metrics: [
      {
        name: '最近诊所距离',
        value: '< 2公里',
        standard: '距最近Urgent Care/诊所的步行+交通时间',
        iconName: 'Heart',
      },
      {
        name: '保险报销比例',
        value: '≥ 80%',
        standard: '常规门诊/急诊在校保险下的报销比例',
      },
      {
        name: '中文医生可用性',
        value: '< 10公里内有',
        standard: '最近提供中文服务的医生/诊所距离',
        iconName: 'Globe',
      },
      {
        name: '急诊等候时间',
        value: '< 45分钟',
        standard: '非危重ER平均等候时间，>2小时需谨慎',
      },
      {
        name: '牙科覆盖',
        value: '每年 $1000-1500',
        standard: '校保险牙科报销上限，美国看牙极贵',
      },
      {
        name: '心理咨询可用',
        value: '每周 ≥ 5个可约时段',
        standard: '学校心理咨询中心预约可及性',
      },
    ],
  },
];

/** 硬标 vs 传统好评 对比说明 */
export const hardVsTraditional = [
  {
    aspect: '数据来源',
    traditional: '个人主观感受："环境不错""挺好吃的"',
    hardStandard: '客观量化测量：分贝仪测噪音、Speedtest测网速、实地测量时间',
  },
  {
    aspect: '可对比性',
    traditional: '无法横向对比，A说的"不错"≠B说的"不错"',
    hardStandard: '所有指标使用统一测量标准，可横向对比不同房源/餐厅',
  },
  {
    aspect: '时效性',
    traditional: '好评可能基于3年前的体验，信息严重滞后',
    hardStandard: '标注测量时间，过期数据自动降权',
  },
  {
    aspect: '防作弊',
    traditional: '刷好评、刷分屡禁不止',
    hardStandard: '实测数据+交叉验证+异常检测，商家无法伪造测量结果',
  },
  {
    aspect: '覆盖度',
    traditional: '热门商家信息多，冷门完全无参考',
    hardStandard: '按区域全覆盖采集，郊区小店同样有数据',
  },
];
