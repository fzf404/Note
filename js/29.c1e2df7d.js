(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{657:function(n,e){n.exports="\x3c!--\ntitle: PowerShell\nsort:\n--\x3e\n\n> 对于这个新型的 Windows 控制台，大部分人都知之甚少呀~\n>\n> 当然我也是…\n\n### 代理\n\n```powershell\nnetsh winhttp set proxy 127.0.0.1:10809\nnetsh winhttp reset proxy\t# 取消\nnetsh winhttp show proxy\t# 展示\n```\n\n### 问题\n\n```powershell\n# 此系统上禁止运行脚本\nset-executionpolicy remotesigned\n```"}}]);