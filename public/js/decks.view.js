(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["decks.view"],{

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
    },
    total: function total() {
      return this.card.total - this.card.sideboardTotal;
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Decks/Viewing/DeckVideo.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Decks/Viewing/DeckVideo.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    url: {
      required: true,
      type: String
    }
  },
  data: function data() {
    var params = new URLSearchParams('?' + this.url.split('?')[1]);
    var hasEmbed = this.url.indexOf('embed') !== -1;
    var actualUrl = hasEmbed ? this.url : 'https://www.youtube.com/embed/' + params.get('v');
    return {
      actualUrl: actualUrl
    };
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
/* harmony import */ var _Cards__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Cards */ "./resources/js/Decks/Viewing/Cards.vue");
/* harmony import */ var _DeckBuilder_DeckCurves__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../DeckBuilder/DeckCurves */ "./resources/js/DeckBuilder/DeckCurves.js");
/* harmony import */ var _DeckLabel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DeckLabel */ "./resources/js/Decks/Viewing/DeckLabel.vue");
/* harmony import */ var _DeckVideo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./DeckVideo */ "./resources/js/Decks/Viewing/DeckVideo.vue");
/* harmony import */ var _Discussion_Discussion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../Discussion/Discussion */ "./resources/js/Discussion/Discussion.vue");
/* harmony import */ var _Components_HeaderTitle_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../Components/HeaderTitle.vue */ "./resources/js/Components/HeaderTitle.vue");
/* harmony import */ var _Components_HeroAvatar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../Components/HeroAvatar */ "./resources/js/Components/HeroAvatar.vue");
/* harmony import */ var _Utilities_Imagery__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../Utilities/Imagery */ "./resources/js/Utilities/Imagery.js");
/* harmony import */ var _Components_Icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../Components/Icon */ "./resources/js/Components/Icon.vue");
/* harmony import */ var _Components_LazyLoader__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../Components/LazyLoader */ "./resources/js/Components/LazyLoader.js");
/* harmony import */ var _Discussion_Respond_vue__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../Discussion/Respond.vue */ "./resources/js/Discussion/Respond.vue");
/* harmony import */ var _CardDatabase_Rulings__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../CardDatabase/Rulings */ "./resources/js/CardDatabase/Rulings.vue");
/* harmony import */ var _Voting_Votes_vue__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../Voting/Votes.vue */ "./resources/js/Voting/Votes.vue");
/* harmony import */ var _Utilities_Models__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../Utilities/Models */ "./resources/js/Utilities/Models.js");
/* harmony import */ var _Deck__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../Deck */ "./resources/js/Decks/Deck.js");
/* harmony import */ var _Utilities_Strings__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../Utilities/Strings */ "./resources/js/Utilities/Strings.js");
/* harmony import */ var _DeckBuilder_Viewable__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../DeckBuilder/Viewable */ "./resources/js/DeckBuilder/Viewable.js");
/* harmony import */ var _Components_Shareable__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../Components/Shareable */ "./resources/js/Components/Shareable.js");
/* harmony import */ var _Components_Tabs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../Components/Tabs */ "./resources/js/Components/Tabs.vue");
/* harmony import */ var _Components_TabItem__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../Components/TabItem */ "./resources/js/Components/TabItem.vue");
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
//
//
//
//
//
//
//
//

























