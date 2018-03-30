<template>

  <div class="m-chat-editor" @click="hideRobotList" id="m-chat-editor" style="z-index: 999;">
    <chat-emoji
      v-bind:type="type"
      v-bind:scene="scene"
      v-bind:to="to"
      v-show="isEmojiShown"
      v-on:add-emoji="addEmoji"
      v-on:hide-emoji="hideEmoji"
    ></chat-emoji>
    <group v-show="isRobotListShown" class="m-chat-emoji m-chat-robot">
      <cell v-for="robot in robotslist" :title="robot.nick" :key="robot.account" @click.native="chooseRobot(robot)">
        <img class="icon" slot="icon" width="20" :src="robot.avatar">
      </cell>

      <x-switch title="Default popup" v-model="popupShow"></x-switch>
      <!-- <x-switch title="set max-height=50%" v-model="popupPLShow"></x-switch> -->

    </group>

    <!-- 红包 --><!-- 暂时注释 -->
    <div class="page_popupBox">
      <popup v-model="popupShow" v-show="popupShow">
        <div class="page_popup">
          <div class="page_showHbLeft" v-if="!isRobot" @change="sendFileMsg">
            <img class="sendImg" src="/assets/yunxin/res/im/sendImg.png" alt="">
            <input type="file" ref="fileToSent">
          </div>
          <div class="page_showHbRight"  @click="sendHbMsg">
            <img class="sendHBImg" src="/assets/yunxin/res/im/sendHB.png" alt="">
          </div>
        </div>
      </popup>
    </div>

    <!-- 评论 --><!-- 暂时注释 -->
    <!-- <div>
      <popup v-model="popupPLShow" position="bottom" max-height="50%">

        <div id="app">
          <ul class="tabs">
              <li class="li-tab" v-for="(item,index) in tabsParam"
              @click="toggleTabs(index)"
              :class="{active:index==nowIndex}">{{item}}(88)</li>
              <li class="page_popupPlCK" @click="clickShutDown">
                <img class="shutDownPlImg" src="http://college.m-fyd.com/assets/yunxin/res/im/shutDown.png" alt="">
              </li>
          </ul>
          <!-- 评论 -->
          <!-- <div class="divTab" v-show="nowIndex===0">

            <div class="page_popupPlList">
              <div class="page_popupPlNcList">
                <div class="page_popupPlImg">
                  <img class="popupPlImg" src="http://college.m-fyd.com/assets/yunxin/res/im/theHost.png" alt="">
                </div>
                <div class="page_popupPlNameDate">
                  <div class="popupPlNameDate">
                    <span class="popupPlName">上善若水</span>
                    <span class="popupPlDate">2017-12-12&nbsp;&nbsp;<span>12:55</span></span>
                  </div>
                  <div class="page_popupPlShow">
                    <span>可以的</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 打赏 -->
          <!-- <div class="divTab2 newDivTab" v-show="nowIndex===1">

            <div class="page_excepitionalList">
              <div class="page_excepitionalCC">
                <div class="page_excepitionalImg">
                  <img class="excepitionalImg" src="http://college.m-fyd.com/assets/yunxin/res/im/theHost.png" alt="">
                </div>

                <div class="page_excepitionalNM">
                  <span class="excepitionalName">1.宁静致远&nbsp;&nbsp;</span>
                  <span><img class="medalImg" src="http://college.m-fyd.com/assets/yunxin/res/im/medal1.png" alt=""></span>
                  <span class="excepitionalMoney">1000.00<span>元</span></span>
                </div>
              </div>
            </div>


            <div class="page_excepitionalChoose">
              <div class="excepitionalChoose_TT">
                <span>选择头像进行打赏</span>
              </div>

              <div class="excepitionalChoose_List">
                <div class="excepitionalChoose_nc">

                  <div class="excepitionalChoose_ct">
                    <img class="etCsImg" src="http://college.m-fyd.com/assets/yunxin/res/im/theHost.png" alt="">
                    <img class="etCsImg" src="http://college.m-fyd.com/assets/yunxin/res/im/tourists.png" alt="">
                    <img class="etCsImg" src="http://college.m-fyd.com/assets/yunxin/res/im/theHost.png" alt="">
                    <img class="etCsImg" src="http://college.m-fyd.com/assets/yunxin/res/im/tourists.png" alt="">
                    <img class="etCsImg" src="http://college.m-fyd.com/assets/yunxin/res/im/theHost.png" alt="">
                    <img class="etCsImg" src="http://college.m-fyd.com/assets/yunxin/res/im/tourists.png" alt="">
                    <img class="etCsImg" src="http://college.m-fyd.com/assets/yunxin/res/im/theHost.png" alt="">
                    <img class="etCsImg" src="http://college.m-fyd.com/assets/yunxin/res/im/tourists.png" alt="">
                    <img class="etCsImg" src="http://college.m-fyd.com/assets/yunxin/res/im/theHost.png" alt="">
                    <img class="etCsImg" src="http://college.m-fyd.com/assets/yunxin/res/im/tourists.png" alt="">
                    <img class="etCsImg" src="http://college.m-fyd.com/assets/yunxin/res/im/theHost.png" alt="">
                    <img class="etCsImg" src="http://college.m-fyd.com/assets/yunxin/res/im/tourists.png" alt="">
                    <img class="etCsImg" src="http://college.m-fyd.com/assets/yunxin/res/im/theHost.png" alt="">
                    <img class="etCsImg" src="http://college.m-fyd.com/assets/yunxin/res/im/tourists.png" alt="">
                    <img class="etCsImg" src="http://college.m-fyd.com/assets/yunxin/res/im/theHost.png" alt="">
                    <img class="etCsImg" src="http://college.m-fyd.com/assets/yunxin/res/im/tourists.png" alt="">
                  </div>

                </div>
              </div>

            </div>
          </div>



        </div>
      </popup>
    </div> -->

    <!-- 目录 -->
    <div>
      <x-dialog v-model="showScrollBox" class="dialog-demo" hide-on-blur>
        <!-- <divider class="dialog-title">目录</divider>
        <div class="img-box" style="height:240px; padding:15px 20px 15px 0px; overflow:hidden; overflow-y:scroll; -webkit-overflow-scrolling:touch;">
          <div class="page_directoryList">
            <div class="directoryList">
              <span>第一期</span>
              <span>如何化男妆</span>
            </div>
            <div class="directoryList">
              <span>第二期</span>
              <span>如何化男妆</span>
            </div>
            <div class="directoryList">
              <span>第三期</span>
              <span>如何化男妆&nbsp;&nbsp;<span class="showRed">NEW</span></span>
            </div>
          </div>
        </div> -->

        <div class="dialog_no">
          <span>敬请期待</span>
        </div>
        <div @click="showScrollBox=false">
          <span class="vux-close"></span>
        </div>
      </x-dialog>
    </div>
    <!-- 红包暂无开发弹出框 -->
    <!-- <div>
      <x-dialog v-model="showScrollBox2" class="dialog-demo" hide-on-blur>

        <div class="dialog_no">
          <span>敬请期待</span>
        </div>
        <div @click="showScrollBox2=false">
          <span class="vux-close"></span>
        </div>
      </x-dialog>
    </div> -->

		<!-- 红包显示dialog -->
		<div class="page_sendRedEnvelope" v-show="redEnvelopeShow">
			<div class="sendRedEnvelopeTitle">
				<img class="sendRedEnvelopeImg" src="http://college.m-fyd.com/assets/yunxin/res/im/backIcon.png" @click="redEnvelopeShow=false"/>
				<span class="sendRedEnvelopeText">发红包</span>
			</div>

			<div class="sendRedEnvelopeBody">
				<!-- 红包个数 -->
				<div class="sendRedEnvelopeDiv">
					<div class="sendRedEnvelopeDiv_left">
						<span class="redEnvelopeNum">红包个数</span>
					</div>
					<div class="sendRedEnvelopeDiv_right">
						<input class="redEnvelopeNumInput" type="tel" value="" maxlength="3" v-model="inputNum" placeholder="红包个数" />
						<span class="redEnvelopeNumText">个</span>
					</div>
				</div>
				<span class="redEnvelopeNumPrompt">最多100个</span>

				<!-- 总金额 -->
				<div class="sendRedEnvelopeDiv2 ">
					<div class="redEnvelopeAmount_left">
						<span class="redEnvelopeAmount">总金额</span>
					</div>
					<div class="redEnvelopeAmount_right">
						<input class="redEnvelopeAmountInput" type="tel" value="" maxlength="5" v-model="inputAmount " placeholder="填写金额" />
						<span class="redEnvelopeAmountText">元</span>
					</div>
				</div>
				<span class="redEnvelopeNumPrompt">总金额上限为10000元</span>

				<!-- 留言 -->
				<div class="sendRedEnvelopeDiv3 ">
					<div class="redEnvelopeLeaveMsg_left">
						<span class="redEnvelopeLeaveMsg">留言</span>
					</div>
					<div class="redEnvelopeLeaveMsg_right">
						<input class="redEnvelopeLeaveMsgInput" type="text" value="" maxlength="20" placeholder="恭喜发财，大吉大利" />
					</div>
				</div>

			</div>

			<div class="sendRedEnvelopeBtn">
				<span class="redEnvelopeAmountShow">￥{{inputAmount}}</span>
				<input type="submit" class="" value="塞钱进红包"  @click="clickSendRedEnvelope"/>
			</div>
			<span class="notReceiveRedEnvelope">未领取的红包，7天后自动转入个人收益</span>
		</div>


    <!-- 弹出输入框 -->
    <div style="border-radius: 10px;" id="clickSendDown">
      <x-dialog v-model="showHideOnBlur" class="dialog-demo" hide-on-blur>
        <div class="img-box">
          <div class="page_OpInput">
            <div class="OpInput">
              <p class="OpInput_TT">发送文字</p>
              <textarea type="text" class="OpInput_TA" v-model="msgToSent" id="textareaId" cols="" rows=""></textarea>
            </div>
            <div class="page_Bmbtn">
              <!-- <input type="button" class="BmbtnLeft" @click="removeTextMsg" value="取消">
              <input type="button" class="BmbtnRight" @click="sendTextMsg" value="发送"> -->
              <span class="BmbtnLeft" @click="removeTextMsg">取消</span>
              <span class="BmbtnRight" @click="sendTextMsg">发送</span>
            </div>
          </div>
        </div>
        <div @click="showHideOnBlur=false">
          <span class="vux-close"></span>
        </div>
      </x-dialog>
    </div>

    <!-- 学生页面 -->
    <div class="m-chat-editor-main" :class="{robot:isRobot}" style="display: none">

      <div class="page_changeAT">
        <img class="changeAtImg" src="http://college.m-fyd.com/assets/yunxin/res/im/classes.png">
      </div>

      <div class="u-editor-input">
        <input type="text" v-model="msgToSent" placeholder="发表评论"></input>
      </div>

      <div class="u-editor-icons">

        <div class="page_comments" @click="clickStudentsPL">
          <img class="commentsImg" src="http://college.m-fyd.com/assets/yunxin/res/im/comments.png"/>
        </div>
        <div class="page_unknown">
          <img class="unknownImg" src="http://college.m-fyd.com/assets/yunxin/res/im/list.png"/>
        </div>

      </div>

    </div>

    <!-- 老师页面 -->
    <div class="m-chat-editor-main" :class="{robot:isRobot}">

      <div v-if="teacher_if == false">
        <div class="page_changeAT2" v-if="!isRobot" @touchstart.stop.prevent="startRecord" @touchend.stop.prevent="stopRecord">
          <!--<img class="changeAtImg2" src="http://college.m-fyd.com/assets/yunxin/res/im/voice.png">-->
        </div>
      </div>
      <a href="http://www.hkwzxy.com/m/index/luodi/haolaoshi" style="display:block;">
      <div v-if="teacher_if == true" class="page_changeAT" style="width:15%;">
        <img class="changeAtImg" src="http://college.m-fyd.com/assets/yunxin/res/im/classes.png" >
      </div>
      </a>
      <div v-if="teacher_if == false">
          <div class="u-editor-input2">
          <input type="text" @click="clickOpInput" placeholder="发送文字" id="inputId" readonly>
        </div>
      </div>
      <div v-if="teacher_if == true">
          <div class="u-editor-input2" style="width:55%;">
          <input type="text" @click="clickOpInput" placeholder="发送文字" id="inputId" readonly>
        </div>
      </div>

      <div v-if="teacher_if == false">
          <div class="u-editor-icons2">

          <div class="page_sendImgHB2" @click="clickHB" v-if="teacher_if == false" >
            <img id="myIconShowPlass" class="myIconShowPlass" src="http://college.m-fyd.com/assets/yunxin/res/im/sendImgHB.png"/>
            <!-- <div id="myBtnShowPlass" style="display: none" class="u-editor-send" @click="sendTextMsg">发 送</div> -->
          </div>
          <div class="page_comments2" @click="clickTeacherPL">
            <img class="commentsImg2" src="http://college.m-fyd.com/assets/yunxin/res/im/comments.png"/>
          </div>
          <div class="page_unknown2" @click="clickTeacherML">
            <img class="unknownImg2" src="http://college.m-fyd.com/assets/yunxin/res/im/list.png"/>
          </div>

        </div>
      </div>

      <div v-if="teacher_if == true">
        <div class="u-editor-icons2" style="width:30%;">

          <div class="page_sendImgHB2" @click="clickHB" v-if="teacher_if == false" >
            <img id="myIconShowPlass" class="myIconShowPlass" src="http://college.m-fyd.com/assets/yunxin/res/im/sendImgHB.png"/>
            <!-- <div id="myBtnShowPlass" style="display: none" class="u-editor-send" @click="sendTextMsg">发 送</div> -->
          </div>
          <div class="page_comments2" @click="clickTeacherPL" style="width:50%;">
            <img class="commentsImg2" src="http://college.m-fyd.com/assets/yunxin/res/im/comments.png"/>
          </div>
          <div class="page_unknown2" @click="clickTeacherML" style="width:50%;">
            <img class="unknownImg2" src="http://college.m-fyd.com/assets/yunxin/res/im/list.png"/>
          </div>

        </div>
      </div>


      <div class="page_showYY">
        <img v-show="isImgHide" class="page_showYYImg" src="http://college.m-fyd.com/assets/yunxin/res/im/recording.gif" alt="">
      </div>



    </div>


    <!-- <div v-show="maskShowHide" @click="fadeMask" class="homemadeMask"></div> -->

  </div>
