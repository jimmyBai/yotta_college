<template>
  <div class="g-window">
    <nav-bar v-show="showNav"></nav-bar>
    <!-- 切页动画设置 -->
    <transition :name="transitionName">
      <router-view></router-view>
    </transition>
    <fullscreen-img></fullscreen-img>
    <loading></loading>
  </div>
</template>

<script>
import Vue from 'vue'
import {Group, Popup, Cell, XHeader, XInput, XButton, XSwitch, Datetime, ViewBox, Search, ButtonTab, ButtonTabItem, Divider, AlertPlugin, ConfirmPlugin, Tab, TabItem, Swiper, SwiperItem, XDialog, Toast} from 'vux'
import Loading from './pages/components/Loading'
import FullscreenImg from './pages/components/FullscreenImg'

import $ from 'jquery'



// 全局注册vux的组件
Vue.component('Group', Group)
Vue.component('Popup', Popup)
Vue.component('Cell', Cell)
Vue.component('Datetime', Datetime)
Vue.component('ButtonTab', ButtonTab)
Vue.component('ButtonTabItem', ButtonTabItem)
Vue.component('Divider', Divider)
Vue.component('Search', Search)
Vue.component('XInput', XInput)
Vue.component('XButton', XButton)
Vue.component('XHeader', XHeader)
Vue.component('XSwitch', XSwitch)

Vue.component('Tab', Tab)
Vue.component('TabItem', TabItem)
Vue.component('Swiper', Swiper)
Vue.component('SwiperItem', SwiperItem)
Vue.component('XDialog', XDialog)
Vue.component('Toast', Toast)

Vue.use(AlertPlugin)
Vue.use(ConfirmPlugin)

import NavBar from './pages/components/NavBar'
import cookie from './utils/cookie'
import pageUtil from './utils/page'
import config from './configs'
const sessionHistory = window.sessionStorage

export default {
  data () {
    return {
      transitionName: 'forward'
    }
  },
  watch: {
    // 更新页面所在位置，用于判断是前进页还是后退页
    '$route' (to, from) {
      if (to && from) {
        let toPath = to.path
        let fromPath = from.path
        let count = parseInt(sessionHistory.getItem('count'))
        // 如果是导航页或者没有初始记录
        if (Number.isNaN(count)) {
          count = 1
          this.transitionName = 'forward'
        } else {
          count += 1
          let fromCount = parseInt(sessionHistory.getItem(fromPath))
          let toCount = parseInt(sessionHistory.getItem(toPath))
          if (toCount < fromCount && fromCount < count && (!pageUtil.showNav(fromPath))) {
            this.transitionName = 'backward'
            count = toCount
          } else {
            this.transitionName = 'forward'
          }
          if (pageUtil.showNav(toPath)) {
            count = 1
          }
        }
        sessionHistory.setItem(toPath, count)
        sessionHistory.setItem('count', count)
      }
    }
  },
  // 所有页面更新都会触发此函数
  updated () {
    //document.getElementById('chatstatus').innerHTML = 'app.vue loaded';
    // 提交sdk连接请求
    this.$store.dispatch('connect')
    this.$store.dispatch('updateRefreshState')
  },
  components: {
    NavBar,
    ViewBox,
    Loading,
    FullscreenImg
  },
  computed: {
    // 是否显示导航条
    showNav () {
      return pageUtil.showNav(this.$route.path)
    }
  }
}
</script>

