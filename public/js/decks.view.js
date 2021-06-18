(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["decks.view"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/CardDatabase/Rulings.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/CardDatabase/Rulings.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Utilities_Strings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Utilities/Strings */ "./resources/js/Utilities/Strings.js");
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
  mixins: [_Utilities_Strings__WEBPACK_IMPORTED_MODULE_0__["default"]],
  props: ['rulings']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/HeroAvatar.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Components/HeroAvatar.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Utilities_Imagery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Utilities/Imagery */ "./resources/js/Utilities/Imagery.js");
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [_Utilities_Imagery__WEBPACK_IMPORTED_MODULE_0__["default"]],
  props: {
    hero: {
      type: Object,
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/DeckBuilder/Colour.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/DeckBuilder/Colour.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CardDatabase_Cardable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../CardDatabase/Cardable */ "./resources/js/CardDatabase/Cardable.js");
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['resource'],
  mixins: [_CardDatabase_Cardable__WEBPACK_IMPORTED_MODULE_0__["default"]]
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Decks/DeckCard.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Decks/DeckCard.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DeckBuilder_Colour__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DeckBuilder/Colour */ "./resources/js/DeckBuilder/Colour.vue");
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
    card: {
      type: Object,
      required: true
    },
    collapse: {
      type: Boolean,
      "default": false,
      required: false
    },
    useRouter: {
      type: Boolean,
      "default": true
    }
  },
  components: {
    Colour: _DeckBuilder_Colour__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  methods: {
    toggleCard: function toggleCard(card) {
      this.$eventHub.$emit('hover-card', card);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Decks/Viewing/Cards.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Decks/Viewing/Cards.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DeckBuilder_Cards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../DeckBuilder/Cards */ "./resources/js/DeckBuilder/Cards.js");
/* harmony import */ var _DeckCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DeckCard */ "./resources/js/Decks/DeckCard.vue");
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
    cards: {
      type: _DeckBuilder_Cards__WEBPACK_IMPORTED_MODULE_0__["default"],
      required: true
    },
    heading: {
      type: String,
      required: true
    }
  },
  components: {
    DeckCard: _DeckCard__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Decks/Viewing/Label.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Decks/Viewing/Label.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Decks/Viewing/ViewDeck.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Decks/Viewing/ViewDeck.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Components_Breadcrumbs_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Components/Breadcrumbs.vue */ "./resources/js/Components/Breadcrumbs.vue");
