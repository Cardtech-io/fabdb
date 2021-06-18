(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user.profile.view"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Identity/Avatar.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Identity/Avatar.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Utilities_Imagery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Utilities/Imagery */ "./resources/js/Utilities/Imagery.js");
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [_Utilities_Imagery__WEBPACK_IMPORTED_MODULE_0__["default"]],
  props: {
    user: {
      type: Object,
      required: true
    },
    width: {
      type: Number,
      "default": 100
    }
  },
  computed: {
    avatar: function avatar() {
      return this.user.avatar || 'bauble';
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Identity/ProfileNavItem.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Identity/ProfileNavItem.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    to: {
      required: true,
      type: Object
    }
  },
  methods: {
    classes: function classes() {
      return this.$route.name === this.to.name ? 'bg-gray-800' : 'sm:bg-semi-black hover:bg-gray-800';
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Identity/ViewProfile.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Identity/ViewProfile.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Components_Breadcrumbs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Components/Breadcrumbs */ "./resources/js/Components/Breadcrumbs.vue");
/* harmony import */ var _Components_HeaderTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/HeaderTitle */ "./resources/js/Components/HeaderTitle.vue");
/* harmony import */ var _Components_LazyLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/LazyLoader */ "./resources/js/Components/LazyLoader.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Utilities_Models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Utilities/Models */ "./resources/js/Utilities/Models.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./User */ "./resources/js/Identity/User.js");
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Avatar */ "./resources/js/Identity/Avatar.vue");
/* harmony import */ var _Utilities_Imagery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Utilities/Imagery */ "./resources/js/Utilities/Imagery.js");
/* harmony import */ var _ProfileNavItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ProfileNavItem */ "./resources/js/Identity/ProfileNavItem.vue");
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
  components: {
    Avatar: _Avatar__WEBPACK_IMPORTED_MODULE_6__["default"],
    Breadcrumbs: _Components_Breadcrumbs__WEBPACK_IMPORTED_MODULE_0__["default"],
    HeaderTitle: _Components_HeaderTitle__WEBPACK_IMPORTED_MODULE_1__["default"],
    ProfileNavItem: _ProfileNavItem__WEBPACK_IMPORTED_MODULE_8__["default"]
  },
  mixins: [_Utilities_Imagery__WEBPACK_IMPORTED_MODULE_7__["default"]],
  data: function data() {
    return {
      user: null,
      title: '',
      tab: 'decks'
    };
  },
  computed: {
    crumbs: function crumbs() {
      return [{
        text: 'Home',
        link: '/'
      }, {
        text: 'View profile: ' + this.user.name
      }];
    }
  },
  "extends": Object(_Components_LazyLoader__WEBPACK_IMPORTED_MODULE_2__["default"])(function (to, callback) {
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('/users/' + to.params.user).then(function (response) {
      callback(function () {
        this.user = _Utilities_Models__WEBPACK_IMPORTED_MODULE_4__["default"].hydrate(response.data, _User__WEBPACK_IMPORTED_MODULE_5__["default"]);
      });
    });
  })
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Identity/Avatar.vue?vue&type=template&id=20c96a88&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Identity/Avatar.vue?vue&type=template&id=20c96a88& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("img", {
    staticClass: "rounded-full",
    style: { width: _vm.width + "px" },
    attrs: {
      src: _vm.imageUrl("/heroes/" + _vm.avatar + ".jpg", _vm.width),
      alt: _vm.user.name
    }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Identity/ProfileNavItem.vue?vue&type=template&id=64e40150&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Identity/ProfileNavItem.vue?vue&type=template&id=64e40150& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "router-link",
    {
      staticClass: "block p-2 px-3 sm:rounded sm:mr-2",
      class: _vm.classes(),
      attrs: { to: _vm.to }
    },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Identity/ViewProfile.vue?vue&type=template&id=990ba11e&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Identity/ViewProfile.vue?vue&type=template&id=990ba11e& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "container p-4 py-8 sm:mx-auto text-white" },
    [
      _c("div", { staticClass: "flex navigation pb-8 mb-8" }, [
        _c(
          "div",
          { staticClass: "flex-0" },
          [
            _c("avatar", {
              staticClass: "mr-4",
              attrs: { user: _vm.user, width: 100 }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c("div", [
          _c("h1", { staticClass: "font-serif text-4xl uppercase mb-2" }, [
            _vm._v(_vm._s(_vm.user.name))
          ]),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "text-base flex bg-semi-black rounded-lg overflow-hidden sm:bg-transparent"
            },
            [
              _c(
                "profile-nav-item",
                {
                  attrs: {
                    to: {
                      name: "user.profile.decks",
                      params: { user: _vm.$route.params.user }
                    }
                  }
                },
                [_vm._v("Decks")]
              ),
              _vm._v(" "),
              _c(
                "profile-nav-item",
                {
                  attrs: {
                    to: {
                      name: "user.profile.wants",
                      params: { user: _vm.$route.params.user }
                    }
                  }
                },
                [_vm._v("Want list")]
              ),
              _vm._v(" "),
              _c(
                "profile-nav-item",
                {
                  attrs: {
                    to: {
                      name: "user.profile.trades",
                      params: { user: _vm.$route.params.user }
                    }
                  }
                },
                [_vm._v("Trade list")]
              )
            ],
            1
          )
        ])
      ]),
      _vm._v(" "),
      _c("router-view", { attrs: { user: _vm.user } })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Components/LazyLoader.js":
/*!***********************************************!*\
  !*** ./resources/js/Components/LazyLoader.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (loadData) {
  var loaderCallback = function loaderCallback() {};

  var loadRoute = function loadRoute(to, from, next) {
    loadData(to, function (callback) {
      loaderCallback = callback;
      next();
    });
  };

  return {
    beforeRouteEnter: loadRoute,
    beforeRouteUpdate: loadRoute,
    created: function created() {
      loaderCallback.apply(this);
    },
    watch: {
      '$route': function $route() {
        loaderCallback.apply(this);
      }
    }
  };
});

/***/ }),

/***/ "./resources/js/Identity/Avatar.vue":
/*!******************************************!*\
  !*** ./resources/js/Identity/Avatar.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Avatar_vue_vue_type_template_id_20c96a88___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Avatar.vue?vue&type=template&id=20c96a88& */ "./resources/js/Identity/Avatar.vue?vue&type=template&id=20c96a88&");
/* harmony import */ var _Avatar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Avatar.vue?vue&type=script&lang=js& */ "./resources/js/Identity/Avatar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Avatar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Avatar_vue_vue_type_template_id_20c96a88___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Avatar_vue_vue_type_template_id_20c96a88___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Identity/Avatar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Identity/Avatar.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/Identity/Avatar.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Avatar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Avatar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Identity/Avatar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Avatar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Identity/Avatar.vue?vue&type=template&id=20c96a88&":
/*!*************************************************************************!*\
  !*** ./resources/js/Identity/Avatar.vue?vue&type=template&id=20c96a88& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Avatar_vue_vue_type_template_id_20c96a88___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Avatar.vue?vue&type=template&id=20c96a88& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Identity/Avatar.vue?vue&type=template&id=20c96a88&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Avatar_vue_vue_type_template_id_20c96a88___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Avatar_vue_vue_type_template_id_20c96a88___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Identity/ProfileNavItem.vue":
/*!**************************************************!*\
  !*** ./resources/js/Identity/ProfileNavItem.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProfileNavItem_vue_vue_type_template_id_64e40150___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProfileNavItem.vue?vue&type=template&id=64e40150& */ "./resources/js/Identity/ProfileNavItem.vue?vue&type=template&id=64e40150&");
