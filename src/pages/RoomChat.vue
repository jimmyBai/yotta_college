<template>
  <div class="g-inherit m-room p-room-chat">
  <!-- 老师显示 -->
    <div class="m-room-album" id="mRoomAlbum">

      <div class="page_room-hd" v-show="isTopBanner" style="z-index: 5;">
        <!--<img class="room-hdImg" v-bind:src="zhibo_url" alt="" />-->
        <div v-if="zhibo_video!==''">
          <video width="100%" height="100%" loop="loop" controls="controls" autoplay="autoplay" webkit-playsinline v-bind:poster="zhibo_url">
            <source v-bind:src="zhibo_video" type="video/mp4"></source>
            <source src="myvideo.ogv" type="video/ogg"></source>
            <source src="myvideo.webm" type="video/webm"></source>
            当前浏览器不支持 video直接播放，点击这里下载视频： <a href="myvideo.webm">下载视频</a>
          </video>
        </div>
        <div v-if="zhibo_video===''">
          <img class="room-hdImg" v-bind:src="zhibo_url" alt="" />
        </div>

      </div>

      <!-- 导航栏 -->
      <div class="m-room-tabs" id="mRoomTab">
        <div class="page_title">

            <div class="page_titleLeft">
              <div class="page_hostImg">
                <img class="theHostImg" v-bind:src="teacher_url" style="border-radius: 50%;" />
              </div>
              <div class="page_hostName">
                <span class="hostName">{{teacher_name}}</span>
              </div>
              <div class="page_focus">
                <span class="focusText" v-show="firstShowFT" @click="clickShowAlready" >{{follow_teacher}}</span>
              </div>
            </div>

            <div class="page_titleRight">
              <img class="packUpImg" v-show="isPackUpImg" @click="clickRemoveImg" src="http://college.m-fyd.com/assets/yunxin/res/im/packUp.png"/>
              <img class="packUpImg2" v-show="isPackUpImg2" @click="clickAddImg" src="http://college.m-fyd.com/assets/yunxin/res/im/packDown.png"/>
            </div>

          </div>
      </div>

    </div>

    <!-- 学生显示 -->
    <div class="m-room-album2" style="display: none">

      <div class="page_room-hd2">
        <div class="room-hdLeft">
          <img class="room-hdImg2" src="http://college.m-fyd.com/assets/yunxin/res/im/theHost.png" alt="">
        </div>
        <div class="room-hdRight">
          <span class="room-hdText2">我正在直播</span>
        </div>
      </div>
      <div class="page_crossString"></div>
      <div class="page_room-bd" v-show="isRoomBd">
        <div class="room-bdList">
          <span class="room-bdText">上课须知</span>
          <span @click="clickRemoveText">
            <img class="shutDownImg" src="http://college.m-fyd.com/assets/yunxin/res/im/shutDown.png" alt="">
          </span>
        </div>

        <div class="page_contentList">
          <span style="display: inline-block;font-size: 12px;color: #666666">1.听不到声音请往下翻点击语音即可播放，并确定手机没有静音，若不行可切换网络或者重新进入。</span>
          <span style="display: inline-block;font-size: 12px;color: #666666">2.若遇到卡顿和加载不出来，请尝试重新进入。</span>
          <span style="display: inline-block;font-size: 12px;color: #666666">3.大家可在下方评论框发起评论和交流。</span>
          <span style="display: inline-block;font-size: 12px;color: #666666">4.课程语音永久保存，无限复听。</span>
        </div>

      </div>


    </div>



    <div class="m-room-container" id="m-room-container">
      <div class="room-cnt" >
        <room-chat-list v-if="roomType===1"></room-chat-list>
      </div>
    </div>
    <!-- 打赏 -->
	    <div>
	      <x-dialog v-model="showScrollBox" class="dialog-demo" hide-on-blur>
	        <div class="dialog_box">
            <!-- 头部 -->
            <div class="dialog_title">
              <span>选择您想打赏的金额</span>
              <a href="javascript:window.opener=null;window.close();" @click="hideScrollBox" title="关闭" class="dialog_close">x</a>
            </div>
            <!-- 身体 -->
            <div class="dialog_content">
              <div class="dialog_content_Up">
                <div v-for="(item,index) in moneydata"  class="sameEle" :class="{'selected':item.isactive}" @click="clickSelected(item)" v-if="index<3">
                  <span v-text="item.value+'元'" ></span>
                  <img v-show="item.isactive" src="http://college.m-fyd.com/assets/yunxin/res/im/gouxuan.png" alt="">
                </div>
              </div>
              <div class="dialog_content_Down">

                <div v-for="(item,index) in moneydata"  class="sameEle" :class="{'selected':item.isactive}" @click="clickSelected(item)" v-if="index==3">
                  <span v-text="item.value+'元'" ></span>
                  <img v-show="item.isactive" src="http://college.m-fyd.com/assets/yunxin/res/im/gouxuan.png" alt="">
                </div>
                <div v-for="(item,index) in moneydata"  class="sameEle amount_custom" :class="{'selected':item.isactive}" @click="clickSelected(item)" v-if="index==4">
                  <div class="custom_left">
                    <input type="number" value="" @input="getval(item.value)" v-model="item.value" placeholder="自定义" />
                  </div>
                  <div class="custom_right">
                    <span>元</span>
                  </div>
                  <img v-show="item.isactive" src="http://college.m-fyd.com/assets/yunxin/res/im/gouxuan.png" alt="">
                </div>

              </div>
            </div>
            <!-- 底部 -->
            <div class="dialog_bottom">
              <div class="bottom_yinlian" @click="unionpay()">
                <img src="http://college.m-fyd.com/assets/yunxin/res/im/yinlian.png" alt="">
                <span>银联支付</span>
              </div>
              <div class="bottom_wechat" @click="unionpayWechat()">
                <img src="http://college.m-fyd.com/assets/yunxin/res/im/weixin.png" alt="">
                <span>微信支付</span>
              </div>
            </div>
            <form action="/pay_live/pay.php" ref='payform' method="get" id="paypay">
              <input type="hidden" name="zz_money" v-model="paymoney">
              <input type="hidden" v-model="orderid" name="orderId">
              <input type="hidden" name="zz_returnid" v-model="zhibo_room">
              <input type="hidden" name="zz_user" v-model="zhibo_user">
              <input type="hidden" name="zz_teacher" v-model="zhibo_teacher">
            </form>
	        </div>
	        <!--<div @click="showScrollBox=false">
	          <span class="vux-close"></span>
	        </div>-->
	      </x-dialog>
	    </div>
	    <!-- 未输入金额dialog -->
	    <div>
	      <x-dialog v-model="showScrollBox2" class="dialog-demo" hide-on-blur>

	        <div class="amountPrompt_box">
		        <div class="amountPrompt">
		        	<span class="amountPrompt_span">系统提示</span>
		        	<span class="amountPrompt_cancel" @click="showScrollBox2=false">x</span>
		        </div>
		        <div class="amountPromptInput">
		        	<span>请输入您想赞助的金额</span>
		        	<input type="button" value="确定" @click="showScrollBox2=false" />
		        </div>
	        </div>
	        <div @click="showScrollBox2=false">
	          <span class="vux-close"></span>
	        </div>
	      </x-dialog>
	    </div>
  </div>

