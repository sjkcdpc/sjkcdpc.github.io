#!/bin/env bash

a="- 喜欢购物的朋友可以看看，[一折特卖](http://www.1zhe.com/yq/1066027)\n<!--注册一折特卖，免费领集分宝，集分宝可以当钱花，免费购物不是梦，注册马上送你10集分宝。-->"
sed -i "/- 广告位招商QQ:1455975151/a${a}" $(find source/_posts/ -type f -name "*.md")
