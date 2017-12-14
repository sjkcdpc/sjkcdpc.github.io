---
title: Hexo NexT主题添加联系邮箱及图标
date: 2017-12-08 16:32:06
categories: Hexo
tags: [Hexo,Next,联系邮箱,图标]
---
# 前言
Hexo Next如何添加联系人邮箱并设置个性图标。

# 部署
## 配置主题目录下的_config.yaml文件修改以下配置即可。
```yaml文件修改以下配置即可
# Social links
social:
  email: mailto:your email address

social_icons:
  enable: true
  email: envelope
```
注释：seoial_icons节点中后面的值是http://fontawesome.io/icons/ 中提供的图标的名称。之后其他链接如推特，微博等都可自行增减。

## 查看修改效果
``` bash中使用如下命令进行发布
hexo g
hexo s
```

在本地访问 http://127.0.0.1:4000
