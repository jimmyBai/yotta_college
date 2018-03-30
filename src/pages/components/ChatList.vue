<template>
  <ul id="chat-list" class="m-chat-list p-chat-list">
    <li class="u-msg item-time" v-if="canLoadMore">
      ---- 上拉加载更多 ----
    </li>
    <li class="u-msg item-time" v-else>
      ---- 已无更多记录 ----
    </li>

    <li class="u-msg item-you"
    	v-for="(msg,index) in msglist"
      :type="type"
      :rawMsg="msg"
      :isRobot="isRobot"
      :userInfos="userInfos"
      :myInfo="myInfo"
      :key="msg.idClient"
      @msg-loaded="msgLoaded"
	    :class="{
	      'item-time': msg.type==='timeTag',
	      'item-tip': msg.type==='tip',
	      'session-chat': type==='session',
	      'item-img': msg.type==='images'
	    }">

	    <div v-if="msg.type==='timeTag'">---- {{msg.text}} ----</div>
	    <div v-else-if="msg.type==='tip'" class="tip">{{msg.tip}}</div>

	    <div
	      v-else-if="msg.from == teacherId"
	      :idClient="msg.idClient"
	      :time="msg.time"
	      :flow="msg.flow"
	      :type="msg.type"
	      v-touch:hold="revocateMsg"
	    >

	      <a class="msg-head" v-if="msg.avatar" :href="msg.link">
	        <img :src="msg.avatar">
	      </a>
	      <p class="msg-user" v-else-if="msg.type!=='notification'">

		      <!-- 头像 -->
		      <span class="page_msgMe" v-if="msg.fromAvatar!==''">
		        <img class="myItem-me" :src="msg.fromAvatar" alt="" style="width:45px; height: 45px; border-radius:100%;"><!-- v-if="msg.flow==='out'" -->
		        <img class="exceptionalImg" src="http://college.m-fyd.com/assets/yunxin/res/im/exceptional.png" alt="" @click="clickExceptionalImg()">
		      </span>
		      <span class="page_msgMe" v-if="msg.fromAvatar===''">
		        <img class="myItem-me" src="http://college.m-fyd.com/assets/yunxin/res/im/tourists.png" alt="" style="width:45px; height: 45px; border-radius:100%;">
		      </span>

		      <!-- <span class="page_msgYou">
		        <img v-if="msg.flow==='in'" class="myItem-you" src="http://college.m-fyd.com/assets/yunxin/res/im/hostHeadImg.png" alt="">
		        <img v-if="msg.flow==='in'" class="exceptionalImg" src="http://college.m-fyd.com/assets/yunxin/res/im/exceptional.png" alt="">
		      </span> -->
		      <!-- 头像 -->

	      	<span class="msg-dateOfName"><em>{{msg.showTime}}</em>{{msg.fromNick}}</span>

	      </p>

	      <span v-if="msg.type==='text'" class="msg-text" v-html="msg.text"></span>
	      <span v-else-if="msg.type==='custom-type1'" class="msg-text" ref="mediaMsg"></span>
	      <span v-else-if="msg.type==='custom-type3'" class="msg-text" ref="mediaMsg"></span>
	      <span v-else-if="msg.type==='image'" class="msg-text" ref="mediaMsg" @click.stop="showFullImg(msg.file.url)"><img :src='msg.file.url'/></span>
	      <span v-else-if="msg.type==='video'" class="msg-text" ref="mediaMsg"></span>



	      <span v-else-if="msg.type==='audio'" class="msg-text msg-audio" id="msg-audio" @click.prevent="playAudio(msg.file.mp3Url,msg.file,index)">
	        <span v-show="page_showAudio">{{Math.round(msg.file.dur / 1000) + '" 点击播放'}}</span>
	        <img class="page_voice" id="page_voice" v-if="msg.file.isplay" src="http://college.m-fyd.com/assets/yunxin/res/im/voiceSpeaker.gif"/>
	      </span>




	      <span v-else-if="msg.type==='file'" class="msg-text">
	        <a :href="msg.fileLink" target="_blank">
	        <i class="u-icon icon-file"></i>
	          {{msg.file.name}}
	        </a>
	      </span>
	      <span v-else-if="msg.type==='robot'" class="msg-text" :class="{'msg-robot': msg.robotFlow!=='out' && !isRobot}">
	        <div v-if="msg.robotFlow==='out'">{{msg.text}}</div>
	        <div v-else-if="msg.subType==='bot'">
	          <!-- 多次下发的机器人消息 -->
	          <div v-for="tmsgs in msg.message">
	            <!-- 多个机器人模板 -->
	            <div v-for="tmsg in tmsgs">
	              <div v-if="tmsg.type==='text'">
	                <p>{{tmsg.text}}</p>
	              </div>
	              <div v-else-if="tmsg.type==='image'">
	                <p>
	                  <img :src="tmsg.url">
	                </p>
	              </div>
	              <div v-else-if="tmsg.type==='url'">
	                <a :class="tmsg.style" :href="tmsg.target" target="_blank">
	                  <div v-if="tmsg.image">
	                    <p v-for="tmsg2 in tmsg.image">
	                      <img :src="tmsg2.url">
	                    </p>
	                  </div>
	                  <div v-if="tmsg.text">
	                    <p v-for="tmsg2 in tmsg.text">{{tmsg2.text}}</p>
	                  </div>
	                </a>
	              </div>
	              <div v-else-if="tmsg.type==='block'">
	                <a :class="tmsg.style" :params="tmsg.params" :target="tmsg.target" @click="sendRobotBlockMsg(tmsg, msg)">
	                  <div v-if="tmsg.image">
	                    <p v-for="tmsg2 in tmsg.image">
	                      <img :src="tmsg2.url">
	                    </p>
	                  </div>
	                  <div v-if="tmsg.text">
	                    <p v-for="tmsg2 in tmsg.text">{{tmsg2.text}}</p>
	                  </div>
	                </a>
	              </div>
	            </div>
	          </div>
	        </div>
	        <div v-else-if="msg.subType==='faq'">
	          <!--p>{{msg.message.question}}</p-->
	          <p>{{msg.message.answer}}</p>
	        </div>
	        <span v-if="msg.robotFlow!=='out' && !isRobot" class="msg-link">
	          <a class="link-right" @click="continueRobotMsg(msg.content.robotAccid)">继续对话</a>
	        </span>
	      </span>
	      <!--<span v-else-if="msg.type==='notification'" class="msg-text notify" v-html="getText(msg)"></span>-->
	      <!--<span v-else class="msg-text" v-html="msg.showText"></span>-->
	      <span v-if="msg.status==='fail'" class="msg-failed"><i class="weui-icon-warn"></i></span>

	    </div>



	  </li>

	  	<audio ref='myaudio' style="opacity: 0;">
	      <source></source>
	    </audio>




  </ul>



