webpackJsonp([3],{

/***/ 312:
/* no static exports found */
/* all exports used */
/*!***********************************!*\
  !*** ./src/pages/ChatHistory.vue ***!
  \***********************************/
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!../../~/vue-loader/lib/style-compiler/index?{"id":"data-v-4c34d660","scoped":true,"hasInlineConfig":true}!../../~/vux-loader/src/style-loader.js!../../~/vue-loader/lib/selector?type=styles&index=0!./ChatHistory.vue */ 424)

var Component = __webpack_require__(/*! ../../~/vue-loader/lib/component-normalizer */ 1)(
  /* script */
  __webpack_require__(/*! !babel-loader!../../~/vux-loader/src/script-loader.js!../../~/vue-loader/lib/selector?type=script&index=0!./ChatHistory.vue */ 381),
  /* template */
  __webpack_require__(/*! !../../~/vue-loader/lib/template-compiler/index?{"id":"data-v-4c34d660"}!../../~/vux-loader/src/before-template-compiler-loader.js!../../~/vux-loader/src/template-loader.js!../../~/vue-loader/lib/selector?type=template&index=0!./ChatHistory.vue */ 410),
  /* scopeId */
  "data-v-4c34d660",
  /* cssModules */
  null
)
Component.options.__file = "D:\\yotta\\college\\public_html\\assets\\yunxin\\src\\pages\\ChatHistory.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] ChatHistory.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4c34d660", Component.options)
  } else {
    hotAPI.reload("data-v-4c34d660", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 346:
/* no static exports found */
/* exports used: default */
/*!******************************!*\
  !*** ./src/configs/emoji.js ***!
  \******************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _index = __webpack_require__(/*! ./index */ 13);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var emojiBaseUrl = "http://yx-web.nosdn.127.net/webdoc/h5/emoji"; /* 表情原图配置文件 */


var emojiList = {
  "emoji": {
    "[大笑]": { file: "emoji_0.png" }, "[可爱]": { file: "emoji_01.png" }, "[色]": { file: "emoji_02.png" }, "[嘘]": { file: "emoji_03.png" }, "[亲]": { file: "emoji_04.png" }, "[呆]": { file: "emoji_05.png" }, "[口水]": { file: "emoji_06.png" }, "[汗]": { file: "emoji_145.png" }, "[呲牙]": { file: "emoji_07.png" }, "[鬼脸]": { file: "emoji_08.png" }, "[害羞]": { file: "emoji_09.png" }, "[偷笑]": { file: "emoji_10.png" }, "[调皮]": { file: "emoji_11.png" }, "[可怜]": { file: "emoji_12.png" }, "[敲]": { file: "emoji_13.png" }, "[惊讶]": { file: "emoji_14.png" }, "[流感]": { file: "emoji_15.png" }, "[委屈]": { file: "emoji_16.png" }, "[流泪]": { file: "emoji_17.png" }, "[嚎哭]": { file: "emoji_18.png" }, "[惊恐]": { file: "emoji_19.png" }, "[怒]": { file: "emoji_20.png" }, "[酷]": { file: "emoji_21.png" }, "[不说]": { file: "emoji_22.png" }, "[鄙视]": { file: "emoji_23.png" }, "[阿弥陀佛]": { file: "emoji_24.png" }, "[奸笑]": { file: "emoji_25.png" }, "[睡着]": { file: "emoji_26.png" }, "[口罩]": { file: "emoji_27.png" }, "[努力]": { file: "emoji_28.png" }, "[抠鼻孔]": { file: "emoji_29.png" }, "[疑问]": { file: "emoji_30.png" }, "[怒骂]": { file: "emoji_31.png" }, "[晕]": { file: "emoji_32.png" }, "[呕吐]": { file: "emoji_33.png" }, "[拜一拜]": { file: "emoji_160.png" }, "[惊喜]": { file: "emoji_161.png" }, "[流汗]": { file: "emoji_162.png" }, "[卖萌]": { file: "emoji_163.png" }, "[默契眨眼]": { file: "emoji_164.png" }, "[烧香拜佛]": { file: "emoji_165.png" }, "[晚安]": { file: "emoji_166.png" }, "[强]": { file: "emoji_34.png" }, "[弱]": { file: "emoji_35.png" }, "[OK]": { file: "emoji_36.png" }, "[拳头]": { file: "emoji_37.png" }, "[胜利]": { file: "emoji_38.png" }, "[鼓掌]": { file: "emoji_39.png" }, "[握手]": { file: "emoji_200.png" }, "[发怒]": { file: "emoji_40.png" }, "[骷髅]": { file: "emoji_41.png" }, "[便便]": { file: "emoji_42.png" }, "[火]": { file: "emoji_43.png" }, "[溜]": { file: "emoji_44.png" }, "[爱心]": { file: "emoji_45.png" }, "[心碎]": { file: "emoji_46.png" }, "[钟情]": { file: "emoji_47.png" }, "[唇]": { file: "emoji_48.png" }, "[戒指]": { file: "emoji_49.png" }, "[钻石]": { file: "emoji_50.png" }, "[太阳]": { file: "emoji_51.png" }, "[有时晴]": { file: "emoji_52.png" }, "[多云]": { file: "emoji_53.png" }, "[雷]": { file: "emoji_54.png" }, "[雨]": { file: "emoji_55.png" }, "[雪花]": { file: "emoji_56.png" }, "[爱人]": { file: "emoji_57.png" }, "[帽子]": { file: "emoji_58.png" }, "[皇冠]": { file: "emoji_59.png" }, "[篮球]": { file: "emoji_60.png" }, "[足球]": { file: "emoji_61.png" }, "[垒球]": { file: "emoji_62.png" }, "[网球]": { file: "emoji_63.png" }, "[台球]": { file: "emoji_64.png" }, "[咖啡]": { file: "emoji_65.png" }, "[啤酒]": { file: "emoji_66.png" }, "[干杯]": { file: "emoji_67.png" }, "[柠檬汁]": { file: "emoji_68.png" }, "[餐具]": { file: "emoji_69.png" }, "[汉堡]": { file: "emoji_70.png" }, "[鸡腿]": { file: "emoji_71.png" }, "[面条]": { file: "emoji_72.png" }, "[冰淇淋]": { file: "emoji_73.png" }, "[沙冰]": { file: "emoji_74.png" }, "[生日蛋糕]": { file: "emoji_75.png" }, "[蛋糕]": { file: "emoji_76.png" }, "[糖果]": { file: "emoji_77.png" }, "[葡萄]": { file: "emoji_78.png" }, "[西瓜]": { file: "emoji_79.png" }, "[光碟]": { file: "emoji_80.png" }, "[手机]": { file: "emoji_81.png" }, "[电话]": { file: "emoji_82.png" }, "[电视]": { file: "emoji_83.png" }, "[声音开启]": { file: "emoji_84.png" }, "[声音关闭]": { file: "emoji_85.png" }, "[铃铛]": { file: "emoji_86.png" }, "[锁头]": { file: "emoji_87.png" }, "[放大镜]": { file: "emoji_88.png" }, "[灯泡]": { file: "emoji_89.png" }, "[锤头]": { file: "emoji_90.png" }, "[烟]": { file: "emoji_91.png" }, "[炸弹]": { file: "emoji_92.png" }, "[枪]": { file: "emoji_93.png" }, "[刀]": { file: "emoji_94.png" }, "[药]": { file: "emoji_95.png" }, "[打针]": { file: "emoji_96.png" }, "[钱袋]": { file: "emoji_97.png" }, "[钞票]": { file: "emoji_98.png" }, "[银行卡]": { file: "emoji_99.png" }, "[手柄]": { file: "emoji_100.png" }, "[麻将]": { file: "emoji_101.png" }, "[调色板]": { file: "emoji_102.png" }, "[电影]": { file: "emoji_103.png" }, "[麦克风]": { file: "emoji_104.png" }, "[耳机]": { file: "emoji_105.png" }, "[音乐]": { file: "emoji_106.png" }, "[吉他]": { file: "emoji_107.png" }, "[火箭]": { file: "emoji_108.png" }, "[飞机]": { file: "emoji_109.png" }, "[火车]": { file: "emoji_110.png" }, "[公交]": { file: "emoji_111.png" }, "[轿车]": { file: "emoji_112.png" }, "[出租车]": { file: "emoji_113.png" }, "[警车]": { file: "emoji_114.png" }, "[自行车]": { file: "emoji_115.png" }
  }
};

for (var emoji in emojiList) {
  var emojiItem = emojiList[emoji];
  for (var key in emojiItem) {
    var item = emojiItem[key];
    item.img = emojiBaseUrl + "/" + emoji + "/" + item.file;
  }
}

var pinupList = {
  'ajmd': {},
  'xxy': {},
  'lt': {}
};

for (var i = 1; i <= 48; i++) {
  var _key = 'ajmd0' + (i >= 10 ? i : '0' + i);
  pinupList['ajmd'][_key] = { file: _key + '.png' };
}
for (var _i = 1; _i <= 40; _i++) {
  var _key2 = 'xxy0' + (_i >= 10 ? _i : '0' + _i);
  pinupList['xxy'][_key2] = { file: _key2 + '.png' };
}
for (var _i2 = 1; _i2 <= 20; _i2++) {
  var _key3 = 'lt0' + (_i2 >= 10 ? _i2 : '0' + _i2);
  pinupList['lt'][_key3] = { file: _key3 + '.png' };
}

for (var _emoji in pinupList) {
  var _emojiItem = pinupList[_emoji];
  for (var _key4 in _emojiItem) {
    var _item = _emojiItem[_key4];
    _item.img = emojiBaseUrl + "/" + _emoji + "/" + _item.file;
  }
}

exports.default = {
  emojiList: emojiList,
  pinupList: pinupList
};
module.exports = exports["default"];

/***/ }),

