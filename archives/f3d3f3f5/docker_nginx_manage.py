#!/usr/bin/env python
# coding:utf-8

import sys
import docker
import redis
import subprocess
import re

cli = docker.Client(base_url='unix://var/run/docker.sock')
conn = redis.StrictRedis(host='192.168.79.55', port=2001)  # 根据实际情况修改

def delete_redis(key):
        conn.delete(key)

def insert_redis(key,value):
        conn.set(key,value)

def get_ip():
        out = subprocess.Popen(
                '/sbin/ip addr show eth0',
                shell=True,
                close_fds=True,
                stdout=subprocess.PIPE,
                stderr=subprocess.STDOUT).communicate()[0]
        info = re.compile(r'inet\s*(.*?)/\d+\s*brd\s*').search(out)
        ip = info.group(1)
        return ip

def get_info(container):
        info = cli.inspect_container(container)
        ip = get_ip()
        port = info['NetworkSettings']['Ports']['80/tcp'][0]['HostPort']
        name = info['Name'][1:]

        return name,ip+':'+port


def stop_container(container):
        name,value = get_info(container)
        cli.stop(container)
        delete_redis(name)

def start_container(container):
        cli.start(container,publish_all_ports=True)
        name,value = get_info(container)
        insert_redis(name,value)

def create_container(image):
        container_id = cli.create_container(image=image)
        start_container(container_id)

def check_args():
        if len(sys.argv) != 3 or sys.argv[1] not in ['run','start','stop']:
                print '\nUsage: %s run <image name>:<version>' % sys.argv[0]
                print ' %s start <container name or id>'  % sys.argv[0]
                print ' %s stop <container name or id>\n'       % sys.argv[0]
                sys.exit(1)

def main():
        check_args()
        if sys.argv[1] == 'run':
                create_container(sys.argv[2])
        elif sys.argv[1] == 'stop':
                stop_container(sys.argv[2])
        elif sys.argv[1] == 'start':
                start_container(sys.argv[2])
        else:
                check_args()

if __name__ == "__main__":
        main()
