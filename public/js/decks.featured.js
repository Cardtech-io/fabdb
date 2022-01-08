(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["decks.featured"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Decks/Featured/DeckOfTheWeek.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Decks/Featured/DeckOfTheWeek.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Utilities_Models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Utilities/Models */ "./resources/js/Utilities/Models.js");
/* harmony import */ var _Deck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Deck */ "./resources/js/Decks/Deck.js");
/* harmony import */ var _Viewing_DeckLabel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Viewing/DeckLabel */ "./resources/js/Decks/Viewing/DeckLabel.vue");
/* harmony import */ var _Viewing_FormatLabel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Viewing/FormatLabel */ "./resources/js/Decks/Viewing/FormatLabel.vue");
/* harmony import */ var _Viewing_FormatIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Viewing/FormatIcon */ "./resources/js/Decks/Viewing/FormatIcon.vue");
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
  components: {
    DeckLabel: _Viewing_DeckLabel__WEBPACK_IMPORTED_MODULE_3__["default"],
    FormatIcon: _Viewing_FormatIcon__WEBPACK_IMPORTED_MODULE_5__["default"],
    FormatLabel: _Viewing_FormatLabel__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      deck: null,
      featured: null
    };
  },
  mounted: function mounted() {
    var _this = this;

    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/decks/featured').then(function (response) {
      _this.deck = _Utilities_Models__WEBPACK_IMPORTED_MODULE_1__["default"].hydrate(response.data, _Deck__WEBPACK_IMPORTED_MODULE_2__["default"]);
      _this.featured = {
        excerpt: response.data.excerpt,
        title: response.data.title
      };
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Decks/Featured/Featured.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Decks/Featured/Featured.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DeckOfTheWeek__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DeckOfTheWeek */ "./resources/js/Decks/Featured/DeckOfTheWeek.vue");
/* harmony import */ var _LatestDecks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LatestDecks */ "./resources/js/Decks/Featured/LatestDecks.vue");
/* harmony import */ var _Utilities_Imagery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities/Imagery */ "./resources/js/Utilities/Imagery.js");
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
  mixins: [_Utilities_Imagery__WEBPACK_IMPORTED_MODULE_2__["default"]],
  components: {
    DeckOfTheWeek: _DeckOfTheWeek__WEBPACK_IMPORTED_MODULE_0__["default"],
    LatestDecks: _LatestDecks__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  metaInfo: function metaInfo() {
    var title = 'Flesh & Blood TCG deck lists' + ' - FaB DB';
    var meta = [{
      vmid: 'og:type',
      property: 'og:type',
      content: 'website'
    }, {
      vmid: 'og:title',
      property: 'og:title',
      content: title
    }, {
      vmid: 'og:description',
      property: 'og:description',
      content: 'Featured decks and deck lists for Flesh & Blood TCG.'
    }, {
      vmid: 'og:image',
      property: 'og:image',
      content: this.imageUrl('/assets/deck-of-the-week.jpg', 1200)
    }, {
      vmid: 'og:image:width',
      property: 'og:image:width',
      content: '1200'
    }, {
      vmid: 'og:image:height',
      property: 'og:image:height',
      content: '630'
    }];
    return {
      title: title,
      meta: meta
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Decks/Viewing/FormatIcon.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Decks/Viewing/FormatIcon.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
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
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    format: {
      required: true,
      type: String
    },
    size: {
      "default": 5,
      type: Number
    }
  },
  methods: {
    classes: function classes() {
      return 'h-' + this.size + ' w-' + this.size;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Decks/Featured/DeckOfTheWeek.vue?vue&type=template&id=c8929d72&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Decks/Featured/DeckOfTheWeek.vue?vue&type=template&id=c8929d72& ***!
  \********************************************************************************************************************************************************************************************************************/
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
  return _vm.deck
    ? _c("section", { staticClass: "sm:flex sm:items-start" }, [
        _c(
          "div",
          { staticClass: "block w-full sm:w-250 sm:m-0 flex-none" },
          [
            _c(
              "router-link",
              {
                staticClass: "block w-full",
                attrs: {
                  to: { name: "decks.view", params: { deck: _vm.deck.slug } }
                }
              },
              [
                _c("card-image", {
                  staticClass: "w-full",
                  attrs: { card: _vm.deck.hero }
                })
              ],
              1
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "p-4" },
          [
            _c(
              "div",
              { staticClass: "flex items-center" },
              [
                _c(
                  "h1",
                  {
                    staticClass:
                      "block font-serif text-lg uppercase text-gray-300 mb-2"
                  },
                  [_vm._v("Deck of the week")]
                ),
                _vm._v(" "),
                _c("deck-label", {
                  staticClass: "text-xs px-2 py-1 -mt-1 ml-4 rounded-full",
                  attrs: { label: _vm.deck.label }
                }),
                _vm._v(" "),
                _c("format-label", {
                  staticClass: "text-xs px-2 py-1 -mt-1 ml-1 rounded-full",
                  attrs: { format: _vm.deck.format }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "flex items-center font-serif text-4xl uppercase text-white"
              },
              [
                _c("h2", [_vm._v('"' + _vm._s(_vm.deck.name) + '"')]),
                _vm._v(" "),
                _c("format-icon", {
                  staticClass: "inline-block relative ml-2",
                  attrs: { format: _vm.deck.format, size: 8 }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "p",
              { staticClass: "text-white" },
              [
                _c("span", { staticClass: "text-gray-400" }, [_vm._v("by")]),
                _vm._v(" "),
                _c(
                  "router-link",
                  {
                    staticClass: "link",
                    attrs: {
                      to: {
                        name: "user.profile.decks",
                        params: { user: _vm.deck.user.slug }
                      }
                    }
                  },
                  [_vm._v(_vm._s(_vm.deck.authorName))]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("p", { staticClass: "mt-4 mb-6 text-white" }, [
              _vm._v(_vm._s(_vm.featured.excerpt))
            ]),
            _vm._v(" "),
            _c(
              "router-link",
              {
                staticClass:
                  "inline-block button-secondary py-2 px-3 rounded-lg",
                attrs: {
                  to: { name: "decks.view", params: { deck: _vm.deck.slug } }
                }
              },
              [
                _c(
                  "svg",
                  {
                    staticClass: "inline-block h-5 w-5 mr-1",
                    attrs: {
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 20 20",
                      fill: "currentColor"
                    }
                  },
                  [
                    _c("path", {
                      attrs: { d: "M10 12a2 2 0 100-4 2 2 0 000 4z" }
                    }),
                    _vm._v(" "),
                    _c("path", {
                      attrs: {
                        "fill-rule": "evenodd",
                        d:
                          "M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z",
                        "clip-rule": "evenodd"
                      }
                    })
                  ]
                ),
                _vm._v("\n            View deck\n        ")
              ]
            )
          ],
          1
        )
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Decks/Featured/Featured.vue?vue&type=template&id=99bc7848&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Decks/Featured/Featured.vue?vue&type=template&id=99bc7848& ***!
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
  return _c("div", { staticClass: "container mx-auto p-4 md:py-8" }, [
    _c("div", { staticClass: "lg:flex" }, [
      _c(
        "div",
        { staticClass: "lg:w-2/3 bg-nearly-black rounded-lg sm:pr-4 mb-8" },
        [_c("deck-of-the-week")],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "lg:w-1/3 lg:ml-4 mb-8" },
        [
          _c("latest-decks", {
            attrs: { title: "Latest decks", color: "bg-yellow-500" }
          })
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "bg-semi-black p-4 rounded-lg" }, [
      _c(
        "h3",
        { staticClass: "font-serif text-2xl uppercase text-white mb-2" },
        [_vm._v("Explore...")]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "lg:flex" }, [
        _c(
          "div",
          { staticClass: "w-full lg:w-1/3 lg:mr-4 mb-4 " },
          [
            _c("latest-decks", {
              attrs: {
                title: "Competitive",
                color: "bg-gray-800",
                query: "label=competitive"
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "w-full lg:w-1/3 mb-4" },
          [
            _c("latest-decks", {
              attrs: {
                title: "Casual",
                color: "bg-blue-300",
                query: "label=casual"
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "w-full lg:w-1/3 lg:ml-4" },
          [
            _c("latest-decks", {
              attrs: {
                title: "Pauper",
                color: "bg-red-700",
                query: "label=pauper"
              }
            })
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Decks/Viewing/FormatIcon.vue?vue&type=template&id=32d24fe5&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Decks/Viewing/FormatIcon.vue?vue&type=template&id=32d24fe5& ***!
  \****************************************************************************************************************************************************************************************************************/
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
    "svg",
    {
      class: _vm.classes(),
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor"
      }
    },
    [
      _c("title", [_vm._v(_vm._s(_vm.format))]),
      _vm._v(" "),
      _vm.format === "blitz"
        ? _c("path", {
            attrs: {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M13 5l7 7-7 7M5 5l7 7-7 7"
            }
          })
        : _c("path", {
            attrs: {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d:
                "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
            }
          })
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Decks/Featured/DeckOfTheWeek.vue":
/*!*******************************************************!*\
  !*** ./resources/js/Decks/Featured/DeckOfTheWeek.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DeckOfTheWeek_vue_vue_type_template_id_c8929d72___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DeckOfTheWeek.vue?vue&type=template&id=c8929d72& */ "./resources/js/Decks/Featured/DeckOfTheWeek.vue?vue&type=template&id=c8929d72&");
/* harmony import */ var _DeckOfTheWeek_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DeckOfTheWeek.vue?vue&type=script&lang=js& */ "./resources/js/Decks/Featured/DeckOfTheWeek.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DeckOfTheWeek_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DeckOfTheWeek_vue_vue_type_template_id_c8929d72___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DeckOfTheWeek_vue_vue_type_template_id_c8929d72___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Decks/Featured/DeckOfTheWeek.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Decks/Featured/DeckOfTheWeek.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/Decks/Featured/DeckOfTheWeek.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DeckOfTheWeek_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./DeckOfTheWeek.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Decks/Featured/DeckOfTheWeek.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DeckOfTheWeek_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Decks/Featured/DeckOfTheWeek.vue?vue&type=template&id=c8929d72&":
/*!**************************************************************************************!*\
  !*** ./resources/js/Decks/Featured/DeckOfTheWeek.vue?vue&type=template&id=c8929d72& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DeckOfTheWeek_vue_vue_type_template_id_c8929d72___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./DeckOfTheWeek.vue?vue&type=template&id=c8929d72& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Decks/Featured/DeckOfTheWeek.vue?vue&type=template&id=c8929d72&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DeckOfTheWeek_vue_vue_type_template_id_c8929d72___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DeckOfTheWeek_vue_vue_type_template_id_c8929d72___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Decks/Featured/Featured.vue":
/*!**************************************************!*\
  !*** ./resources/js/Decks/Featured/Featured.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Featured_vue_vue_type_template_id_99bc7848___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Featured.vue?vue&type=template&id=99bc7848& */ "./resources/js/Decks/Featured/Featured.vue?vue&type=template&id=99bc7848&");
/* harmony import */ var _Featured_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Featured.vue?vue&type=script&lang=js& */ "./resources/js/Decks/Featured/Featured.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Featured_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Featured_vue_vue_type_template_id_99bc7848___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Featured_vue_vue_type_template_id_99bc7848___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Decks/Featured/Featured.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Decks/Featured/Featured.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/Decks/Featured/Featured.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Featured_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Featured.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Decks/Featured/Featured.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Featured_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Decks/Featured/Featured.vue?vue&type=template&id=99bc7848&":
/*!*********************************************************************************!*\
  !*** ./resources/js/Decks/Featured/Featured.vue?vue&type=template&id=99bc7848& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Featured_vue_vue_type_template_id_99bc7848___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Featured.vue?vue&type=template&id=99bc7848& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Decks/Featured/Featured.vue?vue&type=template&id=99bc7848&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Featured_vue_vue_type_template_id_99bc7848___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Featured_vue_vue_type_template_id_99bc7848___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Decks/Viewing/FormatIcon.vue":
/*!***************************************************!*\
  !*** ./resources/js/Decks/Viewing/FormatIcon.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormatIcon_vue_vue_type_template_id_32d24fe5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormatIcon.vue?vue&type=template&id=32d24fe5& */ "./resources/js/Decks/Viewing/FormatIcon.vue?vue&type=template&id=32d24fe5&");
/* harmony import */ var _FormatIcon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormatIcon.vue?vue&type=script&lang=js& */ "./resources/js/Decks/Viewing/FormatIcon.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormatIcon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormatIcon_vue_vue_type_template_id_32d24fe5___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormatIcon_vue_vue_type_template_id_32d24fe5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Decks/Viewing/FormatIcon.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Decks/Viewing/FormatIcon.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/Decks/Viewing/FormatIcon.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormatIcon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./FormatIcon.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Decks/Viewing/FormatIcon.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormatIcon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Decks/Viewing/FormatIcon.vue?vue&type=template&id=32d24fe5&":
/*!**********************************************************************************!*\
  !*** ./resources/js/Decks/Viewing/FormatIcon.vue?vue&type=template&id=32d24fe5& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormatIcon_vue_vue_type_template_id_32d24fe5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./FormatIcon.vue?vue&type=template&id=32d24fe5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Decks/Viewing/FormatIcon.vue?vue&type=template&id=32d24fe5&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormatIcon_vue_vue_type_template_id_32d24fe5___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormatIcon_vue_vue_type_template_id_32d24fe5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);