/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [_CardDatabase_Cardable__WEBPACK_IMPORTED_MODULE_4__["default"], _Components_Shareable__WEBPACK_IMPORTED_MODULE_22__["default"], _Utilities_Imagery__WEBPACK_IMPORTED_MODULE_12__["default"], _Utilities_Strings__WEBPACK_IMPORTED_MODULE_20__["default"], _DeckBuilder_Viewable__WEBPACK_IMPORTED_MODULE_21__["default"]],
  components: {
    Breadcrumbs: _Components_Breadcrumbs_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    Cards: _Cards__WEBPACK_IMPORTED_MODULE_5__["default"],
    DeckCurves: _DeckBuilder_DeckCurves__WEBPACK_IMPORTED_MODULE_6__["default"],
    DeckLabel: _DeckLabel__WEBPACK_IMPORTED_MODULE_7__["default"],
    DeckVideo: _DeckVideo__WEBPACK_IMPORTED_MODULE_8__["default"],
    Discussion: _Discussion_Discussion__WEBPACK_IMPORTED_MODULE_9__["default"],
    HeaderTitle: _Components_HeaderTitle_vue__WEBPACK_IMPORTED_MODULE_10__["default"],
    HeroAvatar: _Components_HeroAvatar__WEBPACK_IMPORTED_MODULE_11__["default"],
    Icon: _Components_Icon__WEBPACK_IMPORTED_MODULE_13__["default"],
    Respond: _Discussion_Respond_vue__WEBPACK_IMPORTED_MODULE_15__["default"],
    Rulings: _CardDatabase_Rulings__WEBPACK_IMPORTED_MODULE_16__["default"],
    TabItem: _Components_TabItem__WEBPACK_IMPORTED_MODULE_24__["default"],
    Tabs: _Components_Tabs__WEBPACK_IMPORTED_MODULE_23__["default"],
    Votes: _Voting_Votes_vue__WEBPACK_IMPORTED_MODULE_17__["default"]
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
  "extends": Object(_Components_LazyLoader__WEBPACK_IMPORTED_MODULE_14__["default"])(function (to, callback) {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/decks/' + to.params.deck).then(function (response) {
      callback(function () {
        this.deck = _Utilities_Models__WEBPACK_IMPORTED_MODULE_18__["default"].hydrate(response.data, _Deck__WEBPACK_IMPORTED_MODULE_19__["default"]);
      });
    });
  })
});

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
  return _c(
    "div",
    { staticClass: "flex items-center" },
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
          directives: [
            {
              name: "preview-card",
              rawName: "v-preview-card",
              value: { stack: [_vm.card], index: 0 },
              expression: "{stack: [card], index: 0}"
            },
            {
              name: "hover-card",
              rawName: "v-hover-card",
              value: _vm.card,
              expression: "card"
            }
          ],
          staticClass: "cursor-help help-underline"
        },
        [_vm._v(_vm._s(_vm.card.name))]
      ),
      _vm._v(" "),
      _vm.total()
        ? _c("span", { staticClass: "ml-1" }, [
            _vm._v("(" + _vm._s(_vm.total()) + ")")
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.card.sideboardTotal
        ? _c(
            "div",
            {
              staticClass: "flex items-center ml-auto",
              attrs: { title: _vm.card.sideboardTotal + " in sideboard" }
            },
            [
              _c("icon", { attrs: { size: 4 } }, [
                _c("path", {
                  attrs: { d: "M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" }
                }),
                _vm._v(" "),
                _c("path", {
                  attrs: {
                    "fill-rule": "evenodd",
                    d:
                      "M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z",
                    "clip-rule": "evenodd"
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "ml-1" }, [
                _vm._v("(" + _vm._s(_vm.card.sideboardTotal) + ")")
              ])
            ],
            1
          )
        : _vm._e()
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
      _vm._l(_vm.cards, function(card, index) {
        return _c(
          "li",
          {
            staticClass:
              "p-2 pl-4 odd:bg-gray-100 even:bg-gray-200 dark:odd:bg-gray-700 dark:even:bg-gray-600"
          },
          [
            _c("deck-card", {
              attrs: { card: card, collapse: true, "use-router": false }
            })
          ],
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Decks/Viewing/DeckVideo.vue?vue&type=template&id=0023d1e6&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Decks/Viewing/DeckVideo.vue?vue&type=template&id=0023d1e6& ***!
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
  return _c("iframe", {
    staticClass: "w-full",
    attrs: {
      src: _vm.actualUrl,
      height: "400",
      title: "YouTube video player",
      frameborder: "0",
      allow:
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
      allowfullscreen: ""
    }
  })
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
            _c("div", { staticClass: "bg-white dark:bg-gray-800" }, [
              _c("div", { staticClass: "container sm:mx-auto px-4 flex" }, [
                _c(
                  "div",
                  { staticClass: "flex-1 font-serif uppercase py-4 md:px-0" },
                  [
                    _vm._v(
                      "\n                        " +
                        _vm._s(_vm.deck.cards.total()) +
                        " Cards in deck  \n                        "
                    ),
                    _c("span", { staticClass: "hidden md:inline" }, [
                      _vm._v(
                        "\n                            (\n                            "
                      ),
                      _c("span", {
                        staticClass: "inline-block rounded-lg h-2 w-2",
                        class: _vm.resourceColour(3)
                      }),
                      _vm._v(
                        " " +
                          _vm._s(_vm.deck.cards.colouredCount("blue")) +
                          "  \n                            "
                      ),
                      _c("span", {
                        staticClass: "inline-block rounded-lg h-2 w-2",
                        class: _vm.resourceColour(2)
                      }),
                      _vm._v(
                        " " +
                          _vm._s(_vm.deck.cards.colouredCount("yellow")) +
                          "  \n                            "
                      ),
                      _c("span", {
                        staticClass: "inline-block rounded-lg h-2 w-2",
                        class: _vm.resourceColour(1)
                      }),
                      _vm._v(
                        " " +
                          _vm._s(_vm.deck.cards.colouredCount("red")) +
                          "\n                            )\n                        "
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
                        size: 5,
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
            _c("div", { staticClass: "main-body" }, [
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
                            "mt-4 rounded-lg bg-gray-100 dark:bg-gray-800 overflow-hidden"
                        },
                        [
                          _c(
                            "h3",
                            {
                              staticClass:
                                "font-serif uppercase text-xl mb-2 bg-white dark:bg-gray-700 p-2 px-4"
                            },
                            [_vm._v("Basic stats")]
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
                  _c(
                    "div",
                    { staticClass: "w-full md:w-3/4 md:py-4" },
                    [
                      _c(
                        "tabs",
                        [
                          _c("tab-item", { attrs: { name: "Composition" } }, [
                            _vm.deck.notes || _vm.deck.videoUrl
                              ? _c("div", { staticClass: "md:flex" }, [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "w-full md:w-2/3 md:pl-4 md:pr-8"
                                    },
                                    [
                                      _vm.deck.videoUrl
                                        ? _c(
                                            "div",
                                            { staticClass: "mb-8" },
                                            [
                                              _c("deck-video", {
                                                attrs: {
                                                  url: _vm.deck.videoUrl
                                                }
                                              })
                                            ],
                                            1
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _vm.deck.notes
                                        ? _c("div", {
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
                                          })
                                        : _vm._e(),
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
                                              heading: "Main deck"
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
                                              heading: "Main deck"
                                            }
                                          })
                                        : _vm._e()
                                    ],
                                    1
                                  )
                                ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "tab-item",
                            { attrs: { name: "Rulings" } },
                            [
                              _c("rulings", { attrs: { rulings: _vm.rulings } })
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
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
            _vm._m(0)
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
    return _c("div", { staticClass: "bg-gray-200" }, [
      _c("div", { staticClass: "container sm:mx-auto py-8 px-4" }, [
        _vm._v(
          "\n                    This deck is not yet ready for viewing or sharing, possibly because it's missing some required configuration.\n                "
        )
      ])
    ])
  }
]
render._withStripped = true



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

/***/ "./resources/js/Decks/Viewing/DeckVideo.vue":
/*!**************************************************!*\
  !*** ./resources/js/Decks/Viewing/DeckVideo.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DeckVideo_vue_vue_type_template_id_0023d1e6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DeckVideo.vue?vue&type=template&id=0023d1e6& */ "./resources/js/Decks/Viewing/DeckVideo.vue?vue&type=template&id=0023d1e6&");
/* harmony import */ var _DeckVideo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DeckVideo.vue?vue&type=script&lang=js& */ "./resources/js/Decks/Viewing/DeckVideo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DeckVideo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DeckVideo_vue_vue_type_template_id_0023d1e6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DeckVideo_vue_vue_type_template_id_0023d1e6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Decks/Viewing/DeckVideo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Decks/Viewing/DeckVideo.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/Decks/Viewing/DeckVideo.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DeckVideo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./DeckVideo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Decks/Viewing/DeckVideo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DeckVideo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Decks/Viewing/DeckVideo.vue?vue&type=template&id=0023d1e6&":
/*!*********************************************************************************!*\
  !*** ./resources/js/Decks/Viewing/DeckVideo.vue?vue&type=template&id=0023d1e6& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DeckVideo_vue_vue_type_template_id_0023d1e6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./DeckVideo.vue?vue&type=template&id=0023d1e6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Decks/Viewing/DeckVideo.vue?vue&type=template&id=0023d1e6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DeckVideo_vue_vue_type_template_id_0023d1e6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DeckVideo_vue_vue_type_template_id_0023d1e6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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