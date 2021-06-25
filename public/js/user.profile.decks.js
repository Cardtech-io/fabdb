(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user.profile.decks"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Decks/LatestDecks.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Decks/LatestDecks.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DeckItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DeckItem */ "./resources/js/Decks/DeckItem.vue");
/* harmony import */ var _Components_LazyLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/LazyLoader */ "./resources/js/Components/LazyLoader.js");
/* harmony import */ var _Utilities_Models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Utilities/Models */ "./resources/js/Utilities/Models.js");
/* harmony import */ var _Deck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Deck */ "./resources/js/Decks/Deck.js");
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
    DeckItem: _DeckItem__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: ['user'],
  data: function data() {
    return {
      decks: {}
    };
  },
  metaInfo: function metaInfo() {
    var title = this.user.name + '\'s decks for Flesh & Blood TCG';
    return {
      title: title,
      meta: [{
        vmid: 'description',
        name: 'description',
        content: title
      }, {
        vmid: 'og:type',
        property: 'og:type',
        content: 'article'
      }, {
        vmid: 'og:title',
        property: 'og:title',
        content: title
      }, {
        vmid: 'og:description',
        property: 'og:description',
        content: title
      }]
    };
  },
  mounted: function mounted() {
    var _this = this;

    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/decks/latest?user=' + this.user.slug).then(function (response) {
      _this.decks = _Utilities_Models__WEBPACK_IMPORTED_MODULE_3__["default"].hydrateMany(response.data.data, _Deck__WEBPACK_IMPORTED_MODULE_4__["default"]);
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Decks/LatestDecks.vue?vue&type=template&id=74d5a230&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Decks/LatestDecks.vue?vue&type=template&id=74d5a230& ***!
  \*********************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _vm.decks
      ? _c(
          "div",
          _vm._l(_vm.decks, function(deck) {
            return _c("deck-item", {
              key: deck.slug,
              attrs: { deck: deck, theme: "dark" }
            })
          }),
          1
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Decks/LatestDecks.vue":
/*!********************************************!*\
  !*** ./resources/js/Decks/LatestDecks.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LatestDecks_vue_vue_type_template_id_74d5a230___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LatestDecks.vue?vue&type=template&id=74d5a230& */ "./resources/js/Decks/LatestDecks.vue?vue&type=template&id=74d5a230&");
/* harmony import */ var _LatestDecks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LatestDecks.vue?vue&type=script&lang=js& */ "./resources/js/Decks/LatestDecks.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LatestDecks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LatestDecks_vue_vue_type_template_id_74d5a230___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LatestDecks_vue_vue_type_template_id_74d5a230___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Decks/LatestDecks.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Decks/LatestDecks.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/Decks/LatestDecks.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LatestDecks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./LatestDecks.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Decks/LatestDecks.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LatestDecks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Decks/LatestDecks.vue?vue&type=template&id=74d5a230&":
/*!***************************************************************************!*\
  !*** ./resources/js/Decks/LatestDecks.vue?vue&type=template&id=74d5a230& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LatestDecks_vue_vue_type_template_id_74d5a230___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./LatestDecks.vue?vue&type=template&id=74d5a230& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Decks/LatestDecks.vue?vue&type=template&id=74d5a230&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LatestDecks_vue_vue_type_template_id_74d5a230___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LatestDecks_vue_vue_type_template_id_74d5a230___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);