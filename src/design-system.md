# Kickoff 设计系统

> **生成工具**: ui-ux-pro-max  
> **设计方向**: 科技探索 + 年轻活力 融合风格  
> **目标**: 面向15-25岁留学生的「云端行前办事处」网页 Demo

---

## 1. 色彩系统

### 主色系 — Deep Space Blue

| Token | HSL | HEX | 用途 |
|-------|-----|-----|------|
| `--background` | 234 55% 3% | `#040411` | 全局背景 |
| `--foreground` | 210 40% 96% | `#F1F5F9` | 主文字 |
| `--primary` | 217 91% 56% | `#2563EB` | 按钮/链接/激活态 |
| `--accent` | 189 94% 43% | `#06B6D4` | 霓虹青强调色/CTA |
| `--secondary` | 217 25% 14% | `#1E293B` | 次要表面 |
| `--muted` | 217 25% 14% | `#1E293B` | 弱化区域 |
| `--muted-foreground` | 215 20% 62% | `#8897AE` | 次级文字 |

### 玻璃效果 Token

| Token | 值 |
|-------|-----|
| `--glass-bg` | `rgba(15, 23, 42, 0.55)` |
| `--glass-border` | `rgba(56, 189, 248, 0.12)` |
| `--glass-blur` | `16px` |

### 渐变 Token

| Token | 颜色 |
|-------|------|
| `--gradient-deep` | `#0a0c27` |
| `--gradient-mid` | `#12133a` |
| `--gradient-cyan` | `rgba(6, 182, 212, 0.08)` |

---

## 2. 字体排版

选用 **ui-ux-pro-max 推荐的 Tech Startup 搭配**:

| 用途 | 字体 | 权重 | 来源 |
|------|------|------|------|
| **Heading** | Space Grotesk | 400/500/600/700 | Google Fonts |
| **Body** | DM Sans + Inter | 400/500/700 | Google Fonts |

**排版层级**:
- H1: `font-heading text-5xl font-bold` (Hero 标题)
- H2: `font-heading text-3xl font-semibold` (区块标题)
- H3: `font-heading text-xl font-medium` (卡片标题)
- Body: `font-body text-base` (正文)

**Tailwind 类**: `font-heading` / `font-body`

---

## 3. 视觉风格

### 融合方案: Glassmorphism × Aurora UI × Vibrant Block

| 元素 | 样式 |
|------|------|
| **背景** | Aurora 渐变动画 (`gradient-aurora`), 深空蓝底 |
| **Hero 区** | 径向渐变 + 霓虹青点缀 (`gradient-hero`) |
| **卡片** | 毛玻璃效果 (`glass-card`) — `backdrop-blur` 16px, 半透明边框 |
| **按钮** | 实色科技蓝，hover 发光 (`shadow-glow`) |
| **强调文字** | 渐变文字 (`gradient-text`, `gradient-text-cyan`) |
| **间距** | 大留白，48px+ 区块间距 |

### 自定义 Tailwind 工具类

```
.glass-card    — 毛玻璃卡片
.gradient-aurora — Aurora 渐变背景
.gradient-hero   — Hero 区渐变
.gradient-text   — 蓝紫渐变文字
.gradient-text-cyan — 青蓝渐变文字
.text-balance    — 平衡换行
```

---

## 4. 动效规范

### 动画时长

| 类型 | 时长 | 用途 |
|------|------|------|
| 微交互 | 150-200ms | hover, focus, 按钮反馈 |
| 入场动画 | 400-600ms | 滚动渐入, 页面加载 |
| 装饰动效 | 4-8s | 背景渐变流动, 悬浮动画 |

### 内置动画

| 类名 | 描述 |
|------|------|
| `animate-fade-in-up` | 从下方淡入 (0.6s) |
| `animate-fade-in` | 纯淡入 (0.4s) |
| `animate-slide-in-right` | 从右滑入 (0.5s) |
| `animate-float` | 上下浮动 (4s 循环) |
| `animate-pulse-glow` | 呼吸发光 (2s) |
| `animate-gradient` | 背景渐变流动 (8s) |

### Framer Motion 配置

```tsx
// 滚动渐入
const variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

// 交错动画 (Stagger)
container: { visible: { transition: { staggerChildren: 0.1 } } }
```

### 无障碍

- `prefers-reduced-motion: reduce` → 禁用所有装饰动画
- 所有可交互元素添加 `cursor-pointer`
- Focus 状态可见（键盘导航）

---

## 5. 阴影

| Token | 值 | 用途 |
|-------|-----|-----|
| `shadow-glow` | `0 0 20px rgba(6,182,212,0.3)` | 霓虹发光 |
| `shadow-glow-lg` | `0 0 40px rgba(6,182,212,0.4)` | 强发光 |
| `shadow-card` | `0 4px 30px rgba(0,0,0,0.3)` | 卡片投影 |
| `shadow-card-hover` | `0 8px 40px rgba(6,182,212,0.15)` | 卡片悬浮 |

---

## 6. 圆角

| Token | 值 |
|-------|-----|
| `--radius` | `0.75rem` (12px) |
| `rounded-xl` | 16px |
| `rounded-lg` | 12px |
| `rounded-md` | 10px |

---

## 7. 页面结构 (Landing Pattern)

采用 **Hero + Feature Grid + Social Proof** 模式:

```
1. Hero          → 全屏渐变 + Slogan「未出发，先抵达」
2. Value Props   → 三栏卡片（硬标定基 / 软标选配 / AI结构化）
3. Feature Grid  → 六宫格功能概览
4. Data          → 数字滚动亮点
5. Footer        → CTA 引导
```

---

## 8. 反模式 (避免)

| ❌ 避免 | ✅ 替代 |
|---------|--------|
| Flat design 无层次 | 玻璃卡片 + 阴影营造深度 |
| 文字密集页面 | 大留白，信息分组 |
| 弱对比度文字 | `muted-foreground` ≥ sl-400 |
| Emoji 作图标 | Lucide SVG 图标 |
| 无 hover 反馈 | 150-200ms 过渡 |
| 忽略无障碍 | focus 可见, prefers-reduced-motion |

---

## 9. shadcn/ui 规范

- **Toast**: `<Toaster />` 放在根布局
- **Form**: 使用 `react-hook-form` + `<Form>` 组件
- **Sidebar**: 移动端用 `<SidebarTrigger>`
- **Dark Mode**: 默认 `class="dark"` 在 `<html>` 上

---

## 10. 检查清单

- [x] 无 emoji 图标 (使用 Lucide SVG)
- [x] 所有可点击元素 `cursor-pointer`
- [x] Hover 状态 150-300ms 平滑过渡
- [x] 文字对比度 ≥ 4.5:1
- [x] Focus 状态可见
- [x] `prefers-reduced-motion` 支持
- [x] 响应式: 375px / 768px / 1024px / 1440px
- [x] 无水平滚动
- [x] `scroll-behavior: smooth`
