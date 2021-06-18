(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["decks.starters"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Decks/StarterDeck.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Decks/StarterDeck.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CardDatabase_Cardable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../CardDatabase/Cardable */ "./resources/js/CardDatabase/Cardable.js");
/* harmony import */ var _Deck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Deck */ "./resources/js/Decks/Deck.js");
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
      type: _Deck__WEBPACK_IMPORTED_MODULE_1__["default"]
    }
  },
  mixins: [_CardDatabase_Cardable__WEBPACK_IMPORTED_MODULE_0__["default"]]
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Decks/Starters.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Decks/Starters.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Components_Breadcrumbs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Components/Breadcrumbs */ "./resources/js/Components/Breadcrumbs.vue");
/* harmony import */ var _Deck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Deck */ "./resources/js/Decks/Deck.js");
/* harmony import */ var _Components_HeaderTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/HeaderTitle */ "./resources/js/Components/HeaderTitle.vue");
/* harmony import */ var _Components_LazyLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/LazyLoader */ "./resources/js/Components/LazyLoader.js");
/* harmony import */ var _Utilities_Models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Utilities/Models */ "./resources/js/Utilities/Models.js");
/* harmony import */ var _StarterDeck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./StarterDeck */ "./resources/js/Decks/StarterDeck.vue");
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
    Breadcrumbs: _Components_Breadcrumbs__WEBPACK_IMPORTED_MODULE_0__["default"],
    HeaderTitle: _Components_HeaderTitle__WEBPACK_IMPORTED_MODULE_2__["default"],
    StarterDeck: _StarterDeck__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  data: function data() {
    return {
      crumbs: [{
        text: 'Home',
        link: '/'
      }, {
        text: 'Starter decks'
      }],
      decks: []
    };
  },
  "extends": Object(_Components_LazyLoader__WEBPACK_IMPORTED_MODULE_3__["default"])(function (to, callback) {
    axios.get('/decks/starters').then(function (response) {
      callback(function () {
        this.decks = _Utilities_Models__WEBPACK_IMPORTED_MODULE_4__["default"].hydrateMany(response.data, _Deck__WEBPACK_IMPORTED_MODULE_1__["default"]);
      });
    });
  }),
  metaInfo: function metaInfo() {
    return {
      title: 'Flesh and Blood TCG Starter Decks',
      meta: [{
        vmid: 'description',
        name: 'description',
        content: 'View and purchase Flesh & Blood TCG starter decks, from cards on TCG Player.'
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Decks/StarterDeck.vue?vue&type=template&id=3e289be5&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Decks/StarterDeck.vue?vue&type=template&id=3e289be5& ***!
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
  return _c(
    "div",
    {
      staticClass: "mx-2 bg-semi-black bg-semi-black p-4 sm:p-2 mb-4 rounded-xl"
    },
    [
      _c("card-image", { attrs: { card: _vm.deck.hero } }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "flex justify-center mt-2 text-base" },
        [
          _c(
            "a",
            {
              staticClass:
                "block button-primary w-1/2 text-center px-3 py-2 rounded-l mr-1",
              attrs: { href: _vm.buyLink(_vm.deck), target: "_blank" }
            },
            [_vm._v("Buy")]
          ),
          _vm._v(" "),
          _c(
            "router-link",
            {
              staticClass:
                "block button-secondary w-1/2 text-center px-3 py-2 rounded-r",
              attrs: {
                to: { name: "decks.view", params: { deck: _vm.deck.slug } }
              }
            },
            [_vm._v("View")]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Decks/Starters.vue?vue&type=template&id=31b809f2&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Decks/Starters.vue?vue&type=template&id=31b809f2& ***!
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
      _c("header-title", { attrs: { title: "Starter decks" } }),
      _vm._v(" "),
      _c("div", { staticClass: "container mx-auto mt-8 sm:mt-0" }, [
        _vm._m(0),
        _vm._v(" "),
        _vm.decks.length
          ? _c(
              "div",
              { staticClass: "flex flex-wrap mt-8 mx-2" },
              _vm._l(_vm.decks, function(deck) {
                return _c(
                  "div",
                  {
                    key: _vm.decks.slug,
                    staticClass: "w-full sm:w-1/2 md:w-1/4"
                  },
                  [_c("starter-deck", { attrs: { deck: deck } })],
                  1
                )
              }),
              0
            )
          : _vm._e()
      ])
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "px-4" }, [
      _c(
        "p",
        { staticClass: "text-gray-400 bg-semi-black p-4 rounded-lg leading-8" },
        [
          _c(
            "span",
            {
              staticClass:
                "block text-5xl font-serif uppercase float-left relative leading-3",
              staticStyle: { top: "15px" }
            },
            [_vm._v("L")]
          ),
          _vm._v(
            "ooking for the Official starter decks? Want to import them into TTS, or simply want to create your own\n                deck from them? Look no further! This page lists all of the official Flesh & Blood starter decks, as well as\n                providing all the usual features you've come to expect from FaB DB!\n            "
          )
        ]
      )
    ])
  }
]
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

/***/ "./resources/js/Decks/Deck.js":
/*!************************************!*\
  !*** ./resources/js/Decks/Deck.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DeckBuilder_Cards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DeckBuilder/Cards */ "./resources/js/DeckBuilder/Cards.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Deck =
/*#__PURE__*/
function () {
  function Deck(fields) {
    _classCallCheck(this, Deck);

    this.fields = fields;
  }

  _createClass(Deck, [{
    key: "name",
    get: function get() {
      return this.fields.name;
    }
  }, {
    key: "label",
    get: function get() {
      return this.fields.label || '';
    }
  }, {
    key: "notes",
    get: function get() {
      return this.fields.notes;
    }
  }, {
    key: "cards",
    get: function get() {
      return new _DeckBuilder_Cards__WEBPACK_IMPORTED_MODULE_0__["default"](this.fields.cards);
    }
  }, {
    key: "hero",
    get: function get() {
      return this.cards.hero();
    }
  }, {
    key: "weapons",
    get: function get() {
      return this.cards.weapons();
    }
  }, {
    key: "equipment",
    get: function get() {
      return this.cards.equipment();
    }
  }, {
    key: "other",
    get: function get() {
      return this.cards.other();
    }
  }, {
    key: "format",
    get: function get() {
      return this.fields.format;
    }
  }, {
    key: "slug",
    get: function get() {
      return this.fields.slug;
    }
  }]);

  return Deck;
}();

/* harmony default export */ __webpack_exports__["default"] = (Deck);

/***/ }),

/***/ "./resources/js/Decks/StarterDeck.vue":
/*!********************************************!*\
  !*** ./resources/js/Decks/StarterDeck.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StarterDeck_vue_vue_type_template_id_3e289be5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StarterDeck.vue?vue&type=template&id=3e289be5& */ "./resources/js/Decks/StarterDeck.vue?vue&type=template&id=3e289be5&");
/* harmony import */ var _StarterDeck_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StarterDeck.vue?vue&type=script&lang=js& */ "./resources/js/Decks/StarterDeck.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _StarterDeck_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _StarterDeck_vue_vue_type_template_id_3e289be5___WEBPACK_IMPORTED_MODULE_0__["render"],
  _StarterDeck_vue_vue_type_template_id_3e289be5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Decks/StarterDeck.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Decks/StarterDeck.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/Decks/StarterDeck.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StarterDeck_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./StarterDeck.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Decks/StarterDeck.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StarterDeck_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Decks/StarterDeck.vue?vue&type=template&id=3e289be5&":
/*!***************************************************************************!*\
  !*** ./resources/js/Decks/StarterDeck.vue?vue&type=template&id=3e289be5& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StarterDeck_vue_vue_type_template_id_3e289be5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./StarterDeck.vue?vue&type=template&id=3e289be5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Decks/StarterDeck.vue?vue&type=template&id=3e289be5&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StarterDeck_vue_vue_type_template_id_3e289be5___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StarterDeck_vue_vue_type_template_id_3e289be5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Decks/Starters.vue":
/*!*****************************************!*\
  !*** ./resources/js/Decks/Starters.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Starters_vue_vue_type_template_id_31b809f2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Starters.vue?vue&type=template&id=31b809f2& */ "./resources/js/Decks/Starters.vue?vue&type=template&id=31b809f2&");
