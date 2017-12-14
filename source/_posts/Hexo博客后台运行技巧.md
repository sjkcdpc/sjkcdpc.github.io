---
title: Hexo博客后台运行技巧
date: 2017-12-13 21:20:01
categories: Hexo
tags: [Hexo,后台运行]
---

# 前言
如何配置Hexo一直在后台运行？

# 解决方案
## 概述
安装并运行hexo博客后，一般教程都会告诉运行命令是:hexo s,但是关掉Terminal，进程也就结束了，对于一个希望永远运行的服务器来说是不可接受的。
查阅一些资料后找到一个后台运行的命令: hexo s & . 这个命令确实可以实现后台运行，但是从使用情况来看，每天hexo的服务进程都会死掉，还找不到原因。于是尝试使用nodejs里很流行的forever，可以实现当进程死掉时候自动重启。

## Forever介绍
Forever全局安装命令
``` bash
npm install -g forever
```
安装完成，需要在你的hexo根目录下新建一个js文件，比如app.js,代码如下：
``` bash
var forever = require('hexo');
var child = forever.start([ 'hexo', 's'], {
  max : 1,
  silent : true
});
```
之后使用命令启动即可
``` bash
forever start app.js

报错待解决，方案可行
D:\svn\192.168.200.104_devops_doc\hexo\app.js:2
var child = forever.start([ 'hexo', 's'], {
                    ^

TypeError: forever.start is not a function
    at Object.<anonymous> (D:\svn\192.168.200.104_devops_doc\hexo\app.js:2:21)
    at Module._compile (module.js:635:30)
    at Object.Module._extensions..js (module.js:646:10)
    at Module.load (module.js:554:32)
    at tryModuleLoad (module.js:497:12)
    at Function.Module._load (module.js:489:3)
    at Function.Module.runMain (module.js:676:10)
    at startup (bootstrap_node.js:187:16)
    at bootstrap_node.js:608:3
error: Forever detected script exited with code: 1
```
查看forever进程命令 forever list, 更多命令输入forever -h

# 参考资料
[Forever项目](https://github.com/foreverjs/forever)
[Hexo博客后台运行技巧](http://www.tuijiankan.com/2015/05/08/hexo-forever-run/)
