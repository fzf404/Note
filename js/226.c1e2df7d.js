(window.webpackJsonp=window.webpackJsonp||[]).push([[226],{854:function(n,o){n.exports="\x3c!--\ntitle: Golang\nsort:\n--\x3e\n\n## 安装\n\n```golang\napt install golang-1.13\nln -s /usr/lib/go-1.13/bin/go /usr/bin/go\n\nyum install golang\t# 1.15版\n```\n\n## 代理\n\n```bash\ngo env -w GO111MODULE=on\ngo env -w GOPROXY=https://goproxy.cn,direct\n```\n\n## 依赖管理\n\n```bash\n# 初始化项目\ngo mod init\n\n# 安装依赖\ngo mod download\n\n# 清理依赖\ngo mod tidy\n```\n\n"}}]);