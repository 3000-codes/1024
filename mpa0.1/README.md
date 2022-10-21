# 多页面应用 demo

## 初始化构建

### 0.0.1

#### 项目结构介绍
`api`: 存放接口文档,建议根据具体模型创建不同api文件,不要根据页面创建

`assets`: 存放静态资源,如图片等

`conponent`: 存放组件(如果某个组件需要自调用,可设置自身name属性)

`constans`: 存放常量,需要从第三方处引入如nacos,或无法注入环境变量的值

`mock`: 项目前期无接口,预留mock文件夹,模拟接口数据,后续移除

`pages`: 存放页面,使用小驼峰命名

`router`: 存放路由,使用小驼峰命名(建议与页面名称一致),看情况使用,不一定需要

`store`: 存放store,使用小驼峰命名,看情况使用,不一定需要,根据页面名称创建对应store文件夹

`style`: 存放主题样式和一些常用样式

`utils`: 存放工具类,已安装lodsh可以使用中常用方法如防抖节流,数组交补集diff去重,对象判空深克隆深比较等,对时间格式化可以使用dayjs

`views`: 
#### features
1. 配置了 eslint,需要 vscode 安装 eslint 插件对代码进行检查和统一格式化

2. 暂时使用 elementplus 默认主题(颜色),后续将会配置主题将直接覆盖(已完成,后续根据具体ui主题调整`datastore-portal-ui\src\styles\index.scss`中主题样式)

3. 后续将使用脚本动态生成页面(pages与input)
