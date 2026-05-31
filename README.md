# 正念文化介绍网站

> 觉察之道 —— 东方禅意与当代网页设计的对话

---

## 项目简介

本项目是一个静态网站，以「正念（Mindfulness）」为主题，系统介绍正念文化的起源、发展脉络、核心故事与标志性人物。网站采用简约留白的设计语言，追求克制、安静、有呼吸感的视觉体验，让内容本身成为主角。

项目不依赖任何框架或构建工具，纯 HTML + CSS + 原生 JavaScript 实现，打开 `index.html` 即可预览，无需安装依赖。

---

## 文件结构

```
mindfulness-culture/
├── index.html        ← 首页（主入口）
└── teachers.html     ← 导师传记页（Hash 路由单页应用）
```

---

## 页面说明

### `index.html` — 首页

| 区块 | 说明 |
|------|------|
| **Hero 区** | 全屏首屏，「正念，回归此刻的艺术」，背景三层呼吸动画光圈，中央竖线呼应书法意象 |
| **时间线** | 正念疗法演变的 7 个关键节点（公元前 500 年 — 2020s），左右交错布局，中轴点悬停发光 |
| **文化故事** | 5 篇故事，含 1 个特色大卡片（菩提树下的革命），涵盖缘起、传播、转化、方法、科学五个角度 |
| **导师列表** | 6 位标志性人物，点击跳转至对应传记页 |

### `teachers.html` — 导师传记页

采用 **Hash 路由** 单页应用方案，无需新建 HTML 文件：

| URL | 行为 |
|-----|------|
| `teachers.html` | 默认显示第一位导师（释迦牟尼）传记 |
| `teachers.html#shakyamuni` | 释迦牟尼传记 |
| `teachers.html#nhat-hanh` | 一行禅师传记 |
| `teachers.html#kabat-zinn` | 乔·卡巴金传记 |
| `teachers.html#buddhaghosa` | 觉音论师传记 |
| `teachers.html#goenka` | S.N. 葛印卡传记 |
| `teachers.html#mahasi` | 马哈希西亚多传记 |

每位导师传记包含：**简要生平故事、禅法详解、代表作列表、历史影响**，每篇 800–2000 字，内容基于历史事实。

传记页内支持：
- 点击「返回正念导师」回到首页导师列表区域
- 上下位导师导航，连续阅读
- 浏览器前进/后退按钮正常工作

---

## 设计系统

### 色彩

以 **oklch 色彩空间** 定义，温暖大地色调为主，Sage Green 为强调色：

| Token | 用途 |
|-------|------|
| `--bg` / `--bg-deep` | 背景层 |
| `--fg` / `--fg-muted` / `--fg-faint` | 文字层级 |
| `--accent` | 强调色（sage green） |
| `--warm` / `--warm-light` | 温暖辅助色 |
| `--line` | 分割线 |

### 字体

| 角色 | 字体栈 |
|------|--------|
| 展示标题 | Newsreader（衬线）+ Noto Serif SC（中文衬线） |
| 正文 | Plus Jakarta Sans（无衬线）+ Noto Serif SC |
| 数字/年份 | Newsreader 自然旧体数字 |

### 间距

基于 **4pt 基线** 的间距变量 `--s1` 至 `--s40`，所有间距均从变量中选取，禁止写死像素值。

### 动效原则

- 所有 transition 统一使用 `ease` 缓动，禁止 `linear`
- 入场动画统一为 `fadeUp`（opacity 0→1，translateY 16px→0）
- 禁止 scale 超过 1.05、rotate、bounce、spring 等花哨效果
- Hero 区呼吸动画：三层圆依次 `scale(0.95) → scale(1.05)` 循环，周期各差 2s

---

## 技术要点

- **零依赖**：仅通过 Google Fonts CDN 引入字体，无 JS/CSS 框架
- **Hash 路由**：`teachers.html` 通过 `hashchange` 事件驱动视图切换，无需 Router 库
- **滚动渐显**：IntersectionObserver 实现元素进入视口时的 fadeUp 动画
- **导航智能隐藏**：首页导航栏滚动时自动隐藏/显示
- **响应式**：768px 断点，移动端时间线改为左侧单列、特色卡片取消双列
- **无障碍**：语义化 HTML，`aria-label` 标注区块，`aria-hidden` 隐藏装饰元素

---

## 本地预览

直接用浏览器打开即可：

```bash
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

或将项目部署到任意静态托管服务（Vercel、Netlify、GitHub Pages 等）。

---

## 设计系统存档

项目的完整设计 Token 和 AI 可执行规则已存档至：

```
D:\BaiduSynczone\BaiduSyncdisk\knowledge-base\work-role\design\
├── tokens.css    ← 设计令牌（色彩/字体/间距/动效/排版）
└── RULES.md     ← AI 可执行的设计规则（指令式写法）
```

在新项目中让 AI 参考这两个文件，即可复现本项目的设计语言和风格「味道」。

---

## 导师列表

| 导师 | 生卒年 | 核心贡献 |
|------|--------|----------|
| 释迦牟尼 | 约前 563–483 | 创立四念处体系，正念的起源者 |
| 一行禅师 | 1926–2022 | 正念西传的桥梁，正念步行倡导者 |
| 乔·卡巴金 | 1944– | MBSR 创始人，正念临床化先驱 |
| 觉音论师 | 5 世纪 | 《清净道论》作者，系统化内观理论 |
| S.N. 葛印卡 | 1924–2013 | 内观大众化推动者，全球内观中心创办人 |
| 马哈希西亚多 | 1904–1982 | 标记内观法创始人，缅甸内观复兴核心人物 |

---

*项目由 AI 辅助设计与开发，内容为文化介绍用途，导师传记内容基于公开历史资料整理。*
