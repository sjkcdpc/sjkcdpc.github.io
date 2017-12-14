---
title: Hexo博客添加sitemap
date: 2017-12-08 09:32:22
categories: Hexo
tags: [Hexo,sitemap,SEO]
---

在这个搜索引擎至上的年代，更好的被搜索引擎收录是必不可少的一步。

# 前言
如何提高个人博客被搜索到的几率？如何让百度+谷歌搜索到我的博客？
了解网站SEO方案

# 确认博客是否被收录
在百度或者谷歌上面输入下面格式来判断，如果能搜索到就说明被收录，否则就没有，用你的域名替代我的mds1455975151.github.io
site:mds1455975151.github.io
# 生成sitemap文件
## 安装相关插件
``` bash中使用如下命令进行发布
cd hexo
npm install hexo-generator-sitemap --save
npm install hexo-generator-baidu-sitemap --save
npm install hexo-generator-seo-friendly-sitemap --save
```
注：根据个人喜欢选择合适插件即可

## 修改配置
修改主题配置文件_config.yml,添加如下两行配置
``` yaml
menu:
  ......
  sitemap: /sitemap.xml             # 站点地图
  baidusitemap: /baidusitemap.xml
```

## 查看修改效果
hexo s
在本地访问 http://127.0.0.1:4000/sitemap.xml 和 http://127.0.0.1:4000/baidusitemap.xml 查看效果
