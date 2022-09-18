(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/Advertisement.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Components/Advertisement.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var postscribe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! postscribe */ "./node_modules/postscribe/dist/postscribe.js");
/* harmony import */ var postscribe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(postscribe__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    height: {
      required: true,
      type: Number
    },
    width: {
      required: true,
      type: Number
    },
    zone: {
      required: true,
      type: Number
    }
  },
  data: function data() {
    return {
      style: 'max-width: ' + this.width + 'px; max-height: ' + this.height + 'px'
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])('session', ['marketable'])),
  methods: {
    params: function params(data) {
      var query = [];

      for (var i in data) {
        query.push(i + '=' + data[i]);
      }

      return query.join('&');
    },
    url: function url(type) {
      var params = this.params({
        "do": type,
        zid: this.zone,
        oid: 26444,
        wd: -1,
        ht: -1,
        target: '_blank',
        noerror: 1
      });
      return 'https://g.adspeed.net/ad.php?' + params;
    }
  },
  mounted: function mounted() {
    var _this = this;

    if (!this.marketable) return;
    setTimeout(function () {
      var url = _this.url('js');

      var tag = '<' + 'script' + ' src="' + url + '" async>' + '<' + '/script>';
      postscribe__WEBPACK_IMPORTED_MODULE_0___default()(_this.$refs.ad, tag);
    }, 100);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Home.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Home.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Components_Advertisement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Components/Advertisement */ "./resources/js/Components/Advertisement.vue");
/* harmony import */ var _Components_Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Components/Icon */ "./resources/js/Components/Icon.vue");
/* harmony import */ var _Utilities_Strings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Utilities/Strings */ "./resources/js/Utilities/Strings.js");
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



