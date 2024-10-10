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