/***/ 365:
/* exports provided: default */
/* all exports used */
/*!*******************************************************************************************************************************************************!*\
  !*** ./~/babel-loader/lib!./~/vux-loader/src/script-loader.js!./~/vue-loader/lib/selector.js?type=script&index=0!./src/pages/components/ChatList.vue ***!
  \*******************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(/*! ../../utils */ 42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__utils__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__configs__ = __webpack_require__(/*! ../../configs */ 13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__configs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__configs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__configs_emoji__ = __webpack_require__(/*! ../../configs/emoji */ 346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__configs_emoji___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__configs_emoji__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




//import ChatItem from './ChatItem'

/* harmony default export */ __webpack_exports__["default"] = ({
  //  components: {
  //    ChatItem
  //  },
  props: {
    type: String, // 类型，chatroom, session
    canLoadMore: [String, Boolean],
    rawMsg: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    isRobot: {
      type: Boolean,
      default: function _default() {
        return false;
      }
    },
    msglist: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    userInfos: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    myInfo: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
    // robotInfos: {
    //   type: Object,
    //   default () {
    //     return {}
    //   }
    // }
  },
  data: function data() {
    var _ref;

    return _ref = {
      isFullImgShow: false,
      msgLoadedTimer: null

    }, _defineProperty(_ref, 'isFullImgShow', false), _defineProperty(_ref, 'currentAudio', null), _defineProperty(_ref, 'page_showAudio', true), _defineProperty(_ref, 'teacherId', this.$store.state.haha.teacher_im), _defineProperty(_ref, 'showScrollBox', false), _ref;
  },

  computed: {
    robotInfos: function robotInfos() {
      return this.$store.state.robotInfos;
    }
  },
  beforeMount: function beforeMount() {
    var item = Object.assign({}, this.rawMsg);
    // 标记用户，区分聊天室、普通消息
    if (this.type === 'session') {
      if (item.flow === 'in') {
        if (item.type === 'robot' && item.content && item.content.msgOut) {
          // 机器人下行消息
          var robotAccid = item.content.robotAccid;
          item.avatar = this.robotInfos[robotAccid].avatar;
          item.isRobot = true;
          item.link = '#/namecard/' + robotAccid;
        } else if (item.from !== this.$store.state.userUID) {
          item.avatar = this.userInfos[item.from] && this.userInfos[item.from].avatar || __WEBPACK_IMPORTED_MODULE_1__configs___default.a.defaultUserIcon;
          item.link = '#/namecard/' + item.from;
        } else {
          item.avatar = this.myInfo.avatar;
        }
      } else if (item.flow === 'out') {
        item.avatar = this.myInfo.avatar;
      }
    } else {
      // 标记时间，聊天室中
      item.showTime = __WEBPACK_IMPORTED_MODULE_0__utils___default.a.formatDate(item.time);
    }
    if (item.type === 'timeTag') {
      // 标记发送的时间
      item.showText = item.text;
    } else if (item.type === 'text') {
      // 文本消息
      item.showText = __WEBPACK_IMPORTED_MODULE_0__utils___default.a.escape(item.text);
      if (/\[[^\]]+\]/.test(item.showText)) {
        var emojiItems = item.showText.match(/\[[^\]]+\]/g);
        emojiItems.forEach(function (text) {
          var emojiCnt = __WEBPACK_IMPORTED_MODULE_2__configs_emoji___default.a.emojiList.emoji;
          if (emojiCnt[text]) {
            item.showText = item.showText.replace(text, '<img class="emoji-small" src="' + emojiCnt[text].img + '">');
          }
        });
      }
    } else if (item.type === 'custom') {
      var content = JSON.parse(item.content);
      // type 1 为猜拳消息
      if (content.type === 1) {
        var data = content.data;
        var resourceUrl = __WEBPACK_IMPORTED_MODULE_1__configs___default.a.resourceUrl;
        // item.showText = `<img class="emoji-middle" src="${resourceUrl}/im/play-${data.value}.png">`
        item.type = 'custom-type1';
        item.imgUrl = resourceUrl + '/im/play-' + data.value + '.png';
        // type 3 为贴图表情
      } else if (content.type === 3) {
        var _data = content.data;
        var emojiCnt = '';
        if (__WEBPACK_IMPORTED_MODULE_2__configs_emoji___default.a.pinupList[_data.catalog]) {
          emojiCnt = __WEBPACK_IMPORTED_MODULE_2__configs_emoji___default.a.pinupList[_data.catalog][_data.chartlet];
          // item.showText = `<img class="emoji-big" src="${emojiCnt.img}">`
          item.type = 'custom-type3';
          item.imgUrl = '' + emojiCnt.img;
        }
      } else {
        item.showText = __WEBPACK_IMPORTED_MODULE_0__utils___default.a.parseCustomMsg(item);
        if (item.showText !== '[自定义消息]') {
          item.showText += ',请到手机或电脑客户端查看';
        }
      }
    } else if (item.type === 'image') {
      // 原始图片全屏显示
      item.originLink = item.file.url;
    } else if (item.type === 'video') {
      // ...
    } else if (item.type === 'audio') {
      item.audioSrc = item.file.mp3Url;
      item.showText = Math.round(item.file.dur / 1000) + '" 点击播放';
    } else if (item.type === 'file') {
      item.fileLink = item.file.url;
      item.showText = item.file.name;
    } else if (item.type === 'notification') {
      //对于系统通知，更新下用户信息的状态
      item.showText = __WEBPACK_IMPORTED_MODULE_0__utils___default.a.generateChatroomSysMsg(item);
    } else if (item.type === 'tip') {
      //对于系统通知，更新下用户信息的状态
      item.showText = item.tip;
    } else if (item.type === 'robot') {
      var _content = item.content || {};
      var message = _content.message || [];
      if (!_content.msgOut) {
        // 机器人上行消息
        item.robotFlow = 'out';
        item.showText = item.text;
      } else if (_content.flag === 'bot') {
        item.subType = 'bot';
        message = message.map(function (item) {
          if (item.type === 'template') {
            // 在vuex(store/actions/msgs.js)中已调用sdk方法做了转换
            return item.content.json;
          } else if (item.type === 'text' || item.type === 'answer') {
            // 保持跟template结构一致
            return [{
              type: 'text',
              text: item.content
            }];
          } else if (item.type === 'image') {
            // 保持跟template结构一致
            return [{
              type: 'image',
              url: item.content
            }];
          }
        });
        item.message = message;
      } else if (item.content.flag === 'faq') {
        item.subType = 'faq';
        item.query = message.query;
        var match = message.match.sort(function (a, b) {
          // 返回最匹配的答案
          return b.score - a.score;
        });
        item.message = match[0];
      }
    } else {
      item.showText = '[' + __WEBPACK_IMPORTED_MODULE_0__utils___default.a.mapMsgType(item) + '],\u8BF7\u5230\u624B\u673A\u6216\u7535\u8111\u5BA2\u6237\u7AEF\u67E5\u770B';
    }
    this.msg = item;
  },
  mounted: function mounted() {
    var _this = this;

    var item = this.msg;
    // 有时序问题的操作
    this.$nextTick(function () {
      var media = null;
      if (item.type === 'image') {
        // 图片消息缩略图
        media = new Image();
        media.src = item.file.url + '?imageView&thumbnail=180x0&quality=85';
      } else if (item.type === 'custom-type1') {
        // 猜拳消息
        media = new Image();
        media.className = 'emoji-middle';
        media.src = item.imgUrl;
      } else if (item.type === 'custom-type3') {
        // 贴图表情
        media = new Image();
        media.className = 'emoji-big';
        media.src = item.imgUrl;
      } else if (item.type === 'video') {
        if (/(mov|mp4|ogg|webm)/i.test(item.file.ext)) {
          media = document.createElement('video');
          media.src = item.file.url;
          media.width = 640;
          media.height = 480;
          media.autoStart = false;
          media.preload = 'metadata';
          media.controls = 'controls';
        } else {
          var aLink = document.createElement('a');
          aLink.href = item.file.url;
          aLink.target = '_blank';
          aLink.innerHTML = '<i class="u-icon icon-file"></i>' + video.name;
          _this.$refs.mediaMsg.appendChild(aLink);
        }
      }
      if (media) {
        if (_this.$refs.mediaMsg) {
          _this.$refs.mediaMsg.appendChild(media);
        }
        media.onload = function () {
          _this.$emit('msg-loaded');
        };
        media.onerror = function () {
          _this.$emit('msg-loaded');
        };
      } else {
        _this.$emit('msg-loaded');
      }
    }); // end this.nextTick
  },

  methods: {
    revocateMsg: function revocateMsg(vNode) {
      // 在会话聊天页
      if (this.$store.state.currSessionId) {
        if (vNode && vNode.data && vNode.data.attrs) {
          var attrs = vNode.data.attrs;
          if (attrs.type === 'robot') {
            return;
          }
          // 自己发的消息
          if (attrs.flow === 'out') {
            var that = this;
            this.$vux.confirm.show({
              title: '确定需要撤回消息',
              onCancel: function onCancel() {},
              onConfirm: function onConfirm() {
                that.$store.dispatch('revocateMsg', {
                  idClient: attrs.idClient
                });
              }
            });
          }
        }
      }
    },
    sendRobotBlockMsg: function sendRobotBlockMsg(msg, originMsg) {
      var body = '[复杂按钮模板触发消息]';
      if (msg.text && msg.text.length === 1) {
        body = msg.text[0].text;
      }
      var robotAccid = originMsg.content.robotAccid;
      if (!this.isRobot) {
        body = '@' + this.robotInfos[robotAccid].nick + ' ' + body;
      }
      if (this.type === 'session') {
        this.$store.dispatch('sendRobotMsg', {
          type: 'link',
          scene: originMsg.scene,
          to: originMsg.to,
          robotAccid: robotAccid,
          // 机器人后台消息
          params: msg.params,
          target: msg.target,
          // 显示的文本消息
          body: body
        });
      } else if (this.type === 'chatroom') {
        this.$store.dispatch('sendChatroomRobotMsg', {
          type: 'link',
          robotAccid: robotAccid,
          // 机器人后台消息
          params: msg.params,
          target: msg.target,
          // 显示的文本消息
          body: body
        });
      }
    },
    continueRobotMsg: function continueRobotMsg(robotAccid) {
      this.$store.dispatch('continueRobotMsg', robotAccid);
    },
    showFullImg: function showFullImg(src) {
      this.$store.dispatch('showFullscreenImg', {
        src: src
      });
    },
    msgLoaded: function msgLoaded() {
      var _this2 = this;

      clearTimeout(this.msgLoadedTimer);
      this.msgLoadedTimer = setTimeout(function () {
        _this2.$emit('msgs-loaded');
      }, 20);
    },
    getText: function getText(txt) {
      return __WEBPACK_IMPORTED_MODULE_0__utils___default.a.generateChatroomSysMsg(txt);
    },
    clickExceptionalImg: function clickExceptionalImg() {
      this.$store.dispatch('addshowScrollBox', true);
    },

    // 语音播放
    playAudio: function playAudio(src, data, index) {
      var vm = this;
      var myaudio = vm.$refs.myaudio;
      myaudio.src = src;
      vm.msglist.forEach(function (item, num) {
        if (num == index) {
          if (typeof data.isplay == 'undefined' || !data.isplay) {
            vm.$set(item.file, 'isplay', false);
          }
        } else {
          if (item.file) {
            vm.$set(item.file, 'isplay', false);
          }
        }
      });

      if (data.isplay) {
        vm.$set(data, 'isplay', false);
        myaudio.pause();
        myaudio.currentTime = 0.0;
      } else {
        vm.$set(data, 'isplay', true);
        myaudio.play();
      }

      myaudio.onended = function () {
        vm.$set(data, 'isplay', false);
      };

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
});

/***/ }),