</template>

<script>
import ChatEmoji from './ChatEmoji'
import util from '../../utils'
import config from '../../configs'
import axios from 'axios'

export default {
  components: {
    ChatEmoji
  },
  updated () {
    window.document.body.addEventListener('click', () => {
      this.isEmojiShown = false
    })
  },
  props: {
    type: String,
    scene: String,
    to: String,
    isRobot: {
      type: Boolean,
      default () {
        return false
      }
    }
  },
  watch: {
    continueRobotAccid (curVal, oldVal) {
      if (curVal && this.robotInfos[curVal]) {
        this.msgToSent = `@${this.robotInfos[curVal].nick} `
      }
      // 重置
      this.$store.dispatch('continueRobotMsg', '')
    },
    msgToSent (curVal, oldVal) {
      if (this.isRobot) {
        return
      }
      let indexAt = this.msgToSent.indexOf('@')
      if (indexAt >= 0 && (indexAt === this.msgToSent.length - 1)) {
        if (this.robotslist && this.robotslist.length > 0) {
          this.isRobotListShown = true
        }
      } else if (this.isRobotListShown === true) {
        this.isRobotListShown = false
      }
    },
    inputNum(nVal,oVal){
    	if(nVal>100){
      	this.inputNum=100;
    	}else if(nVal<1){
    		this.inputNum=1;
    	}
    },
    inputAmount(newVal,oldVal){
    	if(newVal>10000){
      	this.inputAmount=10000;
    	}else if(newVal<1){
    		this.inputAmount=1;
    	}
    }


  },
  data () {
    return {
      isEmojiShown: false,
      isRobotListShown: false,
      msgToSent: '',
      icon1: `${config.resourceUrl}/im/chat-editor-1.png`,
      icon2: `${config.resourceUrl}/im/chat-editor-2.png`,
      icon3: `${config.resourceUrl}/im/chat-editor-3.png`,
      popupShow: false,
      popupPLShow: false,
      tabsParam:['最新评论','打赏排行'],
      nowIndex: 0,
      showScrollBox: false,
      showScrollBox2: false,
      showHideOnBlur: false,
      isImgHide: false,
      maskShowHide: true,
      teacher_if:this.$store.state.haha.teacher_if,
      position: 'middle',
      redEnvelopeShow: false,
      inputNum:'',
      inputAmount:'',
      result: null
    }
  },
  computed: {
    continueRobotAccid () {
      return this.$store.state.continueRobotAccid
    },
    robotslist () {
      return this.$store.state.robotslist
    },
    robotInfos () {
      return this.$store.state.robotInfos
    },
    robotInfosByNick () {
      return this.$store.state.robotInfosByNick
    }
  },
  methods: {
    toggleTabs:function(index){
      this.nowIndex=index;
    },

    // inputFunc(){
    //   var x = document.getElementById("myInput");
    //   var z = document.getElementById("myIconShowPlass");
    //   var c = document.getElementById("myBtnShowPlass");
    //   if(x.value == "" || x.value == undefined || x.value == null){
    //     z.style = "";
    //     c.style.display = "none";
    //   }else{
    //     z.style.display = "none";
    //     c.style = "";
    //   }
    // },

    clickHB () {
      // this.showScrollBox = true;
      this.popupShow = true;
      // this.maskShowHide = true;
    },
    fadeMask () {
      this.popupShow = false;
    },
    clickStudentsPL () {
      this.popupPLShow = true;
    },
    clickTeacherPL () {
      this.showScrollBox = true;
    },
    clickTeacherML () {
      this.showScrollBox = true;
    },
    clickOpInput () {
      this.showHideOnBlur = true;
      document.getElementById("inputId").readonly = false;
      document.getElementById("inputId").blur();
      document.getElementById("textareaId").focus();
    },
    clickShutDown () {
      this.popupPLShow = false;
    },
    removeTextMsg () {
      this.showHideOnBlur = false;
    },
    sendHbMsg () {
			// this.redEnvelopeShow = true;
			// this.popupShow = false;
      this.showScrollBox = true
    },
    clickSendRedEnvelope () {
      this.redEnvelopeShow = false;
    },

    //发送消息
    sendTextMsg () {
      // var z = document.getElementById("myIconShowPlass");
      // var c = document.getElementById("myBtnShowPlass");
      // if(c.style.display != "none"){
      //   z.style = "";
      //   c.style.display = "none";
      // }else{
      //   z.style.display = "none";
      //   c.style = "";
      // }

//    var x =  document.getElementById("clickSendDown");
//    var y = document.getElementById("textareaId");
//    if(y.value == "" || y.value == undefined || y.value == null){
//      x.style = "";
//    }else{
//      this.showHideOnBlur = false;
//    }
      this.showHideOnBlur = false;
      if (/^\s*$/.test(this.msgToSent)) {
        this.$vux.alert.show({
          title: '请不要刷屏'
        })
        return
      } else if (this.msgToSent.length > 800) {
        this.$vux.alert.show({
          title: '请不要超过800个字'
        })
        return
      }
      this.msgToSent = this.msgToSent.trim()
        console.log('确认发送消息')
      if (this.type === 'session') {
        // 如果是机器人
        if (this.isRobot) {
          this.$store.dispatch('sendRobotMsg', {
            type: 'text',
            scene: this.scene,
            to: this.to,
            robotAccid: this.to,
            // 机器人后台消息
            content: this.msgToSent,
            // 显示的文本消息
            body: this.msgToSent
          })
        } else {
          let robotAccid = ''
          let robotText = ''
          let atUsers = this.msgToSent.match(/@[^\s@$]+/g)
          if (atUsers) {
            for (let i = 0; i < atUsers.length; i++) {
              let item = atUsers[i].replace('@', '')
              if (this.robotInfosByNick[item]) {
                robotAccid = this.robotInfosByNick[item].account
                robotText = (this.msgToSent + '').replace(atUsers[i], '').trim()
                break
              }
            }
          }
          if (robotAccid) {
            if (robotText) {
              this.$store.dispatch('sendRobotMsg', {
                type: 'text',
                scene: this.scene,
                to: this.to,
                robotAccid,
                // 机器人后台消息
                content: robotText,
                // 显示的文本消息
                body: this.msgToSent
              })
            } else {
              this.$store.dispatch('sendRobotMsg', {
                type: 'welcome',
                scene: this.scene,
                to: this.to,
                robotAccid,
                // 显示的文本消息
                body: this.msgToSent
              })
            }
          } else {
            this.$store.dispatch('sendMsg', {
              type: 'text',
              scene: this.scene,
              to: this.to,
              text: this.msgToSent
            })
          }
        }
      } else if (this.type === 'chatroom') {
        console.log('用户发送信息')
        let robotAccid = ''
        let robotText = ''
        let atUsers = this.msgToSent.match(/@[^\s@$]+/g)
        if (atUsers) {
          for (let i = 0; i < atUsers.length; i++) {
            let item = atUsers[i].replace('@', '')
            if (this.robotInfosByNick[item]) {
              robotAccid = this.robotInfosByNick[item].account
              robotText = (this.msgToSent + '').replace(atUsers[i], '').trim()
              break
            }
          }
        }
        if (robotAccid) {
          if (robotText) {
            this.$store.dispatch('sendChatroomRobotMsg', {
              type: 'text',
              robotAccid,
              // 机器人后台消息
              content: robotText,
              // 显示的文本消息
              body: this.msgToSent
            })
          } else {
            this.$store.dispatch('sendChatroomRobotMsg', {
              type: 'welcome',
              robotAccid,
              // 显示的文本消息
              body: this.msgToSent
            })
          }
        } else {

          console.log('执行store sendChatroomMsg commit  type-TEXT ')
          this.$store.dispatch('sendChatroomMsg', {
            type: 'text',
            text: this.msgToSent
          })
        }
      }
      this.msgToSent = ''
    },
    sendPlayMsg () {
      // 发送猜拳消息
      if (this.type === 'session') {
        this.$store.dispatch('sendMsg', {
          type: 'custom',
          scene: this.scene,
          to: this.to,
          pushContent: '[猜拳]',
          content: {
            type: 1,
            data: {
              value: Math.ceil(Math.random()*3)
            }
          }
        })
      } else if (this.type === 'chatroom') {
        this.$store.dispatch('sendChatroomMsg', {
          type: 'custom',
          pushContent: '[猜拳]',
          content: {
            type: 1,
            data: {
              value: Math.ceil(Math.random()*3)
            }
          }
        })
      }
    },
    sendFileMsg () {
      let ipt = this.$refs.fileToSent
      if (ipt.value) {
        if (this.type === 'session') {
          this.$store.dispatch('sendFileMsg', {
            scene: this.scene,
            to: this.to,
            fileInput: ipt
          })
        } else if (this.type === 'chatroom') {
          this.$store.dispatch('sendChatroomFileMsg', {
            fileInput: ipt
          })
        }
      }
    },

    // 微信语音(按下)
    startRecord (e) {
      e.preventDefault();
      START = new Date().getTime();
      this.isImgHide = true;
      recordTimer = setTimeout(function(){
	  		wx.startRecord({
	  			success: function(){
	  				localStorage.rainAllowRecord = 'true';
	  			},
	  			cancel: function(){
	  				alert('用户拒绝授权录音');
						window.location.reload();
	  			}
	  		})
      },200);
    },
    // 微信语音(松开)
    stopRecord (e) {
      e.preventDefault();
      END = new Date().getTime();
      this.isImgHide = false;
      useTime = END - START;
      if ((END - START) < 200) {
        END = 0;
        START = 0;
        // 小于200ms则不录音
        clearTimeout(recordTimer);
        alert("录音时间不能小于200ms");
      } else {
        wx.stopRecord({
          success: function (res) {
            localId = res.localId;
            // 上传
            wx.uploadVoice({
              localId: localId,
              isShowProgressTips: 1, // 显示进度
              success: function (res) {
                serverId = res.serverId;
                // 提交到后台
                axios({
                  url:"/m/index/yunxin/save",
                  method:"post",
                  data:{
                    uid      : window.document.getElementById('uid').value,
                    serverId : serverId,
                    length   : useTime
                  }
                }).then(function(res){
                  // alert(JSON.stringify(res))
                }).catch(function(err){
                  alert('上传失败！'+JSON.stringify(err))
                })
              }
            });
          },
          fail: function (res) {
            alert('录制失败！'+JSON.stringify(res));
          }
        });
      }
    },

    showEmoji () {
      this.isEmojiShown = true
    },
    hideEmoji () {
      this.isEmojiShown = false
    },
    addEmoji (emojiName) {
      this.msgToSent += emojiName
      this.hideEmoji()
    },
    chooseRobot (robot) {
      if (robot && robot.account) {
        let len = this.msgToSent.length
        if (len === 0 || this.msgToSent[len-1] !== '@') {
          this.msgToSent += '@' + robot.nick + ' '
        } {
          this.msgToSent += robot.nick + ' '
        }
      }
    },
    hideRobotList () {
      this.isRobotListShown = false
    }
  }
}
</script>