/* harmony import */ var _Starters_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Starters.vue?vue&type=script&lang=js& */ "./resources/js/Decks/Starters.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Starters_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Starters_vue_vue_type_template_id_31b809f2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Starters_vue_vue_type_template_id_31b809f2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Decks/Starters.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Decks/Starters.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/Decks/Starters.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Starters_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Starters.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Decks/Starters.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Starters_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Decks/Starters.vue?vue&type=template&id=31b809f2&":
/*!************************************************************************!*\
  !*** ./resources/js/Decks/Starters.vue?vue&type=template&id=31b809f2& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Starters_vue_vue_type_template_id_31b809f2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Starters.vue?vue&type=template&id=31b809f2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Decks/Starters.vue?vue&type=template&id=31b809f2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Starters_vue_vue_type_template_id_31b809f2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Starters_vue_vue_type_template_id_31b809f2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Utilities/Models.js":
/*!******************************************!*\
  !*** ./resources/js/Utilities/Models.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  hydrateMany: function hydrateMany(records, klass) {
    var _this = this;

    return records.map(function (record) {
      return _this.hydrate(record, klass);
    });
  },
  hydrate: function hydrate(record, klass) {
    return new klass(record);
  },
  hydratePaginated: function hydratePaginated(data, klass) {
    data.data = this.hydrateMany(data.data, klass);
    return data;
  }
});

/***/ })

}]);