</template>

<script>
// var haha = window.document.getElementById('haha').value;
//console.log("xxxx.jpg"+JSON.parse(haha).zhibo_url);

import RoomChatList from './RoomChatList'
import RoomChatActor from './RoomChatActor'
import RoomChatMember from './RoomChatMember'
import $ from 'jquery'
export default {
  beforeMount () {
//  console.log(this.$store.state.haha);
    this.intervalid1 = setInterval(() => {
      if (this.$store.state.isLoading) {
//      console.log('waiting for loading')
      } else {
        this.$store.dispatch('connect', { //建立连接
          type: 'chatroom',
          chatroomId: this.chatroomId
        })
        clearInterval(this.intervalid1)

        this.intervalid2 = setInterval(() => {
          if (this.$store.state.currChatroom == null) {
            console.log('waiting for connecting')
          } else {
            clearInterval(this.intervalid2)
            this.getHistoryMsgs(Date.parse(new Date()))
          }
        }, 1000)
      }
    }, 1000)
  },
  // 离开该页面，此时重置当前会话
  destroyed () {
    clearInterval(this.intervalid1)
    this.$store.dispatch('resetChatroomSDK', this.chatroomId)
  },
  components: {
    RoomChatList,
    RoomChatMember,
    RoomChatActor
  },
  data () {
    return {
      roomType: 1, // 1 直播互动， 2 主播， 3 在线成员
      isRoomBd: true,
      isTopBanner: true,
      teacher_name:this.$store.state.haha.teacher,
      teacher_url:this.$store.state.haha.teacher_url,
      zhibo_url:this.$store.state.haha.zhibo_url,
      zhibo_video:this.$store.state.haha.zhibo_video,
      follow_teacher:this.$store.state.haha.follow_teacher,
      zhibo_id:this.$store.state.haha.zhibo_id,
      zhibo_room:this.$store.state.haha.zhibo_room,
      zhibo_teacher:this.$store.state.haha.zhibo_teacher,
      zhibo_user:this.$store.state.haha.zhibo_user,
      isPackUpImg: true,
      isPackUpImg2: false,
      firstShowFT: true,
      paymoney:'',
      moneydata:[
        {'value':'1','isactive':false},
        {'value':'5','isactive':false},
        {'value':'10','isactive':false},
        {'value':'20','isactive':false},
        {'value':'','isactive':false}
      ],
      orderid:'',
      showScrollBox2: false
    }
  },
  computed: {
    chatroomId () {
      let chatroomId = this.$route.params.chatroomId
      return chatroomId
    },
    chatroomInfo () {
      return this.$store.state.chatroomInfos[this.chatroomId] || {}
    },
    showScrollBox: {
    	// getter
	    get: function () {
	        return this.$store.state.showScrollBox
	    },
	    // setter
	    set: function (newValue) {
	        this.$store.state.showScrollBox = newValue;
	    }
    }
  },
  methods: {
    clickRemoveText() {
      this.isRoomBd = false;
      var room = document.getElementById("m-room-container");
      // room.style.zIndex = "1";
      room.style.paddingTop = "3rem";
    },
    hideScrollBox(){
    	this.$store.dispatch('addshowScrollBox',false)
    },
    clickRemoveImg() {
      this.isTopBanner = false;
      this.isPackUpImg2 = true;
      this.isPackUpImg = false;
      var rooms = document.getElementById("m-room-container");
      var mRoomTab = document.getElementById("mRoomTab");
      var mRoomAlbum = document.getElementById("mRoomAlbum");
      mRoomTab.style.top = "0rem";
      rooms.style.paddingTop = "3rem";
      mRoomAlbum.style.background = "none";
    },
    clickAddImg() {
      this.isTopBanner = true;
      this.isPackUpImg2 = false;
      this.isPackUpImg = true;
      var rooms = document.getElementById("m-room-container");
      var mRoomTab = document.getElementById("mRoomTab");
      var mRoomAlbum = document.getElementById("mRoomAlbum");
      mRoomTab.style.top = "12rem";
      rooms.style.paddingTop = "15rem";
      mRoomAlbum.style.background = "block";
    },

    changeRoomType (roomType) {
      this.roomType = roomType
    },
    enterHall () {
      location.href = '#/room'
    },
    getHistoryMsgs(timetag){
      this.$store.state.currChatroom.getHistoryMsgs({ //加载历史记录
        timetag: timetag,
        limit: 100,
        done: this.getHistoryMsgsDone
      });
    },
    getHistoryMsgsDone(error, obj) {
//    console.log('获取聊天室历史' + (!error?'成功':'失败'), error, obj.msgs)
      var _this = this
      obj.msgs.map(function(x){
        if(x.type!='notification'){
          _this.$store.state.currChatroomMsgs.unshift(x)
        }
      })
      if(obj.msgs.length==100){
        this.getHistoryMsgs(obj.msgs[99].time)
      }
    },

    clickShowAlready () {
      var teacher="";
      $.ajax({
        url:"/m/index/liveplay/follow_teacher",
        data:'user_organization='+333,
        async:false,
        success:function(msg){
          teacher = msg
          //console.log(teacher);
        }
      })
    this.follow_teacher=teacher
    },
    clickSelected (item) {
      this.moneydata.forEach((data)=>{
        data.isactive=false
      })
      //console.log(item.value)
      item.isactive=true
      this.paymoney=(item.value)*100
      var now = new Date()
      var str = now.getFullYear()+((now.getMonth()+1)<10?"0":"")+(now.getMonth()+1)+(now.getDate()<10?"0":"")+now.getDate()+parseInt(1000000000000*Math.random())
      this.orderid = str
    },
    getval(val){
      this.paymoney=val*100
      console.log(val)
    },
    unionpay(){
      console.log(this.paymoney);
      if(this.paymoney == 0 ){
        this.showScrollBox2 = true//弹框其输入或选择金额
      }else{
        this.$refs.payform.submit();
      }

    },
    unionpayWechat(){
      console.log(this.paymoney);
      if(this.paymoney == 0 ){
        this.showScrollBox2 = true//弹框其输入或选择金额
      }else{
        var form = document.getElementById('paypay');
        var ua = navigator.userAgent.toLowerCase();
          if(ua.match(/MicroMessenger/i)=="micromessenger") {
              // 微信内支付
            // var orderId     = form.orderId.value;
            var txnAmt      = form.zz_money.value;
            var zz_teacher  = form.zz_teacher.value;
            var zz_user     = form.zz_user.value;
            var zz_returnid = form.zz_returnid.value;
              window.location.href ='http://'+window.location.host+'/m/index/pay/wechat_reward_zb?payType=2&txnAmt='+txnAmt+'&zz_teacher='+zz_teacher+'&zz_user='+zz_user+'&zz_returnid='+zz_returnid;
          } else {
              // 微信外支付
            // var orderId     = form.orderId.value;
            var txnAmt      = form.zz_money.value;
            var zz_teacher  = form.zz_teacher.value;
            var zz_user     = form.zz_user.value;
            var zz_returnid = form.zz_returnid.value;
              window.location.href ='http://'+window.location.host+'/m/index/pay/h5_reward_zb?payType=2&txnAmt='+txnAmt+'&zz_teacher='+zz_teacher+'&zz_user='+zz_user+'&zz_returnid='+zz_returnid;
          }
      }

    }
  }
}