</template>
<script type="text/javascript">
  import util from '../../utils'
  import config from '../../configs'
  import emojiObj from '../../configs/emoji'
//import ChatItem from './ChatItem'

  export default {
//  components: {
//    ChatItem
//  },
    props: {
      type: String, // 类型，chatroom, session
      canLoadMore: [String, Boolean],
      rawMsg: {
        type: Object,
        default () {
          return {}
        }
      },
      isRobot: {
        type: Boolean,
        default () {
          return false
        }
      },
      msglist: {
        type: Array,
        default () {
          return []
        }
      },
      userInfos: {
        type: Object,
        default () {
          return {}
        }
      },
      myInfo: {
        type: Object,
        default () {
          return {}
        }
      },
      // robotInfos: {
      //   type: Object,
      //   default () {
      //     return {}
      //   }
      // }
    },
    data () {
      return {
        isFullImgShow: false,
        msgLoadedTimer: null,

        isFullImgShow: false,
        currentAudio: null,
        page_showAudio: true,
        teacherId: this.$store.state.haha.teacher_im,
        showScrollBox: false
      }
    },
    computed: {
      robotInfos () {
        return this.$store.state.robotInfos
      }
    },
    beforeMount () {
      let item = Object.assign({}, this.rawMsg)
      // 标记用户，区分聊天室、普通消息
      if (this.type === 'session') {
        if (item.flow === 'in') {
          if (item.type === 'robot' && item.content && item.content.msgOut) {
            // 机器人下行消息
            let robotAccid = item.content.robotAccid
            item.avatar = this.robotInfos[robotAccid].avatar
            item.isRobot = true
            item.link = `#/namecard/${robotAccid}`
          } else if (item.from !== this.$store.state.userUID) {
            item.avatar = (this.userInfos[item.from] && this.userInfos[item.from].avatar) || config.defaultUserIcon
            item.link = `#/namecard/${item.from}`
          } else {
            item.avatar = this.myInfo.avatar
          }
        } else if (item.flow === 'out') {
          item.avatar = this.myInfo.avatar
        }
      } else {
        // 标记时间，聊天室中
        item.showTime = util.formatDate(item.time)
      }
      if (item.type === 'timeTag') {
        // 标记发送的时间
        item.showText = item.text
      } else if (item.type === 'text') {
        // 文本消息
        item.showText = util.escape(item.text)
        if (/\[[^\]]+\]/.test(item.showText)) {
          let emojiItems = item.showText.match(/\[[^\]]+\]/g)
          emojiItems.forEach(text => {
            let emojiCnt = emojiObj.emojiList.emoji
            if (emojiCnt[text]) {
              item.showText = item.showText.replace(text, `<img class="emoji-small" src="${emojiCnt[text].img}">`)
            }
          })
        }
      } else if (item.type === 'custom') {
        let content = JSON.parse(item.content)
        // type 1 为猜拳消息
        if (content.type === 1) {
          let data = content.data
          let resourceUrl = config.resourceUrl
          // item.showText = `<img class="emoji-middle" src="${resourceUrl}/im/play-${data.value}.png">`
          item.type = 'custom-type1'
          item.imgUrl = `${resourceUrl}/im/play-${data.value}.png`
        // type 3 为贴图表情
        } else if (content.type === 3) {
          let data = content.data
          let emojiCnt = ''
          if (emojiObj.pinupList[data.catalog]) {
            emojiCnt = emojiObj.pinupList[data.catalog][data.chartlet]
            // item.showText = `<img class="emoji-big" src="${emojiCnt.img}">`
            item.type = 'custom-type3'
            item.imgUrl = `${emojiCnt.img}`
          }
        } else {
          item.showText = util.parseCustomMsg(item)
          if (item.showText !== '[自定义消息]') {
            item.showText += ',请到手机或电脑客户端查看'
          }
        }
      } else if (item.type === 'image') {
        // 原始图片全屏显示
        item.originLink = item.file.url
      } else if (item.type === 'video') {
        // ...
      } else if (item.type === 'audio') {
        item.audioSrc = item.file.mp3Url
        item.showText = Math.round(item.file.dur / 1000) + '" 点击播放'
      } else if (item.type === 'file') {
        item.fileLink = item.file.url
        item.showText = item.file.name
      } else if (item.type === 'notification') {
        //对于系统通知，更新下用户信息的状态
        item.showText = util.generateChatroomSysMsg(item)
      } else if (item.type === 'tip') {
        //对于系统通知，更新下用户信息的状态
        item.showText = item.tip
      } else if (item.type === 'robot') {
        let content = item.content || {}
        let message = content.message || []
        if (!content.msgOut) {
          // 机器人上行消息
          item.robotFlow = 'out'
          item.showText = item.text
        } else if (content.flag === 'bot') {
          item.subType = 'bot'
          message = message.map(item => {
            if (item.type === 'template') {
              // 在vuex(store/actions/msgs.js)中已调用sdk方法做了转换
              return item.content.json
            } else if (item.type === 'text' || item.type === 'answer') {
              // 保持跟template结构一致
              return [{
                type: 'text',
                text: item.content
              }]
            } else if (item.type === 'image') {
              // 保持跟template结构一致
              return [{
                type: 'image',
                url: item.content
              }]
            }
          })
          item.message = message
        } else if (item.content.flag === 'faq') {
          item.subType = 'faq'
          item.query = message.query
          let match = message.match.sort((a, b) => {
            // 返回最匹配的答案
            return b.score - a.score
          })
          item.message = match[0]
        }
      } else {
        item.showText = `[${util.mapMsgType(item)}],请到手机或电脑客户端查看`
      }
      this.msg = item
    },
    mounted () {
      let item = this.msg
      // 有时序问题的操作
      this.$nextTick(() => {
        let media = null
        if (item.type === 'image') {
          // 图片消息缩略图
          media = new Image()
          media.src = item.file.url + '?imageView&thumbnail=180x0&quality=85'
        } else if (item.type === 'custom-type1') {
          // 猜拳消息
          media = new Image()
          media.className = 'emoji-middle'
          media.src = item.imgUrl
        } else if (item.type === 'custom-type3') {
          // 贴图表情
          media = new Image()
          media.className = 'emoji-big'
          media.src = item.imgUrl
        } else if (item.type === 'video') {
          if (/(mov|mp4|ogg|webm)/i.test(item.file.ext)) {
            media = document.createElement('video')
            media.src = item.file.url
            media.width = 640
            media.height = 480
            media.autoStart = false
            media.preload = 'metadata'
            media.controls = 'controls'
          } else {
            let aLink = document.createElement('a')
            aLink.href = item.file.url
            aLink.target = '_blank'
            aLink.innerHTML = `<i class="u-icon icon-file"></i>${video.name}`
            this.$refs.mediaMsg.appendChild(aLink)
          }
        }
        if (media) {
          if (this.$refs.mediaMsg) {
            this.$refs.mediaMsg.appendChild(media)
          }
          media.onload = () => {
            this.$emit('msg-loaded')
          }
          media.onerror = () => {
            this.$emit('msg-loaded')
          }
        } else {
          this.$emit('msg-loaded')
        }
      }) // end this.nextTick

    },
    methods: {
    	revocateMsg (vNode) {
        // 在会话聊天页
        if (this.$store.state.currSessionId) {
          if (vNode && vNode.data && vNode.data.attrs) {
            let attrs = vNode.data.attrs
            if (attrs.type === 'robot') {
              return
            }
            // 自己发的消息
            if (attrs.flow === 'out') {
              let that = this
              this.$vux.confirm.show({
                title: '确定需要撤回消息',
                onCancel () {
                },
                onConfirm () {
                  that.$store.dispatch('revocateMsg', {
                    idClient: attrs.idClient
                  })
                }
              })
            }
          }
        }
      },
      sendRobotBlockMsg (msg, originMsg) {
        let body = '[复杂按钮模板触发消息]'
        if (msg.text && msg.text.length === 1) {
          body = msg.text[0].text
        }
        let robotAccid = originMsg.content.robotAccid
        if (!this.isRobot) {
          body = `@${this.robotInfos[robotAccid].nick} ${body}`
        }
        if (this.type === 'session') {
          this.$store.dispatch('sendRobotMsg', {
            type: 'link',
            scene: originMsg.scene,
            to: originMsg.to,
            robotAccid,
            // 机器人后台消息
            params: msg.params,
            target: msg.target,
            // 显示的文本消息
            body
          })
        } else if (this.type === 'chatroom') {
          this.$store.dispatch('sendChatroomRobotMsg', {
            type: 'link',
            robotAccid,
            // 机器人后台消息
            params: msg.params,
            target: msg.target,
            // 显示的文本消息
            body
          })
        }
      },
      continueRobotMsg (robotAccid) {
        this.$store.dispatch('continueRobotMsg', robotAccid)
      },
      showFullImg (src) {
        this.$store.dispatch('showFullscreenImg', {
          src
        })
      },
      msgLoaded () {
        clearTimeout(this.msgLoadedTimer)
        this.msgLoadedTimer = setTimeout(() => {
          this.$emit('msgs-loaded')
        }, 20)
      },
      getText(txt){
      	return util.generateChatroomSysMsg(txt);
      },
      clickExceptionalImg () {
        this.$store.dispatch('addshowScrollBox',true)
     	},
      // 语音播放
      playAudio (src,data,index) {
      	let vm = this;
      	let myaudio = vm.$refs.myaudio
      	myaudio.src = src
      	vm.msglist.forEach(function(item,num){
      		if(num == index){
      			if(typeof data.isplay == 'undefined' || !data.isplay){
		      		vm.$set(item.file,'isplay',false)
		      	}
      		}else{
      			if(item.file){
      				vm.$set(item.file,'isplay',false)
      			}
      		}
      	})

      	if (data.isplay) {
          vm.$set(data,'isplay',false)
          myaudio.pause()
          myaudio.currentTime = 0.0

        }else{
          vm.$set(data,'isplay',true)
          myaudio.play()
        }

      	myaudio.onended = () => {
      		vm.$set(data,'isplay',false)
        }

//      var vm = this;
//      if(!data.ispaused){
//        vm.$set(data,'ispaused',false)
//        console.log(data)
//      }else{
//
//        data.ispaused = !data.ispaused
//        this.currentAudio.pause()
//        console.log(data.ispaused)
//      }
//
//      if (this.currentAudio) {
//    		if (!this.currentAudio.paused) {
//    			this.currentAudio.pause()
//    		}
//    	} else {
//    		this.currentAudio = new Audio()
//    	}
//
//    	if (!this.currentAudio) {
//    		this.currentAudio = new Audio()
//    	}
//    	this.currentAudio.src = src
//
//       if(!data.ispaused){
//          this.currentAudio.play()
//          vm.$set(data,'ispaused',true)
//       }else{
//
//       }
//
//    	var mp3 = document.getElementsByClassName("mp3_url");
//    	var j = 0;
//    	for(var i = 0; i < mp3.length; i++){
//    		if(src == mp3[i].value){
//    			mp3[i].nextElementSibling.style.display = "inline";
//    			j = i;
//
//    		}else{
//    			mp3[i].nextElementSibling.style.display = "none";
//        }
//      }
//
//    	this.currentAudio.onended = () => {
//        mp3[j].nextElementSibling.style.display = "none";
//        vm.$set(data,'ispaused',false)
//				}

    	}

    }
  }
</script>

<style type="text/css">
  .p-chat-list {
    .u-icon {
      width: 1.4rem;
      height: 1.6rem;
      margin-right: 0.2rem;
      vertical-align: bottom;
    }
  }
  .p-chat-history {
    .u-msg {
      .msg-link {
        display: none;
      }
    }
  }
  .p-room-chat-list {
    .u-msg {
      .msg-text {
        max-width: 50%;
      }
      .msg-link {
        bottom: 0;
        right: -4rem;
        font-size: 0.9rem;
      }
    }
  }
  .page_qrCode{
    width: 260px;

  }
  .page_voice{
    width: 20px;
  }


  .exceptionalImg{
  	width: 25px;
  	height: 25px;
  	position: absolute;
  	top: 48px;
  	left: 5px;
  }
</style>
