// 引入组件
import Vue2Crontab from './Vue2Crontab.vue'

// 为组件提供 install 安装方法，供按需引入
Vue2Crontab.install = (Vue) => {
    Vue.component(Vue2Crontab.name, Vue2Crontab)
}

// 导出组件
export default Vue2Crontab
