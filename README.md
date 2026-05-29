# 🚀 Kunpeng Kickoff

> AI 驱动的一站式电竞赛事出行服务平台 —— 让每一次出征都万无一失。

## 📖 项目简介

Kunpeng Kickoff 是一个面向电竞赛事参与者的智能出行管理平台，通过 AI 技术整合赛事信息、目的地数据、社区经验，为选手和团队提供从行程规划到落地避雷的全链路服务。

## ✨ 核心功能

| 模块 | 说明 |
|------|------|
| 🧠 **AI 行程规划** | 智能生成行前清单、签证提醒、航班推荐、住宿评估 |
| 📊 **硬标数据库** | 赛事目的地住宿、餐饮、交通、医疗硬性标准数据 |
| 🛡️ **避雷雷达** | 风险区域预警、诈骗识别、商户欺诈提醒 |
| 👥 **社区层** | 搭子匹配、Q&A 问答、用户标签云 |
| 💰 **商业模式** | 收入来源分析、付费方价值主张 |
| 🗺️ **运营路线图** | 分阶段里程碑规划与进度跟踪 |

## 🛠 技术栈

- **前端框架**: React 19 + TypeScript
- **构建工具**: Vite 7
- **样式方案**: Tailwind CSS 3 + shadcn/ui
- **路由**: React Router 7
- **动画**: Framer Motion
- **图表**: Recharts
- **表单**: React Hook Form + Zod
- **主题**: next-themes（深色/浅色模式）

## 🚀 快速开始

### 环境要求

- Node.js >= 18
- npm >= 9

### 安装与运行

```bash
# 克隆项目
git clone https://github.com/liangzheng3017/Kunpeng_Kickoff.git
cd Kunpeng_Kickoff

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

浏览器访问 `http://localhost:5173` 即可查看。

### 其他命令

```bash
# 构建生产版本
npm run build

# 预览生产构建
npm run preview

# 代码检查
npm run lint
```

## 📁 项目结构

```
src/
├── components/          # 组件
│   ├── business/        # 商业模式 & 路线图组件
│   ├── community/       # 社区层组件
│   ├── home/            # 首页组件
│   ├── layout/          # 布局（导航栏、页脚）
│   ├── metrics/         # 硬标数据库组件
│   ├── planner/         # AI 行程规划组件
│   ├── radar/           # 避雷雷达组件
│   └── ui/              # shadcn/ui 基础组件
├── data/                # Mock 数据 & 类型导出
├── icons/               # SVG 图标组件
├── lib/                 # 工具函数
├── pages/               # 页面路由
├── types/               # TypeScript 类型定义
├── App.tsx              # 根组件 & 路由配置
└── main.tsx             # 入口文件
```

## 📄 License

MIT

---

**Made with ❤️ by Kunpeng Team**