/***/ 366:
/* no static exports found */
/* all exports used */
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-a2403f3a","scoped":false,"hasInlineConfig":true}!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/components/ChatList.vue ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../~/css-loader/lib/css-base.js */ 2)(true);
// imports


// module
exports.push([module.i, "\n.p-chat-list .u-icon {\n  width: 1.4rem;\n  height: 1.6rem;\n  margin-right: 0.2rem;\n  vertical-align: bottom;\n}\n.p-chat-history .u-msg .msg-link {\n  display: none;\n}\n.p-room-chat-list .u-msg .msg-text {\n  max-width: 50%;\n}\n.p-room-chat-list .u-msg .msg-link {\n  bottom: 0;\n  right: -4rem;\n  font-size: 0.9rem;\n}\n.page_qrCode{\n  width: 260px;\n}\n.page_voice{\n  width: 20px;\n}\n.exceptionalImg{\n\twidth: 25px;\n\theight: 25px;\n\tposition: absolute;\n\ttop: 48px;\n\tleft: 5px;\n}\n", "", {"version":3,"sources":["D:/yotta/college/public_html/assets/yunxin/src/pages/components/ChatList.vue"],"names":[],"mappings":";AAmjBE;EACE,cAAc;EACd,eAAe;EACf,qBAAqB;EACrB,uBAAuB;CACxB;AAIC;EACE,cAAc;CACf;AAKD;EACE,eAAe;CAChB;AACD;EACE,UAAU;EACV,aAAa;EACb,kBAAkB;CACnB;AAGL;EACE,aAAa;CAEd;AACD;EACE,YAAY;CACb;AAGD;CACC,YAAY;CACZ,aAAa;CACb,mBAAmB;CACnB,UAAU;CACV,UAAU;CACV","file":"ChatList.vue","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.p-chat-list {\n  .u-icon {\n    width: 1.4rem;\n    height: 1.6rem;\n    margin-right: 0.2rem;\n    vertical-align: bottom;\n  }\n}\n.p-chat-history {\n  .u-msg {\n    .msg-link {\n      display: none;\n    }\n  }\n}\n.p-room-chat-list {\n  .u-msg {\n    .msg-text {\n      max-width: 50%;\n    }\n    .msg-link {\n      bottom: 0;\n      right: -4rem;\n      font-size: 0.9rem;\n    }\n  }\n}\n.page_qrCode{\n  width: 260px;\n\n}\n.page_voice{\n  width: 20px;\n}\n\n\n.exceptionalImg{\n\twidth: 25px;\n\theight: 25px;\n\tposition: absolute;\n\ttop: 48px;\n\tleft: 5px;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 367:
/* no static exports found */
/* all exports used */
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-loader/lib/template-compiler?{"id":"data-v-a2403f3a"}!./~/vux-loader/src/before-template-compiler-loader.js!./~/vux-loader/src/template-loader.js!./~/vue-loader/lib/selector.js?type=template&index=0!./src/pages/components/ChatList.vue ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ul', {
    staticClass: "m-chat-list p-chat-list",
    attrs: {
      "id": "chat-list"
    }
  }, [(_vm.canLoadMore) ? _c('li', {
    staticClass: "u-msg item-time"
  }, [_vm._v("\n      ---- 上拉加载更多 ----\n    ")]) : _c('li', {
    staticClass: "u-msg item-time"
  }, [_vm._v("\n      ---- 已无更多记录 ----\n    ")]), _vm._v(" "), _vm._l((_vm.msglist), function(msg, index) {
    return _c('li', {
      key: msg.idClient,
      staticClass: "u-msg item-you",
      class: {
        'item-time': msg.type === 'timeTag',
          'item-tip': msg.type === 'tip',
          'session-chat': _vm.type === 'session',
          'item-img': msg.type === 'images'
      },
      attrs: {
        "type": _vm.type,
        "rawMsg": msg,
        "isRobot": _vm.isRobot,
        "userInfos": _vm.userInfos,
        "myInfo": _vm.myInfo
      },
      on: {
        "msg-loaded": _vm.msgLoaded
      }
    }, [(msg.type === 'timeTag') ? _c('div', [_vm._v("---- " + _vm._s(msg.text) + " ----")]) : (msg.type === 'tip') ? _c('div', {
      staticClass: "tip"
    }, [_vm._v(_vm._s(msg.tip))]) : (msg.from == _vm.teacherId) ? _c('div', {
      directives: [{
        name: "touch",
        rawName: "v-touch:hold",
        value: (_vm.revocateMsg),
        expression: "revocateMsg",
        arg: "hold"
      }],
      attrs: {
        "idClient": msg.idClient,
        "time": msg.time,
        "flow": msg.flow,
        "type": msg.type
      }
    }, [(msg.avatar) ? _c('a', {
      staticClass: "msg-head",
      attrs: {
        "href": msg.link
      }
    }, [_c('img', {
      attrs: {
        "src": msg.avatar
      }
    })]) : (msg.type !== 'notification') ? _c('p', {
      staticClass: "msg-user"
    }, [(msg.fromAvatar !== '') ? _c('span', {
      staticClass: "page_msgMe"
    }, [_c('img', {
      staticClass: "myItem-me",
      staticStyle: {
        "width": "45px",
        "height": "45px",
        "border-radius": "100%"
      },
      attrs: {
        "src": msg.fromAvatar,
        "alt": ""
      }
    }), _vm._v(" "), _c('img', {
      staticClass: "exceptionalImg",
      attrs: {
        "src": "http://college.m-fyd.com/assets/yunxin/res/im/exceptional.png",
        "alt": ""
      },
      on: {
        "click": function($event) {
          _vm.clickExceptionalImg()
        }
      }
    })]) : _vm._e(), _vm._v(" "), (msg.fromAvatar === '') ? _c('span', {
      staticClass: "page_msgMe"
    }, [_c('img', {
      staticClass: "myItem-me",
      staticStyle: {
        "width": "45px",
        "height": "45px",
        "border-radius": "100%"
      },
      attrs: {
        "src": "http://college.m-fyd.com/assets/yunxin/res/im/tourists.png",
        "alt": ""
      }
    })]) : _vm._e(), _vm._v(" "), _c('span', {
      staticClass: "msg-dateOfName"
    }, [_c('em', [_vm._v(_vm._s(msg.showTime))]), _vm._v(_vm._s(msg.fromNick))])]) : _vm._e(), _vm._v(" "), (msg.type === 'text') ? _c('span', {
      staticClass: "msg-text",
      domProps: {
        "innerHTML": _vm._s(msg.text)
      }
    }) : (msg.type === 'custom-type1') ? _c('span', {
      ref: "mediaMsg",
      refInFor: true,
      staticClass: "msg-text"
    }) : (msg.type === 'custom-type3') ? _c('span', {
      ref: "mediaMsg",
      refInFor: true,
      staticClass: "msg-text"
    }) : (msg.type === 'image') ? _c('span', {
      ref: "mediaMsg",
      refInFor: true,
      staticClass: "msg-text",
      on: {
        "click": function($event) {
          $event.stopPropagation();
          _vm.showFullImg(msg.file.url)
        }
      }
    }, [_c('img', {
      attrs: {
        "src": msg.file.url
      }
    })]) : (msg.type === 'video') ? _c('span', {
      ref: "mediaMsg",
      refInFor: true,
      staticClass: "msg-text"
    }) : (msg.type === 'audio') ? _c('span', {
      staticClass: "msg-text msg-audio",
      attrs: {
        "id": "msg-audio"
      },
      on: {
        "click": function($event) {
          $event.preventDefault();
          _vm.playAudio(msg.file.mp3Url, msg.file, index)
        }
      }
    }, [_c('span', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (_vm.page_showAudio),
        expression: "page_showAudio"
      }]
    }, [_vm._v(_vm._s(Math.round(msg.file.dur / 1000) + '" 点击播放'))]), _vm._v(" "), (msg.file.isplay) ? _c('img', {
      staticClass: "page_voice",
      attrs: {
        "id": "page_voice",
        "src": "http://college.m-fyd.com/assets/yunxin/res/im/voiceSpeaker.gif"
      }
    }) : _vm._e()]) : (msg.type === 'file') ? _c('span', {
      staticClass: "msg-text"
    }, [_c('a', {
      attrs: {
        "href": msg.fileLink,
        "target": "_blank"
      }
    }, [_c('i', {
      staticClass: "u-icon icon-file"
    }), _vm._v("\n\t          " + _vm._s(msg.file.name) + "\n\t        ")])]) : (msg.type === 'robot') ? _c('span', {
      staticClass: "msg-text",
      class: {
        'msg-robot': msg.robotFlow !== 'out' && !_vm.isRobot
      }
    }, [(msg.robotFlow === 'out') ? _c('div', [_vm._v(_vm._s(msg.text))]) : (msg.subType === 'bot') ? _c('div', _vm._l((msg.message), function(tmsgs) {
      return _c('div', _vm._l((tmsgs), function(tmsg) {
        return _c('div', [(tmsg.type === 'text') ? _c('div', [_c('p', [_vm._v(_vm._s(tmsg.text))])]) : (tmsg.type === 'image') ? _c('div', [_c('p', [_c('img', {
          attrs: {
            "src": tmsg.url
          }
        })])]) : (tmsg.type === 'url') ? _c('div', [_c('a', {
          class: tmsg.style,
          attrs: {
            "href": tmsg.target,
            "target": "_blank"
          }
        }, [(tmsg.image) ? _c('div', _vm._l((tmsg.image), function(tmsg2) {
          return _c('p', [_c('img', {
            attrs: {
              "src": tmsg2.url
            }
          })])
        })) : _vm._e(), _vm._v(" "), (tmsg.text) ? _c('div', _vm._l((tmsg.text), function(tmsg2) {
          return _c('p', [_vm._v(_vm._s(tmsg2.text))])
        })) : _vm._e()])]) : (tmsg.type === 'block') ? _c('div', [_c('a', {
          class: tmsg.style,
          attrs: {
            "params": tmsg.params,
            "target": tmsg.target
          },
          on: {
            "click": function($event) {
              _vm.sendRobotBlockMsg(tmsg, msg)
            }
          }
        }, [(tmsg.image) ? _c('div', _vm._l((tmsg.image), function(tmsg2) {
          return _c('p', [_c('img', {
            attrs: {
              "src": tmsg2.url
            }
          })])
        })) : _vm._e(), _vm._v(" "), (tmsg.text) ? _c('div', _vm._l((tmsg.text), function(tmsg2) {
          return _c('p', [_vm._v(_vm._s(tmsg2.text))])
        })) : _vm._e()])]) : _vm._e()])
      }))
    })) : (msg.subType === 'faq') ? _c('div', [_c('p', [_vm._v(_vm._s(msg.message.answer))])]) : _vm._e(), _vm._v(" "), (msg.robotFlow !== 'out' && !_vm.isRobot) ? _c('span', {
      staticClass: "msg-link"
    }, [_c('a', {
      staticClass: "link-right",
      on: {
        "click": function($event) {
          _vm.continueRobotMsg(msg.content.robotAccid)
        }
      }
    }, [_vm._v("继续对话")])]) : _vm._e()]) : _vm._e(), _vm._v(" "), (msg.status === 'fail') ? _c('span', {
      staticClass: "msg-failed"
    }, [_c('i', {
      staticClass: "weui-icon-warn"
    })]) : _vm._e()]) : _vm._e()])
  }), _vm._v(" "), _c('audio', {
    ref: "myaudio",
    staticStyle: {
      "opacity": "0"
    }
  }, [_c('source')])], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-a2403f3a", module.exports)
  }
}

