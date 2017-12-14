---
title: Hexo设置阅读全文功能
date: 2017-12-09 20:32:34
categories: Hexo
tags: [Hexo,阅读全文]
---

# 前言
Hexo如何设置提供一个链接阅读全文来进入文章的详情页。

# 设置方法讲解
## 文章中使用设置手动截断(推荐)
``` text
# 前言
&emsp;&emsp;GitHub为广大开发者提供了一个非常好的平台，不仅是代码的开源，同时GitHub还提供了开发者可以在GitHub上建立自己的站点（GithubPage）的一个非常有意思的功能。它功能有限只能创建静态的网站。
&emsp;&emsp;本文整理自己的部署过程，意在帮助那些刚刚接触GitHub的新手同学，可以利用GitHub快速创建高逼格的个人博客站点。

<!-- more -->
# 准备工作
- GitHub账号，创建一个仓库，规则为：例如我的账号为mds1455975151，则新建仓库名称为mds1455975151.github.io
- NodeJS环境及相关基本知识，我的环境如下：
 - os: Windows_NT 6.1.7601 win32 x64
 - node: 8.9.2
- Git基本使用及git for windows安装使用。
 - git version: 2.15.0.windows.1
```
## 设置并显示文章摘要
设置description属性
``` text
---
title: Git常见问题解决
date: 2017-12-08 21:40:28
categories: 技术
tags: [Git,常见问题]
description: 日常使用git遇到的各种报错及问题详解
---
```
## 自动形成摘要设置截断长度
在主题配置文件中添加如下配置,默认截取的长度为150 字符，可以根据需要自行设定.
``` yaml
auto_excerpt:
  enable: true
  length: 150
```
** 建议使用(第一种方式)，可以精确控制需要显示的摘录内容， 这种方式也可以让Hexo中的插件更好的识别。**
