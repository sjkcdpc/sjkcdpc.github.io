#!/usr/bin/env python
# coding:utf-8

import redis

def run():
    haproxy = {}
    haproxy['haproxy'] = {}
    conn = redis.StrictRedis(host='192.168.79.55', port=2001)
    keys = conn.keys('*')
    keys.sort()
    for key in keys:
        haproxy['haproxy'][key] = conn.get(key)
    return haproxy
