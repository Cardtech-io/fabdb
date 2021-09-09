(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["premium"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Premium.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Premium.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Components_Crumbs_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Components/Crumbs.vue */ "./resources/js/Components/Crumbs.vue");
/* harmony import */ var _Components_HeaderTitle_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Components/HeaderTitle.vue */ "./resources/js/Components/HeaderTitle.vue");
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
  components: {
    Crumbs: _Components_Crumbs_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    HeaderTitle: _Components_HeaderTitle_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      crumbs: [{
        text: 'Home',
        link: '/'
      }, {
        text: 'Premium features'
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Premium.vue?vue&type=template&id=092388a9&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Premium.vue?vue&type=template&id=092388a9& ***!
  \***********************************************************************************************************************************************************************************************/
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
    [
      _c("header-title", { attrs: { title: "Premium features" } }),
      _vm._v(" "),
      _c("div", { staticClass: "bg-red-900 text-white font-serif uppercase" }, [
        _c("div", { staticClass: "container sm:mx-auto p-4 flex" }, [
          _c(
            "div",
            { staticClass: "flex-1" },
            [_c("crumbs", { attrs: { crumbs: _vm.crumbs } })],
            1
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "bg-gray-200" }, [
        _c("div", { staticClass: "container sm:mx-auto py-8 px-4" }, [
          _c(
            "h2",
            { staticClass: "text-4xl font-serif mb-4 uppercase sm:hidden" },
            [_vm._v("Premium features")]
          ),
          _vm._v(" "),
          _c("p", { staticClass: "my-4" }, [
            _vm._v(
              "\n                Some features on FaB DB are available only to our patrons, supporters who have helped FaB DB\n                grow and be built upon day after day. These features are a reward to our loyal supporters, whom\n                without their support, FaB DB couldn't be what it is today.\n            "
            )
          ]),
          _vm._v(" "),
          _c(
            "p",
            { staticClass: "my-4" },
            [
              _vm._v(
                "\n                If you'd like access to the feature requested, you can "
              ),
              _c(
                "router-link",
                { staticClass: "link", attrs: { to: "/support" } },
                [_vm._v("become a supporter")]
              ),
              _vm._v(" from just $3/month.\n            ")
            ],
            1
          )
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Premium.vue":
/*!**********************************!*\
  !*** ./resources/js/Premium.vue ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Premium_vue_vue_type_template_id_092388a9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Premium.vue?vue&type=template&id=092388a9& */ "./resources/js/Premium.vue?vue&type=template&id=092388a9&");
/* harmony import */ var _Premium_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Premium.vue?vue&type=script&lang=js& */ "./resources/js/Premium.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Premium_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Premium_vue_vue_type_template_id_092388a9___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Premium_vue_vue_type_template_id_092388a9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Premium.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Premium.vue?vue&type=script&lang=js&":
/*!***********************************************************!*\
  !*** ./resources/js/Premium.vue?vue&type=script&lang=js& ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Premium_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--4-0!../../node_modules/vue-loader/lib??vue-loader-options!./Premium.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Premium.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Premium_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Premium.vue?vue&type=template&id=092388a9&":
/*!*****************************************************************!*\
  !*** ./resources/js/Premium.vue?vue&type=template&id=092388a9& ***!
  \*****************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Premium_vue_vue_type_template_id_092388a9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./Premium.vue?vue&type=template&id=092388a9& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Premium.vue?vue&type=template&id=092388a9&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Premium_vue_vue_type_template_id_092388a9___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Premium_vue_vue_type_template_id_092388a9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);