/***/ }),

/***/ 368:
/* no static exports found */
/* all exports used */
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-style-loader!./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-a2403f3a","scoped":false,"hasInlineConfig":true}!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/components/ChatList.vue ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../~/css-loader?sourceMap!../../../~/vue-loader/lib/style-compiler?{"id":"data-v-a2403f3a","scoped":false,"hasInlineConfig":true}!../../../~/vux-loader/src/style-loader.js!../../../~/vue-loader/lib/selector.js?type=styles&index=0!./ChatList.vue */ 366);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(/*! ../../../~/vue-style-loader/lib/addStylesClient.js */ 3)("4386df3f", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-a2403f3a\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vux-loader/src/style-loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ChatList.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-a2403f3a\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vux-loader/src/style-loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ChatList.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 369:
/* no static exports found */
/* exports used: default */
/*!*******************************************!*\
  !*** ./src/pages/components/ChatList.vue ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!../../../~/vue-loader/lib/style-compiler/index?{"id":"data-v-a2403f3a","scoped":false,"hasInlineConfig":true}!../../../~/vux-loader/src/style-loader.js!../../../~/vue-loader/lib/selector?type=styles&index=0!./ChatList.vue */ 368)

var Component = __webpack_require__(/*! ../../../~/vue-loader/lib/component-normalizer */ 1)(
  /* script */
  __webpack_require__(/*! !babel-loader!../../../~/vux-loader/src/script-loader.js!../../../~/vue-loader/lib/selector?type=script&index=0!./ChatList.vue */ 365),
  /* template */
  __webpack_require__(/*! !../../../~/vue-loader/lib/template-compiler/index?{"id":"data-v-a2403f3a"}!../../../~/vux-loader/src/before-template-compiler-loader.js!../../../~/vux-loader/src/template-loader.js!../../../~/vue-loader/lib/selector?type=template&index=0!./ChatList.vue */ 367),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\yotta\\college\\public_html\\assets\\yunxin\\src\\pages\\components\\ChatList.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] ChatList.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a2403f3a", Component.options)
  } else {
    hotAPI.reload("data-v-a2403f3a", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 381:
/* exports provided: default */
/* all exports used */
/*!***********************************************************************************************************************************************!*\
  !*** ./~/babel-loader/lib!./~/vux-loader/src/script-loader.js!./~/vue-loader/lib/selector.js?type=script&index=0!./src/pages/ChatHistory.vue ***!
  \***********************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_ChatList__ = __webpack_require__(/*! ./components/ChatList */ 369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_ChatList___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_ChatList__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(/*! ../utils */ 42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__utils__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_page__ = __webpack_require__(/*! ../utils/page */ 62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_page___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__utils_page__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  beforeMount: function beforeMount() {
    // 如果是刷新页面，重定向至聊天页面
    if (this.$store.state.isRefresh) {
      location.href = '#/chat/' + this.sessionId;
    }
  },
  mounted: function mounted() {
    this.$store.dispatch('resetNoMoreHistoryMsgs');
    this.getHistoryMsgs();
  },
  updated: function updated() {
    var tempPagePos = __WEBPACK_IMPORTED_MODULE_2__utils_page___default.a.getChatListHeight();
    __WEBPACK_IMPORTED_MODULE_2__utils_page___default.a.scrollChatListDown(tempPagePos - this.currPagePos);
    this.currPagePos = tempPagePos;
  },

  components: {
    ChatList: __WEBPACK_IMPORTED_MODULE_0__components_ChatList___default.a
  },
  data: function data() {
    return {
      leftBtnOptions: {
        backText: ' ',
        preventGoBack: true
      },
      currPagePos: 0
      // selectedDate: ''
    };
  },

  computed: {
    sessionId: function sessionId() {
      return this.$route.params.sessionId;
    },
    sessionName: function sessionName() {
      var sessionId = this.sessionId;
      var user = null;
      if (/^p2p-/.test(sessionId)) {
        user = sessionId.replace(/^p2p-/, '');
        if (user === this.$store.state.userUID) {
          return '我的手机';
        } else if (this.isRobot) {
          return this.robotInfos[user].nick || user;
        } else {
          var userInfo = this.userInfos[user] || {};
          return __WEBPACK_IMPORTED_MODULE_1__utils___default.a.getFriendAlias(userInfo);
        }
      } else if (/^team-/.test(sessionId)) {
        return '群';
      }
    },

    // 判断是否是机器人
    isRobot: function isRobot() {
      var sessionId = this.sessionId;
      var user = null;
      if (/^p2p-/.test(sessionId)) {
        user = sessionId.replace(/^p2p-/, '');
        if (this.robotInfos[user]) {
          return true;
        }
      }
      return false;
    },
    myInfo: function myInfo() {
      return this.$store.state.myInfo;
    },
    userInfos: function userInfos() {
      return this.$store.state.userInfos;
    },
    msglist: function msglist() {
      var msgs = this.$store.state.currSessionMsgs;
      return msgs;
    },
    robotInfos: function robotInfos() {
      return this.$store.state.robotInfos;
    },
    scene: function scene() {
      return __WEBPACK_IMPORTED_MODULE_1__utils___default.a.parseSession(this.sessionId).scene;
    },
    to: function to() {
      return __WEBPACK_IMPORTED_MODULE_1__utils___default.a.parseSession(this.sessionId).to;
    },
    canLoadMore: function canLoadMore() {
      return !this.$store.state.noMoreHistoryMsgs;
    }
  },
  methods: {
    getHistoryMsgs: function getHistoryMsgs() {
      if (this.canLoadMore) {
        this.$store.dispatch('getHistoryMsgs', {
          scene: this.scene,
          to: this.to
        });
      }
    },
    loadMore: function loadMore() {
      if (__WEBPACK_IMPORTED_MODULE_2__utils_page___default.a.getChatListScroll() <= 5) {
        this.getHistoryMsgs();
      }
    },

    onClickBack: function onClickBack() {
      // location.href = `#/chat/${this.sessionId}`
      window.history.go(-1);
    }
  }
});

/***/ }),

