---
title: 搭建本地pypi源方法
date: 2017-12-10 18:03:44
categories: 技术
tags: [Python,pypi,源,本地源]
---

1）创建存放pypi软件包的目录
``` bash
[root@hadoop-01 ~]# mkdir -p /data/pypi
```
2）安装pip2pi软件
``` bash
[root@hadoop-01 ~]# pip install pip2pi
```
3）配置要同步的pypi源（豆瓣）
``` bash
[root@hadoop-01 ~]# vim .pip/.pip.conf
[global]
index-url = http://pypi.douban.com/simple
```

4）同步软件（单个或者批量同步）
``` bash
单个软件
[root@hadoop-01 ~]# pip2tgz /data/pypi pip==7.1.2
批量同步
[root@hadoop-01 ~]# cat requirements.txt
pbr>=0.6,<1.0
SQLAlchemy>=0.7.8,<=0.9.99
amqplib>=0.6.1
anyjson>=0.3.3
argparse
boto>=2.12.0,!=2.13.0
eventlet>=0.13.0
[root@hadoop-01 ~]# pip2tgz /data/pypi -r ./requirements.txt
```
5）同步后建立索引
``` bash
[root@hadoop-01 ~]# dir2pi /data/pypi/
或者对指定的软件包更新其索引
[root@hadoop-01 ~]# pip2acmeco name
[root@hadoop-01 ~]# pip2acmeco -r requirements.txt
```
6）配置web访问界面
``` bash
[root@hadoop-01 ~]# ln -s /pypi /var/www/html/pypi
```  
7）测试
``` bash
[root@hadoop-01 ~]# cat .pip/.pip.conf
[global]
index-url=http://172.16.1.171/pypi/simple

[root@hadoop-01 ~]# pip install argparse
Collecting argparse
/usr/lib/python2.6/site-packages/pip-7.1.2-py2.6.egg/pip/_vendor/requests/packages/urllib3/util/ssl_.py:90:InsecurePlatformWarning: A true SSLContext object is not available. Thisprevents urllib3 from configuring SSL appropriately and may cause certain SSLconnections to fail. For more information, seehttps://urllib3.readthedocs.org/en/latest/security.html#insecureplatformwarning.
  InsecurePlatformWarning
  Using cached argparse-1.4.0-py2.py3-none-any.whl
Installing collected packages: argparse
Successfully installed argparse-1.4.0
```

8）其他pip源
[阿里云](http://mirrors.aliyun.com/pypi/simple/)
[中国科技大学](https://pypi.mirrors.ustc.edu.cn/simple/)
[豆瓣(douban)](http://pypi.douban.com/simple/)
[清华大学](https://pypi.tuna.tsinghua.edu.cn/simple/)
[Python官方](https://pypi.python.org/simple/)
[中国科学院](http://pypi.mirrors.opencas.cn/simple/)
[清华大学](https://pypi.tuna.tsinghua.edu.cn/simple/)
