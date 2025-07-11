import DefaultTheme from 'vitepress/theme';
import './styles/custom-containers.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // 注册全局组件
    // app.component('CppHome', CppHome)
  }
}
