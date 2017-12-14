---
title: Hexo Next添加Disqus评论
date: 2017-12-08 09:32:25
categories: Hexo
tags: [Hexo,Disqus]
---

# 前言
给博客添加评论系统，可以和用户交流分享文章内容，不断优化博客内容.

# Disqus配置
[Disqus官网](https://disqus.com/)
登录官网，可以使用Facebook，Twitter以及Google登录，也可以用邮箱注册后登录.

## 添加site
登录后，点击图标按钮
![](/Hexo-Next添加Disqus评论/01.png)

Create a new site
![](/Hexo-Next添加Disqus评论/02.png)
根据提示输入website name这个后期会用到即shortname,选择相应的分类和显示语言

## Hexo Next配置
修改主题配置，其他如果支持配置应该是类似的
``` yaml
# Disqus 评论功能
disqus_shortname: your_shortname
```

## 验证效果
``` bash中使用如下命令进行发布
hexo g
hexo s
```
在本地访问 http://127.0.0.1:4000
![](/Hexo-Next添加Disqus评论/03.png)

# 参考资料
[Hexo搭建博客系列：（六）Hexo添加Disqus评论](http://www.jianshu.com/p/d68de067ea74?open_source=weibo_search)
