(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["decks.build~practise.view"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/Fullscreen.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Components/Fullscreen.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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
    toggle: {
      type: Function,
      required: true
    },
    fullScreen: {
      type: Boolean,
      required: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/DeckBuilder/GroupingSelector.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/DeckBuilder/GroupingSelector.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
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
    grouping: {
      type: String,
      required: true
    },
    options: {
      type: Object,
      required: true
    }
  },
  data: function data() {
    return {
      isOpen: false
    };
  },
  methods: {
    select: function select(grouping) {
      this.$emit('selected', grouping);
      this.isOpen = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/Fullscreen.vue?vue&type=template&id=07359a74&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Components/Fullscreen.vue?vue&type=template&id=07359a74& ***!
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
  return _c(
    "button",
    {
      staticClass: "block link-alternate",
      on: {
        click: function($event) {
          $event.preventDefault()
          return _vm.toggle.apply(null, arguments)
        }
      }
    },
    [
      _c(
        "svg",
        {
          staticClass: "fill-current h-6",
          attrs: { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20" }
        },
        [
          !_vm.fullScreen
            ? _c("path", {
                attrs: {
                  d:
                    "M2.8 15.8L0 13v7h7l-2.8-2.8 4.34-4.32-1.42-1.42L2.8 15.8zM17.2 4.2L20 7V0h-7l2.8 2.8-4.34 4.32 1.42 1.42L17.2 4.2zm-1.4 13L13 20h7v-7l-2.8 2.8-4.32-4.34-1.42 1.42 4.33 4.33zM4.2 2.8L7 0H0v7l2.8-2.8 4.32 4.34 1.42-1.42L4.2 2.8z"
                }
              })
            : _c("path", {
                attrs: {
                  d:
                    "M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"
                }
              })
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/DeckBuilder/GroupingSelector.vue?vue&type=template&id=72b0dffd&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/DeckBuilder/GroupingSelector.vue?vue&type=template&id=72b0dffd& ***!
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
  return _c("div", { staticClass: "relative font-serif" }, [
    _c(
      "button",
      {
        staticClass:
          "relative text-left border border-gray-200 text-base font-serif rounded-lg px-4 py-2 uppercase hover:bg-white hover:border-gray-500 flex",
        class: {
          "border-gray-500": _vm.isOpen,
          "bg-white": _vm.isOpen,
          "bg-gray-200": !_vm.isOpen,
          "z-75": _vm.isOpen
        },
        staticStyle: { width: "150px" },
        on: {
          click: function($event) {
            _vm.isOpen = !_vm.isOpen
          }
        }
      },
      [
        _c("span", { staticClass: "inline-block mr-1 flex-1" }, [
          _vm._v(_vm._s(_vm.options[_vm.grouping] || "Grouping"))
        ]),
        _vm._v(" "),
        _c(
          "svg",
          {
            staticClass: "inline-block h-6 fill-current",
            attrs: { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20" }
          },
          [
            _c("path", {
              attrs: {
                d:
                  "M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
              }
            })
          ]
        )
      ]
    ),
    _vm._v(" "),
    _vm.isOpen
      ? _c("button", {
          staticClass:
            "fixed top-0 right-0 bottom-0 left-0 bg-red z-50 bg-black opacity-25 w-full h-full cursor-default",
          attrs: { type: "button" },
          on: {
            click: function($event) {
              _vm.isOpen = false
            }
          }
        })
      : _vm._e(),
    _vm._v(" "),
    _vm.isOpen
      ? _c(
          "div",
          {
            staticClass:
              "w-full absolute right-0 rounded-lg bg-white z-100 overflow-hidden mt-2 border border-gray-500"
          },
          _vm._l(_vm.options, function(text, grouping) {
            return _c(
              "button",
              {
                staticClass:
                  "w-full text-base text-left px-4 py-2 hover:bg-blue-400 hover:text-white uppercase",
                on: {
                  click: function($event) {
                    return _vm.select(grouping)
                  }
                }
              },
              [_vm._v(_vm._s(text))]
            )
          }),
          0
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Components/Fullscreen.vue":
/*!************************************************!*\
  !*** ./resources/js/Components/Fullscreen.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Fullscreen_vue_vue_type_template_id_07359a74___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Fullscreen.vue?vue&type=template&id=07359a74& */ "./resources/js/Components/Fullscreen.vue?vue&type=template&id=07359a74&");
/* harmony import */ var _Fullscreen_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Fullscreen.vue?vue&type=script&lang=js& */ "./resources/js/Components/Fullscreen.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Fullscreen_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Fullscreen_vue_vue_type_template_id_07359a74___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Fullscreen_vue_vue_type_template_id_07359a74___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/Fullscreen.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Components/Fullscreen.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/Components/Fullscreen.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Fullscreen_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Fullscreen.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/Fullscreen.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Fullscreen_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/Fullscreen.vue?vue&type=template&id=07359a74&":
/*!*******************************************************************************!*\
  !*** ./resources/js/Components/Fullscreen.vue?vue&type=template&id=07359a74& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Fullscreen_vue_vue_type_template_id_07359a74___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Fullscreen.vue?vue&type=template&id=07359a74& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/Fullscreen.vue?vue&type=template&id=07359a74&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Fullscreen_vue_vue_type_template_id_07359a74___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Fullscreen_vue_vue_type_template_id_07359a74___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./resources/js/DeckBuilder/Cards.js":
/*!*******************************************!*\
  !*** ./resources/js/DeckBuilder/Cards.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Cards; });
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/modules/index-all.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Cards =
/*#__PURE__*/
function () {
  function Cards(cards) {
    _classCallCheck(this, Cards);

    this.cards = cards;
  }

  _createClass(Cards, [{
    key: "applyFilters",
    value: function applyFilters(filters) {
      var _this = this;

      return new Cards(this.cards.filter(function (card) {
        if (filters.indexOf('actions') > -1 && _this.isAction(card)) {
          return true;
        }

        if (filters.indexOf('attacks') > -1 && _this.isAttack(card)) {
          return true;
        }

        if (filters.indexOf('attackReactions') > -1 && _this.isAttackReaction(card)) {
          return true;
        }

        if (filters.indexOf('instants') > -1 && _this.isInstant(card)) {
          return true;
        }

        if (filters.indexOf('defenseReactions') > -1 && _this.isDefenseReaction(card)) {
          return true;
        }

        return false;
      }));
    }
  }, {
    key: "isAction",
    value: function isAction(card) {
      return card.keywords.includes('action') && !card.keywords.includes('attack');
    }
  }, {
    key: "isAttack",
    value: function isAttack(card) {
      return card.keywords.includes('attack') && !card.keywords.includes('reaction');
    }
  }, {
    key: "isAttackReaction",
    value: function isAttackReaction(card) {
      return card.keywords.includes('attack') && card.keywords.includes('reaction');
    }
  }, {
    key: "isDefenseReaction",
    value: function isDefenseReaction(card) {
      return card.keywords.includes('defense') && card.keywords.includes('reaction');
    }
  }, {
    key: "isInstant",
    value: function isInstant(card) {
      return card.keywords.includes('instant');
    }
  }, {
    key: "hero",
    value: function hero() {
      return this.cards.filter(function (card) {
        return card.keywords.includes('hero');
      })[0];
    }
  }, {
    key: "miscellaneous",
    value: function miscellaneous() {
      return new Cards(this.cards.filter(function (card) {
        return card.keywords.includes('resource');
      }));
    }
  }, {
    key: "attackActions",
    value: function attackActions() {
      var _this2 = this;

      return new Cards(this.cards.filter(function (card) {
        return _this2.isAttack(card);
      }));
    }
  }, {
    key: "nonAttackActions",
    value: function nonAttackActions() {
      var _this3 = this;

      return new Cards(this.cards.filter(function (card) {
        return _this3.isAction(card);
      }));
    }
  }, {
    key: "attackReactions",
    value: function attackReactions() {
      var _this4 = this;

      return new Cards(this.cards.filter(function (card) {
        return _this4.isAttackReaction(card);
      }));
    }
  }, {
    key: "defenseReactions",
    value: function defenseReactions() {
      var _this5 = this;

      return new Cards(this.cards.filter(function (card) {
        return _this5.isDefenseReaction(card);
      }));
    }
  }, {
    key: "weapons",
    value: function weapons() {
      return new Cards(this.cards.filter(function (card) {
        return card.keywords.includes('weapon');
      }));
    }
  }, {
    key: "equipment",
    value: function equipment() {
      return new Cards(this.cards.filter(function (card) {
        return card.keywords.includes('equipment');
      }));
    }
  }, {
    key: "items",
    value: function items() {
      return new Cards(this.cards.filter(function (card) {
        return card.keywords.includes('item');
      }));
    }
  }, {
    key: "instants",
    value: function instants() {
      var _this6 = this;

      return new Cards(this.cards.filter(function (card) {
        return _this6.isInstant(card);
      }));
    }
  }, {
    key: "colouredCount",
    value: function colouredCount(colour) {
      var resources = {
        blue: 3,
        yellow: 2,
        red: 1
      };
      return this.filter(function (card) {
        return card.stats.resource && card.stats.resource == resources[colour];
      }).total();
    }
  }, {
    key: "other",
    value: function other() {
      var cards = this.cards.filter(function (card) {
        return !(card.keywords.includes('hero') || card.keywords.includes('equipment') || card.keywords.includes('weapon'));
      }); // Sort by pitch

      return new Cards(underscore__WEBPACK_IMPORTED_MODULE_0__["default"].sortBy(cards, function (card) {
        return card.stats.resource;
      }));
    }
  }, {
    key: "withCost",
    value: function withCost() {
      return this.other().filter(function (card) {
        return !isNaN(card.stats.cost);
      });
    }
  }, {
    key: "withResource",
    value: function withResource() {
      return this.other().filter(function (card) {
        return !isNaN(card.stats.resource);
      });
    }
  }, {
    key: "sort",
    value: function sort() {
      return new Cards(underscore__WEBPACK_IMPORTED_MODULE_0__["default"].sortBy(this.cards, function (card) {
        var resource = card.stats ? card.stats.resource : '';
        return card.name + resource;
      }));
    }
  }, {
    key: "filter",
    value: function filter(handler) {
      return new Cards(this.cards.filter(handler));
    }
  }, {
    key: "find",
    value: function find(card) {
      return this.cards.filter(function (deckCard) {
        return deckCard.identifier === card.identifier;
      })[0];
    }
  }, {
    key: "findKey",
    value: function findKey(card) {
      for (var i in this.cards) {
        var match = this.cards[i];

        if (match.identifier === card.identifier) {
          return i;
        }
      }
    }
  }, {
    key: "hydrate",
    value: function hydrate() {
      var reducer = function reducer(carry, card) {
        for (var i = 0; i < card.total; i++) {
          carry.push(card);
        }

        return carry;
      };

      return new Cards(this.cards.reduce(reducer, []));
    }
  }, {
    key: "total",
    value: function total() {
      return this.cards.reduce(function (carry, card) {
        return carry + card.total;
      }, 0);
    }
  }, {
    key: "count",
    value: function count() {
      return this.cards.length;
    }
  }, {
    key: "add",
    value: function add(card) {
      var deckCard = this.find(card);

      if (deckCard) {
        deckCard.total += 1;
      } else {
        card.total = 1;
        this.cards.push(card);
      }
    } // Field could be a string, or a handler

  }, {
    key: "group",
    value: function group(field) {
      var handler = typeof field === 'string' ? function (card) {
        return card[field];
      } : field;
      return new Cards(Object.values(underscore__WEBPACK_IMPORTED_MODULE_0__["default"].groupBy(this.cards, handler)));
    }
  }, {
    key: "concat",
    value: function concat(cards) {
      cards = cards instanceof Cards ? cards.all() : cards;
      return new Cards(this.cards.concat(cards));
    }
  }, {
    key: "remove",
    value: function remove(card) {
      var deckCard = this.find(card);

      if (deckCard.total > 1) {
        deckCard.total -= 1;
      } else {
        var key = this.findKey(card);

        if (key) {
          this.cards.splice(key, 1);
        }
      }
    }
  }, {
    key: "all",
    value: function all() {
      return this.cards;
    }
  }, {
    key: Symbol.iterator,
    value: function value() {
      return this.cards.values();
    }
  }]);

  return Cards;
}();


;

/***/ }),

/***/ "./resources/js/DeckBuilder/GroupingSelector.vue":
/*!*******************************************************!*\
  !*** ./resources/js/DeckBuilder/GroupingSelector.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GroupingSelector_vue_vue_type_template_id_72b0dffd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GroupingSelector.vue?vue&type=template&id=72b0dffd& */ "./resources/js/DeckBuilder/GroupingSelector.vue?vue&type=template&id=72b0dffd&");
/* harmony import */ var _GroupingSelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GroupingSelector.vue?vue&type=script&lang=js& */ "./resources/js/DeckBuilder/GroupingSelector.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _GroupingSelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GroupingSelector_vue_vue_type_template_id_72b0dffd___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GroupingSelector_vue_vue_type_template_id_72b0dffd___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/DeckBuilder/GroupingSelector.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/DeckBuilder/GroupingSelector.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/DeckBuilder/GroupingSelector.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupingSelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./GroupingSelector.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/DeckBuilder/GroupingSelector.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupingSelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/DeckBuilder/GroupingSelector.vue?vue&type=template&id=72b0dffd&":
/*!**************************************************************************************!*\
  !*** ./resources/js/DeckBuilder/GroupingSelector.vue?vue&type=template&id=72b0dffd& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupingSelector_vue_vue_type_template_id_72b0dffd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./GroupingSelector.vue?vue&type=template&id=72b0dffd& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/DeckBuilder/GroupingSelector.vue?vue&type=template&id=72b0dffd&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupingSelector_vue_vue_type_template_id_72b0dffd___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupingSelector_vue_vue_type_template_id_72b0dffd___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/DeckBuilder/Redrawable.js":
/*!************************************************!*\
  !*** ./resources/js/DeckBuilder/Redrawable.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var methods = {
  redraw: function redraw(id) {
    var _this = this;

    setTimeout(function () {
      _this.$redrawVueMasonry();
    }, 10);
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: methods
});

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

/***/ }),

/***/ "./resources/js/Utilities/Markdown/Blockquote.js":
/*!*******************************************************!*\
  !*** ./resources/js/Utilities/Markdown/Blockquote.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  type: 'output',
  regex: /<blockquote>([^]+?)<\/blockquote>/gi,
  replace: '<blockquote class="relative py-2 px-8 pl-12 my-8 text-xl italic border border-l-4 quote rounded-lg z-0">' + '<div class="stylistic-quote-mark text-gray-200" aria-hidden="true">&ldquo;</div>' + '<p>$1</p>' + '</blockquote>'
});

/***/ }),

/***/ "./resources/js/Utilities/Markdown/Cards.js":
/*!**************************************************!*\
  !*** ./resources/js/Utilities/Markdown/Cards.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Carding__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Carding */ "./resources/js/Utilities/Carding.js");

var matches = [];
var lastAlignment = 'left';
var alignmentClasses = {
  left: 'sm:float-left sm:m-4 sm:ml-0',
  right: 'sm:float-right sm:m-4 sm:mr-0'
};
/* harmony default export */ __webpack_exports__["default"] = ([{
  type: 'lang',
  regex: /\^cards\((([A-Z]{3}[0-9]{3},?)+)\)/gi,
  replace: function replace(s, match) {
    matches.push(match);
    var n = matches.length - 1;
    return '%CARDS' + n + '%';
  }
}, {
  type: 'output',
  filter: function filter(text) {
    for (var i = 0; i < matches.length; ++i) {
      var identifiers = matches[i].split(',');
      var cards = identifiers.map(function (cardIdentifier) {
        return '<card-ad identifier="' + cardIdentifier + '"></card-ad>';
      });
      var pat = '%CARDS' + i + '%';
      var classes = ''; // Here we are moving and positioning the card in the article.

      if (identifiers.length === 1) {
        var alignment = lastAlignment === 'right' ? 'left' : 'right';
        classes = alignmentClasses[alignment];
        lastAlignment = alignment;
      } else {
        classes = 'flex items-start justify-center';
      }

      text = text.replace(new RegExp(pat, 'gi'), '<div class="' + classes + '">' + cards.join('\n') + '</div>');
    } //reset array


    matches = [];
    return text;
  }
}]);

/***/ }),

/***/ "./resources/js/Utilities/Markdown/Classes.js":
/*!****************************************************!*\
  !*** ./resources/js/Utilities/Markdown/Classes.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var classMap = {
  a: 'link',
  h1: 'text-4xl',
  h2: 'text-2xl',
  h3: 'text-xl',
  ol: 'list-decimal ml-8',
  p: 'my-4',
  ul: 'list-disc ml-8'
};
/* harmony default export */ __webpack_exports__["default"] = (Object.keys(classMap).map(function (key) {
  return {
    type: 'output',
    regex: new RegExp("<".concat(key, "(.*)>"), 'g'),
    replace: "<".concat(key, " class=\"").concat(classMap[key], "\" $1>")
  };
}));

/***/ }),

