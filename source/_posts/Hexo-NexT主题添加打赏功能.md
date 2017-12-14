---
title: Hexo NexT主题添加打赏功能
date: 2017-12-08 16:12:47
categories: Hexo
tags: [Hexo,Next,打赏]
---
# 前言
越来越多的平台支持打赏功能，付费阅读时代越来越近，GitHub用户habren开发了打赏功能，支持微信和支付宝，被Next主题集成到了主题中。

# 部署
## 配置
配置主题目录下的_config.yaml文件，将对应的image文件替换为自己的收款二维码即可。
\# 打赏功能
``` yaml
reward_comment: 坚持原创技术分享，您的支持将鼓励我继续创作！
wechatpay: /images/wechatpay.jpg
alipay: /images/alipay.jpg
```

## 查看修改效果
``` bash中使用如下命令进行发布
hexo g
hexo s
```
在本地访问 http://127.0.0.1:4000

## 效果展示
![](/Hexo-NexT主题添加打赏功能/01.png)
