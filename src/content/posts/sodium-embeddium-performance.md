---
title: "性能优化的新纪元：Sodium 与 Embeddium 的最新突破"
published: 2026-09-15
description: "Sodium 与 Embeddium 正在终结 OptiFine 的垄断时代，通过非侵入式的渲染引擎重写，将 Minecraft 的性能提升到全新高度。本文推荐现代优化模组全家桶。"
tags: [性能优化, Sodium, Embeddium, 模组推荐]
category: "技术深度"
slug: "sodium-embeddium-performance"
---

??? note "📊 点击查看：老旧设备运行 1.20+ 的帧率对比测试"
    - **原版 Vanilla**：15 FPS (卡顿明显)
    - **OptiFine**：25 FPS (有所提升，但兼容性差)
    - **Sodium + Lithium**：**65 FPS** (丝滑流畅)

在 Minecraft 高版本中，"优化"已经不再是锦上添花，而是刚需。近年来，以 **Sodium (钠)** 为代表的现代优化模组，彻底终结了 OptiFine 的垄断时代。

## Sodium (Fabric) 与 Embeddium (NeoForge/Forge)

- **Sodium**：通过重写 Minecraft 的渲染引擎，利用现代 OpenGL/Vulkan 特性，将区块渲染性能提升了数倍。
- **Embeddium**：作为 Sodium 在非 Fabric 平台的优秀移植版，它让 NeoForge 和 Forge 玩家也能享受到同等的性能红利，且与大多数核心模组的兼容性达到了前所未有的高度。

## 现代优化全家桶推荐

1. **Sodium / Embeddium**：核心渲染优化。
2. **Lithium (锂)**：服务端/单机内部逻辑优化，不修改游戏行为。
3. **FerriteCore**：大幅降低内存占用，告别"内存溢出"崩溃。
4. **EntityCulling**：实体剔除，不渲染看不见的实体，进一步提升帧率。

## 开发者视角：为什么它们能成功？

它们成功的核心在于 **"非侵入式"** 和 **"开源透明"**。它们不试图添加花哨的视觉特效（如动态光源、连接纹理，这些交由 Iris/Oculus 或其他独立模组处理），而是专注于把"渲染"这一件事做到极致。

> **互动**：你的电脑配置是什么？你使用了哪些优化模组让 MC 焕发新生？
