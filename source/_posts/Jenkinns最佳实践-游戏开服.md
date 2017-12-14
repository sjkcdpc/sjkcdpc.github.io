---
title: 'Jenkinns最佳实践:游戏开服'
date: 2017-12-07 15:02:31
categories: jenkins
tags: [jenkins,游戏]
---

# 前言
应用场景描述：运营提供开服邮件，运维利用开服信息大批量设置开服操作(添加游戏服务器列表显示给用户)

# 实践
## 需求案例：
运营需求邮件
![](/images/jenkins/01_opengame.png)

实现效果：
&emsp;&emsp;将运营邮件部分直接粘贴到Jenkins中进行解析，获取各项信息，然后拼接开服所需信息。

## 实现过程
新建自由格式的新jobs--设置参数构建--新建参数开服信息--编写解析脚本
``` python
# !/usr/bin/env python
# -*- coding: UTF-8 -*-

import os

f = open('host_info', 'w')
game_info = os.getenv("game_info").split('\n')
for data in game_info:
    line = data.split('\t')
    date = line[0]
    time = line[1]
    name = line[2]
    sid = line[3]
    wanip = line[4]
    lanip = line[5]
    domain = line[6]
    channel = line[7]
    info_str = "%s %s %s %s %s %s %s %s" % (date, time, name, sid, wanip, lanip, domain, channel)
    print info_str
    f.write('info_str')
f.close()
```
后期可以通过写Python脚本读取host_info文本信息，拼接xml信息添加的服务器列表的xml文件中.
