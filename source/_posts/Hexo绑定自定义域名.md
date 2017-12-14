---
title: Hexo绑定自定义域名
date: 2017-12-12 16:02:22
categories: Hexo
tags: [Hexo,自定义域名]
---

# 前言
GitHub Pages如何绑定自定义域名？

<!-- more -->
# 设置步骤详解
## 设置网站域名
在source目录下新建CNAME文件，在首行添加网站域名，如[www.mdslq.cn](www.mdslq.cn).注意前面没有https://、http:// 以及www等信息，然后重新重新生成并部署站点
``` bash中使用如下命令进行发布
hexo clean
hexo generate
hexo deploy
```
## 设置域名解析
1、先添加一个CNAME，主机记录写@，后面记录值写上你的[mds1455975151.github.io](mds1455975151.github.io)
2、再添加一个CNAME，主机记录写www，后面记录值也是[mds1455975151.github.io](mds1455975151.github.io)
这样别人用www和不用www都能访问你的网站（其实www的方式，会先解析成[https://mds1455975151.github.io](https://mds1455975151.github.io)，然后根据CNAME再变成[http://www.mdslq.com](http://www.mdslq.com)，即中间是经过一次转换的）。
注：除了使用CNAME记录也有人使用A记录，后面的记录值是写github page里面的ip地址，但有时候IP地址会更改，导致最后解析不正确，所以还是推荐用CNAME别名记录要好些，不建议用IP。
3、等待10分钟左右，域名生效后刷新浏览器，使用自定义域名访问网站即可

# 参考资料
[官网相关资料](https://help.github.com/articles/about-supported-custom-domains/)
[github怎么绑定自己的域名？](https://www.zhihu.com/question/31377141)
