# Vue2Crontab

Vue2Crontab

> 支持 Vue 2 的 crontab 组件。

<p align='center'>
<a href="https://github.com/tudan110/vue2-crontab/blob/main/README.md">English</a> | <b>简体中文</b>
</p>

## 截图

![home.png](public/home.png)

![crontab.png](public/crontab.png)

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
npm i vue2-crontab
```

### 全局导入
在 main.js 中导入并注册组件
```js
import Vue from 'vue'
import Vue2Crontab from 'vue2-crontab'

Vue.use(Vue2Crontab)
```

### 手动导入
```js
import Vue2Crontab from 'vue2-crontab'

export default {
    components: {
        Vue2Crontab
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
    <script src="/lib/vue2-crontab.umd.js"></script>
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
    <vue2-crontab></vue2-crontab>
</div>
</body>
<script>
    var app = new Vue({
        el: '#app'
    })
</script>
</html>
```

## 示例

```vue
<template>
  <div id="app">

    <div class="container">

      <h1>Vue2Crontab</h1>

      <!-- 表单 -->
      <el-form :model="form" :inline="true" label-width="110px">
        <el-form-item label="执行时间" prop="cronExpression">
          <el-input
              v-model="form.cronExpression"
              placeholder="请输入执行时间"
              clearable
              @focus="showCron=true"
          />
        </el-form-item>

      </el-form>

      <!-- cron 组件 -->
      <el-dialog title="执行时间" :visible.sync="showCron">
        <vue2-crontab @hide="showCron=false" @fill="crontabFill" :expression="form.cronExpression"></vue2-crontab>
      </el-dialog>

    </div>

  </div>

</template>

<script>
  export default {
    name: 'App',
    components: {},
    data() {
      return {
        showCron: false,
        form: {
          cronExpression: null,
        }
      }
    },
    methods: {
      crontabFill(value) {
        this.form.cronExpression = value
      },
    }
  }
</script>

<style scoped>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin-top: 60px;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
  }
</style>
```

## License

Made with ❤️

Published under [MIT License](./LICENSE).
