---
title: Hexo渲染时排除部分文件或目录
date: 2017-12-12 09:11:59
categories: Hexo
tags: [Hexo,完整所有权验证,Google,Baidu]
---

# 前言
搜索引擎确认网站所有权时往往会提供一个html文件来进行验证，要是这个文件被渲染了，验证自然就会失败了。或者，有时候会写一些简单的html示例页面，这也是不希望Hexo渲染的。因此有必要针对某个文件或者目录进行排除。Hexo的配置文件中提供了配置项skip_render，可以解决以上问题。
<!-- more -->
# 设置
## 注意
只有source目录下的文件才会发布到public（能够在网络上访问到），因此Hexo只渲染source目录下的文件。skip_render参数设置的路径是相对于source目录的路径。

## 设置排除项
假设source目录下文件如下：
``` bash
source
 _data
 _posts
 about
 categories
 tags
 works
 404.html
 baidu_verify_84yQGJByTM.html
 BingSiteAuth.html
 googleec6843bf1010ba92.html
```

## 排除单个文件
排除baidu的html验证文件
``` bash
skip_render: ' baidu_verify_84yQGJByTM.html'
```
## 排除多个文件
排除所有的html验证文件
``` bash
skip_render:
  - 'baidu_verify_84yQGJByTM.html'
  - 'BingSiteAuth.html'
  - 'googleec6843bf1010ba92.html'
```
或者
``` bash
skip_render: '*.html'
```
## 完成后验证效果
wget修改前后的html页面对比即可

# 参考文章
[Hexo渲染时排除部分文件或目录](https://www.maoxuner.cn/2017/03/10/hexo-skip-render.html)