/* harmony import */ var _ProfileNavItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProfileNavItem.vue?vue&type=script&lang=js& */ "./resources/js/Identity/ProfileNavItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProfileNavItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProfileNavItem_vue_vue_type_template_id_64e40150___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProfileNavItem_vue_vue_type_template_id_64e40150___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Identity/ProfileNavItem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Identity/ProfileNavItem.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/Identity/ProfileNavItem.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileNavItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ProfileNavItem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Identity/ProfileNavItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileNavItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Identity/ProfileNavItem.vue?vue&type=template&id=64e40150&":
/*!*********************************************************************************!*\
  !*** ./resources/js/Identity/ProfileNavItem.vue?vue&type=template&id=64e40150& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileNavItem_vue_vue_type_template_id_64e40150___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ProfileNavItem.vue?vue&type=template&id=64e40150& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Identity/ProfileNavItem.vue?vue&type=template&id=64e40150&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileNavItem_vue_vue_type_template_id_64e40150___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileNavItem_vue_vue_type_template_id_64e40150___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Identity/User.js":
/*!***************************************!*\
  !*** ./resources/js/Identity/User.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var User =
/*#__PURE__*/
function () {
  function User(fields) {
    _classCallCheck(this, User);

    this.fields = fields;
  }

  _createClass(User, [{
    key: "avatar",
    get: function get() {
      return this.fields.avatar;
    }
  }, {
    key: "name",
    get: function get() {
      return this.fields.name || 'Anonymous';
    }
  }, {
    key: "slug",
    get: function get() {
      return this.fields.slug;
    }
  }]);

  return User;
}();

/* harmony default export */ __webpack_exports__["default"] = (User);

/***/ }),

/***/ "./resources/js/Identity/ViewProfile.vue":
/*!***********************************************!*\
  !*** ./resources/js/Identity/ViewProfile.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ViewProfile_vue_vue_type_template_id_990ba11e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ViewProfile.vue?vue&type=template&id=990ba11e& */ "./resources/js/Identity/ViewProfile.vue?vue&type=template&id=990ba11e&");
/* harmony import */ var _ViewProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ViewProfile.vue?vue&type=script&lang=js& */ "./resources/js/Identity/ViewProfile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ViewProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ViewProfile_vue_vue_type_template_id_990ba11e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ViewProfile_vue_vue_type_template_id_990ba11e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Identity/ViewProfile.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Identity/ViewProfile.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/Identity/ViewProfile.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ViewProfile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Identity/ViewProfile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Identity/ViewProfile.vue?vue&type=template&id=990ba11e&":
/*!******************************************************************************!*\
  !*** ./resources/js/Identity/ViewProfile.vue?vue&type=template&id=990ba11e& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewProfile_vue_vue_type_template_id_990ba11e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ViewProfile.vue?vue&type=template&id=990ba11e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Identity/ViewProfile.vue?vue&type=template&id=990ba11e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewProfile_vue_vue_type_template_id_990ba11e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewProfile_vue_vue_type_template_id_990ba11e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Utilities/Models.js":
/*!******************************************!*\
  !*** ./resources/js/Utilities/Models.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  hydrateMany: function hydrateMany(records, klass) {
    var _this = this;

    return records.map(function (record) {
      return _this.hydrate(record, klass);
    });
  },
  hydrate: function hydrate(record, klass) {
    return new klass(record);
  },
  hydratePaginated: function hydratePaginated(data, klass) {
    data.data = this.hydrateMany(data.data, klass);
    return data;
  }
});

/***/ })

}]);