import Vue from 'vue'

// 添加Fastclick移除移动端点击延迟
import FastClick from 'fastclick'
FastClick.attach(document.body)

// 添加手势触摸事件，使用方法如 v-touch:swipeleft
import VueTouch from './plugins/touchEvent'
Vue.use(VueTouch)

import md5 from './utils/md5'
import cookie from './utils/cookie'

import config from './configs'

var formData = new Vue({
  el: '#form-data',
  data: {
    logo: config.logo,
    account: '',
    password: '',
    errorMsg: ''
  },
  mounted () {
      let accid = '80369525a7fe65f9f3774.20254132'
      let token = 'c2bc9a05f6f2143f3cb0285ce20429f4'
      let roomid=  '22681813'
      cookie.setCookie('uid', accid.toLowerCase())
      cookie.setCookie('sdktoken', token.toLowerCase())
      location.href = config.homeUrl
      // window.location.href = config.homeUrl + '/'+ `#/roomChat/` + roomid

      // this.$el.style.display = ""

    // this.accid = '80369525a7fe65f9f3774.20254132'
    // this.token = 'c2bc9a05f6f2143f3cb0285ce20429f4'
    // this.roomid=  '22681813'
    // console.log(this.roomid)
    // /*this.accid = this.$refs.accid.value
    // this.token = this.$refs.token.value*/

    // cookie.setCookie('uid', this.accid.toLowerCase())
    // cookie.setCookie('sdktoken', this.token.toLowerCase())

    // // location.href = config.homeUrl
    // //location.href = config.homeUrl + '/' + this.$refs.roomid.value + `#/roomChat/` + this.$refs.roomid.value

    // location.href = config.homeUrl + '/' + this.roomid + `#/roomChat/` + this.roomid

  },
  methods: {
    login () {
      if (this.account === '') {
        this.errorMsg = '999'
        return
      } else if (this.password === '') {
        this.errorMsg = '密码不能为空'
        return
      } else if (this.password.length < 6) {
        this.errorMsg = '密码至少需要6位'
        return
      }
      this.errorMsg = ''
      // 本demo做一次假登录
      // 真实场景应在此向服务器发起ajax请求
      // let sdktoken = md5(this.password)
      let sdktoken = this.password
      // 服务端帐号均为小写
      cookie.setCookie('uid', this.account.toLowerCase())
      cookie.setCookie('sdktoken', sdktoken)
      location.href = config.homeUrl

    },
    regist () {
      location.href = config.registUrl
    }
  },
})
