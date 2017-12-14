---
title: Redis常见问题
date: 2017-12-10 10:13:54
categories: Redis
tags: [Redis,proxy,zrange]
---

# 取值报错
报错信息：
``` bash
127.0.0.1:6379> keys *
1) "proxy_zset"
127.0.0.1:6379> get proxy_zset
(error) WRONGTYPE Operation against a key holding the wrong kind of value
```
解决：
先判断存储的数据类型，然后根据数据类型获取内容
``` bash
127.0.0.1:6379> type proxy_zset
zset
127.0.0.1:6379> zrange proxy_zset 0 55
 1) "1.197.200.195:808"
 2) "101.37.79.125:3128"
 3) "110.73.31.7:8123"
 4) "110.73.7.37:8123"
 5) "111.235.158.14:808"
 6) "112.114.96.45:8118"
 7) "112.114.97.50:8118"
 8) "112.95.191.160:9797"
 9) "113.109.248.30:9797"
```
