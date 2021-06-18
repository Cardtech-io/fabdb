(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["decks.export"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/DeckBuilder/ExportDeck.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/DeckBuilder/ExportDeck.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _CardDatabase_Cardable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CardDatabase/Cardable.js */ "./resources/js/CardDatabase/Cardable.js");
/* harmony import */ var _CardDatabase_CardImage_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../CardDatabase/CardImage.vue */ "./resources/js/CardDatabase/CardImage.vue");
/* harmony import */ var _Components_Crumbs_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Components/Crumbs.vue */ "./resources/js/Components/Crumbs.vue");
/* harmony import */ var _Components_HeaderTitle_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Components/HeaderTitle.vue */ "./resources/js/Components/HeaderTitle.vue");
/* harmony import */ var _Components_LazyLoader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Components/LazyLoader */ "./resources/js/Components/LazyLoader.js");
/* harmony import */ var _Components_Form_Submit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Components/Form/Submit */ "./resources/js/Components/Form/Submit.vue");
/* harmony import */ var _Viewable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Viewable */ "./resources/js/DeckBuilder/Viewable.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
    CardImage: _CardDatabase_CardImage_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    Crumbs: _Components_Crumbs_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    HeaderTitle: _Components_HeaderTitle_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    Submit: _Components_Form_Submit__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  mixins: [_CardDatabase_Cardable_js__WEBPACK_IMPORTED_MODULE_2__["default"], _Viewable__WEBPACK_IMPORTED_MODULE_8__["default"]],
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])('session', ['user']), {
    name: {
      get: function get() {
        return this.user.name;
      },
      set: function set(name) {
        this.setUserParam({
          param: 'name',
          value: name
        });
      }
    },
    gemId: {
      get: function get() {
        return this.user.gemId;
      },
      set: function set(gemId) {
        this.setUserParam({
          param: 'gemId',
          value: gemId
        });
      }
    },
    cards: function cards() {
      return this.deck.cards;
    },
    crumbs: function crumbs() {
      return [{
        text: 'Home',
        link: '/'
      }, {
        text: 'Deck Builder',
        link: '/decks/build/' + this.deck.slug
      }, {
        text: 'Export deck'
      }];
    }
  }),
  data: function data() {
    return {
      deck: null,
      event: null,
      exportRequested: false,
      format: 'pdf'
    };
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])('session', ['setUserParam']), {
    requestExport: function requestExport() {
      var _this = this;

      var payload = {
        name: this.name,
        gemId: this.gemId,
        event: this.event
      };
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/export/' + this.deck.slug + '.' + this.format, payload).then(function (response) {
        _this.exportRequested = true;
      });
    }
  }),
  metaInfo: function metaInfo() {
    return {
      title: 'Deck builder - Export deck'
    };
  },
  "extends": Object(_Components_LazyLoader__WEBPACK_IMPORTED_MODULE_6__["default"])(function (to, callback) {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/decks/' + to.params.deck).then(function (response) {
      callback(function () {
        this.deck = response.data;
      });
    });
  })
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/DeckBuilder/ExportDeck.vue?vue&type=template&id=87b58d90&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/DeckBuilder/ExportDeck.vue?vue&type=template&id=87b58d90& ***!
  \**************************************************************************************************************************************************************************************************************/
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
      _c("header-title", { attrs: { title: "Export deck" } }),
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
        _c("div", { staticClass: "container sm:mx-auto bg-white py-8 px-8" }, [
          _c(
            "div",
            {
              staticClass: "container sm:mx-auto border-b border-gray-400 mb-8"
            },
            [
              _vm.hero
                ? _c(
                    "h1",
                    { staticClass: "inline-block font-serif text-4xl" },
                    [
                      _vm._v(
                        _vm._s(_vm.hero.name) +
                          " (" +
                          _vm._s(_vm.deck.name) +
                          ")"
                      )
                    ]
                  )
                : _vm._e()
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "md:flex" }, [
            _c("div", { staticClass: "md:w-2/3 md:pr-8" }, [
              !_vm.exportRequested
                ? _c("div", [
                    _c(
                      "p",
                      {
                        staticClass:
                          "mb-4 p-4 bg-blue-500 rounded-lg text-white"
                      },
                      [
                        _vm._v(
                          "\n                            The information collected below is not saved, but is required for your PDF as part of\n                            the tournament pack export. We will email you your export once it's been generated.\n                        "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "form",
                      {
                        on: {
                          submit: function($event) {
                            $event.preventDefault()
                            return _vm.requestExport.apply(null, arguments)
                          }
                        }
                      },
                      [
                        _c("div", { staticClass: "w-full mt-4" }, [
                          _c(
                            "label",
                            {
                              staticClass:
                                "block font-serif uppercase tracking-wide mb-1"
                            },
                            [_vm._v("Name")]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.name,
                                expression: "name"
                              }
                            ],
                            staticClass:
                              "input focus:bg-white focus:border-gray-500 py-3 px-4 rounded-lg",
                            attrs: { type: "text" },
                            domProps: { value: _vm.name },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.name = $event.target.value
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "w-full mt-4" }, [
                          _c(
                            "label",
                            {
                              staticClass:
                                "block font-serif uppercase tracking-wide mb-1"
                            },
                            [_vm._v("GEM player ID")]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.gemId,
                                expression: "gemId"
                              }
                            ],
                            staticClass:
                              "input focus:bg-white focus:border-gray-500 py-3 px-4 rounded-lg",
                            attrs: { type: "text" },
                            domProps: { value: _vm.gemId },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.gemId = $event.target.value
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "w-full mt-4" }, [
                          _c(
                            "label",
                            {
                              staticClass:
                                "block font-serif uppercase tracking-wide mb-1"
                            },
                            [_vm._v("Event")]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.event,
                                expression: "event"
                              }
                            ],
                            staticClass:
                              "input focus:bg-white focus:border-gray-500 py-3 px-4 rounded-lg",
                            attrs: { type: "text" },
                            domProps: { value: _vm.event },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.event = $event.target.value
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "w-full mt-4" }, [
                          _c(
                            "label",
                            {
                              staticClass:
                                "block font-serif uppercase tracking-wide mb-1"
                            },
                            [_vm._v("Export format")]
                          ),
                          _vm._v(" "),
                          _c(
                            "label",
                            {
                              staticClass: "block",
                              attrs: { fpr: "pdf-export" }
                            },
                            [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.format,
                                    expression: "format"
                                  }
                                ],
                                staticClass:
                                  "focus:bg-white focus:border-gray-500",
                                attrs: {
                                  type: "radio",
                                  name: "format",
                                  value: "pdf",
                                  id: "pdf-export"
                                },
                                domProps: {
                                  checked: _vm._q(_vm.format, "pdf")
                                },
                                on: {
                                  change: function($event) {
                                    _vm.format = "pdf"
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("span", { staticClass: "ml-4" }, [
                                _vm._v("PDF")
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "label",
                            {
                              staticClass: "block mt-2",
                              attrs: { for: "zip-export" }
                            },
                            [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.format,
                                    expression: "format"
                                  }
                                ],
                                staticClass:
                                  "focus:bg-white focus:border-gray-500",
                                attrs: {
                                  type: "radio",
                                  name: "format",
                                  value: "zip",
                                  id: "zip-export"
                                },
                                domProps: {
                                  checked: _vm._q(_vm.format, "zip")
                                },
                                on: {
                                  change: function($event) {
                                    _vm.format = "zip"
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("span", { staticClass: "ml-4" }, [
                                _vm._v("ZIP")
                              ])
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("submit", {
                          staticClass: "mt-8",
                          attrs: { text: "Export" }
                        })
                      ],
                      1
                    )
                  ])
                : _c("div", [
                    _c("p", [
                      _vm._v(
                        "Your deck export has been requested, and shall arrived at your email inbox in a few moments."
                      )
                    ])
                  ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "hidden md:block md:w-1/3" },
              [_c("card-image", { attrs: { card: _vm.hero } })],
              1
            )
          ])
        ])
      ])
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

/***/ "./resources/js/DeckBuilder/ExportDeck.vue":
/*!*************************************************!*\
  !*** ./resources/js/DeckBuilder/ExportDeck.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ExportDeck_vue_vue_type_template_id_87b58d90___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ExportDeck.vue?vue&type=template&id=87b58d90& */ "./resources/js/DeckBuilder/ExportDeck.vue?vue&type=template&id=87b58d90&");
/* harmony import */ var _ExportDeck_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExportDeck.vue?vue&type=script&lang=js& */ "./resources/js/DeckBuilder/ExportDeck.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ExportDeck_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ExportDeck_vue_vue_type_template_id_87b58d90___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ExportDeck_vue_vue_type_template_id_87b58d90___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/DeckBuilder/ExportDeck.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/DeckBuilder/ExportDeck.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/DeckBuilder/ExportDeck.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExportDeck_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ExportDeck.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/DeckBuilder/ExportDeck.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExportDeck_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/DeckBuilder/ExportDeck.vue?vue&type=template&id=87b58d90&":
/*!********************************************************************************!*\
  !*** ./resources/js/DeckBuilder/ExportDeck.vue?vue&type=template&id=87b58d90& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExportDeck_vue_vue_type_template_id_87b58d90___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ExportDeck.vue?vue&type=template&id=87b58d90& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/DeckBuilder/ExportDeck.vue?vue&type=template&id=87b58d90&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExportDeck_vue_vue_type_template_id_87b58d90___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExportDeck_vue_vue_type_template_id_87b58d90___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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
        return card.keywords.includes('hero');
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

/***/ })

}]);