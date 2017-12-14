---
title: Hexo添加分享功能
date: 2017-12-13 18:39:02
categories: Hexo
tags: [Hexo,分享功能]
---

# 前言
博客在前期需要大量推广，即使你写的文章再好，别人也不一定能看到，或者别人看到了也不会认真阅读，这是正常的。不妨主动自己主动一点，把自己的文章推广一下，也能帮助自己博客提高访问量。微博、微信和QQ空间都是很好的传播平台，需要利用好。多数人还是习惯了用QQ空间。所以就需要一键分享的功能。不少人用的百度的，但个人对JiaThis更感兴趣一点。样式多，支持平台多，重要的是方便。

<!-- more -->
# 设置方法
1、注册[jiathis](http://www.jiathis.com/)
2、将注册后id配置到主题的配置文件中
``` yaml
# Support for youyan comments system.
# You can get your uid from http://www.uyan.cc
# 是否开启友言评论，http://www.uyan.cc/index.php
# id 中填写你的友言用户数字ID，注册后进入后台管理即可查看
youyan_uid: xxxxxx
```
``` bash中使用如下命令进行发布
hexo g
hexo s
```
在本地访问 http://127.0.0.1:4000

# 参考资料
![](/Hexo添加分享功能/01.png)
