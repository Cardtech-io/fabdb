(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cards.fabled"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/CardDatabase/Fabled.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/CardDatabase/Fabled.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Cardable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Cardable.js */ "./resources/js/CardDatabase/Cardable.js");
/* harmony import */ var _CardImage_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CardImage.vue */ "./resources/js/CardDatabase/CardImage.vue");
/* harmony import */ var _Components_HeaderTitle_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/HeaderTitle.vue */ "./resources/js/Components/HeaderTitle.vue");
/* harmony import */ var _Components_LazyLoader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Components/LazyLoader */ "./resources/js/Components/LazyLoader.js");
/* harmony import */ var _Pricing_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Pricing.vue */ "./resources/js/CardDatabase/Pricing.vue");
/* harmony import */ var _Utilities_Strings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Utilities/Strings */ "./resources/js/Utilities/Strings.js");
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
  mixins: [_Cardable_js__WEBPACK_IMPORTED_MODULE_1__["default"], _Utilities_Strings__WEBPACK_IMPORTED_MODULE_6__["default"]],
  components: {
    CardImage: _CardImage_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    HeaderTitle: _Components_HeaderTitle_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    Pricing: _Pricing_vue__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  data: function data() {
    return {
      cards: []
    };
  },
  methods: {},
  metaInfo: function metaInfo() {
    return {
      title: 'The fabled cards of Flesh & Blood.',
      meta: [{
        vmid: 'description',
        name: 'description',
        content: 'Each set of Flesh & Blood comes with a rare fabled card. And each one has a story to tell.'
      }, {
        vmid: 'og:type',
        property: 'og:type',
        content: 'article'
      }, {
        vmid: 'og:title',
        property: 'og:title',
        content: 'The fabled cards of Flesh & Blood.'
      }, {
        vmid: 'og:description',
        property: 'og:description',
        content: 'Each set of Flesh & Blood comes with a rare fabled card. And each one has a story to tell.'
      }]
    };
  },
  "extends": Object(_Components_LazyLoader__WEBPACK_IMPORTED_MODULE_4__["default"])(function (to, callback) {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/cards/fabled').then(function (response) {
      callback(function () {
        this.cards = response.data;
      });
    });
  })
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/CardDatabase/Fabled.vue?vue&type=template&id=4dfe230c&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/CardDatabase/Fabled.vue?vue&type=template&id=4dfe230c& ***!
  \***********************************************************************************************************************************************************************************************************/
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
    { staticClass: "container px-4 sm:mx-auto sm:px-0 text-white" },
    [
      _c("header-title", {
        staticClass: "text-center",
        attrs: { title: "The fabled cards of Flesh & Blood" },
      }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "sm:mx-4 mt-4 sm:mt-0" },
        _vm._l(_vm.cards, function (card) {
          return _c(
            "div",
            {
              staticClass:
                "w-full mb-8 p-4 sm:pr-0 bg-semi-black rounded-xl sm:flex",
            },
            [
              _c(
                "div",
                { staticClass: "sm:w-1/4" },
                [
                  _c(
                    "router-link",
                    {
                      attrs: {
                        to: {
                          name: "cards.view",
                          params: { identifier: card.identifier },
                        },
                      },
                    },
                    [_c("card-image", { attrs: { card: card } })],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "mt-4 sm:mt-0 sm:w-3/4" }, [
                _c(
                  "h1",
                  {
                    staticClass:
                      "font-serif uppercase text-4xl sm:text-6xl sm:pl-8",
                  },
                  [_vm._v(_vm._s(card.name))]
                ),
                _vm._v(" "),
                _c(
                  "p",
                  {
                    staticClass:
                      "bg-semi-black font-serif text-gray-300 -mx-4 sm:mx-0 italic p-4 sm:px-8 mb-4",
                  },
                  [_vm._v("'" + _vm._s(card.flavour))]
                ),
                _vm._v(" "),
                _c("p", {
                  staticClass: "sm:px-8",
                  domProps: { innerHTML: _vm._s(_vm.prettyText(card.text)) },
                }),
                _vm._v(" "),
                _c("p", {
                  staticClass:
                    "sm:mt-8 sm:mb-4 sm:px-8 pl-4 sm:pl-12 text-gray-400 text-base",
                  domProps: {
                    innerHTML: _vm._s(_vm.prettyText(card.comments)),
                  },
                }),
              ]),
            ]
          )
        }),
        0
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/CardDatabase/Fabled.vue":
/*!**********************************************!*\
  !*** ./resources/js/CardDatabase/Fabled.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Fabled_vue_vue_type_template_id_4dfe230c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Fabled.vue?vue&type=template&id=4dfe230c& */ "./resources/js/CardDatabase/Fabled.vue?vue&type=template&id=4dfe230c&");
/* harmony import */ var _Fabled_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Fabled.vue?vue&type=script&lang=js& */ "./resources/js/CardDatabase/Fabled.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Fabled_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Fabled_vue_vue_type_template_id_4dfe230c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Fabled_vue_vue_type_template_id_4dfe230c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/CardDatabase/Fabled.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/CardDatabase/Fabled.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/CardDatabase/Fabled.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Fabled_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Fabled.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/CardDatabase/Fabled.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Fabled_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/CardDatabase/Fabled.vue?vue&type=template&id=4dfe230c&":
/*!*****************************************************************************!*\
  !*** ./resources/js/CardDatabase/Fabled.vue?vue&type=template&id=4dfe230c& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Fabled_vue_vue_type_template_id_4dfe230c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Fabled.vue?vue&type=template&id=4dfe230c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/CardDatabase/Fabled.vue?vue&type=template&id=4dfe230c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Fabled_vue_vue_type_template_id_4dfe230c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Fabled_vue_vue_type_template_id_4dfe230c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ })

}]);