</script>

<style type="text/css">
  .p-room-chat {
    .left-arrow {
      position: absolute;
      display: block;
      top: 1rem;
      left: 1rem;
      width: 2rem;
      height: 2rem;
    }
  }

  .dialog_title{
    width: 100%;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #f1f4f3;
    position: relative;
  }
  .dialog_title span{
    font-size: 14px;
    font-weight: bold;
  }
  .dialog_close{
    font-size: 18px;
    color: #b5b9b7;
    position: absolute;
    right: 10px;
    top: -7px;
  }

  .dialog_content_Up{
    height: 55px;
    padding: 20px 10px 0 10px;
  }
  .sameEle{
    float: left;
    text-align: center;
    width: 75px;
    height: 53px;
    line-height: 53px;
    background: #e8edeb;
    margin-right: 5px;
    margin-left: 10px;
    border-radius: 5px;
    cursor: pointer;
    position: relative;
  }
  .sameEle img{
    width: 24px;
    height: 24px;
    position: absolute;
    right: 0;
    bottom: 0;
  }
  .dialog_content_Down{
    height: 55px;
    padding: 20px 10px 0 10px;
  }
  .amount_custom{
    float: left;
    text-align: center;
    width: 172px;
    height: 53px;
    line-height: 53px;
    background: #e8edeb;
    margin-left: 10px;
    margin-right: 0;
    border-radius: 5px;
    cursor: pointer;
    position: relative
  }
  .custom_left{
    width: 80%;
    float: left;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    padding-left: 12px;
  }
  .custom_left input{
    width: 100%;
    height: 35px;
    line-height: 35px;
    border: 1px solid #d9d9d9;
    border-radius: 5px;
    outline: none;
    text-align: center;
  }
  .custom_right{
    width: 10%;
    float: left;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    text-align: left;
    font-size: 12px;
    color: #787878;
  }

  .dialog_bottom{
    padding: 20px 50px 0 50px;
    height: 100px;
  }
  .dialog_bottom span{
    display: block;
    color: #9d9d9d;
    font-size: 12px;
  }
  .bottom_yinlian{
    width: 50%;
    float: left;
  }
  .bottom_yinlian img{
    width: 54px;
    height: 54px;
  }
  .bottom_wechat{
    width: 50%;
    float: right;
  }
  .bottom_wechat img{
    width: 54px;
    height: 54px;
  }


  .selected{
    border: 1px solid #ffbf24;
    background: #FFF;
  }


  .amountPrompt_box{
		height: 120px;
		background: #FFFFFF;
		border: 1px solid #ccc;
	  width: 100%;
	  margin: 0 auto;
	  border-radius: 0.5rem;
	}
  .amountPrompt{
  	width: 100%;
  	height: 40px;
    line-height: 40px;
   	border-bottom: 1px solid #D9D9D9;
  }
  .amountPrompt_span{
  	float: left;
    padding-left: 20px;
  }
  .amountPrompt_cancel{
  	float: right;
    padding-right: 20px;
    font-size: 20px;
  }
  .amountPromptInput{
  	width: 100%;
  	height: 60px;
  	padding-top: 10px;
  }
  .amountPromptInput span{
  	display: block;
   	text-align: left;
    padding-left: 20px;
    font-size: 12px;
  }
  .amountPromptInput input{
   	width: 40%;
	  height: 25px;
	  border: 0;
	  background: #ff0000;
	  color: #fff;
	  margin-top: 10px;
	  border-radius: 0.5rem;
  }



  @media (max-width: 360px) {
  	.sameEle {
	    margin-left: 7px;
		}
		.amount_custom {
	    width: 168px;
	    margin-left: 7px;
		}
  }
</style>
