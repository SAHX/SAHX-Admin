
# SAHX 后台管理系统
>### 注意：
> 近期正在进行Vue系列的版本升级，部分代码未完成，大家 clone or download 时，请到 [release](https://github.com/SAHX/SAHX-Admin/releases) 中下载源码。
> 
---
>
#### 致所有关注SAHX-Admin的亲们:
 最近工作较忙，几乎没有时间更新功能，再加上现在整个vue技术生态都陆续升级到2.0版本，再继续维护1.0版本显得没有意义了。所以决定将在空闲时间里，把整个项目升级到vue2.0。大家可以继续关注该项目，也希望有一定vuejs基础和nodejs基础的同学参与进来，结合大家平时开发中遇到需求和问题，把该项目做成完全依赖前端js技术，实现简单的、易用易懂的、功能齐全的OAM管理系统。

## 简介
 SAHX-Admin 是套功能较为完整的后台管理系统架构, 以[Thinkjs](https://github.com/75team/thinkjs)作为中间层, [Vuejs](https://github.com/vuejs/vue)作为前端模块化开发, [AdminLET](https://github.com/almasaeed2010/AdminLTE)作为前端UI, 实现了前后端分离, 前端组件化,
 便于多人协同开发.

## 技术前提
   - 熟悉nodejs以及npm
   - 掌握[Thinkjs](https://github.com/75team/thinkjs)
   - 掌握[vuejs (v1.0)](http://cn.vuejs.org/guide/),[vue-router(路由)](https://github.com/vuejs/vue-router/tree/1.0/docs/zh-cn),[Vuex(状态管理架构)](https://github.com/vuejs/vuex/tree/1.0/docs/zh-cn),以及[vue-validator(表单验证器)](http://vuejs.github.io/vue-validator/zh-cn/index.html)
   - 熟悉[Bootstrap](http://v3.bootcss.com/)
   - 了解[AdminLET](https://github.com/almasaeed2010/AdminLTE)
   - 了解[webpack基本使用](https://segmentfault.com/a/1190000003985802#articleHeader6)

## 跑起来试试
##### 1 安装依赖

```
npm install
```
##### 2 前端编译（主要编译front里的vue文件）
```
npm run wp
```

##### 3 启动服务（默认8360端口）

```
npm start
```
##### 4 访问
```
http://127.0.0.1:8360
```

## 接下来要做点什么?
- 完善文档,详情介绍各个功能如何使用
- [Thinkjs] 表格导出Excel文件,CSV文件
- [Thinkjs] 微信开发SDK接入
- [Thinkjs] 七牛云存储token生成
- [Vue] 图片查看器组件

具体开发进度看[这里](https://github.com/SAHX/SAHX-Admin/projects/1)
