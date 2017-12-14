---
title: 单个GitHub账号添加多个GitHub Pages问题
date: 2017-12-13 10:47:18
categories: Github
tags: [Github,chongwu]
---

# 前言
如何在单个GitHub账号下添加多个GitHub Pages以达到新建多个站点目的？

# 解决方案
[官网资料](https://pages.github.com/)

## GitHub Pages的分类和区别
1、GitHub Pages分为两类:User or organization site、Project site
2、个人主页必须要和用户的GitHub帐号同名，所以每个用户有且只能有一个repo作为个人主页，且必须是<username>/<username>.github.io的形式；而项目主页的命名则没有这种限制，且数量有任意多个。
3、不考虑绑定的自定义域名的前提下，个人主页的GitHub二级域名为<username>.github.io;项目主页的GitHub二级域名为<username>.github.io/<projectname>,没有<projectname>.<username>.github.io这种方式
4、个人主页的展示内容以master分支里的文件为准；而项目主页的展示内容以gh-pages分支内的文件为准

## 解决方案
新建项目GitHub Pages即可解决以上需求，大体流程总结如下：
1、新建repo，名字自定义，例如：chongwu
2、repo设置修改GitHub Pages部分Source设置，选择master branch
3、访问测试https://mds1455975151.github.io/chongwu
4、设置自定义域名www.cwquery.com,设置方法：repo添加CNAME文件即可
5、访问测试 http://www.cwquery.com/

# 参考资料
[单个GitHub帐号下添加多个GitHub Pages的相关问题](https://segmentfault.com/a/1190000003946969)
