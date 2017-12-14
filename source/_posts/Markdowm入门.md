---
title: Markdowm入门
date: 2017-12-08 17:46:14
categories: 技术
tags: [Markdown,标记语言]
---
# 前言
Markdown 是一种轻量级的标记语言，其用简单的标记语法便可达到排版的目的，其可以使我们更加专注于内容的编写，而不需过多关注排版。本文主要整理了 Markdown 中的常用的标记语法，以便自己与他人以后查用。

# Markdown编辑器
推荐：Atom
使用Markdown格式的场景: Hexo博客，简书
[其他Markdown编辑器产品](http://www.williamlong.info/archives/4319.html)

# Atom介绍
Atom 是 Github 官方开发的一款可定制化的、跨平台的文本编辑器。有两点需要注意一下，一是 Atom 是由 Github 官方开发，二是其定制化程度非常高。前者的结果是编辑器对 Github 非常友好，如果项目托管在 Github 上的话，用 Atom 可以很方便地进行 Git 操作。后者的结果就是我们可以根据自己的需要定制自己的编辑器，使得自己的效率最大化，也让自己舒舒服服、开开心心地码代码。
Atom预览Markdown快捷键：Ctrl+Shift+M
Atom相关资料
- [Atom介绍](https://github.com/CompileYouth/front-end-study/blob/master/tool/atom/%E7%A3%A8%E5%88%80%E4%B8%8D%E8%AF%AF%E7%A0%8D%E6%9F%B4%E5%B7%A5%EF%BC%9AAtom%20%E4%BB%8B%E7%BB%8D.md)
- [Atom基础使用](https://atom-china.org/t/atom/62)
- [Atom镜像站](https://npm.taobao.org/mirrors/atom)
- [Atom官方博客/手册索引、插件推荐专题](https://atom-china.org/t/faq/326)

# Markdown语法介绍
[献给写作者的 Markdown 新手指南](http://www.jianshu.com/p/q81RER#)
[Markdown 语法说明 (简体中文版)](http://wowubuntu.com/markdown/)

## 段落元素
### 1、段落与换行
Markdown中段落指连续的一段文字，编写时段落之间至少一个**空行**隔开，段落内多个空格被视为一个空格，段首不支持缩进。
如何想要在显示时显示多个空行，可以插入<br/>实现，注意的是，插入的<br/>应与前后的段落中间至少空一行。

### 2、标题
Markdown支持两种类型的标题
// 方法1：只能表示两个级别
一级标题
\ ========
二级标题
\ --------

// 方法2：推荐
\# 一级标题
\## 二级标题
\### 三级标题
\......
\###### 六级标题

## 删除线语法
支持两种方法:
``` text
~~我是被删除的~~
<del> 我是被删除的 </del>
```
效果如下
~~我是被删除的~~
