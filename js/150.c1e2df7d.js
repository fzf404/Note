(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{778:function(n,o){n.exports=' \x3c!-- \ntitle: 15-JSON解析\nsort: \n--\x3e\n\n## JSON 解析\n\n> [计算缓冲区](https://arduinojson.org/v6/assistant/)\n\n```cpp\n#include <ArduinoJson.h>\nvoid jsonParse(String data) {\n  // 创建doc对象\n  StaticJsonDocument<768> doc;\n  DeserializationError error = deserializeJson(doc, data);\n  // 错误处理\n  if (error) {\n    Serial.print(F("deserializeJson() failed: "));\n    Serial.println(error.f_str());\n    return;\n  }\n  String code = doc["code"];\n  String msg = doc["msg"];\n  Serial.println(code + \',\' + msg);\n}\n```\n\n## JSON 生成\n\n```cpp\nString rootJson(){\n  StaticJsonDocument<512> doc;\n  doc["code"] = 200;\n  doc["msg"] = "获取成功";\n  // 新建子数据\n  sonObject data = doc.createNestedObject("data");\n  data["D1"] = String(digitalRead(D1));\n  data["D2"] = String(digitalRead(D2));\n  data["D3"] = String(digitalRead(D3));\n\n  serializeJson(doc, jsonCode);\n  Serial.print("Json Code: ");\n  Serial.println(jsonCode);\n\n  return jsonCode;\n}\n// 绑定\nvoid handleRoot() {\n  esp8266_server.send(200, "application/json", rootJson());\n}\n```\n'}}]);