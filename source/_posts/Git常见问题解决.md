---
title: Git常见问题解决
date: 2017-12-08 21:40:28
categories: 技术
tags: [Git,常见问题]
description: 日常使用git遇到的各种报错及问题详解
---

#### 报错1：[git] warning: LF will be replaced by CRLF | fatal: CRLF would be replaced by LF
原因：
遇到这两个问题是因为Git的换行符检查功能core.safecrlf.
这个功能有如下选项：
- false - 不做任何检查
- warn - 在提交时检查并警告
- true - 在提交时检查，如果发现混用则拒绝提交
建议使用最严格的true选项
假如你正在Windows上写程序，又或者你正在和其他人合作，他们在Windows上编程，而你却在其他系统上，在这些情况下，你可能会遇到行尾结束符问题。这是因为Windows使用回车和换行两个字符来结束一行，而Mac和Linux只使用换行一个字符。虽然这是小问题，但它会极大地扰乱跨平台协作。

解决：
Git可以在你提交时自动地把行结束符CRLF转换成LF，而在签出代码时把LF转换成CRLF。用core.autocrlf来打开此项功能，如果是在Windows系统上，把它设置成true，这样当签出代码时，LF会被转换成CRLF：
```bash
$ git config --global core.autocrlf true
```
Linux或Mac系统使用LF作为行结束符，因此你不想 Git 在签出文件时进行自动的转换；当一个以CRLF为行结束符的文件不小心被引入时你肯定想进行修正，把core.autocrlf设置成input来告诉 Git 在提交时把CRLF转换成LF，签出时不转换：
``` bash中使用如下命令进行发布
$ git config --global core.autocrlf input
```
这样会在Windows系统上的签出文件中保留CRLF，会在Mac和Linux系统上，包括仓库中保留LF。

如果你是Windows程序员，且正在开发仅运行在Windows上的项目，可以设置false取消此功能，把回车符记录在库中：
``` bash中使用如下命令进行发布
$ git config --global core.autocrlf false
```

#### 问题2: windows git bash操作记住密码
[解决方案](http://blog.csdn.net/u013399093/article/details/47278169)

#### 问题3：git提交时忽略特定的的文件或某类文件
解决方案：添加配置文件.gitignore

#### 问题4：git clone 时显示Filename too long
解决：
在git bash中，运行下列命令就可以解决该问题。
```bash中使用如下命令进行发布
$ git config --global core.longpaths true
```
