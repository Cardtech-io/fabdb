(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cards.view~decks.featured"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/HeroAvatar.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Components/HeroAvatar.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Utilities_Imagery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Utilities/Imagery */ "./resources/js/Utilities/Imagery.js");
/* harmony import */ var _CardDatabase_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../CardDatabase/Card */ "./resources/js/CardDatabase/Card.js");
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [_Utilities_Imagery__WEBPACK_IMPORTED_MODULE_0__["default"]],
  props: {
    hero: {
      type: _CardDatabase_Card__WEBPACK_IMPORTED_MODULE_1__["default"],
      required: true
    },
    name: {
      type: String
    },
    width: {
      "default": 100
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Decks/Featured/LatestDecks.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Decks/Featured/LatestDecks.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Viewing_DeckLabel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Viewing/DeckLabel */ "./resources/js/Decks/Viewing/DeckLabel.vue");
/* harmony import */ var _Viewing_FormatLabel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Viewing/FormatLabel */ "./resources/js/Decks/Viewing/FormatLabel.vue");
/* harmony import */ var _Components_HeroAvatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Components/HeroAvatar */ "./resources/js/Components/HeroAvatar.vue");
/* harmony import */ var _Utilities_Models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Utilities/Models */ "./resources/js/Utilities/Models.js");
/* harmony import */ var _Deck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Deck */ "./resources/js/Decks/Deck.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: {
    color: {
      type: String
    },
    title: {
      required: true,
      type: String
    },
    query: {
      type: String
    }
  },
  components: {
    DeckLabel: _Viewing_DeckLabel__WEBPACK_IMPORTED_MODULE_1__["default"],
    FormatLabel: _Viewing_FormatLabel__WEBPACK_IMPORTED_MODULE_2__["default"],
    HeroAvatar: _Components_HeroAvatar__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      decks: []
    };
  },
  methods: {
    buttonColors: function buttonColors() {
      var color = this.color.split('-');
      var scale = Number(color.pop());
      var background = color.join('-') + '-' + (scale + 200);
      var hover = color.join('-') + '-' + (scale + 100);
      return background + ' hover:' + hover;
    },
    queryParams: function queryParams() {
      return Object.fromEntries(new URLSearchParams(this.query).entries());
    }
  },
  mounted: function mounted() {
    var _this = this;

    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/decks/latest?per_page=3&' + this.query).then(function (response) {
      _this.decks = _Utilities_Models__WEBPACK_IMPORTED_MODULE_4__["default"].hydrateMany(response.data, _Deck__WEBPACK_IMPORTED_MODULE_5__["default"]);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Decks/Viewing/DeckLabel.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Decks/Viewing/DeckLabel.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    label: {
      type: String,
      required: true
    }
  },
  methods: {
    labelColours: function labelColours() {
      switch (this.label) {
        case 'janky':
          return 'bg-yellow-500 text-black';

        case 'casual':
          return 'bg-blue-300 text-black';

        case 'competitive':
          return 'bg-gray-800 text-white';

        case 'meme':
          return 'bg-pink-600 text-white';
      }
    },
    name: function name() {
      return this.$settings.game.decks.labels[this.label];
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Decks/Viewing/FormatLabel.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Decks/Viewing/FormatLabel.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    format: {
      type: String,
      required: true
    }
  },
  methods: {
    formatColours: function formatColours() {
      switch (this.format) {
        case 'blitz':
          return 'bg-orange-500 text-white';

        case 'constructed':
          return 'bg-blue-400 text-white';

        case 'open':
          return 'bg-gray-500 text-white';
      }
    },
    name: function name() {
      return this.$settings.game.decks.formats[this.format];
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/HeroAvatar.vue?vue&type=template&id=3c72f4fe&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Components/HeroAvatar.vue?vue&type=template&id=3c72f4fe& ***!
  \*************************************************************************************************************************************************************************************************************/
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
  return _vm.hero
    ? _c("img", {
        staticClass: "rounded-full",
        attrs: {
          src: _vm.heroProfile(_vm.hero, _vm.width),
          alt: _vm.name,
          width: _vm.width,
          height: _vm.width
        }
      })
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Decks/Featured/LatestDecks.vue?vue&type=template&id=f6612a36&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Decks/Featured/LatestDecks.vue?vue&type=template&id=f6612a36& ***!
  \******************************************************************************************************************************************************************************************************************/
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
  return _vm.decks
    ? _c("section", { staticClass: "rounded-lg overflow-hidden" }, [
        _c(
          "header",
          {
            staticClass: "flex items-center py-2 px-4  text-white",
            class: _vm.color
          },
          [
            _c("h2", { staticClass: "font-serif text-xl uppercase" }, [
              _vm._v(_vm._s(_vm.title))
            ]),
            _vm._v(" "),
            _c(
              "router-link",
              {
                staticClass:
                  "block flex items-center ml-auto rounded py-1 px-2 text-base",
                class: _vm.buttonColors(),
                attrs: {
                  to: { name: "decks.browse", query: _vm.queryParams() }
                }
              },
              [
                _vm._v("\n            See more\n            "),
                _c(
                  "icon",
                  { staticClass: "inline-block", attrs: { size: 5 } },
                  [
                    _c("path", {
                      attrs: {
                        "fill-rule": "evenodd",
                        d:
                          "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
                        "clip-rule": "evenodd"
                      }
                    })
                  ]
                )
              ],
              1
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "bg-gray-300 rounded-b-lg" },
          _vm._l(_vm.decks, function(deck) {
            return _c(
              "router-link",
              {
                key: deck.slug,
                staticClass: "flex items-center hover:bg-gray-200 px-4 py-2",
                attrs: {
                  to: { name: "decks.view", params: { deck: deck.slug } }
                }
              },
              [
                _c("hero-avatar", {
                  staticClass: "hidden sm:block",
                  attrs: { hero: deck.hero, width: "90" }
                }),
                _vm._v(" "),
                _c("hero-avatar", {
                  staticClass: "sm:hidden",
                  attrs: { hero: deck.hero, width: "80" }
                }),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "ml-2" },
                  [
                    _c("h3", { staticClass: "font-serif text-lg uppercase" }, [
                      _vm._v(_vm._s(deck.name))
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "text-base" }, [
                      _vm._v("by " + _vm._s(deck.authorName))
                    ]),
                    _vm._v(" "),
                    _c("deck-label", {
                      staticClass: "mr-1 text-xs px-2 sm:py-1 rounded-full",
                      attrs: { label: deck.label }
                    }),
                    _vm._v(" "),
                    _c("format-label", {
                      staticClass: "mr-2 text-xs px-2 sm:py-1 rounded-full",
                      attrs: { format: deck.format }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "flex-none font-serif text-center ml-auto" },
                  [
                    _c("div", { staticClass: "text-4xl" }, [
                      _vm._v(_vm._s(deck.totalCards))
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "text-gray-400 text-base ml-1" }, [
                      _vm._v("cards")
                    ])
                  ]
                )
              ],
              1
            )
          }),
          1
        )
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Decks/Viewing/DeckLabel.vue?vue&type=template&id=e77cc5f4&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Decks/Viewing/DeckLabel.vue?vue&type=template&id=e77cc5f4& ***!
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
  return _vm.label
    ? _c(
        "span",
        { staticClass: "font-serif uppercase", class: _vm.labelColours() },
        [_vm._v(_vm._s(_vm.name()))]
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Decks/Viewing/FormatLabel.vue?vue&type=template&id=58befcb8&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Decks/Viewing/FormatLabel.vue?vue&type=template&id=58befcb8& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
  return _vm.format
    ? _c(
        "span",
        { staticClass: "font-serif uppercase", class: _vm.formatColours() },
        [_vm._v(_vm._s(_vm.name()))]
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Components/HeroAvatar.vue":
/*!************************************************!*\
  !*** ./resources/js/Components/HeroAvatar.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HeroAvatar_vue_vue_type_template_id_3c72f4fe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HeroAvatar.vue?vue&type=template&id=3c72f4fe& */ "./resources/js/Components/HeroAvatar.vue?vue&type=template&id=3c72f4fe&");
/* harmony import */ var _HeroAvatar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeroAvatar.vue?vue&type=script&lang=js& */ "./resources/js/Components/HeroAvatar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _HeroAvatar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HeroAvatar_vue_vue_type_template_id_3c72f4fe___WEBPACK_IMPORTED_MODULE_0__["render"],
  _HeroAvatar_vue_vue_type_template_id_3c72f4fe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/HeroAvatar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Components/HeroAvatar.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/Components/HeroAvatar.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroAvatar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./HeroAvatar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/HeroAvatar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroAvatar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/HeroAvatar.vue?vue&type=template&id=3c72f4fe&":
/*!*******************************************************************************!*\
  !*** ./resources/js/Components/HeroAvatar.vue?vue&type=template&id=3c72f4fe& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroAvatar_vue_vue_type_template_id_3c72f4fe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./HeroAvatar.vue?vue&type=template&id=3c72f4fe& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/HeroAvatar.vue?vue&type=template&id=3c72f4fe&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroAvatar_vue_vue_type_template_id_3c72f4fe___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroAvatar_vue_vue_type_template_id_3c72f4fe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Decks/Featured/LatestDecks.vue":
/*!*****************************************************!*\
  !*** ./resources/js/Decks/Featured/LatestDecks.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LatestDecks_vue_vue_type_template_id_f6612a36___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LatestDecks.vue?vue&type=template&id=f6612a36& */ "./resources/js/Decks/Featured/LatestDecks.vue?vue&type=template&id=f6612a36&");
/* harmony import */ var _LatestDecks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LatestDecks.vue?vue&type=script&lang=js& */ "./resources/js/Decks/Featured/LatestDecks.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LatestDecks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LatestDecks_vue_vue_type_template_id_f6612a36___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LatestDecks_vue_vue_type_template_id_f6612a36___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Decks/Featured/LatestDecks.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Decks/Featured/LatestDecks.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/Decks/Featured/LatestDecks.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LatestDecks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./LatestDecks.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Decks/Featured/LatestDecks.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LatestDecks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Decks/Featured/LatestDecks.vue?vue&type=template&id=f6612a36&":
/*!************************************************************************************!*\
  !*** ./resources/js/Decks/Featured/LatestDecks.vue?vue&type=template&id=f6612a36& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LatestDecks_vue_vue_type_template_id_f6612a36___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./LatestDecks.vue?vue&type=template&id=f6612a36& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Decks/Featured/LatestDecks.vue?vue&type=template&id=f6612a36&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LatestDecks_vue_vue_type_template_id_f6612a36___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LatestDecks_vue_vue_type_template_id_f6612a36___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Decks/Viewing/DeckLabel.vue":
/*!**************************************************!*\
  !*** ./resources/js/Decks/Viewing/DeckLabel.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DeckLabel_vue_vue_type_template_id_e77cc5f4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DeckLabel.vue?vue&type=template&id=e77cc5f4& */ "./resources/js/Decks/Viewing/DeckLabel.vue?vue&type=template&id=e77cc5f4&");
/* harmony import */ var _DeckLabel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DeckLabel.vue?vue&type=script&lang=js& */ "./resources/js/Decks/Viewing/DeckLabel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DeckLabel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DeckLabel_vue_vue_type_template_id_e77cc5f4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DeckLabel_vue_vue_type_template_id_e77cc5f4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Decks/Viewing/DeckLabel.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Decks/Viewing/DeckLabel.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/Decks/Viewing/DeckLabel.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DeckLabel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./DeckLabel.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Decks/Viewing/DeckLabel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DeckLabel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Decks/Viewing/DeckLabel.vue?vue&type=template&id=e77cc5f4&":
/*!*********************************************************************************!*\
  !*** ./resources/js/Decks/Viewing/DeckLabel.vue?vue&type=template&id=e77cc5f4& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DeckLabel_vue_vue_type_template_id_e77cc5f4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./DeckLabel.vue?vue&type=template&id=e77cc5f4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Decks/Viewing/DeckLabel.vue?vue&type=template&id=e77cc5f4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DeckLabel_vue_vue_type_template_id_e77cc5f4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DeckLabel_vue_vue_type_template_id_e77cc5f4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Decks/Viewing/FormatLabel.vue":
/*!****************************************************!*\
  !*** ./resources/js/Decks/Viewing/FormatLabel.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormatLabel_vue_vue_type_template_id_58befcb8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormatLabel.vue?vue&type=template&id=58befcb8& */ "./resources/js/Decks/Viewing/FormatLabel.vue?vue&type=template&id=58befcb8&");
/* harmony import */ var _FormatLabel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormatLabel.vue?vue&type=script&lang=js& */ "./resources/js/Decks/Viewing/FormatLabel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormatLabel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormatLabel_vue_vue_type_template_id_58befcb8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormatLabel_vue_vue_type_template_id_58befcb8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Decks/Viewing/FormatLabel.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Decks/Viewing/FormatLabel.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/Decks/Viewing/FormatLabel.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormatLabel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./FormatLabel.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Decks/Viewing/FormatLabel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormatLabel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Decks/Viewing/FormatLabel.vue?vue&type=template&id=58befcb8&":
/*!***********************************************************************************!*\
  !*** ./resources/js/Decks/Viewing/FormatLabel.vue?vue&type=template&id=58befcb8& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormatLabel_vue_vue_type_template_id_58befcb8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./FormatLabel.vue?vue&type=template&id=58befcb8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Decks/Viewing/FormatLabel.vue?vue&type=template&id=58befcb8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormatLabel_vue_vue_type_template_id_58befcb8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormatLabel_vue_vue_type_template_id_58befcb8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);