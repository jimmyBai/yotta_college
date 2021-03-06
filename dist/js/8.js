webpackJsonp([8],{

/***/ 319:
/* no static exports found */
/* all exports used */
/*!**********************************!*\
  !*** ./src/pages/SearchUser.vue ***!
  \**********************************/
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(/*! ../../~/vue-loader/lib/component-normalizer */ 1)(
  /* script */
  __webpack_require__(/*! !babel-loader!../../~/vux-loader/src/script-loader.js!../../~/vue-loader/lib/selector?type=script&index=0!./SearchUser.vue */ 391),
  /* template */
  __webpack_require__(/*! !../../~/vue-loader/lib/template-compiler/index?{"id":"data-v-dc8b55e2"}!../../~/vux-loader/src/before-template-compiler-loader.js!../../~/vux-loader/src/template-loader.js!../../~/vue-loader/lib/selector?type=template&index=0!./SearchUser.vue */ 419),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\yotta\\college\\public_html\\assets\\yunxin\\src\\pages\\SearchUser.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] SearchUser.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-dc8b55e2", Component.options)
  } else {
    hotAPI.reload("data-v-dc8b55e2", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 391:
/* exports provided: default */
/* all exports used */
/*!**********************************************************************************************************************************************!*\
  !*** ./~/babel-loader/lib!./~/vux-loader/src/script-loader.js!./~/vue-loader/lib/selector.js?type=script&index=0!./src/pages/SearchUser.vue ***!
  \**********************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__configs__ = __webpack_require__(/*! ../configs */ 13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__configs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__configs__);
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



/* harmony default export */ __webpack_exports__["default"] = ({
  mounted: function mounted() {
    var _this = this;

    this.$nextTick(function () {
      _this.searchType = parseInt(_this.$route.params.searchType);
      _this.$store.dispatch('resetSearchResult');
    });
  },
  data: function data() {
    return {
      searchType: 0, // 用户 0 群 1
      searchText: '',
      searchList: [],
      errMsg: '',
      // 首次加载标志，因为mount和watch会有时序问题，首次加载不显示errMsg
      firstEntry: true
    };
  },

  watch: {
    searchResult: function searchResult(val, oldVal) {
      if (this.searchType === 1) {
        this.errMsg = '群功能DEMO待开发';
        return;
      }
      if (val.length === 0 && !this.firstEntry) {
        this.errMsg = '无记录';
      } else {
        this.errMsg = '';
      }
      this.searchList = val;
    }
  },
  computed: {
    searchResult: function searchResult() {
      var result = [];
      if (this.searchType === 1) {
        return result;
        // result = this.$store.state.searchedTeams
      } else if (this.searchType === 0) {
        result = this.$store.state.searchedUsers.map(function (item) {
          item.nick = item.nick || item.account;
          item.link = '/namecard/' + item.account;
          item.avatar = item.avatar || __WEBPACK_IMPORTED_MODULE_0__configs___default.a.defaultUserIcon;
          return item;
        });
      }
      return result;
    }
  },
  methods: {
    searchUser: function searchUser() {
      this.firstEntry = false;
      if (this.searchType === 1) {
        this.$vux.alert.show({
          title: '群功能DEMO待开发'
        });
      } else if (this.searchType === 0) {
        if (this.searchText === this.$store.state.userUID) {
          this.searchList = [];
          this.errMsg = '别看了，就是你自己！';
        } else {
          this.$store.dispatch('searchUsers', {
            accounts: [this.searchText]
          });
        }
      }
    }
  }
});

/***/ }),

/***/ 419:
/* no static exports found */
/* all exports used */
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-loader/lib/template-compiler?{"id":"data-v-dc8b55e2"}!./~/vux-loader/src/before-template-compiler-loader.js!./~/vux-loader/src/template-loader.js!./~/vue-loader/lib/selector.js?type=template&index=0!./src/pages/SearchUser.vue ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "g-inherit m-article p-search-user"
  }, [_c('x-header', {
    staticClass: "m-tab",
    attrs: {
      "left-options": {
        backText: ' '
      }
    }
  }, [_c('button-tab', {
    staticClass: "m-tab-top",
    model: {
      value: (_vm.searchType),
      callback: function($$v) {
        _vm.searchType = $$v
      },
      expression: "searchType"
    }
  }, [_c('button-tab-item', {
    staticClass: "u-tab-top"
  }, [_vm._v("搜索用户")]), _vm._v(" "), _c('button-tab-item', {
    staticClass: "u-tab-top"
  }, [_vm._v("搜索群")])], 1), _vm._v(" "), _c('a', {
    attrs: {
      "slot": "left"
    },
    slot: "left"
  })], 1), _vm._v(" "), _c('group', {
    staticClass: "u-search"
  }, [_c('search', {
    staticClass: "u-ipt-default",
    attrs: {
      "type": "text",
      "required": false,
      "auto-fixed": false,
      "placeholder": "请输入搜索内容"
    },
    model: {
      value: (_vm.searchText),
      callback: function($$v) {
        _vm.searchText = $$v
      },
      expression: "searchText"
    }
  }, [_c('span', {
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("搜索：")])])], 1), _vm._v(" "), _c('div', [_c('x-button', {
    attrs: {
      "type": "primary",
      "action-type": "button"
    },
    nativeOn: {
      "click": function($event) {
        return _vm.searchUser($event)
      }
    }
  }, [_vm._v("搜索")])], 1), _vm._v(" "), _c('group', {
    staticClass: "u-card u-list"
  }, _vm._l((_vm.searchList), function(user, index) {
    return _c('cell', {
      key: user.account,
      staticClass: "u-list-item",
      attrs: {
        "title": user.nick,
        "inline-desc": user.account,
        "userId": index,
        "is-link": "",
        "link": user.link
      }
    }, [_c('img', {
      staticClass: "icon",
      attrs: {
        "slot": "icon",
        "width": "20",
        "src": user.avatar
      },
      slot: "icon"
    })])
  })), _vm._v(" "), _c('div', {
    staticClass: "u-card"
  }, [_c('h3', [_vm._v(_vm._s(_vm.errMsg))])])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-dc8b55e2", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=8.js.map