/* harmony import */ var _CardDatabase_Cardable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../CardDatabase/Cardable */ "./resources/js/CardDatabase/Cardable.js");
/* harmony import */ var _DeckBuilder_DeckCurves__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../DeckBuilder/DeckCurves */ "./resources/js/DeckBuilder/DeckCurves.js");
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Label */ "./resources/js/Decks/Viewing/Label.vue");
/* harmony import */ var _Discussion_Discussion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Discussion/Discussion */ "./resources/js/Discussion/Discussion.vue");
/* harmony import */ var _Components_HeaderTitle_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Components/HeaderTitle.vue */ "./resources/js/Components/HeaderTitle.vue");
/* harmony import */ var _Components_HeroAvatar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../Components/HeroAvatar */ "./resources/js/Components/HeroAvatar.vue");
/* harmony import */ var _Utilities_Imagery__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../Utilities/Imagery */ "./resources/js/Utilities/Imagery.js");
/* harmony import */ var _Components_Icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../Components/Icon */ "./resources/js/Components/Icon.vue");
/* harmony import */ var _Components_LazyLoader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../Components/LazyLoader */ "./resources/js/Components/LazyLoader.js");
/* harmony import */ var _Discussion_Respond_vue__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../Discussion/Respond.vue */ "./resources/js/Discussion/Respond.vue");
/* harmony import */ var _CardDatabase_Rulings__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../CardDatabase/Rulings */ "./resources/js/CardDatabase/Rulings.vue");
/* harmony import */ var _Voting_Votes_vue__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../Voting/Votes.vue */ "./resources/js/Voting/Votes.vue");
/* harmony import */ var _Utilities_Models__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../Utilities/Models */ "./resources/js/Utilities/Models.js");
/* harmony import */ var _Deck__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../Deck */ "./resources/js/Decks/Deck.js");
/* harmony import */ var _Utilities_Strings__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../Utilities/Strings */ "./resources/js/Utilities/Strings.js");
/* harmony import */ var _Cards__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Cards */ "./resources/js/Decks/Viewing/Cards.vue");
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
  mixins: [_CardDatabase_Cardable__WEBPACK_IMPORTED_MODULE_4__["default"], _Utilities_Imagery__WEBPACK_IMPORTED_MODULE_10__["default"], _Utilities_Strings__WEBPACK_IMPORTED_MODULE_18__["default"]],
  components: {
    Breadcrumbs: _Components_Breadcrumbs_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    Cards: _Cards__WEBPACK_IMPORTED_MODULE_19__["default"],
    DeckCurves: _DeckBuilder_DeckCurves__WEBPACK_IMPORTED_MODULE_5__["default"],
    DeckLabel: _Label__WEBPACK_IMPORTED_MODULE_6__["default"],
    Discussion: _Discussion_Discussion__WEBPACK_IMPORTED_MODULE_7__["default"],
    HeaderTitle: _Components_HeaderTitle_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    HeroAvatar: _Components_HeroAvatar__WEBPACK_IMPORTED_MODULE_9__["default"],
    Icon: _Components_Icon__WEBPACK_IMPORTED_MODULE_11__["default"],
    Respond: _Discussion_Respond_vue__WEBPACK_IMPORTED_MODULE_13__["default"],
    Rulings: _CardDatabase_Rulings__WEBPACK_IMPORTED_MODULE_14__["default"],
    Votes: _Voting_Votes_vue__WEBPACK_IMPORTED_MODULE_15__["default"]
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])('session', ['user']), {
    cards: function cards() {
      return this.deck.cards || [];
    },
    crumbs: function crumbs() {
      return [{
        text: 'Home',
        link: {
          name: 'home'
        }
      }, {
        text: 'Decks',
        link: {
          name: 'decks.browse'
        }
      }, {
        text: this.deck.name
      }];
    },
    rulings: function rulings() {
      var rulings = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.flatten(this.deck.cards.all().map(function (card) {
        return lodash__WEBPACK_IMPORTED_MODULE_2___default.a.flatten(card.rulings.map(function (ruling) {
          return ruling.description;
        }));
      }));

      return lodash__WEBPACK_IMPORTED_MODULE_2___default.a.uniq(rulings);
    }
  }),
  data: function data() {
    return {
      deck: null,
      tab: 'composition'
    };
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])('messages', ['addMessage']), {
    copyDeck: function copyDeck() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/decks/copy', {
        deck: this.deck.slug
      }).then(function (response) {
        _this.addMessage({
          status: 'success',
          message: 'Deck successfully copied.'
        });

        _this.$router.push({
          name: 'decks.build',
          params: {
            deck: response.data.deck
          }
        });
      });
    },
    tabClasses: function tabClasses(tab) {
      if (this.tab === tab) {
        return 'relative bg-gray-200 -bottom-1px text-gray-800';
      }

      return 'bg-gray-200 hover:bg-white text-gray-600';
    }
  }),
  metaInfo: function metaInfo() {
    var title = 'View deck - ' + this.deck.name;
    var meta = [];

    if (this.deck.hero) {
      title += ' (' + this.deck.hero.name + ')';
      meta = [{
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
        content: 'A custom ' + this.deck.hero.keywords[0] + ' deck built at fabdb.net, utilising the hero, \'' + this.deck.hero.name + '\'.'
      }, {
        vmid: 'og:image',
        property: 'og:image',
        content: this.heroProfile(this.deck.hero, 300)
      }, {
        vmid: 'og:image:width',
        property: 'og:image:width',
        content: '450'
      }, {
        vmid: 'og:image:height',
        property: 'og:image:height',
        content: '628'
      }];
    } else {
      meta = [{
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
        content: 'A custom deck built at fabdb.net.'
      }];
    }

    return {
      title: title,
      meta: meta
    };
  },
  "extends": Object(_Components_LazyLoader__WEBPACK_IMPORTED_MODULE_12__["default"])(function (to, callback) {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/decks/' + to.params.deck).then(function (response) {
      callback(function () {
        this.deck = _Utilities_Models__WEBPACK_IMPORTED_MODULE_16__["default"].hydrate(response.data, _Deck__WEBPACK_IMPORTED_MODULE_17__["default"]);
      });
    });
  })
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/CardDatabase/Rulings.vue?vue&type=template&id=6105b018&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/CardDatabase/Rulings.vue?vue&type=template&id=6105b018& ***!
  \************************************************************************************************************************************************************************************************************/
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
    _vm._m(0),
    _vm._v(" "),
    _c(
      "ul",
      _vm._l(_vm.rulings, function(ruling) {
        return _c("li", {
          staticClass:
            "border-b border-gray-400 last:border-0 pr-4 sm:pr-2 text-base sm:-pl-4",
          domProps: { innerHTML: _vm._s(_vm.minimalMarkdown(ruling)) }
        })
      }),
      0
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h2", { staticClass: "border-b border-gray-500" }, [
      _c("div", { staticClass: "flex-1 py-2 uppercase font-serif" }, [
        _vm._v("\n            Rulings, Clarifications, Erratas.etc.\n        ")
      ])
    ])
  }
]
render._withStripped = true



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
  return _c("img", {
    staticClass: "rounded-full",
    attrs: { src: _vm.heroProfile(_vm.hero, this.width), alt: _vm.name }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/DeckBuilder/Colour.vue?vue&type=template&id=0f13f687&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/DeckBuilder/Colour.vue?vue&type=template&id=0f13f687& ***!
  \**********************************************************************************************************************************************************************************************************/
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
  return _vm.resource
    ? _c("div", {
        staticClass: "inline-block rounded-lg h-2 w-2",
        class: _vm.resourceColour(_vm.resource)
      })
    : _c("div", { staticClass: "inline-block h-2 w-2" })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Decks/DeckCard.vue?vue&type=template&id=42fa73c8&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Decks/DeckCard.vue?vue&type=template&id=42fa73c8& ***!
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
  return _vm.useRouter
    ? _c(
        "router-link",
        { staticClass: "block", attrs: { to: /cards/ + _vm.card.identifier } },
        [
          _vm.card.stats.resource || !_vm.collapse
            ? _c("colour", {
                staticClass: "mr-2",
                attrs: { resource: _vm.card.stats.resource }
              })
            : _vm._e(),
          _vm._v(" "),
          _c(
            "span",
            {
              on: {
                mouseover: function($event) {
                  return _vm.toggleCard(_vm.card)
                },
                mouseleave: function($event) {
                  return _vm.toggleCard(false)
                }
              }
            },
            [_vm._v(_vm._s(_vm.card.name))]
          ),
          _vm._v(" "),
          _c("span", [_vm._v("(" + _vm._s(_vm.card.total) + ")")])
        ],
        1
      )
    : _c(
        "a",
        {
          staticClass: "block",
          attrs: { href: "/cards/" + _vm.card.identifier, target: "_blank" }
        },
        [
          _vm.card.stats.resource || !_vm.collapse
            ? _c("colour", {
                staticClass: "mr-2",
                attrs: { resource: _vm.card.stats.resource }
              })
            : _vm._e(),
          _vm._v(" "),
          _c(
            "span",
            {
              on: {
                mouseover: function($event) {
                  return _vm.toggleCard(_vm.card)
                },
                mouseleave: function($event) {
                  return _vm.toggleCard(false)
                }
              }
            },
            [_vm._v(_vm._s(_vm.card.name))]
          ),
          _vm._v(" "),
          _c("span", [_vm._v("(" + _vm._s(_vm.card.total) + ")")])
        ],
        1
      )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Decks/Viewing/Cards.vue?vue&type=template&id=4afe6e1e&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Decks/Viewing/Cards.vue?vue&type=template&id=4afe6e1e& ***!
  \***********************************************************************************************************************************************************************************************************/
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
    _c("h3", { staticClass: "py-2 px-4 font-serif uppercase text-2xl" }, [
      _vm._v(_vm._s(_vm.heading) + " (" + _vm._s(_vm.cards.total()) + ")")
    ]),
    _vm._v(" "),
    _c(
      "ol",
      _vm._l(_vm.cards, function(card) {
        return _c(
          "li",
          { staticClass: "p-2 pl-4 odd:bg-gray-100" },
          [_c("deck-card", { attrs: { card: card, collapse: true } })],
          1
        )
      }),
      0
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Decks/Viewing/Label.vue?vue&type=template&id=3454d52f&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Decks/Viewing/Label.vue?vue&type=template&id=3454d52f& ***!
  \***********************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Decks/Viewing/ViewDeck.vue?vue&type=template&id=1b0e1803&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Decks/Viewing/ViewDeck.vue?vue&type=template&id=1b0e1803& ***!
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
  return _c("div", [
    _vm.deck && _vm.deck.hero
      ? _c(
          "div",
          [
            _c("header-title", {
              attrs: { title: _vm.deck.name + " (" + _vm.deck.hero.name + ")" }
            }),
            _vm._v(" "),
            _c("breadcrumbs", { attrs: { crumbs: _vm.crumbs } }),
            _vm._v(" "),
            _c("div", { staticClass: "bg-white" }, [
              _c("div", { staticClass: "container sm:mx-auto px-4 flex" }, [
                _c(
                  "div",
                  { staticClass: "flex-1 font-serif uppercase py-4 md:px-0" },
                  [
                    _vm._v(
                      "\n                    " +
                        _vm._s(_vm.deck.cards.total()) +
                        " Cards in deck  \n                    "
                    ),
                    _c("span", { staticClass: "hidden md:inline" }, [
                      _vm._v(
                        "\n                        (\n                        "
                      ),
                      _c("span", {
                        staticClass: "inline-block rounded-lg h-2 w-2",
                        class: _vm.resourceColour(3)
                      }),
                      _vm._v(
                        " " +
                          _vm._s(_vm.deck.cards.colouredCount("blue")) +
                          "  \n                        "
                      ),
                      _c("span", {
                        staticClass: "inline-block rounded-lg h-2 w-2",
                        class: _vm.resourceColour(2)
                      }),
                      _vm._v(
                        " " +
                          _vm._s(_vm.deck.cards.colouredCount("yellow")) +
                          "  \n                        "
                      ),
                      _c("span", {
                        staticClass: "inline-block rounded-lg h-2 w-2",
                        class: _vm.resourceColour(1)
                      }),
                      _vm._v(
                        " " +
                          _vm._s(_vm.deck.cards.colouredCount("red")) +
                          "\n                        )\n                    "
                      )
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "text-right mt-2" },
                  [
                    _c("votes", {
                      attrs: {
                        size: 6,
                        total: _vm.deck.fields.totalVotes,
                        voted: _vm.deck.fields.myVote,
                        voteable: "deck",
                        foreign: _vm.deck.slug
                      }
                    })
                  ],
                  1
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "bg-gray-200" }, [
              _c("div", { staticClass: "container sm:mx-auto px-4" }, [
                _c("div", { staticClass: "md:flex md:pt-0" }, [
                  _c(
                    "div",
                    { staticClass: "py-4 md:pr-4 md:w-1/4" },
                    [
                      _c("card-image", { attrs: { card: _vm.deck.hero } }),
                      _vm._v(" "),
                      _vm.deck.label
                        ? _c("deck-label", {
                            staticClass:
                              "block w-full py-2 text-center rounded-lg mt-4",
                            attrs: { label: _vm.deck.label }
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "mt-4 rounded-lg bg-gray-100 overflow-hidden"
                        },
                        [
                          _c(
                            "h3",
                            {
                              staticClass:
                                "font-serif uppercase text-2xl mb-2 bg-white p-2 px-4"
                            },
                            [_vm._v("Deck stats")]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "px-4" },
                            [
                              _c("ol", { staticClass: "mb-8" }, [
                                _c("li", { staticClass: "block py-1 w-full" }, [
                                  _vm._v(
                                    "Attack actions: " +
                                      _vm._s(
                                        _vm.deck.other.attackActions().total()
                                      )
                                  )
                                ]),
                                _vm._v(" "),
                                _c("li", { staticClass: "block py-1 w-full" }, [
                                  _vm._v(
                                    "Attack reactions: " +
                                      _vm._s(
                                        _vm.deck.other.attackReactions().total()
                                      )
                                  )
                                ]),
                                _vm._v(" "),
                                _c("li", { staticClass: "block py-1 w-full" }, [
                                  _vm._v(
                                    "Defense reactions: " +
                                      _vm._s(
                                        _vm.deck.other
                                          .defenseReactions()
                                          .total()
                                      )
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _c("deck-curves", {
                                staticClass: "mb-4",
                                staticStyle: { height: "200px" },
                                attrs: {
                                  cards: _vm.deck.other.withCost(),
                                  stat: "cost",
                                  strategy: "total"
                                }
                              }),
                              _vm._v(" "),
                              _c("deck-curves", {
                                staticStyle: { height: "200px" },
                                attrs: {
                                  cards: _vm.deck.other.withResource(),
                                  stat: "resource",
                                  strategy: "total"
                                }
                              })
                            ],
                            1
                          )
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "w-full md:w-3/4 md:py-4" }, [
                    _c("ul", { staticClass: "flex border-b border-gray-400" }, [
                      _c("li", { staticClass: "mr-2" }, [
                        _c(
                          "button",
                          {
                            staticClass:
                              "border border-b-0 border-gray-400 rounded-t-lg px-4 py-2",
                            class: _vm.tabClasses("composition"),
                            on: {
                              click: function($event) {
                                _vm.tab = "composition"
                              }
                            }
                          },
                          [_vm._v("Composition")]
                        )
                      ]),
                      _vm._v(" "),
                      _c("li", { staticClass: "mr-2" }, [
                        _c(
                          "button",
                          {
                            staticClass:
                              "border border-b-0 border-gray-400 rounded-t-lg px-4 py-2",
                            class: _vm.tabClasses("rulings"),
                            on: {
                              click: function($event) {
                                _vm.tab = "rulings"
                              }
                            }
                          },
                          [_vm._v("Rulings")]
                        )
                      ]),
                      _vm._v(" "),
                      _c("li", { staticClass: "mt-1 ml-4" }, [
                        _c(
                          "a",
                          {
                            staticClass:
                              "flex items-center w-full sm:w-auto button-primary rounded px-3 py-2 text-base",
                            attrs: {
                              href: _vm.buyLink(_vm.deck),
                              target: "_blank"
                            }
                          },
                          [
                            _c("icon", { attrs: { size: 4 } }, [
                              _c("path", {
                                attrs: {
                                  d:
                                    "M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"
                                }
                              }),
                              _vm._v(" "),
                              _c("path", {
                                attrs: {
                                  "fill-rule": "evenodd",
                                  d:
                                    "M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z",
                                  "clip-rule": "evenodd"
                                }
                              })
                            ]),
                            _vm._v(" "),
                            _vm._m(0)
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c("li", { staticClass: "ml-2 mt-1" }, [
                        _c(
                          "button",
                          {
                            staticClass:
                              "sm:flex items-center w-full hidden sm:w-auto button-primary rounded px-3 py-2 text-base",
                            on: { click: _vm.copyDeck }
                          },
                          [
                            _c("icon", { attrs: { size: 4 } }, [
                              _c("path", {
                                attrs: {
                                  d:
                                    "M6 6V2c0-1.1.9-2 2-2h10a2 2 0 012 2v10a2 2 0 01-2 2h-4v4a2 2 0 01-2 2H2a2 2 0 01-2-2V8c0-1.1.9-2 2-2h4zm2 0h4a2 2 0 012 2v4h4V2H8v4zM2 8v10h10V8H2z"
                                }
                              })
                            ]),
                            _vm._v(" "),
                            _vm._m(1)
                          ],
                          1
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _vm.tab === "composition"
                      ? _c("div", { staticClass: "bg-gray-200 py-4" }, [
                          _vm.deck.notes
                            ? _c("div", { staticClass: "md:flex" }, [
                                _c(
                                  "div",
                                  { staticClass: "w-full md:w-2/3 pl-4 pr-8" },
                                  [
                                    _c("div", {
                                      staticClass: "mb-8",
                                      domProps: {
                                        innerHTML: _vm._s(
                                          _vm.minimalMarkdown(
                                            _vm.deck.notes.replace(
                                              /(?:https?|ftp):\/\/[\n\S]+/g,
                                              ""
                                            )
                                          )
                                        )
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "border-t border-gray-400 mt-4"
                                      },
                                      [
                                        _c("discussion", {
                                          staticClass: "pb-8",
                                          attrs: {
                                            type: "deck",
                                            id: _vm.deck.slug
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "w-full md:w-1/3" },
                                  [
                                    _vm.deck.weapons.total()
                                      ? _c("cards", {
                                          staticClass: "mb-8",
                                          attrs: {
                                            cards: _vm.deck.weapons,
                                            heading: "Weapons"
                                          }
                                        })
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.deck.equipment.total()
                                      ? _c("cards", {
                                          staticClass: "mb-8",
                                          attrs: {
                                            cards: _vm.deck.equipment,
                                            heading: "Equipment"
                                          }
                                        })
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.deck.other.total()
                                      ? _c("cards", {
                                          attrs: {
                                            cards: _vm.deck.other,
                                            heading: "Other"
                                          }
                                        })
                                      : _vm._e()
                                  ],
                                  1
                                )
                              ])
                            : _c("div", { staticClass: "md:flex" }, [
                                _c(
                                  "div",
                                  {
                                    staticClass: "w-full md:w-1/3",
                                    class: { "pr-4": !_vm.deck.notes }
                                  },
                                  [
                                    _vm.deck.weapons.total()
                                      ? _c("cards", {
                                          staticClass: "mb-8",
                                          attrs: {
                                            cards: _vm.deck.weapons,
                                            heading: "Weapons"
                                          }
                                        })
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.deck.equipment.total()
                                      ? _c("cards", {
                                          staticClass: "mb-8",
                                          attrs: {
                                            cards: _vm.deck.equipment,
                                            heading: "Equipment"
                                          }
                                        })
                                      : _vm._e()
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "w-full md:w-1/3" },
                                  [
                                    _vm.deck.other.total()
                                      ? _c("cards", {
                                          attrs: {
                                            cards: _vm.deck.other,
                                            heading: "Other"
                                          }
                                        })
                                      : _vm._e()
                                  ],
                                  1
                                )
                              ])
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.tab == "rulings"
                      ? _c(
                          "div",
                          { staticClass: "md:pl-4 bg-gray-200 py-2" },
                          [_c("rulings", { attrs: { rulings: _vm.rulings } })],
                          1
                        )
                      : _vm._e()
                  ])
                ]),
                _vm._v(" "),
                !_vm.deck.notes
                  ? _c(
                      "div",
                      { staticClass: "border-t border-gray-400 mt-4" },
                      [
                        _c("discussion", {
                          staticClass: "pb-8",
                          attrs: { type: "deck", id: _vm.deck.slug }
                        })
                      ],
                      1
                    )
                  : _vm._e()
              ])
            ])
          ],
          1
        )
      : _c(
          "div",
          [
            _c("header-title", { attrs: { title: _vm.deck.name } }),
            _vm._v(" "),
            _c("breadcrumbs", { attrs: { crumbs: _vm.crumbs } }),
            _vm._v(" "),
            _vm._m(2)
          ],
          1
        )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "ml-1" }, [
      _vm._v("Buy "),
      _c("span", { staticClass: "hidden sm:inline" }, [_vm._v("deck")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "ml-1" }, [
      _vm._v("Copy "),
      _c("span", { staticClass: "hidden sm:inline" }, [_vm._v("deck")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "bg-gray-200" }, [
      _c("div", { staticClass: "container sm:mx-auto py-8 px-4" }, [
        _vm._v(
          "\n                This deck is not yet ready for viewing or sharing, possibly because it's missing some required configuration.\n            "
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/CardDatabase/Rulings.vue":
/*!***********************************************!*\
  !*** ./resources/js/CardDatabase/Rulings.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Rulings_vue_vue_type_template_id_6105b018___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Rulings.vue?vue&type=template&id=6105b018& */ "./resources/js/CardDatabase/Rulings.vue?vue&type=template&id=6105b018&");
/* harmony import */ var _Rulings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Rulings.vue?vue&type=script&lang=js& */ "./resources/js/CardDatabase/Rulings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Rulings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Rulings_vue_vue_type_template_id_6105b018___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Rulings_vue_vue_type_template_id_6105b018___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/CardDatabase/Rulings.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/CardDatabase/Rulings.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/CardDatabase/Rulings.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Rulings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Rulings.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/CardDatabase/Rulings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Rulings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/CardDatabase/Rulings.vue?vue&type=template&id=6105b018&":
/*!******************************************************************************!*\
  !*** ./resources/js/CardDatabase/Rulings.vue?vue&type=template&id=6105b018& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Rulings_vue_vue_type_template_id_6105b018___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Rulings.vue?vue&type=template&id=6105b018& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/CardDatabase/Rulings.vue?vue&type=template&id=6105b018&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Rulings_vue_vue_type_template_id_6105b018___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Rulings_vue_vue_type_template_id_6105b018___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./resources/js/DeckBuilder/Colour.vue":
/*!*********************************************!*\
  !*** ./resources/js/DeckBuilder/Colour.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Colour_vue_vue_type_template_id_0f13f687___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Colour.vue?vue&type=template&id=0f13f687& */ "./resources/js/DeckBuilder/Colour.vue?vue&type=template&id=0f13f687&");
/* harmony import */ var _Colour_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Colour.vue?vue&type=script&lang=js& */ "./resources/js/DeckBuilder/Colour.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Colour_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Colour_vue_vue_type_template_id_0f13f687___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Colour_vue_vue_type_template_id_0f13f687___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/DeckBuilder/Colour.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/DeckBuilder/Colour.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/DeckBuilder/Colour.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Colour_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Colour.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/DeckBuilder/Colour.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Colour_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/DeckBuilder/Colour.vue?vue&type=template&id=0f13f687&":
/*!****************************************************************************!*\
  !*** ./resources/js/DeckBuilder/Colour.vue?vue&type=template&id=0f13f687& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Colour_vue_vue_type_template_id_0f13f687___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Colour.vue?vue&type=template&id=0f13f687& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/DeckBuilder/Colour.vue?vue&type=template&id=0f13f687&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Colour_vue_vue_type_template_id_0f13f687___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Colour_vue_vue_type_template_id_0f13f687___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/DeckBuilder/DeckCurves.js":
/*!************************************************!*\
  !*** ./resources/js/DeckBuilder/DeckCurves.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/es/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = ({
  "extends": vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["Bar"],
  props: {
    cards: {
      required: true,
      type: Object
    },
    stat: {
      required: true,
      type: String
    },
    strategy: {
      required: true,
      type: String,
      validator: function validator(value) {
        return ['total', 'length'].indexOf(value) !== -1;
      }
    }
  },
  methods: {
    colours: function colours(values) {
      if (this.stat === 'resource') {
        return ['239,68,68', '251,191,37', '96,165,250'];
      } // Construct a colour set for cost from blue -> red (red for most costly)


      var colours = [];

      for (var i = 0; i < values.length; i++) {
        var green = 180 - 180 * (i / values.length);
        var red = i / values.length * 255;
        colours.push([red + ', ' + green + ', 30']);
      }

      return colours;
    },
    update: function update(cards) {
      var _this = this;

      var values = this.values(cards);
      var label = this.stat === 'resource' ? 'Pitch' : 'Cost';
      var colours = this.colours(lodash__WEBPACK_IMPORTED_MODULE_1___default.a.keys(values));
      var chartData = {
        labels: lodash__WEBPACK_IMPORTED_MODULE_1___default.a.keys(values).map(function (label) {
          return _this.stat === 'resource' ? 'Pitch ' + label : 'Cost ' + label;
        }),
        datasets: [{
          label: label,
          backgroundColor: colours.map(function (colour) {
            return 'rgba(' + colour + ', 0.6)';
          }),
          borderColor: colours.map(function (colour) {
            return 'rgba(' + colour + ', 1)';
          }),
          borderWidth: 1,
          data: lodash__WEBPACK_IMPORTED_MODULE_1___default.a.values(values)
        }]
      };
      this.renderChart(chartData, {
        legend: {
          display: true,
          position: 'bottom'
        },
        responsive: true,
        maintainAspectRatio: false,
        fill: false,
        scales: {
          xAxes: [{
            gridLines: {
              display: false
            }
          }],
          yAxes: [{
            ticks: {
              stepSize: 10,
              suggestedMin: 0
            }
          }]
        }
      });
    },
    values: function values(cards) {
      var _this2 = this;

      return lodash__WEBPACK_IMPORTED_MODULE_1___default()(cards.all()).groupBy(function (card) {
        return card.stats[_this2.stat] || 0;
      }).mapValues(function (cards) {
        if (_this2.strategy === 'total') {
          return cards.reduce(function (carry, card) {
            return carry + card.total;
          }, 0);
        } else {
          return cards.length;
        }
      }).value();
    }
  },
  watch: {
    cards: function cards(_cards) {
      this.update(_cards);
    }
  },
  mounted: function mounted() {
    this.update(this.cards);
  }
});

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

/***/ "./resources/js/Decks/DeckCard.vue":
/*!*****************************************!*\
  !*** ./resources/js/Decks/DeckCard.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DeckCard_vue_vue_type_template_id_42fa73c8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DeckCard.vue?vue&type=template&id=42fa73c8& */ "./resources/js/Decks/DeckCard.vue?vue&type=template&id=42fa73c8&");
/* harmony import */ var _DeckCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DeckCard.vue?vue&type=script&lang=js& */ "./resources/js/Decks/DeckCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DeckCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DeckCard_vue_vue_type_template_id_42fa73c8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DeckCard_vue_vue_type_template_id_42fa73c8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Decks/DeckCard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Decks/DeckCard.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/Decks/DeckCard.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DeckCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./DeckCard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Decks/DeckCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DeckCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Decks/DeckCard.vue?vue&type=template&id=42fa73c8&":
/*!************************************************************************!*\
  !*** ./resources/js/Decks/DeckCard.vue?vue&type=template&id=42fa73c8& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DeckCard_vue_vue_type_template_id_42fa73c8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./DeckCard.vue?vue&type=template&id=42fa73c8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Decks/DeckCard.vue?vue&type=template&id=42fa73c8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DeckCard_vue_vue_type_template_id_42fa73c8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DeckCard_vue_vue_type_template_id_42fa73c8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Decks/Viewing/Cards.vue":
/*!**********************************************!*\
  !*** ./resources/js/Decks/Viewing/Cards.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Cards_vue_vue_type_template_id_4afe6e1e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cards.vue?vue&type=template&id=4afe6e1e& */ "./resources/js/Decks/Viewing/Cards.vue?vue&type=template&id=4afe6e1e&");
/* harmony import */ var _Cards_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Cards.vue?vue&type=script&lang=js& */ "./resources/js/Decks/Viewing/Cards.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Cards_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Cards_vue_vue_type_template_id_4afe6e1e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Cards_vue_vue_type_template_id_4afe6e1e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Decks/Viewing/Cards.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Decks/Viewing/Cards.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/Decks/Viewing/Cards.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Cards_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Cards.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Decks/Viewing/Cards.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Cards_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Decks/Viewing/Cards.vue?vue&type=template&id=4afe6e1e&":
/*!*****************************************************************************!*\
  !*** ./resources/js/Decks/Viewing/Cards.vue?vue&type=template&id=4afe6e1e& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Cards_vue_vue_type_template_id_4afe6e1e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Cards.vue?vue&type=template&id=4afe6e1e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Decks/Viewing/Cards.vue?vue&type=template&id=4afe6e1e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Cards_vue_vue_type_template_id_4afe6e1e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Cards_vue_vue_type_template_id_4afe6e1e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Decks/Viewing/Label.vue":
/*!**********************************************!*\
  !*** ./resources/js/Decks/Viewing/Label.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Label_vue_vue_type_template_id_3454d52f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Label.vue?vue&type=template&id=3454d52f& */ "./resources/js/Decks/Viewing/Label.vue?vue&type=template&id=3454d52f&");
/* harmony import */ var _Label_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Label.vue?vue&type=script&lang=js& */ "./resources/js/Decks/Viewing/Label.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Label_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Label_vue_vue_type_template_id_3454d52f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Label_vue_vue_type_template_id_3454d52f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Decks/Viewing/Label.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Decks/Viewing/Label.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/Decks/Viewing/Label.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Label_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Label.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Decks/Viewing/Label.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Label_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Decks/Viewing/Label.vue?vue&type=template&id=3454d52f&":
/*!*****************************************************************************!*\
  !*** ./resources/js/Decks/Viewing/Label.vue?vue&type=template&id=3454d52f& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Label_vue_vue_type_template_id_3454d52f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Label.vue?vue&type=template&id=3454d52f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Decks/Viewing/Label.vue?vue&type=template&id=3454d52f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Label_vue_vue_type_template_id_3454d52f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Label_vue_vue_type_template_id_3454d52f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Decks/Viewing/ViewDeck.vue":
/*!*************************************************!*\
  !*** ./resources/js/Decks/Viewing/ViewDeck.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ViewDeck_vue_vue_type_template_id_1b0e1803___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ViewDeck.vue?vue&type=template&id=1b0e1803& */ "./resources/js/Decks/Viewing/ViewDeck.vue?vue&type=template&id=1b0e1803&");
/* harmony import */ var _ViewDeck_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ViewDeck.vue?vue&type=script&lang=js& */ "./resources/js/Decks/Viewing/ViewDeck.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ViewDeck_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ViewDeck_vue_vue_type_template_id_1b0e1803___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ViewDeck_vue_vue_type_template_id_1b0e1803___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Decks/Viewing/ViewDeck.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Decks/Viewing/ViewDeck.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/Decks/Viewing/ViewDeck.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewDeck_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ViewDeck.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Decks/Viewing/ViewDeck.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewDeck_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Decks/Viewing/ViewDeck.vue?vue&type=template&id=1b0e1803&":
/*!********************************************************************************!*\
  !*** ./resources/js/Decks/Viewing/ViewDeck.vue?vue&type=template&id=1b0e1803& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewDeck_vue_vue_type_template_id_1b0e1803___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ViewDeck.vue?vue&type=template&id=1b0e1803& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Decks/Viewing/ViewDeck.vue?vue&type=template&id=1b0e1803&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewDeck_vue_vue_type_template_id_1b0e1803___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewDeck_vue_vue_type_template_id_1b0e1803___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);