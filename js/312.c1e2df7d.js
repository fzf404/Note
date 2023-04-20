(window.webpackJsonp=window.webpackJsonp||[]).push([[312],{940:function(e,n){e.exports="\x3c!--\ntitle: 50-OpenCV\nsort:\n--\x3e\n\n# OpenCV\n\n## 安装\n\n`pip install opencv`\n\n## 示例程序\n\n### 调用摄像头\n\n```python\nimport cv2\n\n# 获取摄像头，传入0表示获取系统默认摄像头\ncap = cv2.VideoCapture(0,cv2.CAP_DSHOW)\n# 打开cap\ncap.open(0)\n\nwhile cap.isOpened():\n    # 获取画面\n    flag, frame= cap.read()\n    cv2.imshow('my_window',frame)\n    # 获取键盘上按下哪个键\n    key_pressed=cv2.waitKey(60)\n    print('键盘上被按下的键是：',key_pressed)\n    # 如果按下esc键，就退出循环\n    if key_pressed==27:\n        break\n# 关闭摄像头\ncap.release()\n# 关闭图像窗口\ncv2.destroyAllWindows()\n```\n\n### 边缘检测\n\n```python\n# 调用摄像头，实时边缘检测\nimport cv2\nimport numpy as np\n\n# 获取摄像头，传入0表示获取系统默认摄像头\ncap = cv2.VideoCapture(0, cv2.CAP_DSHOW)\n# 打开cap\ncap.open(0)\n\nwhile cap.isOpened():\n    # 获取画面\n    flag, frame = cap.read()\n    if not flag:\n        break\n    # 获取键盘上按下哪个键\n    key_pressed = cv2.waitKey(60)\n    print('键盘上被按下的键是：', key_pressed)\n    # frame=cv2.resize(frame,(100,100))\n    # 进行canny边缘检测\n    frame = cv2.Canny(frame, 100, 200)\n    # 将单通道图像复制三份，累成三通道图像\n    frame = np.dstack((frame, frame, frame))\n    # 展示处理后的三大通道图像\n    cv2.imshow('my_window', frame)\n    # 如果按下esc键，就退出循环\n    if key_pressed == 27:\n        break\n\n# 关闭摄像头\ncap.release()\n# 关闭图像窗口\ncv2.destroyAllWindows()\n```\n\n### 微笑识别\n\n```python\nimport cv2\n\n# 载入人脸检测器、眼睛检测器、微笑检测器\nface_cascade = cv2.CascadeClassifier(cv2.data.haarcascades+'haarcascade_frontalface_default.xml')\n\neye_cascade = cv2.CascadeClassifier(cv2.data.haarcascades+'haarcascade_eye.xml')\n\nsmile_cascade = cv2.CascadeClassifier(cv2.data.haarcascades+'haarcascade_smile.xml')\n\n# 调用摄像头\ncap = cv2.VideoCapture(0)\n\nwhile(True):\n    # 获取摄像头拍摄到的画面\n    ret, frame = cap.read()\n    faces = face_cascade.detectMultiScale(frame, 1.3, 2)\n    img = frame\n    for (x,y,w,h) in faces:\n    \t# 画出人脸框，蓝色，画笔宽度微\n        img = cv2.rectangle(img,(x,y),(x+w,y+h),(255,0,0),2)\n    \t# 框选出人脸区域，在人脸区域而不是全图中进行人眼检测，节省计算资源\n        face_area = img[y:y+h, x:x+w]\n\n        ## 人眼检测\n        # 用人眼级联分类器引擎在人脸区域进行人眼识别，返回的eyes为眼睛坐标列表\n        eyes = eye_cascade.detectMultiScale(face_area,1.3,10)\n        for (ex,ey,ew,eh) in eyes:\n            #画出人眼框，绿色，画笔宽度为1\n            cv2.rectangle(face_area,(ex,ey),(ex+ew,ey+eh),(0,255,0),1)\n\n        ## 微笑检测\n        # 用微笑级联分类器引擎在人脸区域进行人眼识别，返回的eyes为眼睛坐标列表\n        smiles = smile_cascade.detectMultiScale(face_area,scaleFactor= 1.16,minNeighbors=65,minSize=(25, 25),flags=cv2.CASCADE_SCALE_IMAGE)\n        for (ex,ey,ew,eh) in smiles:\n            #画出微笑框，红色（BGR色彩体系），画笔宽度为1\n            cv2.rectangle(face_area,(ex,ey),(ex+ew,ey+eh),(0,0,255),1)\n            cv2.putText(img,'Smile',(x,y-7), 3, 1.2, (0, 0, 255), 2, cv2.LINE_AA)\n\n\t# 实时展示效果画面\n    cv2.imshow('frame2',img)\n    # 每5毫秒监听一次键盘动作\n    if cv2.waitKey(5) & 0xFF == ord('q'):\n        break\n\n# 最后，关闭所有窗口\ncap.release()\ncv2.destroyAllWindows()\n```\n"}}]);