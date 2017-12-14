---
title: 使用GitHub+Hexo+Next搭建静态博客
date: 2017-12-06 15:39:21
categories: 技术
tags: [GitHub,Hexo,NexT]
---
# 前言
&emsp;&emsp;GitHub为广大开发者提供了一个非常好的平台，不仅是代码的开源，同时GitHub还提供了开发者可以在GitHub上建立自己的站点（GithubPage）的一个非常有意思的功能。它功能有限只能创建静态的网站。
&emsp;&emsp;本文整理自己的部署过程，意在帮助那些刚刚接触GitHub的新手同学，可以利用GitHub快速创建高逼格的个人博客站点。

<!-- more -->
# 准备工作
- GitHub账号，创建一个仓库，规则为：例如我的账号为mds1455975151，则新建仓库名称为mds1455975151.github.io
- NodeJS环境及相关基本知识，我的环境如下：
 - os: Windows_NT 6.1.7601 win32 x64
 - node: 8.9.2
- Git基本使用及git for windows安装使用。
 - git version: 2.15.0.windows.1

# 关于Hexo
## Hexo基本介绍
&emsp;&emsp;官网:https://hexo.io/
&emsp;&emsp;GitHub:https://github.com/hexojs/hexo
    A fast, simple & powerful blog framework(快速、简单而高效的静态博客框架)
    - Blazing Fast(超快速度)
        Node.js brings you incredible generating speed. Hundreds of files take only seconds to build.
    - Markdown Support(支持Markdown)
        All features of GitHub Flavored Markdown are supported. You can even use most Octopress plugins in Hexo.
    - One-Command Deployment(一键部署)
        You only need one command to deploy your site to GitHub Pages, Heroku or other sites.
    - Various Plugins(丰富的插件)
        Hexo has a powerful plugin system. You can install more plugins for Jade, CoffeeScript plugins.
## Hexo工作原理
&emsp;&emsp;由于github pages存放的都是静态文件，博客存放的不只是文章内容，还有文章列表、分类、标签、翻页等动态内容，假如每次写完一篇文章都要手动更新博文目录和相关链接信息，相信谁都会疯掉，所以hexo所做的就是将这些md文件都放在本地，每次写完文章后调用写好的命令来批量完成相关页面的生成，然后再将有改动的页面提交到github。

# 关于NexT
&emsp;&emsp;即Hexo的主题插件
&emsp;&emsp;官网:http://theme-next.iissnan.com/
&emsp;&emsp;Github:https://github.com/iissnan/hexo-theme-next

# 部署实践
## 安装Hexo
Hexo安装和部署依赖Nodejs和Git，自行安装即可，很简单。
``` bash中使用如下命令进行发布
$ npm install hexo-cli -g
```
## 初始化框架
``` bash中使用如下命令进行发布
hexo init blog
.
├── _config.yml     // 网站的配置信息，您可以在此配置大部分的参数。
├── package.json    // 应用程序的信息
├── scaffolds       // 模版文件夹。当您新建文章时，Hexo 会根据 scaffold 来建立文件。
├── source          // 资源文件夹是存放用户资源的地方。
|   ├── _drafts
|   └── _posts
└── themes          // 主题 文件夹 Hexo会根据主题来生成静态页面。
cd blog
hexo g
hexo s              // 开启本地预览服务，打开浏览器访问http://localhost:4000即可看到内容</span></pre>
```
## 主配置讲解
### 网站
``` bash中使用如下命令进行发布
- title	        // 网站标题
- subtitle	    // 网站副标题
- description	  // 网站描述
- author	      // 您的名字
- language	    // 网站使用的语言
- timezone	    // 网站时区。Hexo 预设使用您电脑的时区。时区列表
```
### 网址
``` bash中使用如下命令进行发布
- url	               // 网址
- root	             // 网站根目录
- permalink	         // 文章的 永久链接 格式	:year/:month/:day/:title/
- permalink_default	 // 永久链接中各部分的默认值
```
**网站存放在子目录**
如果您的网站存放在子目录中，例如 http://yoursite.com/blog，则请将您的 url 设为 http://yoursite.com/blog 并把 root 设为 /blog/。
### 目录
``` bash中使用如下命令进行发布
- source_dir	   // 资源文件夹，这个文件夹用来存放内容。	source
- public_dir	   // 公共文件夹，这个文件夹用于存放生成的站点文件。	public
- tag_dir	       // 标签文件夹	tags
- archive_dir	   // 归档文件夹	archives
- category_dir	 // 分类文件夹	categories
- code_dir	     // Include code 文件夹	downloads/code
- i18n_dir	     // 国际化（i18n）文件夹	:lang
- skip_render	   // 跳过指定文件的渲染，您可使用 glob 来配置路径。
```
### 文章
``` bash中使用如下命令进行发布
- new_post_name	    // 新文章的文件名称	:title.md
- default_layout	  // 预设布局	post
- auto_spacing	    // 在中文和英文之间加入空格	false
- titlecase	        // 把标题转换为 title case	false
- external_link	    // 在新标签中打开链接	true
- filename_case	    // 把文件名称转换为 (1) 小写或 (2) 大写	0
- render_drafts	    // 显示草稿	false
- post_asset_folder	// 启动 Asset 文件夹	false
- relative_link	    // 把链接改为与根目录的相对位址	false
- future	          // 显示未来的文章	true
- highlight	        // 代码块的设置
```
### 分类 & 标签
``` bash中使用如下命令进行发布
- default_category	// 默认分类	uncategorized
- category_map	    // 分类别名
- tag_map	          // 标签别名
```
### 日期 / 时间格式
Hexo 使用 Moment.js 来解析和显示时间.
``` bash中使用如下命令进行发布
- date_format // 日期格式	MMM D YYYY
- time_format	// 时间格式	H:mm:ss
```
### 分页
``` bash中使用如下命令进行发布
- per_page	       // 每页显示的文章量 (0 = 关闭分页功能)	10
- pagination_dir	 // 分页目录	page
```
### 扩展
``` bash中使用如下命令进行发布
- theme	  // 当前主题名称
- deploy	// 部署
```
## Hexo使用
``` bash
hexo new "postName"       // 新建文章
hexo new page "pageName"  // 新建页面
hexo generate             //生成静态页面至public目录
hexo server               //开启预览访问端口（默认端口4000，'ctrl + c'关闭server）
hexo deploy               //将.deploy目录部署到GitHub
hexo help                 //查看帮助
hexo version              //查看Hexo的版本</span></pre>
hexo s -p 5000            //更改端口
hexo s -i 192.168.1.1     //自定义 IP
hexo g --watch            //监视文件变动
```

## 安装NexT主题
拷贝主题代码
``` bash中使用如下命令进行发布
cd hexo
git clone --branch v5.1.2 https://github.com/iissnan/hexo-theme-next themes/next
```
启用主题
在博客根目录下找到_config.yml文件，修改主题设置，修改完成hexo s查看主题效果
``` yaml
theme: next
```

## 部署网站
修改主配置文件_config.yml.
``` yaml
# Docs: http://hexo.io/docs/deployment.html
deploy:
  type: git
  repo: git@github.com:YourRepository.git
  branch: master
```
修改完成，在git bash中使用如下命令进行发布：
``` bash中使用如下命令进行发布
hexo clean
hexo generate
hexo deploy
```
# 参考资料
[官网GitHub Pages资料](https://pages.github.com/)
