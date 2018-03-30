<template>
  <div class="m-chat-main p-room-chat-list">
  	<!-- 老师评论 -->
    <chat-list
      type="chatroom"
      :chatroomId="chatroomId"
      :msglist="msglist"
      @msgs-loaded="msgsLoaded"
    ></chat-list>
    <!-- 新添加学生评论 -->
    <chat-list-student
      type="chatroom"
      :chatroomId="chatroomId"
      :msglist="msglist"
      @msgs-loaded="msgsLoaded"
      v-show="isStudentPages"
    ></chat-list-student>
    <chat-editor
      type="chatroom"
      :chatroomId="chatroomId"
    ></chat-editor>

    <div>
      <x-dialog v-model="showInvitationBox" class="dialog-demo" hide-on-blur>
        <div class="dialog_no">
          <span>敬请期待</span>
        </div>
        <div @click="showInvitationBox=false">
          <span class="vux-close"></span>
        </div>
      </x-dialog>
    </div>



    <div class="page_invitation" @click="clickStayTuned">
      <img class="invitationImg" src="http://college.m-fyd.com/assets/yunxin/res/im/invitation.png" alt="">
    </div>


    <img class="sentimentImg2" @click="clickPopUpShow" src="http://college.m-fyd.com/assets/yunxin/res/im/guan.png" alt="">
    <img class="sentimentImg3" v-show="isTan" @click="clickPopUpHide" src="http://college.m-fyd.com/assets/yunxin/res/im/tan.png" alt="">
    <div class="page_sentiment" v-show="triggerDown">
      <img class="sentimentImg" src="http://college.m-fyd.com/assets/yunxin/res/im/vLookNum.png" alt="">
      <span v-if="people">{{turepeople+people}}</span>
      <span v-if="!people">{{turepeople}}</span>
    </div>
  </div>
</template>

<script>

import ChatEditor from './components/ChatEditor'
import ChatList from './components/ChatList'
import ChatListStudent from './components/ChatListStudent'
import util from '../utils'
import pageUtil from '../utils/page'
import $ from 'jquery'

export default {
  components: {
    ChatEditor,
    ChatList,
    ChatListStudent
  },
  // 进入该页面，文档被挂载
  mounted () {
    // 此时设置当前会话
    pageUtil.scrollChatListDown();
  //  setInterval(()=>{this.getPeople()},3000);
  },
  updated () {
    pageUtil.scrollChatListDown()
  },
  data () {
    return {
      triggerDown: true,
      isTan: false,
      people:parseInt(this.$store.state.haha.people),
      showInvitationBox: false,
      timer:5,
      turepeople:0,
      isStudentPages: true

    }
  },
  computed: {
    chatroomId () {
      let chatroomId = this.$route.params.chatroomId
      return chatroomId
    },
    msglist () {
      let msgs = this.$store.state.currChatroomMsgs
      return msgs
    }
  },
  methods: {
    msgsLoaded () {
      pageUtil.scrollChatListDown()
    },
    clickPopUpShow () {
      if(this.triggerDown == true){
        this.triggerDown = false;
        this.isTan = true;
        this.isStudentPages = false;
      }else{
        this.triggerDown = true;
      }
    },
    clickPopUpHide () {
      if(this.triggerDown == false){
        this.triggerDown = true;
        this.isTan = false;
        this.isStudentPages = true;
      }else{
        this.triggerDown = false;
      }
    },
    clickStayTuned () {
      //console.log(JSON.parse(haha).zhibo_id);
      //console.log("/m/index/liveplay/invitation_zb?id="+JSON.parse(haha).zhibo_id);
      window.location.href = "/m/index/liveplay/invitation_zb?id="+this.$store.state.haha.zhibo_id;
    },
    getPeople(){
      var num=0;
      //console.log("http://collegedb/m/index/liveplay/getpeople")
      $.ajax({
        url:"/m/index/liveplay/getpeople",
        data:'user_organization='+333,
        async:false,
        success:function(msg){
            num=parseInt(msg);
            // console.log(msg)
        }
      })
      this.turepeople = num
    }
  }
}
</script>

<style scoped>
  .p-room-chat-list {
    .m-chat-editor-main {
      .u-editor-input {
        padding-right: 8rem;
      }
      .u-editor-icons {
        width: 8rem;
      }
    }
    .u-msg {
      .msg-text {
        max-width: 80%;
      }
      .msg-link {
        bottom: 0;
        right: -4rem;
        font-size: 0.9rem;
      }
    }
  }
  .dialog_no{
    width: 100%;
    height: 40px;
    line-height: 40px;
  }
</style>
