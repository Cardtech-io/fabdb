(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["decks.browse~decks.mine~user.profile.decks"],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Decks/DeckItem.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Decks/DeckItem.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Utilities_Imagery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Utilities/Imagery */ "./resources/js/Utilities/Imagery.js");
/* harmony import */ var _Viewing_DeckLabel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Viewing/DeckLabel */ "./resources/js/Decks/Viewing/DeckLabel.vue");
/* harmony import */ var _Viewing_FormatLabel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Viewing/FormatLabel */ "./resources/js/Decks/Viewing/FormatLabel.vue");
/* harmony import */ var _Components_HeroAvatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/HeroAvatar */ "./resources/js/Components/HeroAvatar.vue");
/* harmony import */ var _DeckBuilder_Viewable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../DeckBuilder/Viewable */ "./resources/js/DeckBuilder/Viewable.js");
/* harmony import */ var _Deck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Deck */ "./resources/js/Decks/Deck.js");
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
  props: {
    deck: {
      required: true,
      type: _Deck__WEBPACK_IMPORTED_MODULE_5__["default"]
    },
    route: {
      type: String,
      "default": 'decks.view'
    },
    theme: {
      type: String
    }
  },
  mixins: [_Utilities_Imagery__WEBPACK_IMPORTED_MODULE_0__["default"], _DeckBuilder_Viewable__WEBPACK_IMPORTED_MODULE_4__["default"]],
  components: {
    HeroAvatar: _Components_HeroAvatar__WEBPACK_IMPORTED_MODULE_3__["default"],
    DeckLabel: _Viewing_DeckLabel__WEBPACK_IMPORTED_MODULE_1__["default"],
    FormatLabel: _Viewing_FormatLabel__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  computed: {
    cards: function cards() {
      return this.deck.cards;
    }
  },
  methods: {
    themeClasses: function themeClasses() {
      return this.theme === 'light' ? 'bg-gray-100 hover:bg-white' : 'bg-semi-black hover:bg-black';
    }
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
          return 'bg-green-300 text-black';

        case 'competitive':
          return 'bg-blue-800 text-white';

        case 'pauper':
          return 'bg-red-700 text-white';

        case 'tournament':
          return 'bg-black text-white';

        case 'meme':
          return 'bg-pink-600 text-white';
      }
    },
    name: function name() {
      if (this.label === 'tournament') {
        return 'Tournament';
      }

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Decks/DeckItem.vue?vue&type=template&id=25300c9f&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Decks/DeckItem.vue?vue&type=template&id=25300c9f& ***!
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
  return _c("div", { staticClass: "md:px-2 w-full lg:w-1/2 my-2 text-sm" }, [
    _c(
      "div",
      { staticClass: "rounded-full overflow-hidden" },
      [
        _c(
          "router-link",
          {
            staticClass: "block flex items-center",
            class: _vm.themeClasses(),
            attrs: { to: { name: _vm.route, params: { deck: _vm.deck.slug } } }
          },
          [
            _c(
              "div",
              { staticClass: "relative flex-none" },
              [
                _c("hero-avatar", {
                  staticClass: "block sm:hidden",
                  attrs: { hero: _vm.deck.hero, name: _vm.deck.name, width: 80 }
                }),
                _vm._v(" "),
                _c("hero-avatar", {
                  staticClass: "hidden sm:block",
                  attrs: { hero: _vm.deck.hero, name: _vm.deck.name, width: 80 }
                }),
                _vm._v(" "),
                _vm.deck.notes
                  ? _c(
                      "div",
                      { staticClass: "absolute bottom-0 left-0 ml-2 mb-2" },
                      [
                        _c(
                          "svg",
                          {
                            staticClass: "h-6 w-6 sm:h-8 sm:w-8 text-white",
                            attrs: {
                              xmlns: "http://www.w3.org/2000/svg",
                              viewBox: "0 0 24 24",
                              stroke: "currentColor"
                            }
                          },
                          [
                            _c("path", {
                              attrs: {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                d:
                                  "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                              }
                            })
                          ]
                        )
                      ]
                    )
                  : _vm._e()
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "flex-auto ml-4" }, [
              _c(
                "h2",
                {
                  staticClass:
                    "font-serif uppercase text-lg md:text-2xl overflow-hidden md:mb-1",
                  staticStyle: { "max-height": "30px" }
                },
                [_vm._v(_vm._s(_vm.deck.name))]
              ),
              _vm._v(" "),
              _c("div", [
                _vm.deck.totalPrice
                  ? _c(
                      "span",
                      { staticClass: "font-italic text-blue-600 mb-1" },
                      [_vm._v("$" + _vm._s(_vm.deck.totalPrice))]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _c("span", { staticClass: "md:hidden italic" }, [
                  _vm._v("(" + _vm._s(_vm.deck.totalCards) + " cards)")
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "inline-block flex" }, [
                _c(
                  "div",
                  { staticClass: "space-x-1 mr-2" },
                  [
                    _c("format-label", {
                      staticClass: "text-xs rounded-full px-2 sm:py-1",
                      attrs: { format: _vm.deck.format }
                    }),
                    _vm._v(" "),
                    _c("deck-label", {
                      staticClass: "text-xs px-2 sm:py-1 rounded-full",
                      attrs: { label: _vm.deck.label }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c("span", [_vm._v("by " + _vm._s(_vm.deck.authorName))])
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "flex-none mx-10 font-serif text-center hidden md:block"
              },
              [
                _c("div", { staticClass: "text-4xl" }, [
                  _vm._v(_vm._s(_vm.deck.totalCards))
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "text-gray-500 ml-1" }, [
                  _vm._v("cards")
                ])
              ]
            )
          ]
        )
      ],
      1
    )
  ])
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

/***/ "./resources/js/DeckBuilder/Viewable.js":
/*!**********************************************!*\
  !*** ./resources/js/DeckBuilder/Viewable.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/modules/index-all.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  computed: {
    attacksPerHand: function attacksPerHand() {
      return (this.totalAttacks / (this.totalOther / 4)).toFixed(1);
    },
    averageAttack: function averageAttack() {
      return (underscore__WEBPACK_IMPORTED_MODULE_0__["default"].reduce(this.attacks, function (total, card) {
        return total + card.stats.attack * card.total;
      }, 0) / this.totalAttacks).toFixed(1);
    },
    averageBlock: function averageBlock() {
      return (underscore__WEBPACK_IMPORTED_MODULE_0__["default"].reduce(this.blocks, function (total, card) {
        return total + card.stats.defense * card.total;
      }, 0) / this.totalBlocks).toFixed(1);
    },
    averageCost: function averageCost() {
      var totalCost = this.other.reduce(function (total, card) {
        if (card.stats.cost && !isNaN(card.stats.cost)) {
          return total + card.stats.cost * card.total;
        }

        return total;
      }, 0);
      return (this.totalOther ? totalCost / this.totalOther : 0).toFixed(2);
    },
    averagePitch: function averagePitch() {
      var totalPitch = this.other.reduce(function (total, card) {
        if (card.stats.resource) {
          return total + card.stats.resource * card.total;
        }

        return total + 0;
      }, 0);
      return (this.totalOther ? totalPitch / this.totalOther : 0).toFixed(2);
    },
    hero: function hero() {
      if (!this.cards) {
        return;
      }

      return this.cards.filter(function (card) {
        return card.type === 'hero';
      })[0];
    },
    attacks: function attacks() {
      return this.other.filter(function (card) {
        return card.keywords.includes('attack') && !card.keywords.includes('reaction');
      });
    },
    blocks: function blocks() {
      return this.other.filter(function (card) {
        return card.stats.defense && card.stats.defense > 0;
      });
    },
    weapons: function weapons() {
      return this.cards.filter(function (card) {
        return card.keywords.includes('weapon');
      });
    },
    equipment: function equipment() {
      return this.cards.filter(function (card) {
        return card.keywords.includes('equipment');
      });
    },
    other: function other() {
      var cards = this.cards.filter(function (card) {
        return !(card.keywords.includes('hero') || card.keywords.includes('equipment') || card.keywords.includes('weapon'));
      }); // Sort by pitch

      return underscore__WEBPACK_IMPORTED_MODULE_0__["default"].sortBy(cards, function (card) {
        return card.stats.resource;
      });
    },
    totalOther: function totalOther() {
      return this.other.reduce(function (total, card) {
        return total + card.total;
      }, 0);
    },
    totalAttacks: function totalAttacks() {
      return this.attacks.reduce(function (total, card) {
        return total + card.total;
      }, 0);
    },
    totalBlocks: function totalBlocks() {
      return this.blocks.reduce(function (total, card) {
        return total + card.total;
      }, 0);
    },
    totalClass: function totalClass() {
      return this.countCards(this.other.filter(function (card) {
        return !card.keywords.includes('generic');
      }));
    },
    totalGeneric: function totalGeneric() {
      return this.countCards(this.other.filter(function (card) {
        return card.keywords.includes('generic');
      }));
    },
    totalCards: function totalCards() {
      var count = this.other.filter(function (card) {
        return !card.keywords.includes('token');
      }).reduce(function (total, card) {
        return total + card.total;
      }, 0);

      if (this.deck && this.deck.format === 'blitz') {
        if (this.hero) {
          count++;
        }
      }

      return count + this.equipment.reduce(function (total, card) {
        return total + card.total;
      }, 0) + this.weapons.reduce(function (total, card) {
        return total + card.total;
      }, 0);
    },
    totalActions: function totalActions() {
      return this.totalCardType(this.other, ['action']);
    },
    totalAttackActions: function totalAttackActions() {
      return this.totalCardType(this.other, ['action', 'attack']);
    },
    totalAttackReactions: function totalAttackReactions() {
      return this.totalCardType(this.other, ['attack', 'reaction']);
    },
    totalDefenseReactions: function totalDefenseReactions() {
      return this.totalCardType(this.other, ['defense', 'reaction']);
    },
    totalInstants: function totalInstants() {
      return this.totalCardType(this.other, ['instant']);
    },
    totalColoured: function totalColoured() {
      return {
        'blue': this.countColoured('blue'),
        'yellow': this.countColoured('yellow'),
        'red': this.countColoured('red')
      };
    }
  },
  methods: {
    costCount: function costCount(cost) {
      var cards = this.other.filter(function (card) {
        if (cost < 3) {
          return card.stats.cost == cost;
        }

        return card.stats.cost >= cost;
      });
      return cards.reduce(function (total, card) {
        return total + card.total;
      }, 0);
    },
    countColoured: function countColoured(colour) {
      var resources = {
        blue: 3,
        yellow: 2,
        red: 1
      };
      var cards = this.other.filter(function (card) {
        return card.stats.resource == resources[colour];
      });
      var count = 0;

      for (var i in cards) {
        count += cards[i].total;
      }

      return count;
    },
    pitchCount: function pitchCount(type) {
      var cards = this.other.filter(function (card) {
        return card.stats.resource == type;
      });
      return cards.reduce(function (total, card) {
        return total + card.total;
      }, 0);
    },
    averageCardType: function averageCardType(cards, keywords) {
      return (this.totalCardType(cards, keywords) / cards.length).toFixed(1);
    },
    totalCardType: function totalCardType(cards, keywords) {
      return cards.reduce(function (total, card) {
        var matches = 0;

        for (var i = 0; i < keywords.length; i++) {
          if (card.keywords.includes(keywords[i])) {
            matches++;
          }
        }

        if (matches < keywords.length) {
          return total;
        }

        return total + card.total;
      }, 0);
    },
    countCards: function countCards(cards) {
      return underscore__WEBPACK_IMPORTED_MODULE_0__["default"].reduce(cards, function (total, card) {
        return total + card.total;
      }, 0);
    }
  }
});

/***/ }),

/***/ "./resources/js/Decks/DeckItem.vue":
/*!*****************************************!*\
  !*** ./resources/js/Decks/DeckItem.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DeckItem_vue_vue_type_template_id_25300c9f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DeckItem.vue?vue&type=template&id=25300c9f& */ "./resources/js/Decks/DeckItem.vue?vue&type=template&id=25300c9f&");
/* harmony import */ var _DeckItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DeckItem.vue?vue&type=script&lang=js& */ "./resources/js/Decks/DeckItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DeckItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DeckItem_vue_vue_type_template_id_25300c9f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DeckItem_vue_vue_type_template_id_25300c9f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Decks/DeckItem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Decks/DeckItem.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/Decks/DeckItem.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DeckItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./DeckItem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Decks/DeckItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DeckItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Decks/DeckItem.vue?vue&type=template&id=25300c9f&":
/*!************************************************************************!*\
  !*** ./resources/js/Decks/DeckItem.vue?vue&type=template&id=25300c9f& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DeckItem_vue_vue_type_template_id_25300c9f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./DeckItem.vue?vue&type=template&id=25300c9f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Decks/DeckItem.vue?vue&type=template&id=25300c9f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DeckItem_vue_vue_type_template_id_25300c9f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DeckItem_vue_vue_type_template_id_25300c9f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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