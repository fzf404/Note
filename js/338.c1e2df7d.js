(window.webpackJsonp=window.webpackJsonp||[]).push([[338],{966:function(n,t){n.exports='\x3c!--\ntitle: 01-信息收集\nsort:\n--\x3e\n\n## whois\n\n1. Web 接口：\n   - [aliyun](https://whois.aliyun.com/)\n   - [whois365](https://www.whois365.com/cn/)\n   - [站长之家](https://whois.chinaz.com/)\n   - [爱站](https://whois.aizhan.com/)\n2. Linux 命令行\n\n## 站点信息收集\n\n### 子域名信息\n\n- maltego\n\n  > 很牛逼的图形界面\n\n- wydomain\n\n  > `git clone https://github.com/ring04h/wydomain.git`\n  >\n  > 安装依赖库\n  >\n  > `pip install -r requirements.txt`\n  >\n  > **突然发现 kai 没有 pip？？？**\n  >\n  > 当然机智的我成功解决了\n  >\n  > ```python\n  > curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py\n  > python3 get-pip.py\n  > export PATH="/home/fzf/.local/bin:$PATH"\t\t# 将pip临时加入环境变量\n  > vim ~/.bashrc\t\t# 永久加入用户\n  > vim /etc/profile\t# 永久加入系统\n  > # 突然发现更好的办法....\n  > apt-get install python-pip\t# 问题我之前尝试了不好使...现在又好了\n  > ```\n  >\n  > 运行\n  >\n  > `python wydomain.py -d bilibili.com`\n\n- [站长之家](http://tool.chinaz.com/subdomain)\n\n### CMS\n\n内容管理系统\n\n1. 在线识别\n\n2. whatweb\n\n3. 查询漏洞\n\n- Wordpress\n\n> wpscan\n>\n> `wpscan --url url`\n\n### 端口信息\n\n- windows：`netstat -anob`\n\n### 目录结构\n\n1. dirb\n2. dirBuster\n\n## 敏感信息收集\n\n### 搜索语法\n\n| 关键字   | 含义                                |\n| -------- | ----------------------------------- |\n| site     | 指定搜索域名：`site:www.baidu.com`  |\n| inurl    | URL 中存在关键字：`inurl:.php?id=`  |\n| intext   | 网页中存在关键字：`intext:网站管理` |\n| filetype | 搜索文件类型：`filetype:txt`        |\n| intitle  | 标题：`intitle:登录`                |\n| link     | 网页外链：`link:bilibili.com`       |\n| info     | 网页信息                            |\n\n[Google Hacking](https://www.exploit-db.com/google-hacking-database)\n\n### IP 地址\n\n> CDN 即内容分发网络\n\n#### 绕过 CDN\n\nhttp://ping.chinaz.com/\n\nhttps://site.ip138.com/\n\n国外：https://asm.ca.com/en/ping.php\n\nDNS 解析：https://viewdns.info/\n\n### Shodan\n\n> 搜索引擎——所有接入互联网设备\n\n#### 命令行\n\n```bash\nshodan init <key>\t\t# 初始化\nshodan count nginx\nshodan search microsoft iis 6.0\nshodan host 39.106.106.202\nshodan honeyscore <ip> \t# 蜜罐\nshodan myip\n```\n\n#### 实例\n\n[Shodan](https://www.shodan.io/)\n\n> webcam\n>\n> port:21\n>\n> ip:8.8.8.8\n>\n> city:shenyang port:22\n\n### Git 信息泄露\n\n## Sqlmap\n'}}]);