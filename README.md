# iview2-manage-system

基于Vue2 + iView2.0的后台管理系统解决方案简单示例.

线上访问(不支持手机 / 已修复访问速度过慢的问题)：[电脑访问](http://139.199.33.111/dist)

--------------

### Notice
* 6.4 因为精力有限，决定本项目不再维护，但其仍然是可用的，如需实际应用还请关注iview官网了解API变动。十分抱歉！

--------------

### 目前实现的功能及用到的组件
- [x] 页面： [iView2.0](https://github.com/iview/iview)
- [x] Markdown显示： [VueMarkdown](https://github.com/miaolz123/vue-markdown)
- [x] Markdown编辑器： [MarkdownEditor](https://github.com/alecgorge/MarkdownEditor)&amp[Vue-SimpleMDE](https://github.com/F-loat/vue-simplemde)
- [x] 富文本框： [quillEditor](https://github.com/surmon-china/vue-quill-editor)
- [x] 图表： [百度Echarts](http://echarts.baidu.com)&amp[Vue-Echarts](https://github.com/xlsdg/vue-echarts-v3)
- [x] 文件上传： [使用iView自带的文件上传组件](https://www.iviewui.com/components/upload)

--------------

### 使用
```
npm i               // 安装依赖
npm run dev         // 本地开发
npm run build       // 生产部署
```
--------------

### 目录结构
	|-- build                                  // webpack配置文件
	|-- config                                 // 项目打包路径
	|-- static                                 // 静态文件目录
	|-- src                                    // 源码目录
	|   |-- components                         // 组件
	|       |-- common                         // 全局
	|           |-- about.vue                  // 关于页面
	|           |-- index.vue                  // 入口
	|           |-- login.vue                  // 登录页面
	|   	|-- page                           // 主要页面
	|           |-- eharts.vue                 // 百度echarts
	|           |-- form.vue                   // 表单
	|           |-- rtf.vue                    // 富文本框
	|           |-- markdown-viewer.vue        // markdown显示
	|           |-- markdown-editor.vue        // markdown编辑器
	|           |-- table.vue                  // 表格
	|           |-- upload.vue                 // 文件上传
	|   |-- App.vue                            // 页面入口
	|   |-- main.js                            // 程序入口
	|-- .babelrc                               // ES6语法编译配置
	|-- .editorconfig                          // 代码编写规格
	|-- .gitignore                             // push忽略文件
	|-- index.html                             // 入口html页面
	|-- package.json                           // 依赖及配置
	|-- README.md                              // 简介
	
--------------

### 截图预览
![1](https://github.com/vanishcode/iview2-management-system/raw/master/static/screenshots/s1.png)

![2](https://github.com/vanishcode/iview2-management-system/raw/master/static/screenshots/s2.png)

![3](https://github.com/vanishcode/iview2-management-system/raw/master/static/screenshots/s3.png)

----------------

### 存在的问题及维护说明
1.字体路径有错误，下次更新将会修复

2.本项目只是简单示例，实际应用还需自行添加需要实现的功能

3.部分内容参考了 [Vue2 后台管理系统解决方案](https://github.com/lin-xin/manage-system)

---------------

### 其他
有任何问题或建议欢迎提出issue.

---------------

### License
[MIT](https://opensource.org/licenses/MIT)