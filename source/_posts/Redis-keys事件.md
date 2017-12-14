---
title: Redis keys事件
date: 2017-12-11 10:07:13
categories: Redis
tags: [Redis,keys]
---

# 前言
昨天发了一篇Redis常见问题的文章，同事看后发现一个问题，即：线上一般禁止使用keys命令。之前都没了解过这块，马上查了查资料，完善下自己的知识体系。

# keys命令概述
version 1.0.0.+ 功能

## keys命令使用
功能：Find all keys matching the given pattern
[详细使用参考官网文档](https://redis.io/commands/keys)
<!-- more -->
简单用法举例：
``` bash
127.0.0.1:6379> keys pattern
127.0.0.1:6379> MSET firstname Jack lastname Stuntman age 35
OK
127.0.0.1:6379> keys *name*
1) "lastname"
2) "firstname"
127.0.0.1:6379> keys a??
1) "age"
127.0.0.1:6379> keys *
1) "age"
2) "lastname"
3) "firstname"
```
Supported glob-style patterns:
- h?llo matches hello, hallo and hxllo
- h*llo matches hllo and heeeello
- h[ae]llo matches hello and hallo, but not hillo
- h[^e]llo matches hallo, hbllo, ... but not hello
- h[a-b]llo matches hallo and hbllo
Use \ to escape special characters if you want to match them verbatim.

## 关于keys的使用官方建议
Warning: consider KEYS as a command that should only be used in production environments with extreme care. It may ruin performance when it is executed against large databases. This command is intended for debugging and special operations, such as changing your keyspace layout. Don't use KEYS in your regular application code. If you're looking for a way to find keys in a subset of your keyspace, consider using SCAN or sets.
警告：在生产环境中慎用keys命令，当对大型数据库执行操作可能导致性能下降。此命令可以用于调试和特殊操作，例如修改键盘空间布局。不要在你的应用程序代码中使用keys*.如果你正在寻找一种方法在您的keys空间的子集中查找keys,请考虑使用SCAN or sets.
## 如何在生产环境禁用keys命令
在配置中增加如下配置,其他危险操作禁用方法类似：
``` bash
rename-command FLUSHALL ""  
rename-command FLUSHDB ""  
rename-command KEYS ""   
```

## 生产故障案例
[迅雷动魄惊心的redis keys事件](http://blog.csdn.net/a930716/article/details/53074247)
[redis禁用keys命令做模糊匹配](http://blog.csdn.net/asdfsadfasdfsa/article/details/60144412)
