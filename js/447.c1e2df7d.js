(window.webpackJsonp=window.webpackJsonp||[]).push([[447],{1075:function(n,e){n.exports='\x3c!--\ntitle: 31-WebSocket\nsort:\n--\x3e\n\n## 原生 WebSocket\n\n```js\n// 初始化WebSocket\nlet ws = new WebSocket("ws://17.0.0.1:1880/wx");\n\n// 监听消息事件\nws.onmessage = (msg) => console.log(msg.data);\n\n// 发送信息\nws.send("fzf404");\n```\n\n## SocketIO\n\n```js\nlet socket = io(`${base_url}`);\n\n// 接受数据处理\nsocket.on("message", (data) => {\n  console.log(`${data.user_name}: ${data.message}`);\n});\n\n// 连接成功\nsocket.on("connect", () => {\n  // 发送\n  socket.send({ user_name: user_name, message: "已加入" });\n});\n```\n'}}]);