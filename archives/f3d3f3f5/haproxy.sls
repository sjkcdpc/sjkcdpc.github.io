create_conf:
  file.managed:
    - name: /etc/haproxy/haproxy.cfg
    - source: salt://haproxy/haproxy.cfg
    - template: jinja


reload_haproxy:
  service.running:
    - name: haproxy
    - enable: True
    - reload: True
    - watch:
      - file: create_conf
