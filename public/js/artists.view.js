(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["artists.view"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Artists/View.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Artists/View.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CardDatabase_CardItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../CardDatabase/CardItem */ "./resources/js/CardDatabase/CardItem.vue");
/* harmony import */ var _Components_Crumbs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/Crumbs */ "./resources/js/Components/Crumbs.vue");
/* harmony import */ var _Components_LazyLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/LazyLoader */ "./resources/js/Components/LazyLoader.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    CardItem: _CardDatabase_CardItem__WEBPACK_IMPORTED_MODULE_1__["default"],
    Crumbs: _Components_Crumbs__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      artist: null
    };
  },
  computed: {
    crumbs: function crumbs() {
      return [{
        text: 'Home',
        link: '/'
      }, {
        text: this.artist.name
      }];
    }
  },
  "extends": Object(_Components_LazyLoader__WEBPACK_IMPORTED_MODULE_3__["default"])(function (to, callback) {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/artists/' + to.params.artist).then(function (response) {
      callback(function () {
        this.artist = response.data;
      });
    });
  })
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Artists/View.vue?vue&type=template&id=48574486&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Artists/View.vue?vue&type=template&id=48574486& ***!
  \****************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "flex flex-col h-full pb-8" }, [
    _c("div", { staticClass: "container sm:mx-auto hidden sm:block" }, [
      _c("div", { staticClass: "p-4 md:py-8" }, [
        _c("h1", { staticClass: "font-serif text-white text-4xl uppercase" }, [
          _vm._v("The artwork of " + _vm._s(_vm.artist.name))
        ])
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass:
          "flex-grow container mx-auto px-4 sm:flex sm:items-stretch mt-4 sm:mt-0"
      },
      [
        _c(
          "div",
          {
            staticClass:
              "mr-4 rounded-xl bg-nearly-black overflow-hidden w-full sm:w-300"
          },
          [
            _c("img", {
              staticClass: "w-full",
              attrs: { src: _vm.artist.image, alt: "" }
            }),
            _vm._v(" "),
            _c("p", { staticClass: "text-white p-4" }, [
              _vm._v(
                "\n                " +
                  _vm._s(_vm.artist.blurb) +
                  "\n            "
              )
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "sm:w-3/4 sm:flex-grow rounded-xl overflow-hidden mt-4 sm:-mt-2"
          },
          [
            _c(
              "ul",
              { staticClass: "flow-root -mx-2" },
              _vm._l(_vm.artist.cards, function(card) {
                return _c("card-item", {
                  key: card.identifier,
                  staticClass: "float-left p-2 w-1/2 md:w-1/4 xl:w-1/5 mb-4",
                  attrs: { card: card, path: "/cards" }
                })
              }),
              1
            )
          ]
        )
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Artists/View.vue":
/*!***************************************!*\
  !*** ./resources/js/Artists/View.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _View_vue_vue_type_template_id_48574486___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View.vue?vue&type=template&id=48574486& */ "./resources/js/Artists/View.vue?vue&type=template&id=48574486&");
/* harmony import */ var _View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./View.vue?vue&type=script&lang=js& */ "./resources/js/Artists/View.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _View_vue_vue_type_template_id_48574486___WEBPACK_IMPORTED_MODULE_0__["render"],
  _View_vue_vue_type_template_id_48574486___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Artists/View.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Artists/View.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./resources/js/Artists/View.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./View.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Artists/View.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Artists/View.vue?vue&type=template&id=48574486&":
/*!**********************************************************************!*\
  !*** ./resources/js/Artists/View.vue?vue&type=template&id=48574486& ***!
  \**********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_48574486___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./View.vue?vue&type=template&id=48574486& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Artists/View.vue?vue&type=template&id=48574486&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_48574486___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_48574486___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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