/***/ "./resources/js/Utilities/Markdown/Decks.js":
/*!**************************************************!*\
  !*** ./resources/js/Utilities/Markdown/Decks.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Carding__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Carding */ "./resources/js/Utilities/Carding.js");

var matches = [];
/* harmony default export */ __webpack_exports__["default"] = ([{
  type: 'lang',
  regex: /\^deck\(([A-Z]+)\)/gi,
  replace: function replace(s, match) {
    matches.push(match);
    var n = matches.length - 1;
    return '%DECK' + n + '%';
  }
}, {
  type: 'output',
  filter: function filter(text) {
    for (var i = 0; i < matches.length; ++i) {
      var url = window.location.protocol + '//' + window.location.hostname + '/decks/embed/' + matches[i];
      var pat = '<p>%DECK' + i + '% *<\/p>';
      var replace = '<div class="block sm:m-8 mt-0 sm:float-right border border-gray-400">' + '<iframe src="' + url + '" width="350" height="1200" id="deck-' + i + '" sandbox="allow-same-origin allow-scripts" scrolling="yes"></iframe>' + '</div>';
      text = text.replace(new RegExp(pat, 'gi'), replace);
    } //reset array


    matches = [];
    return text;
  }
}]);

/***/ }),

/***/ "./resources/js/Utilities/Markdown/showdown.js":
/*!*****************************************************!*\
  !*** ./resources/js/Utilities/Markdown/showdown.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var showdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! showdown */ "./node_modules/showdown/dist/showdown.js");