/***/ 399:
/* no static exports found */
/* all exports used */
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-4c34d660","scoped":true,"hasInlineConfig":true}!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/ChatHistory.vue ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../~/css-loader/lib/css-base.js */ 2)(true);
// imports


// module
exports.push([module.i, "\n.p-chat-history .m-chat-main[data-v-4c34d660] {\n    padding: 0;\n}\n", "", {"version":3,"sources":["D:/yotta/college/public_html/assets/yunxin/src/pages/ChatHistory.vue"],"names":[],"mappings":";AAyIE;IACE,WAAW;CACZ","file":"ChatHistory.vue","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.p-chat-history {\n  .m-chat-main {\n    padding: 0;\n  }\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 410:
/* no static exports found */
/* all exports used */
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-loader/lib/template-compiler?{"id":"data-v-4c34d660"}!./~/vux-loader/src/before-template-compiler-loader.js!./~/vux-loader/src/template-loader.js!./~/vue-loader/lib/selector.js?type=template&index=0!./src/pages/ChatHistory.vue ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "g-inherit m-article p-chat-history"
  }, [_c('x-header', {
    staticClass: "m-tab",
    attrs: {
      "left-options": _vm.leftBtnOptions
    },
    on: {
      "on-click-back": _vm.onClickBack
    }
  }, [_c('h1', {
    staticClass: "m-tab-top"
  }, [_vm._v(_vm._s(_vm.sessionName))]), _vm._v(" "), _c('a', {
    attrs: {
      "slot": "left"
    },
    slot: "left"
  })]), _vm._v(" "), _c('div', {
    staticClass: "m-chat-main"
  }, [_c('chat-list', {
    directives: [{
      name: "touch",
      rawName: "v-touch:swipedown",
      value: (_vm.loadMore),
      expression: "loadMore",
      arg: "swipedown"
    }],
    ref: "chatlist",
    attrs: {
      "type": "session",
      "canLoadMore": _vm.canLoadMore,
      "msglist": _vm.msglist,
      "userInfos": _vm.userInfos,
      "myInfo": _vm.myInfo
    }
  })], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4c34d660", module.exports)
  }
}

/***/ }),

/***/ 424:
/* no static exports found */
/* all exports used */
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-style-loader!./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-4c34d660","scoped":true,"hasInlineConfig":true}!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/ChatHistory.vue ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../~/css-loader?sourceMap!../../~/vue-loader/lib/style-compiler?{"id":"data-v-4c34d660","scoped":true,"hasInlineConfig":true}!../../~/vux-loader/src/style-loader.js!../../~/vue-loader/lib/selector.js?type=styles&index=0!./ChatHistory.vue */ 399);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(/*! ../../~/vue-style-loader/lib/addStylesClient.js */ 3)("0b45ec7a", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-4c34d660\",\"scoped\":true,\"hasInlineConfig\":true}!../../node_modules/vux-loader/src/style-loader.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ChatHistory.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-4c34d660\",\"scoped\":true,\"hasInlineConfig\":true}!../../node_modules/vux-loader/src/style-loader.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ChatHistory.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=3.js.map