/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [_Utilities_Strings__WEBPACK_IMPORTED_MODULE_2__["default"]],
  components: {
    Advertisement: _Components_Advertisement__WEBPACK_IMPORTED_MODULE_0__["default"],
    Icon: _Components_Icon__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      keywords: ''
    };
  },
  methods: {
    search: function search() {
      this.$router.push({
        name: 'cards.browse',
        query: {
          keywords: this.keywords
        }
      });
    }
  },
  mounted: function mounted() {
    this.$refs.search.focus();
  },
  metaInfo: function metaInfo() {
    return {
      meta: [{
        keywords: 'Flesh and Blood TCG,TCG,deck builder,Flesh & Blood TCG,Flesh and Blood,Flesh and blood cards,Cards'
      }, {
        vmid: 'og:title',
        property: 'og:title',
        content: 'Flesh and Blood TCG, deck builder, collection manager and more!'
      }, {
        vmid: 'og:type',
        property: 'og:type',
        content: 'website'
      }, {
        vmid: 'og:description',
        property: 'og:description',
        content: 'Browse your Flesh and Blood cards, manage your decks, test your latest builds and more - all within a gorgeous user experience. By players, for players.'
      }, {
        vmid: 'og:image',
        property: 'og:image',
        content: 'https://' + this.imageDomain() + '/assets/fab-facebook-logo.png?w=210&h=202'
      }, {
        vmid: 'og:width',
        property: 'og:width',
        content: 210
      }, {
        vmid: 'og:height',
        property: 'og:height',
        content: 202
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/Advertisement.vue?vue&type=template&id=2fc7116c&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Components/Advertisement.vue?vue&type=template&id=2fc7116c& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.marketable
    ? _c("div", { staticClass: "mx-auto", style: _vm.style }, [
        _c("div", { ref: "ad" }),
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Home.vue?vue&type=template&id=35a92206&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Home.vue?vue&type=template&id=35a92206& ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "container px-4 sm:px-0 sm:mx-auto text-white flex flex-col",
    },
    [
      _c("div", { staticClass: "my-12" }, [
        _c("div", { staticClass: "mx-auto" }, [
          _c(
            "video",
            {
              staticClass: "w-full sm:w-auto mx-auto",
              staticStyle: { "max-width": "470px" },
              attrs: {
                width: "470",
                height: "176",
                autoplay: "",
                muted: "",
                loop: "",
                poster: "/img/fabdb-logo-3d.png",
              },
              domProps: { muted: true },
            },
            [
              _c("source", {
                attrs: {
                  src: "/media/fabdb-logo-video.mp4",
                  type: "video/mp4",
                },
              }),
            ]
          ),
        ]),
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "sm:mx-8 px-8 pt-4 pb-8 bg-semi-black backdrop-blur-2 rounded-xl text-center text-gray-100 z-0",
        },
        [
          _c(
            "p",
            { staticClass: "my-4" },
            [
              _vm._v("\n            FaB DB is an unofficial "),
              _c(
                "a",
                {
                  staticClass: "link",
                  attrs: { href: "https://fabtcg.com", target: "_blank" },
                },
                [_vm._v("Flesh and Blood TCG")]
              ),
              _vm._v(
                " community project, with various features such as\n            "
              ),
              _c(
                "router-link",
                { staticClass: "link", attrs: { to: { name: "decks.mine" } } },
                [_vm._v(_vm._s(_vm.lang.terms.deck_builder))]
              ),
              _vm._v(",\n            "),
              _c(
                "router-link",
                { staticClass: "link", attrs: { to: { name: "collection" } } },
                [_vm._v(_vm._s(_vm.lang.terms.collection_manager))]
              ),
              _vm._v(" and more.\n        "),
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "my-8" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.keywords,
                  expression: "keywords",
                },
              ],
              ref: "search",
              staticClass: "input rounded-lg p-4",
              attrs: { type: "text", placeholder: "Search for a card..." },
              domProps: { value: _vm.keywords },
              on: {
                keyup: function ($event) {
                  if (
                    !$event.type.indexOf("key") &&
                    _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                  ) {
                    return null
                  }
                  return _vm.search()
                },
                input: function ($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.keywords = $event.target.value
                },
              },
            }),
          ]),
          _vm._v(" "),
          _c(
            "p",
            { staticClass: "my-4 text-center" },
            [
              _vm._v(
                "\n            FaB DB is powered by community support through financial donations and subscriptions for various\n            services."
              ),
              _c("br"),
              _vm._v("\n            To find out more, visit our "),
              _c(
                "router-link",
                { staticClass: "link", attrs: { to: { name: "support" } } },
                [_vm._v("Support page")]
              ),
              _vm._v(".\n        "),
            ],
            1
          ),
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "my-4 bg-nearly-black text-gray-300 sm:mx-auto p-2 px-4 rounded-lg flex items-center",
        },
        [
          _c(
            "icon",
            { staticClass: "mr-4 text-orange-500", attrs: { size: 6 } },
            [
              _c("path", {
                attrs: {
                  d: "M10 0s8 7.58 8 12a8 8 0 11-16 0c0-1.5.91-3.35 2.12-5.15A3 3 0 0010 6V0zM8 0a3 3 0 100 6V0z",
                },
              }),
            ]
          ),
          _vm._v(" "),
          _c("div", {
            domProps: { innerHTML: _vm._s(_vm.lang.home.rathe_times) },
          }),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "my-4" },
        [
          _c(
            "mq-layout",
            { attrs: { mq: "sm" } },
            [
              _c("advertisement", {
                attrs: { width: 340, height: 340, zone: 107317 },
              }),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "mq-layout",
            { attrs: { mq: "md+" } },
            [
              _c("advertisement", {
                staticClass: "mx-auto",
                attrs: { width: 728, height: 90, zone: 107209 },
              }),
            ],
            1
          ),
        ],
        1
      ),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Components/Advertisement.vue":
/*!***************************************************!*\
  !*** ./resources/js/Components/Advertisement.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Advertisement_vue_vue_type_template_id_2fc7116c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Advertisement.vue?vue&type=template&id=2fc7116c& */ "./resources/js/Components/Advertisement.vue?vue&type=template&id=2fc7116c&");
/* harmony import */ var _Advertisement_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Advertisement.vue?vue&type=script&lang=js& */ "./resources/js/Components/Advertisement.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Advertisement_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Advertisement_vue_vue_type_template_id_2fc7116c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Advertisement_vue_vue_type_template_id_2fc7116c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/Advertisement.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Components/Advertisement.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/Components/Advertisement.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Advertisement_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Advertisement.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/Advertisement.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Advertisement_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/Advertisement.vue?vue&type=template&id=2fc7116c&":
/*!**********************************************************************************!*\
  !*** ./resources/js/Components/Advertisement.vue?vue&type=template&id=2fc7116c& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Advertisement_vue_vue_type_template_id_2fc7116c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Advertisement.vue?vue&type=template&id=2fc7116c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/Advertisement.vue?vue&type=template&id=2fc7116c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Advertisement_vue_vue_type_template_id_2fc7116c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Advertisement_vue_vue_type_template_id_2fc7116c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Home.vue":
/*!*******************************!*\
  !*** ./resources/js/Home.vue ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_35a92206___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=35a92206& */ "./resources/js/Home.vue?vue&type=template&id=35a92206&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./resources/js/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_35a92206___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_35a92206___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Home.vue?vue&type=script&lang=js&":
/*!********************************************************!*\
  !*** ./resources/js/Home.vue?vue&type=script&lang=js& ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--4-0!../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Home.vue?vue&type=template&id=35a92206&":
/*!**************************************************************!*\
  !*** ./resources/js/Home.vue?vue&type=template&id=35a92206& ***!
  \**************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_35a92206___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=template&id=35a92206& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Home.vue?vue&type=template&id=35a92206&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_35a92206___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_35a92206___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);