/* harmony import */ var showdown__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(showdown__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Classes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Classes */ "./resources/js/Utilities/Markdown/Classes.js");
/* harmony import */ var _Blockquote__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Blockquote */ "./resources/js/Utilities/Markdown/Blockquote.js");
/* harmony import */ var _Cards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Cards */ "./resources/js/Utilities/Markdown/Cards.js");
/* harmony import */ var _Decks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Decks */ "./resources/js/Utilities/Markdown/Decks.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }






var converter = new showdown__WEBPACK_IMPORTED_MODULE_0___default.a.Converter({
  extensions: [_Cards__WEBPACK_IMPORTED_MODULE_3__["default"], _Decks__WEBPACK_IMPORTED_MODULE_4__["default"]].concat(_toConsumableArray(_Classes__WEBPACK_IMPORTED_MODULE_1__["default"]), [_Blockquote__WEBPACK_IMPORTED_MODULE_2__["default"]])
});
/* harmony default export */ __webpack_exports__["default"] = (function (string) {
  return '<div>' + converter.makeHtml(string) + '</div>';
});
;

/***/ }),

/***/ "./resources/js/Utilities/Strings.js":
/*!*******************************************!*\
  !*** ./resources/js/Utilities/Strings.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! marked */ "./node_modules/marked/src/marked.js");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Markdown_showdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Markdown/showdown */ "./resources/js/Utilities/Markdown/showdown.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    kebabCase: function kebabCase(string) {
      return this.snakeCase(string, '-');
    },
    parseMarkdown: function parseMarkdown(string) {
      return Object(_Markdown_showdown__WEBPACK_IMPORTED_MODULE_1__["default"])(string);
    },
    minimalMarkdown: function minimalMarkdown(string) {
      return Object(_Markdown_showdown__WEBPACK_IMPORTED_MODULE_1__["default"])(string);
    },
    prettyText: function prettyText(text) {
      function chunk(arr, len) {
        var chunks = [],
            i = 0,
            n = arr.length;

        while (i < n) {
          chunks.push(arr.slice(i, i += len));
        }

        return chunks;
      }

      var content = this.prettified(text);
      return this.parseMarkdown(content);
    },
    prettified: function prettified(text) {
      var content = text.split('\n');
      content = content.map(function (line) {
        var regex = new RegExp(/\[([+-])?(([X0-9]{1})\s)?([a-z]+)\]/i);

        while (true) {
          var matches = regex.exec(line);

          if (!matches) {
            return line;
          }

          var modifier = matches[1];
          var amount = matches[3];
          var effect = matches[4];
          var string = '';

          if (effect === 'Pitch') {
            effect = 'resource';
          }

          if (effect === 'Power') {
            effect = 'attack';
          }

          effect = effect.toLowerCase();

          if (modifier) {
            string = modifier + amount + '<img src="/img/' + effect + '.png" class="inline-block h-5 align-middle">';
          } else if (amount) {
            for (var x = 0; x < amount; x++) {
              string += '<img src="/img/' + effect + '.png" class="inline-block h-5">';
            }
          } else {
            string += '<img src="/img/' + effect + '.png" class="inline-block h-5">';
          }

          line = line.replace(matches[0], string, line);
        }
      });
      return content.join('\n');
    },
    snakeCase: function snakeCase(string, delimiter) {
      if (!delimiter) delimiter = '_';
      return string.toLowerCase().replace(/[^0-9a-z\s]+/g, '').replace(/\s+/g, delimiter);
    },
    ucfirst: function ucfirst(string) {
      return string[0].toUpperCase() + string.slice(1);
    },
    imageDomain: function imageDomain() {
      return window.settings.imageDomain;
    },
    buildQuery: function buildQuery(params) {
      var esc = encodeURIComponent;
      return Object.keys(params).map(function (k) {
        return esc(k) + '=' + esc(params[k]);
      }).join('&');
    }
  }
});

/***/ })

}]);