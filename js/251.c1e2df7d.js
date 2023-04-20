(window.webpackJsonp=window.webpackJsonp||[]).push([[251],{879:function(n,e){n.exports='\x3c!--\ntitle: 02-Cocos2D组件\nsort:\n--\x3e\n\n## 生命周期\n\n- onLoad\n\n- onEnable\n\n  > `enable`变为 True 时执行\n\n- start\n\n  ```\n  this.node.active = false;\n  this.node.destroy();\n  ```\n\n- update\n\n  ```js\n  // 前一帧的时间\n  update (dt) {\n  \tcc.log(dt);\n    this.node.y += 1;\n  },\n  ```\n\n- lateUpdate\n\n- onDisable\n\n  > `enable`变为 False 时执行\n\n- onDestroy\n\n## 节点组件\n\n```js\n// 获取当前节点\nlet node = this.node;\nnode.x = 100; // 偏移\n// 获取子节点\nlet child = this.node.children;\nlet childByName = this.node.getChildByName(Name);\nlet node = cc.log(childByName);\n```\n\n## 加载切换场景\n\n```js\ncc.director.loadSence("Name");\n// 预加载-空间换时间\ncc.director.preloadSence("Name", () => {});\n```\n'}}]);