<style scoped>
  .robot.m-chat-editor-main {
    /*.u-editor-input {
      padding-right: 4.5rem;
    }
    .u-editor-icons {
      width: 4rem;
    }*/
  }

  .m-chat-robot {
    overflow-y: scroll;
    .weui-cells {
      .weui-cell__hd {
        margin-right: 0.5rem;
      }
    }
  }
  .page_popup {
    width: 90%;
    height:100px;
    margin: 0 auto;

    .page_showHbLeft{
      height: 100px;
      float: left;
      .sendImg{
        position: relative;
        top: 50%;
        transform: translateY(-50%);
        width: 60px;
      }
      input[type="file"] {
        position: absolute;
        display: inline-block;
        left: 0;
        top: 0;
        width: inherit;
        height: inherit;
        opacity: 0;
        font-size: 1rem;
      }
    }
    .page_showHbRight{
      height: 100px;
      float: left;
      padding-left: 20px;
      .sendHBImg{
        position: relative;
        top: 50%;
        transform: translateY(-50%);
        width: 60px;
      }
    }
  }

  .vux-popup-dialog{
    position: fixed;
    left: 0;
    bottom: 64px;
    background-color: #fff;
    border-bottom: 1px solid rgb(200,200,200);
    z-index: 999;
  }



  .active{
    color: #ffd000;
  }
  .tabs{
    width: 100%;
    height: 60px;
    line-height: 60px;
    padding:0;
    position: relative;
    border-bottom: 1px solid rgb(200,200,200);

    .page_popupPlCK{
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 20px;

      .shutDownPlImg{
        width: 15px;
      }
    }
  }
  .li-tab{
    width: 30%;
    height: 100%;
    display:inline-block;
    text-align: center;
  }
  .divTab{
    width: 100%;
    height: 240px;
    position: relative;

    .page_popupPlList{
      width: 100%;
      height: 240px;
      overflow: hidden;
      overflow-y: auto;
      .page_popupPlNcList{
        width: 90%;
        height: 50px;
        margin: 10px auto;
        border-bottom: 1px solid rgb(200,200,200);
        .page_popupPlImg{
          width: 15%;
          height: 50px;
          float: left;

          .popupPlImg{
            width: 40px;
            position: relative;
            top: 50%;
            transform: translateY(-50%);
          }
        }
        .page_popupPlNameDate{
          width: 85%;
          height: 50px;
          float: right;

          .popupPlNameDate{

            .popupPlName{
              color: rgb(153,153,153);
              font-size: 14px;
            }
            .popupPlDate{
              color: rgb(153,153,153);
              font-size: 14px;
              float: right;
            }
          }
          .page_popupPlShow{

          }
        }
      }
    }

  }
  .divTab2{
    width: 100%;
    height: 240px;
    position: relative;

    .page_excepitionalList{
      width: 100%;
      height: 210px;
      overflow: hidden;
      overflow-y: auto;

      .page_excepitionalCC{
        width: 90%;
        height: 50px;
        margin: 10px auto;
        border-bottom: 1px solid rgb(200,200,200);

        .page_excepitionalImg{
          width: 15%;
          height: 50px;
          float: left;

          .excepitionalImg{
            width: 40px;
            position: relative;
            top: 50%;
            transform: translateY(-50%);
          }
        }


        .page_excepitionalNM{
          width: 85%;
          height: 50px;
          line-height: 50px;
          float: left;

          ..excepitionalName{
            color: #333333;
          }
          .medalImg{
            width: 15px;
            position: relative;
            top: 25%;
            transform: translateY(-50%);
          }
          .excepitionalMoney{
            color: rgb(153,153,153);
            float: right;
          }
        }
      }
    }

    .page_excepitionalChoose{
      position: absolute;
      bottom: -4rem;
      left: 0;
      width: 100%;
      height: 6rem;
      background-color: #f7f7f7;

      .excepitionalChoose_TT{
        width: 90%;
        margin: 10px auto;
        color: #333333;
        height: 24px;
      }

      .excepitionalChoose_List{
        width: 90%;
        height: 54px;
        margin: 0 auto;
        white-space: nowrap;
        overflow: hidden;
        .excepitionalChoose_nc{
          width: 100%;
          height: 54px;
          overflow-x: auto;
          overflow-y: hidden;
          padding-bottom: 6px;

          .excepitionalChoose_ct{

            .etCsImg{
              width: 40px;
            }
          }
        }
      }
    }
  }

  .vux-divider{
    padding: 30px 0 0 0;
    font-size: 18px;
  }
  .page_directoryList{
    width: 100%;
    text-align: left;
   .directoryList{
      width: 100%;
      height: 45px;
      line-height: 45px;
      padding-left: 20px;
      border-bottom: 1px solid rgb(200,200,200);

      .showRed{
        color: red;
      }
    }
  }

  .page_OpInput{
    width: 100%;
    height: 200px;
    .OpInput{
      height: 120px;
      padding: 20px 20px 0px 20px;
      text-align: center;

      .OpInput_TA{
        width: 100%;
        height: 70%;
        margin-top: 10px;
      }
    }

    .page_Bmbtn{
      height: 50px;
      line-height: 50px;
      padding: 0;
      text-align: center;
      margin-top: 10px;
      border-top: 1px solid rgb(200,200,200);

      .BmbtnLeft{
        display: inline-block;
        width: 50%;
        height: 50px;
        float: left;
        background-color: #ffffff;
        color: #333333;
        border-top: 0;
        border-left: 0;
        border-bottom: 0;
      }
      .BmbtnRight{
        display: inline-block;
        width: 49.6%;
        height: 50px;
        float: right;
        background-color: #ffffff;
        color: green;
        border-top: 0;
        border-right: 0;
        border-bottom: 0;
        border-left: 1px solid rgb(200,200,200);
      }
    }
  }

  .page_showYY{
    width: 100%;
    position: absolute;
    top: -400%;
    text-align: center;
  }
  .page_showYYImg{
    width: 40%;
  }


  .dialog_no{
    width: 100%;
    height: 40px;
    line-height: 40px;
  }

  /* 遮罩层 */
  /*.homemadeMask{
    position: absolute;
    top: 0%;
    left: 0%;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.6);
    z-index: 500;
    -moz-opacity: 0.8;
    opacity: 0.5;
    filter: alpha(opacity=80);
  }*/

	.page_sendRedEnvelope{
			width: 100%;
		  height: auto;
		  min-height: 100vh;
			background: #d9d9d9;
			position: fixed;
			top: 0;
			left: 0;
			z-index: 10000;


			input::-webkit-input-placeholder{
				font-family: "microsoft yahei";
				font-size: 14px;
        color: rgb(102,102,102);
      }
      input::-moz-placeholder{   /* Mozilla Firefox 19+ */
        font-family: "microsoft yahei";
				font-size: 14px;
        color: rgb(102,102,102);
      }
      input:-moz-placeholder{    /* Mozilla Firefox 4 to 18 */
        font-family: "microsoft yahei";
				font-size: 14px;
        color: rgb(102,102,102);
      }
      input:-ms-input-placeholder{  /* Internet Explorer 10-11 */
        font-family: "microsoft yahei";
				font-size: 14px;
        color: rgb(102,102,102);
      }

		}
		.sendRedEnvelopeTitle{
			width: 100%;
			height: 40px;
			line-height: 40px;
			background: #FF0000;
			position: relative;
			text-align: center;
		}
		.sendRedEnvelopeImg{
			width: 15px;
			float: left;
			position: relative;
			top: 50%;
			transform: translateY(-50%);
			left: 15px;
		}
		.sendRedEnvelopeText{
			font-family: "microsoft yahei";
			font-size: 14px;
			color: rgb(255,255,255);
		}

		.sendRedEnvelopeBody{
			height: auto;
			padding: 20px 15px 40px 15px;
		}
		/* 红包个数 */
		.sendRedEnvelopeDiv{
			width: 100%;
			height: 40px;
			line-height: 40px;
			background: #FFFFFF;
		}
		.sendRedEnvelopeDiv_left{
			width: 20%;
			float: left;
			text-align: left;
			padding-left: 10px;
		}
		.redEnvelopeNum{
			font-family: "microsoft yahei";
			font-size: 14px;
			color: rgb(51,51,51);
		}
		.sendRedEnvelopeDiv_right{
			width: 70%;
			height: 40px;
			float: right;
			text-align: right;
			padding-right: 10px;
		}
		.redEnvelopeNumInput{
			text-align: right;
			border: 0;
			outline: none;
			width: 90%;
			height: 38px;
			float: left;
		}
		.redEnvelopeNumText{
			font-family: "microsoft yahei";
			font-size: 14px;
			color: rgb(51,51,51);
		}

		.redEnvelopeNumPrompt{
			font-family: "plngFang SC";
			font-size: 12px;
			color: rgb(153,153,153);
			display: block;
			padding-top: 5px;
			padding: 5px 0 15px 0;
		}

		/* 总金额 */
		.sendRedEnvelopeDiv2{
			width: 100%;
			height: 40px;
			line-height: 40px;
			background: #FFFFFF;
		}
		.redEnvelopeAmount_left{
			width: 20%;
			float: left;
			text-align: left;
			padding-left: 10px;
		}
		.redEnvelopeAmount{
			font-family: "microsoft yahei";
			font-size: 14px;
			color: rgb(51,51,51);
		}
		.redEnvelopeAmount_right{
			width: 70%;
			height: 40px;
			float: right;
			text-align: right;
			padding-right: 10px;
		}
		.redEnvelopeAmountInput{
			text-align: right;
			border: 0;
			outline: none;
			width: 90%;
			height: 38px;
			float: left;
		}
		.redEnvelopeAmountText{
			font-family: "microsoft yahei";
			font-size: 14px;
			color: rgb(51,51,51);
		}

		/* 留言 */
		.sendRedEnvelopeDiv3{
			width: 100%;
			height: 40px;
			line-height: 40px;
			background: #FFFFFF;
		}
		.redEnvelopeLeaveMsg_left{
			width: 20%;
			float: left;
			text-align: left;
			padding-left: 10px;
		}
		.redEnvelopeLeaveMsg{
			font-family: "microsoft yahei";
			font-size: 14px;
			color: rgb(51,51,51);
		}
		.redEnvelopeLeaveMsg_right{
			width: 70%;
			height: 40px;
			float: right;
			text-align: right;
			padding-right: 10px;
		}
		.redEnvelopeLeaveMsgInput{
			text-align: right;
			border: 0;
			outline: none;
			width: 100%;
			height: 38px;
			float: left;
		}

		/* 提交 */
		.sendRedEnvelopeBtn{
			width: 100%;
			height: auto;
			text-align: center;
		}
		.redEnvelopeAmountShow{
			display: block;
			font-size: 24px;
			font-weight: bold;
			font-family: "microsoft yahei";
			color: rgb(51,51,51);
		}
		.sendRedEnvelopeBtn input{
			width: 90%;
			height: 40px;
			line-height: 40px;
			color: rgb(255,255,255);
			font-family: "plngFang SC";
			margin-top: 20px;
			border: 0;
			background: #FF0000;
		}

		.notReceiveRedEnvelope{
			font-family: "plngFang SC";
			font-size: 12px;
			color: rgb(153,153,153);
			display: block;
			padding-top: 5px;
			padding: 5px 15px 15px 15px;
		}
















  /* input样式 */
  input::input-placeholder {

    padding-left: 5px;
  }

  input::-webkit-input-placeholder {

    padding-left: 5px;
  }

  input:-ms-input-placeholder {

    padding-left: 5px;
  }

  input:-moz-placeholder {

    padding-left: 5px;
  }

  input::-moz-placeholder {

    padding-left: 5px;
  }


</style>
