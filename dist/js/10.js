webpackJsonp([10],{

/***/ 314:
/* no static exports found */
/* all exports used */
/*!*******************************!*\
  !*** ./src/pages/General.vue ***!
  \*******************************/
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(/*! ../../~/vue-loader/lib/component-normalizer */ 1)(
  /* script */
  __webpack_require__(/*! !babel-loader!../../~/vux-loader/src/script-loader.js!../../~/vue-loader/lib/selector?type=script&index=0!./General.vue */ 383),
  /* template */
  __webpack_require__(/*! !../../~/vue-loader/lib/template-compiler/index?{"id":"data-v-663860c8"}!../../~/vux-loader/src/before-template-compiler-loader.js!../../~/vux-loader/src/template-loader.js!../../~/vue-loader/lib/selector?type=template&index=0!./General.vue */ 412),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\yotta\\college\\public_html\\assets\\yunxin\\src\\pages\\General.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] General.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-663860c8", Component.options)
  } else {
    hotAPI.reload("data-v-663860c8", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 383:
/* exports provided: default */
/* all exports used */
/*!*******************************************************************************************************************************************!*\
  !*** ./~/babel-loader/lib!./~/vux-loader/src/script-loader.js!./~/vue-loader/lib/selector.js?type=script&index=0!./src/pages/General.vue ***!
  \*******************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vux_src_components_group_index_vue__ = __webpack_require__(/*! vux/src/components/group/index.vue */ 119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vux_src_components_group_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vux_src_components_group_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vux_src_components_cell_index_vue__ = __webpack_require__(/*! vux/src/components/cell/index.vue */ 148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vux_src_components_cell_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vux_src_components_cell_index_vue__);




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Group: __WEBPACK_IMPORTED_MODULE_0_vux_src_components_group_index_vue___default.a,
    Cell: __WEBPACK_IMPORTED_MODULE_1_vux_src_components_cell_index_vue___default.a
  },
  computed: {
    myInfo: function myInfo() {
      return this.$store.state.myInfo;
    }
  },
  methods: {
    logout: function logout() {
      var that = this;
      this.$vux.confirm.show({
        title: '确定要注销帐号？',
        onConfirm: function onConfirm() {
          that.$store.dispatch('logout');
        }
      });
    }
  }
});

/***/ }),

/***/ 412:
/* no static exports found */
/* all exports used */
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-loader/lib/template-compiler?{"id":"data-v-663860c8"}!./~/vux-loader/src/before-template-compiler-loader.js!./~/vux-loader/src/template-loader.js!./~/vue-loader/lib/selector.js?type=template&index=0!./src/pages/General.vue ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.myInfo.account) ? _c('div', {
    staticClass: "g-inherit m-main p-general"
  }, [_c('group', {
    staticClass: "u-card"
  }, [_c('cell', {
    attrs: {
      "title": _vm.myInfo.nick,
      "inline-desc": '帐号: ' + _vm.myInfo.account
    }
  }, [_c('img', {
    staticClass: "icon",
    attrs: {
      "slot": "icon",
      "width": "20",
      "src": _vm.myInfo.avatar
    },
    slot: "icon"
  })])], 1), _vm._v(" "), _c('group', {
    staticClass: "u-card"
  }, [_c('cell', {
    attrs: {
      "title": "昵称"
    }
  }, [_vm._v(_vm._s(_vm.myInfo.nick || ''))]), _vm._v(" "), _c('cell', {
    attrs: {
      "title": "性别"
    }
  }, [_vm._v(_vm._s(_vm.myInfo.gender))]), _vm._v(" "), _c('cell', {
    attrs: {
      "title": "生日"
    }
  }, [_vm._v(_vm._s(_vm.myInfo.birth))]), _vm._v(" "), _c('cell', {
    attrs: {
      "title": "手机"
    }
  }, [_vm._v(_vm._s(_vm.myInfo.tel))]), _vm._v(" "), _c('cell', {
    attrs: {
      "title": "邮箱"
    }
  }, [_vm._v(_vm._s(_vm.myInfo.email))]), _vm._v(" "), _c('cell', {
    attrs: {
      "title": "签名"
    }
  }, [_vm._v(_vm._s(_vm.myInfo.sign))])], 1), _vm._v(" "), _c('div', [_c('x-button', {
    attrs: {
      "type": "warn",
      "action-type": "button"
    },
    nativeOn: {
      "click": function($event) {
        return _vm.logout($event)
      }
    }
  }, [_vm._v("注销")])], 1)], 1) : _vm._e()
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-663860c8", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=10.js.map