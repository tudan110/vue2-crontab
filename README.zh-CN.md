# Vue2 + JS + Webpack For SFC template

Vue2SfcTemplate

> 支持 Vue 2 的 Vue.js 单文件组件模板示例。

<p align='center'>
<a href="https://github.com/tudan110/vue2-sfc-template/blob/main/README.md">English</a> | <b>简体中文</b>
</p>

## 功能

- 为 Vue2 提供库模式的开发环境
- 在发布时用于适配 package.json 的脚本

## 使用模板

要直接使用此模板，请执行以下命令:

```bash
npx degit tudan110/vue2-sfc-template my-component
```

并将 `vue2-sfc-template` 和 `Vue2SfcTemplate` 全局替换为您的组件库名称。

## 安装

确保先安装依赖：

```bash
# sh
npm install
```

## 开发

启动开发服务：

```sh
npm run dev
```

## 构建

构建库用于生产或发布：

```sh
npm run lib
```

构建示例项目用于生产或发布：

```sh
npm run build
```

## 检查并修复文件
```
npm run lint
```

## 发布包到 npm

登录 npm 库
```sh
npm login
```

发布
```sh
npm publish --access public
```

## 如何使用 lib 文件？

### npm 安装

```sh
npm i vue2-sfc-template
```

### 全局导入
在 main.js 中导入并注册组件
```js
import Vue from 'vue'
import Vue2SfcTemplate from 'vue2-sfc-template'

Vue.use(Vue2SfcTemplate)
```

### 手动导入
```js
import Vue2SfcTemplate from 'vue2-sfc-template'

export default {
    components: {
        Vue2SfcTemplate
    }
}
```

### 不使用构建工具或通过 `CDN` 引入

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite App</title>
    <script src="https://cdn.jsdelivr.net/npm/vue@2"></script>
    <!-- 确保你的当前目录有该产物 -->
    <script src="/lib/vue2-sfc-template.umd.js"></script>
    <style>
        #app {
            font-family: Avenir, Helvetica, Arial, sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            text-align: center;
            color: #2c3e50;
            margin-top: 60px;
        }
    </style>
</head>
<body>
<div id="app">
    <vue2-sfc-template></vue2-sfc-template>
</div>
</body>
<script>
    var app = new Vue({
        el: '#app'
    })
</script>
</html>
```

## License

Made with ❤️

Published under [MIT License](./LICENSE).
