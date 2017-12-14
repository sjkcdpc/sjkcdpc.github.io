---
title: Hexo备份方案
date: 2017-12-14 09:39:15
categories: Hexo
tags: [Hexo,备份]
---

# 前言
如何在多个电脑上编辑同一个hexo博客？
如何有效的备份hexo源码，防止数据丢失？
如何共享已有的hexo配置给其他人？

<!-- more -->
# 解决方案
## 概述
使用分支的思路，如下:
hexo分支：用来存放Hexo生成的网站原始的文件(默认分支)
master分支：用来存放生成的静态网页

## 部署流程
### master分支配置
修改站点主配置_config.xml,确保静态网页是提交到master分支，与hexo源文件提交分支分离
``` yaml
# Deployment
## Docs: https://hexo.io/docs/deployment.html
deploy:
  type: git
  repo: https://github.com/mds1455975151/mds1455975151.github.io.git
  branch: master
```
### hexo分支配置
1、新建仓库mds1455975151.github.io
2、创建两个分支:master和hexo
3、设置hexo为默认分支(手动管理该分支上的Hexo网站源文件)
4、使用git clone git@github.com:mds1455975151/mds1455975151.github.io.git或者git clone https://github.com/mds1455975151/mds1455975151.github.io.git 拷贝仓库(ssh设置好密钥，http设置好免密码)
5、在本地mds1455975151.github.io文件夹下进行hexo init xxxx及进行各种配置(此时当前处于hexo分支)
6、修改hexo主配置_config.xml的deploy部分配置，设置静态页面的发布分支为master
7、添加.gitignore文件，将静态网页的目录及其他无需提交的源文件及目录排除掉
8、执行hexo g -d生成网站并部署到GitHub上
9、依次执行git add .、git commit -m 'add xxx'、git push origin hexo提交网站源文件到hexo分支

### 日常修改流程
在本地对博客进行修改(增、删、修改博文)、设置插件、修改其他配置等等
1、提交hexo源代码
``` bash
git checkout hexo
git add .
git commit -m 'add hexo source files'
```
2、发布hexo静态文件
``` bash
hexo clean
hexo generate
hexo deploy
```
### 本地资料丢失或其他主机搭建环境流程
更换电脑或者本地资料丢失后
1、拷贝仓库到本地(默认hexo分支)
2、安装hexo及各类插件
3、调试测试即可

# 参考资料
[使用hexo，如果换了电脑怎么更新博客？](https://www.zhihu.com/question/21193762)
