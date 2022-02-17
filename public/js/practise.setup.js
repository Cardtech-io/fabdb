(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["practise.setup"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Practise/Setup.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Practise/Setup.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Utilities_Imagery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Utilities/Imagery */ "./resources/js/Utilities/Imagery.js");
/* harmony import */ var _Utilities_Strings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Utilities/Strings */ "./resources/js/Utilities/Strings.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
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
  mixins: [_Utilities_Imagery__WEBPACK_IMPORTED_MODULE_0__["default"], _Utilities_Strings__WEBPACK_IMPORTED_MODULE_1__["default"]],
  data: function data() {
    return {
      crumbs: [{
        text: 'Home',
        link: '/'
      }, {
        text: 'Limited practise',
        link: '/practise'
      }, {
        text: this.$route.query.format === 'sealed' ? 'Sealed deck run' : 'Team sealed run'
      }]
    };
  },
  methods: {
    sets: function sets() {
      return _.sortBy(_.filter(this.$settings.game.sets, function (set) {
        return set.draftable;
      }), function (set) {
        return set.released;
      }).reverse();
    },
    setup: function setup(set) {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('practise', {
        format: this.$route.query.format,
        set: set
      }).then(function (response) {
        _this.$router.push({
          name: 'practise.view',
          params: {
            practise: response.data.slug
          }
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Practise/Setup.vue?vue&type=template&id=2a95d417&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Practise/Setup.vue?vue&type=template&id=2a95d417& ***!
  \******************************************************************************************************************************************************************************************************/
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
      _c("header-title", { attrs: { title: "Limited practise" } }),
      _vm._v(" "),
      _c("breadcrumbs", { attrs: { crumbs: _vm.crumbs } }),
      _vm._v(" "),
      _c("div", { staticClass: "bg-gray-200" }, [
        _c(
          "div",
          { staticClass: "w-auto flex justify-center items-start py-8" },
          _vm._l(_vm.sets(), function(set) {
            return _c(
              "div",
              { staticClass: "booster mx-4 hover:bg-white p-4 rounded-lg" },
              [
                _c(
                  "button",
                  {
                    staticClass: "block link-alternate",
                    on: {
                      click: function($event) {
                        return _vm.setup(set.id)
                      }
                    }
                  },
                  [
                    _c("img", {
                      attrs: {
                        src: _vm.imageUrl(
                          "/boosters/" + _vm.kebabCase(set.name) + ".png",
                          180
                        ),
                        alt: set.name,
                        title: set.name
                      }
                    })
                  ]
                )
              ]
            )
          }),
          0
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Practise/Setup.vue":
/*!*****************************************!*\
  !*** ./resources/js/Practise/Setup.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Setup_vue_vue_type_template_id_2a95d417___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Setup.vue?vue&type=template&id=2a95d417& */ "./resources/js/Practise/Setup.vue?vue&type=template&id=2a95d417&");
/* harmony import */ var _Setup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Setup.vue?vue&type=script&lang=js& */ "./resources/js/Practise/Setup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Setup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Setup_vue_vue_type_template_id_2a95d417___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Setup_vue_vue_type_template_id_2a95d417___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Practise/Setup.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Practise/Setup.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/Practise/Setup.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Setup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Setup.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Practise/Setup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Setup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Practise/Setup.vue?vue&type=template&id=2a95d417&":
/*!************************************************************************!*\
  !*** ./resources/js/Practise/Setup.vue?vue&type=template&id=2a95d417& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Setup_vue_vue_type_template_id_2a95d417___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Setup.vue?vue&type=template&id=2a95d417& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Practise/Setup.vue?vue&type=template&id=2a95d417&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Setup_vue_vue_type_template_id_2a95d417___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Setup_vue_vue_type_template_id_2a95d417___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);