---
title: clustershell
date: 2017-12-10 16:35:00
categories: 技术
tags: [clustershell]
description:
---

[官网](http://cea-hpc.github.io/clustershell/)
[Github Docs Repo](https://github.com/cea-hpc/clustershell)
[Github Docs](http://clustershell.readthedocs.io/en/latest/)

# Installation
``` bash中使用如下命令进行发布
# yum install clustershell
clush
cluset
nodeset
clubak
```

# Configuration
``` bash中使用如下命令进行发布
$ vim /etc/clustershell/groups.d/local.cfg
# nodeset -L
@all
# nodeset -LL
@all 127.0.0.1,172.16.0.2

ssh-copy-id 127.0.0.1
ssh-copy-id 172.16.0.2

# clush -a 'free -g'
127.0.0.1:               total        used        free      shared  buff/cache   available
127.0.0.1: Mem:              0           0           0           0           0           0
127.0.0.1: Swap:             0           0           0
172.16.0.2:               total        used        free      shared  buff/cache   available
172.16.0.2: Mem:              0           0           0           0           0           0
172.16.0.2: Swap:             0           0           0
```
