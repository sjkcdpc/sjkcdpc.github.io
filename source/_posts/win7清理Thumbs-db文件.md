---
title: win7清理Thumbs.db文件
date: 2017-12-09 19:14:26
categories: 技术
tags: [Windows,Thumbs.db,git,svn]
---

# 前言
平常使用svn或者git时管理个人资料的时候经常会发现存在Thumbs.db文件，这些文件如何产生及如何清理呢？

# 是什么？
操作系统的缩略图文件（数据库文件），且还会随着这个文件夹的图片增多而加大Thumbs.db文件的体积。
它长这个样子
![](/win7清理Thumbs-db文件/01.png)

# 如何清理
新建bat脚本，添加如下命令，如果盘符有区别修改盘符即可。
```bat
FOR %%a IN ( D: ) DO DEL /f/s/q/a %%a\Thumbs.db
```
