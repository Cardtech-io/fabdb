(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cards.view"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/CardDatabase/CardNav.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/CardDatabase/CardNav.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
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
  props: ['text', 'to'],
  computed: {
    classes: function classes() {
      return this.to ? 'button-primary' : 'button-disabled';
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/CardDatabase/LanguageSelector.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/CardDatabase/LanguageSelector.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
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
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    languages: {
      required: true,
      type: Object
    }
  },
  data: function data() {
    return {
      selected: 'en',
      isOpen: false
    };
  },
  methods: {
    select: function select(code) {
      if (code !== this.code) {
        this.isOpen = false;
        this.selected = code;
        this.$emit('language-selected', code);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/CardDatabase/Metrics/CardPrice.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/CardDatabase/Metrics/CardPrice.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CardPriceChart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardPriceChart */ "./resources/js/CardDatabase/Metrics/CardPriceChart.js");
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['card'],
  components: {
    CardPriceChart: _CardPriceChart__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/CardDatabase/RecentDecks.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/CardDatabase/RecentDecks.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Decks_Deck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Decks/Deck */ "./resources/js/Decks/Deck.js");
/* harmony import */ var _Decks_Viewing_DeckLabel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Decks/Viewing/DeckLabel */ "./resources/js/Decks/Viewing/DeckLabel.vue");
/* harmony import */ var _Decks_Viewing_FormatLabel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Decks/Viewing/FormatLabel */ "./resources/js/Decks/Viewing/FormatLabel.vue");
/* harmony import */ var _Components_HeroAvatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/HeroAvatar */ "./resources/js/Components/HeroAvatar.vue");
/* harmony import */ var _Utilities_Models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Utilities/Models */ "./resources/js/Utilities/Models.js");
//
//
//
//
//
//
//
//
//
//
//
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
      required: true,
      type: Object
    }
  },
  components: {
    DeckLabel: _Decks_Viewing_DeckLabel__WEBPACK_IMPORTED_MODULE_1__["default"],
    FormatLabel: _Decks_Viewing_FormatLabel__WEBPACK_IMPORTED_MODULE_2__["default"],
    HeroAvatar: _Components_HeroAvatar__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      decks: []
    };
  },
  mounted: function mounted() {
    var _this = this;

    axios.get('/decks?card=' + this.card.identifier + '&per_page=5').then(function (response) {
      _this.decks = _Utilities_Models__WEBPACK_IMPORTED_MODULE_4__["default"].hydrateMany(response.data.data, _Decks_Deck__WEBPACK_IMPORTED_MODULE_0__["default"]);
    });
  }
});

/***/ }),

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/CardDatabase/SuggestCorrection.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/CardDatabase/SuggestCorrection.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Components_Form_Submit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/Form/Submit */ "./resources/js/Components/Form/Submit.vue");
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



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Submit: _Components_Form_Submit__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: {
    identifier: {
      required: true
    },
    printing: {
      required: true
    }
  },
  data: function data() {
    return {
      name: this.printing.name,
      text: this.printing.text,
      comment: ''
    };
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('messages', ['addMessage']), {
    submit: function submit() {
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('cards/' + this.identifier + '/corrections', {
        printing: this.printing.sku.sku,
        name: this.name,
        text: this.text,
        comment: this.comment
      });
      this.$modal.hide('suggestion');
      this.addMessage({
        status: 'success',
        message: 'Thank you!'
      });
    }
  }),
  mounted: function mounted() {
    console.log(this.printing);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/CardDatabase/ViewCard.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/CardDatabase/ViewCard.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components_Advertisement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/Advertisement */ "./resources/js/Components/Advertisement.vue");
/* harmony import */ var _Banned__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Banned */ "./resources/js/CardDatabase/Banned.vue");
/* harmony import */ var _Components_Breadcrumbs_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/Breadcrumbs.vue */ "./resources/js/Components/Breadcrumbs.vue");
/* harmony import */ var _Cardable_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Cardable.js */ "./resources/js/CardDatabase/Cardable.js");
/* harmony import */ var _CardImage_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CardImage.vue */ "./resources/js/CardDatabase/CardImage.vue");
/* harmony import */ var _Metrics_CardPrice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Metrics/CardPrice */ "./resources/js/CardDatabase/Metrics/CardPrice.vue");
/* harmony import */ var _CardNav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CardNav */ "./resources/js/CardDatabase/CardNav.vue");
/* harmony import */ var _Discussion_Discussion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Discussion/Discussion */ "./resources/js/Discussion/Discussion.vue");
/* harmony import */ var _Components_HeaderTitle_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Components/HeaderTitle.vue */ "./resources/js/Components/HeaderTitle.vue");
/* harmony import */ var _Utilities_Imagery__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Utilities/Imagery */ "./resources/js/Utilities/Imagery.js");
/* harmony import */ var _LanguageSelector__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./LanguageSelector */ "./resources/js/CardDatabase/LanguageSelector.vue");
/* harmony import */ var _Decks_Featured_LatestDecks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Decks/Featured/LatestDecks */ "./resources/js/Decks/Featured/LatestDecks.vue");
/* harmony import */ var _Components_LazyLoader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Components/LazyLoader */ "./resources/js/Components/LazyLoader.js");
/* harmony import */ var _Pricing_vue__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Pricing.vue */ "./resources/js/CardDatabase/Pricing.vue");
/* harmony import */ var _RecentDecks__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./RecentDecks */ "./resources/js/CardDatabase/RecentDecks.vue");
/* harmony import */ var _Rulings__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Rulings */ "./resources/js/CardDatabase/Rulings.vue");
/* harmony import */ var _Utilities_Strings__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../Utilities/Strings */ "./resources/js/Utilities/Strings.js");
/* harmony import */ var _SuggestCorrection__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./SuggestCorrection */ "./resources/js/CardDatabase/SuggestCorrection.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  mixins: [_Cardable_js__WEBPACK_IMPORTED_MODULE_4__["default"], _Utilities_Imagery__WEBPACK_IMPORTED_MODULE_10__["default"], _Utilities_Strings__WEBPACK_IMPORTED_MODULE_17__["default"]],
  components: {
    Advertisement: _Components_Advertisement__WEBPACK_IMPORTED_MODULE_1__["default"],
    Banned: _Banned__WEBPACK_IMPORTED_MODULE_2__["default"],
    Breadcrumbs: _Components_Breadcrumbs_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    CardImage: _CardImage_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    CardPrice: _Metrics_CardPrice__WEBPACK_IMPORTED_MODULE_6__["default"],
    CardNav: _CardNav__WEBPACK_IMPORTED_MODULE_7__["default"],
    Discussion: _Discussion_Discussion__WEBPACK_IMPORTED_MODULE_8__["default"],
    HeaderTitle: _Components_HeaderTitle_vue__WEBPACK_IMPORTED_MODULE_9__["default"],
    LanguageSelector: _LanguageSelector__WEBPACK_IMPORTED_MODULE_11__["default"],
    LatestDecks: _Decks_Featured_LatestDecks__WEBPACK_IMPORTED_MODULE_12__["default"],
    Pricing: _Pricing_vue__WEBPACK_IMPORTED_MODULE_14__["default"],
    RecentDecks: _RecentDecks__WEBPACK_IMPORTED_MODULE_15__["default"],
    Rulings: _Rulings__WEBPACK_IMPORTED_MODULE_16__["default"],
    SuggestCorrection: _SuggestCorrection__WEBPACK_IMPORTED_MODULE_18__["default"]
  },
  computed: {
    bannedFormats: function bannedFormats() {
      if (this.card.banned.length > 1) {
        return 'in both Blitz and Constructed formats';
      }

      return 'in ' + this.ucfirst(this.card.banned[0]) + ' format';
    },
    crumbs: function crumbs() {
      return [{
        text: 'Home',
        link: '/'
      }, {
        text: this.$route.meta.parent.name,
        link: this.$route.meta.parent.path
      }, {
        text: this.card.name
      }];
    },
    rarity: function rarity() {
      return this.$settings.game.rarities[this.card.rarity];
    },
    rulings: function rulings() {
      return this.card.rulings.map(function (ruling) {
        return ruling.description;
      });
    }
  },
  data: function data() {
    return {
      card: null,
      selected: null,
      text: '',
      flavour: '',
      name: ''
    };
  },
  methods: {
    buyLink: function buyLink(card) {
      return 'https://www.tcgplayer.com/search/flesh-and-blood-tcg/product?q=' + card.identifier + '&utm_campaign=affiliate&utm_medium=FABDB&utm_source=FABDB';
    },
    printingClasses: function printingClasses(printing) {
      return this.selected && this.selected.sku.sku === printing.sku.sku ? 'bg-black' : printing.sku.finish;
    },
    selectPrinting: function selectPrinting(printing) {
      this.card.image = this.cardImageFromSku(printing.sku.sku, 300);
      this.selected = printing;
      this.switchContent(printing);
    },
    switchContent: function switchContent(record) {
      this.text = record.text;
      this.flavour = record.flavour;
      this.name = record.name;
    },
    switchLanguage: function switchLanguage(languageCode) {
      // get first printing of that language
      var printing = this.card.printings.filter(function (printing) {
        return printing.language === languageCode;
      })[0];

      if (printing) {
        this.selectPrinting(printing);
      }
    },
    keywords: function keywords() {
      var keywords = this.card.keywords;

      for (var i in keywords) {
        keywords[i] = '<router-link to="/cards/?search=' + keywords[i] + '">' + keywords[i] + '</router-link>';
      }

      return this.card.keywords.join(', ');
    },
    sentenceCase: function sentenceCase(string) {
      var sentence = string.replace("-", ' ');
      return sentence.slice(0, 1).toUpperCase() + sentence.slice(1);
    },
    statToImagePath: function statToImagePath(stat, value) {
      if (stat === 'cost') return '/img/resource.png';
      if (stat === 'resource') return '/img/pitch-' + value + '.png';
      return '/img/' + stat + '.png';
    }
  },
  metaInfo: function metaInfo() {
    var title = this.name + ' - ' + this.card.printings[0].sku.sku;
    return {
      title: title,
      meta: [{
        vmid: 'description',
        name: 'description',
        content: 'View Flesh & Blood card, ' + this.card.name + '.'
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
        content: this.card.text
      }, {
        vmid: 'og:image',
        property: 'og:image',
        content: this.cardImage(this.card.image, true)
      }, {
        vmid: 'og:image:width',
        property: 'og:image:width',
        content: '450'
      }, {
        vmid: 'og:image:height',
        property: 'og:image:height',
        content: '628'
      }]
    };
  },
  "extends": Object(_Components_LazyLoader__WEBPACK_IMPORTED_MODULE_13__["default"])(function (to, callback) {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/cards/' + to.params.identifier).then(function (response) {
      callback(function () {
        this.card = response.data;
        this.switchContent(this.card);
        this.selectPrinting(this.card.printings[0]);
      });
    });
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/Advertisement.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Components/Advertisement.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var postscribe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! postscribe */ "./node_modules/postscribe/dist/postscribe.js");
/* harmony import */ var postscribe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(postscribe__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    height: {
      required: true,
      type: Number
    },
    width: {
      required: true,
      type: Number
    },
    zone: {
      required: true,
      type: Number
    }
  },
  data: function data() {
    return {
      style: 'max-width: ' + this.width + 'px; max-height: ' + this.height + 'px'
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])('session', ['marketable'])),
  methods: {
    params: function params(data) {
      var query = [];

      for (var i in data) {
        query.push(i + '=' + data[i]);
      }

      return query.join('&');
    },
    url: function url(type) {
      var params = this.params({
        "do": type,
        zid: this.zone,
        oid: 26444,
        wd: -1,
        ht: -1,
        target: '_blank',
        noerror: 1
      });
      return 'https://g.adspeed.net/ad.php?' + params;
    }
  },
  mounted: function mounted() {
    var _this = this;

    if (!this.marketable) return;
    setTimeout(function () {
      var url = _this.url('js');

      var tag = '<' + 'script' + ' src="' + url + '" async>' + '<' + '/script>';
      postscribe__WEBPACK_IMPORTED_MODULE_0___default()(_this.$refs.ad, tag);
    }, 100);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/CardDatabase/Banned.vue?vue&type=template&id=5035baf4&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/CardDatabase/Banned.vue?vue&type=template&id=5035baf4& ***!
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
  return _c(
    "div",
    {
      staticClass:
        "absolute w-full bg-red-600 text-white text-base text-center py-2 z-50 -mt-2",
      staticStyle: { bottom: "40.35%" }
    },
    [_vm._v("\n    Banned\n")]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/CardDatabase/CardNav.vue?vue&type=template&id=689746e6&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/CardDatabase/CardNav.vue?vue&type=template&id=689746e6& ***!
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
  return _c(
    "router-link",
    {
      staticClass:
        "w-1/2 appearance-none block w-full mt-2 rounded-lg py-3 px-4",
      class: _vm.classes,
      attrs: { to: "/cards/" + _vm.to, disabled: _vm.to }
    },
    [_vm._v("\n    " + _vm._s(_vm.text) + "\n")]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/CardDatabase/LanguageSelector.vue?vue&type=template&id=2d48d52d&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/CardDatabase/LanguageSelector.vue?vue&type=template&id=2d48d52d& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
          "w-full relative flex items-center text-left bg-white border border-gray-200 text-base font-serif rounded-lg px-4 py-1 uppercase hover:border-gray-500",
        class: { "border-gray-500 z-75": _vm.isOpen },
        on: {
          click: function($event) {
            _vm.isOpen = !_vm.isOpen
          }
        }
      },
      [
        _c("span", { staticClass: "inline-block mr-1 flex-1" }, [
          _vm._v("Language (" + _vm._s(_vm.languages[_vm.selected].name) + ")")
        ]),
        _vm._v(" "),
        _c(
          "svg",
          {
            staticClass: "inline-block h-5 w-5 fill-current ml-auto",
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
            "fixed top-0 right-0 bottom-0 left-0 bg-red z-50 bg-black opacity-25 w-full h-full cursor-default backdrop-blur-2",
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
              "w-full absolute left-0 rounded-lg bg-white z-100 overflow-hidden mt-1 border border-gray-500"
          },
          _vm._l(_vm.languages, function(language, code) {
            return _c(
              "button",
              {
                staticClass:
                  "w-full flex items-center space-x-2 text-base text-left px-4 py-1 uppercase",
                class:
                  code === _vm.selected
                    ? "bg-primary text-white"
                    : "hover:bg-primary hover:text-white",
                on: {
                  click: function($event) {
                    return _vm.select(code)
                  }
                }
              },
              [
                _c("icon", {
                  attrs: { size: 5, box: 128 },
                  domProps: { innerHTML: _vm._s(language.icon) }
                }),
                _vm._v(" "),
                _c("span", [
                  _vm._v(
                    "\n                " +
                      _vm._s(language.name) +
                      "\n            "
                  )
                ])
              ],
              1
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/CardDatabase/Metrics/CardPrice.vue?vue&type=template&id=551056c7&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/CardDatabase/Metrics/CardPrice.vue?vue&type=template&id=551056c7& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
      _c("card-price-chart", {
        staticStyle: { height: "200px" },
        attrs: { card: _vm.card }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/CardDatabase/RecentDecks.vue?vue&type=template&id=3ffc762e&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/CardDatabase/RecentDecks.vue?vue&type=template&id=3ffc762e& ***!
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
    "div",
    { staticClass: "mb-4" },
    [
      _c("h2", { staticClass: "text-lg uppercase font-serif mb-4" }, [
        _vm._v("Latest decks including " + _vm._s(_vm.card.name))
      ]),
      _vm._v(" "),
      _vm._l(_vm.decks, function(deck) {
        return _c(
          "router-link",
          {
            key: deck.slug,
            staticClass:
              "flex items-center hover:bg-gray-100 pr-4 mb-2 rounded-full",
            attrs: { to: { name: "decks.view", params: { deck: deck.slug } } }
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
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/CardDatabase/SuggestCorrection.vue?vue&type=template&id=67e77c9c&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/CardDatabase/SuggestCorrection.vue?vue&type=template&id=67e77c9c& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
    "form",
    {
      staticClass: "block space-y-4 m-4",
      on: {
        submit: function($event) {
          $event.preventDefault()
          return _vm.submit.apply(null, arguments)
        }
      }
    },
    [
      _c("div", [
        _c(
          "label",
          { staticClass: "block font-serif uppercase tracking-wide mb-1" },
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
            "input focus:bg-white focus:border-gray-500 py-3 px-4 rounded-lg flex-auto",
          attrs: { type: "text", required: "" },
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
      _c("div", [
        _c(
          "label",
          { staticClass: "block font-serif uppercase tracking-wide mb-1" },
          [_vm._v("Text")]
        ),
        _vm._v(" "),
        _c("textarea", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.text,
              expression: "text"
            }
          ],
          staticClass:
            "input focus:bg-white focus:border-gray-500 py-3 px-4 rounded-lg flex-auto",
          attrs: { rows: "3", required: "" },
          domProps: { value: _vm.text },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.text = $event.target.value
            }
          }
        })
      ]),
      _vm._v(" "),
      _c("div", [
        _c(
          "label",
          { staticClass: "block font-serif uppercase tracking-wide mb-1" },
          [_vm._v("Comment")]
        ),
        _vm._v(" "),
        _c("textarea", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.comment,
              expression: "comment"
            }
          ],
          staticClass:
            "input focus:bg-white focus:border-gray-500 py-3 px-4 rounded-lg flex-auto",
          attrs: {
            rows: "3",
            placeholder:
              "Please provide some details as to why you recommend this correction be made.",
            required: ""
          },
          domProps: { value: _vm.comment },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.comment = $event.target.value
            }
          }
        })
      ]),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _vm._m(1)
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("label", { staticClass: "flex mb-1 text-sm sm:text-base" }, [
        _c("input", {
          staticClass: "form-checkbox mt-1 rounded-lg text-green-500 w-6 h-6",
          attrs: { type: "checkbox", required: "" }
        }),
        _vm._v(" "),
        _c("div", { staticClass: "ml-4" }, [
          _vm._v(
            "\n                I acknowledge that Legend Story Studios may use this correction in whole or\n                in part to improve the quality and/or accuracy of the translations of the Flesh\n                and Blood Trading Card game. In submitting this comment I acknowledge that\n                in relation to my submission;\n\n                "
          ),
          _c("ol", { staticClass: "list-roman mt-4" }, [
            _c("li", [
              _vm._v(
                "\n                        Legend Story Studios retains copyright and all other intellectual property\n                        rights in all language variations of the Flesh and Blood Trading Card game and\n                        related products\n                    "
              )
            ]),
            _vm._v(" "),
            _c("li", [
              _vm._v(
                "\n                        I have no claim to copyright or other intellectual property\n                        rights in relation to my comment and any resulting translation;"
              )
            ]),
            _vm._v(" "),
            _c("li", [
              _vm._v(
                "\n                        I will not\n                        receive any remuneration or other payment; and (iv) I have no attribution\n                        rights.\n                    "
              )
            ])
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "pt-4" }, [
      _c(
        "button",
        {
          staticClass:
            "block w-full sm:w-auto mx-auto button-primary rounded px-4 py-3"
        },
        [_vm._v("Submit correction")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/CardDatabase/ViewCard.vue?vue&type=template&id=02dd802b&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/CardDatabase/ViewCard.vue?vue&type=template&id=02dd802b& ***!
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
    "div",
    [
      _c("header-title", { attrs: { title: _vm.name } }),
      _vm._v(" "),
      _c("breadcrumbs", { attrs: { crumbs: _vm.crumbs } }),
      _vm._v(" "),
      _c("div", { staticClass: "bg-gray-200" }, [
        _c(
          "div",
          { staticClass: "container sm:mx-auto pt-0 pb-8 md:py-8" },
          [
            _c("div", { staticClass: "flow-root" }, [
              _c(
                "div",
                { staticClass: "md:w-1/4 md:float-left p-4 md:py-0" },
                [
                  _c(
                    "div",
                    { staticClass: "relative" },
                    [
                      _c("card-image", { attrs: { card: _vm.card } }),
                      _vm._v(" "),
                      _vm.card.banned ? _c("banned") : _vm._e()
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "flex mt-2" },
                    [
                      _c("card-nav", {
                        staticClass: "mr-1",
                        attrs: { to: _vm.card.prev, text: "Previous" }
                      }),
                      _vm._v(" "),
                      _c("card-nav", {
                        staticClass: "ml-1 text-right",
                        attrs: { to: _vm.card.next, text: "Next" }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "h2",
                    { staticClass: "font-serif uppercase text-lg mb-1 mt-4" },
                    [_vm._v("Printings")]
                  ),
                  _vm._v(" "),
                  _vm._l(_vm.card.printings, function(printing) {
                    return _c(
                      "button",
                      {
                        staticClass:
                          "inline-block text-sm text-white px-1 mr-1 rounded-sm",
                        class: _vm.printingClasses(printing),
                        attrs: { title: printing.sku.finish },
                        on: {
                          click: function($event) {
                            return _vm.selectPrinting(printing)
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n                        " +
                            _vm._s(printing.sku.sku) +
                            "\n                    "
                        )
                      ]
                    )
                  }),
                  _vm._v(" "),
                  _c("advertisement", {
                    staticClass: "mt-4",
                    attrs: { width: 340, height: 340, zone: 107318 }
                  }),
                  _vm._v(" "),
                  _c("ul", { staticClass: "pt-4 text-base" }, [
                    _vm.card.artist
                      ? _c("li", { staticClass: "flex odd:bg-white" }, [
                          _c("div", { staticClass: "w-1/3 p-2 px-4" }, [
                            _vm._v("Artist")
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "w-2/3 p-2 px-4" },
                            [
                              _c(
                                "router-link",
                                {
                                  staticClass: "link-alternate",
                                  attrs: {
                                    to: {
                                      name: "artists.view",
                                      params: { artist: _vm.card.artist.slug }
                                    }
                                  }
                                },
                                [_vm._v(_vm._s(_vm.card.artist.name))]
                              )
                            ],
                            1
                          )
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _c("li", { staticClass: "flex odd:bg-white" }, [
                      _c("div", { staticClass: "w-1/3 p-2 px-4" }, [
                        _vm._v("Rarity")
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "w-2/3 p-2 px-4" },
                        [
                          _c(
                            "router-link",
                            {
                              staticClass: "link-alternate",
                              attrs: {
                                to: {
                                  name: "cards.browse",
                                  query: {
                                    rarity: _vm.card.rarity.toLowerCase()
                                  }
                                }
                              }
                            },
                            [_vm._v(_vm._s(_vm.rarity))]
                          )
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("li", { staticClass: "flex odd:bg-white" }, [
                      _c("div", { staticClass: "w-1/3 p-2 px-4" }, [
                        _vm._v("Keywords")
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "w-2/3 p-2 px-4" },
                        _vm._l(_vm.card.keywords, function(keyword, index) {
                          return _c(
                            "span",
                            [
                              _c(
                                "router-link",
                                {
                                  staticClass: "link-alternate",
                                  attrs: {
                                    to: "/cards/browse?keywords=" + keyword
                                  }
                                },
                                [_vm._v(_vm._s(keyword))]
                              ),
                              index < _vm.card.keywords.length - 1
                                ? _c("span", [_vm._v(", ")])
                                : _vm._e()
                            ],
                            1
                          )
                        }),
                        0
                      )
                    ])
                  ])
                ],
                2
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "md:w-3/4 md:float-right sm:px-4 md:flex" },
                [
                  _c(
                    "div",
                    { staticClass: "md:w-1/2" },
                    [
                      _c(
                        "div",
                        { staticClass: "p-4 pt-0 sm:p-0 space-y-1" },
                        [
                          _vm.card.banned
                            ? _c(
                                "section",
                                {
                                  staticClass:
                                    "bg-red-600 text-white text-center py-2 px-4 rounded-lg mb-4"
                                },
                                [
                                  _vm._v(
                                    "\n                                This card is banned " +
                                      _vm._s(_vm.bannedFormats) +
                                      ".\n                            "
                                  )
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _c(
                            "section",
                            { staticClass: "flex" },
                            [
                              _c("language-selector", {
                                staticClass: "w-2/3 pr-1",
                                attrs: { languages: _vm.$settings.languages },
                                on: { "language-selected": _vm.switchLanguage }
                              }),
                              _vm._v(" "),
                              _vm.selected
                                ? _c(
                                    "button",
                                    {
                                      staticClass:
                                        "bg-white hover:bg-primary hover:text-white px-4 py-1 rounded-lg w-1/3 text-sm",
                                      on: {
                                        click: function($event) {
                                          return _vm.$modal.show("suggestion")
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                                    Suggest correction\n                                "
                                      )
                                    ]
                                  )
                                : _vm._e()
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "modal",
                            {
                              attrs: {
                                name: "suggestion",
                                adaptive: true,
                                "min-height": 730
                              }
                            },
                            [
                              _vm.selected
                                ? _c("suggest-correction", {
                                    attrs: {
                                      printing: _vm.selected,
                                      identifier: _vm.card.identifier
                                    }
                                  })
                                : _vm._e()
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _vm.text
                            ? _c(
                                "div",
                                {
                                  staticClass: "bg-white text-black rounded-lg"
                                },
                                [
                                  _c("div", {
                                    staticClass: "px-4 py-px",
                                    domProps: {
                                      innerHTML: _vm._s(
                                        _vm.prettyText(_vm.text)
                                      )
                                    }
                                  }),
                                  _vm._v(" "),
                                  _vm.flavour
                                    ? _c(
                                        "div",
                                        {
                                          staticClass:
                                            "italic border-t border-gray-200 p-4 text-gray-600"
                                        },
                                        [_vm._v(_vm._s(_vm.flavour))]
                                      )
                                    : _vm._e()
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "inline-block flex rounded-lg overflow-hidden space-x-px mb-4"
                            },
                            _vm._l(_vm.card.stats, function(value, stat) {
                              return value
                                ? _c(
                                    "div",
                                    {
                                      staticClass:
                                        "flex justify-center items-center flex-grow bg-white space-x-2 py-2"
                                    },
                                    [
                                      _c("div", {}, [
                                        _c("img", {
                                          staticClass: "h-6",
                                          attrs: {
                                            src: _vm.statToImagePath(
                                              stat,
                                              value
                                            ),
                                            alt: _vm.sentenceCase(stat)
                                          }
                                        })
                                      ]),
                                      _vm._v(" "),
                                      _c("div", { staticClass: "text-xl" }, [
                                        _vm._v(_vm._s(value))
                                      ])
                                    ]
                                  )
                                : _vm._e()
                            }),
                            0
                          ),
                          _vm._v(" "),
                          _c("article", [
                            _c("p", { staticClass: "mb-4 italic" }, [
                              _c("strong", [
                                _vm._v('"' + _vm._s(_vm.card.name) + '"')
                              ]),
                              _vm._v(" is a trading card from the "),
                              _c("strong", [
                                _vm._v(
                                  '"' +
                                    _vm._s(
                                      _vm.setToString(
                                        _vm.setFromIdentifier(
                                          _vm.card.printings[0].sku.sku
                                        )
                                      )
                                    ) +
                                    '"'
                                )
                              ]),
                              _vm._v(" set of the trading card game, "),
                              _c("strong", [_vm._v("Flesh & Blood.")])
                            ])
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _vm.rulings.length
                        ? _c("rulings", {
                            staticClass: "px-4 sm:px-0",
                            attrs: { rulings: _vm.rulings }
                          })
                        : _vm._e()
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "md:w-1/2 md:ml-8" },
                    [
                      _c(
                        "a",
                        {
                          staticClass:
                            "flex items-center w-1/2 button-secondary rounded p-2 mb-4",
                          attrs: {
                            href: _vm.buyLink(_vm.card),
                            target: "_blank"
                          }
                        },
                        [
                          _c("icon", { attrs: { size: 6 } }, [
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
                      ),
                      _vm._v(" "),
                      _c("latest-decks", {
                        staticClass: "mb-4",
                        attrs: {
                          title: "Recent",
                          color: "bg-black",
                          query: "card=" + _vm.card.identifier
                        }
                      }),
                      _vm._v(" "),
                      _c("pricing", {
                        staticClass: "mb-8 mt-4 md:mt-0",
                        attrs: { card: _vm.card }
                      })
                    ],
                    1
                  )
                ]
              )
            ]),
            _vm._v(" "),
            _c("hr", { staticClass: "text-gray-500 mt-4" }),
            _vm._v(" "),
            _c("discussion", {
              staticClass: "mx-4",
              attrs: { type: "card", id: _vm.card.identifier }
            })
          ],
          1
        )
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
    return _c("span", { staticClass: "ml-1" }, [
      _vm._v("Buy "),
      _c("span", { staticClass: "hidden sm:inline" }, [
        _vm._v("from TCGplayer")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/Advertisement.vue?vue&type=template&id=2fc7116c&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Components/Advertisement.vue?vue&type=template&id=2fc7116c& ***!
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
  return _vm.marketable
    ? _c("div", { staticClass: "mx-auto", style: _vm.style }, [
        _c("div", { ref: "ad" })
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/CardDatabase/Banned.vue":
/*!**********************************************!*\
  !*** ./resources/js/CardDatabase/Banned.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Banned_vue_vue_type_template_id_5035baf4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Banned.vue?vue&type=template&id=5035baf4& */ "./resources/js/CardDatabase/Banned.vue?vue&type=template&id=5035baf4&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _Banned_vue_vue_type_template_id_5035baf4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Banned_vue_vue_type_template_id_5035baf4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/CardDatabase/Banned.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/CardDatabase/Banned.vue?vue&type=template&id=5035baf4&":
/*!*****************************************************************************!*\
  !*** ./resources/js/CardDatabase/Banned.vue?vue&type=template&id=5035baf4& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Banned_vue_vue_type_template_id_5035baf4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Banned.vue?vue&type=template&id=5035baf4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/CardDatabase/Banned.vue?vue&type=template&id=5035baf4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Banned_vue_vue_type_template_id_5035baf4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Banned_vue_vue_type_template_id_5035baf4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/CardDatabase/CardNav.vue":
/*!***********************************************!*\
  !*** ./resources/js/CardDatabase/CardNav.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CardNav_vue_vue_type_template_id_689746e6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardNav.vue?vue&type=template&id=689746e6& */ "./resources/js/CardDatabase/CardNav.vue?vue&type=template&id=689746e6&");
/* harmony import */ var _CardNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardNav.vue?vue&type=script&lang=js& */ "./resources/js/CardDatabase/CardNav.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CardNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CardNav_vue_vue_type_template_id_689746e6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CardNav_vue_vue_type_template_id_689746e6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/CardDatabase/CardNav.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/CardDatabase/CardNav.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/CardDatabase/CardNav.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./CardNav.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/CardDatabase/CardNav.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/CardDatabase/CardNav.vue?vue&type=template&id=689746e6&":
/*!******************************************************************************!*\
  !*** ./resources/js/CardDatabase/CardNav.vue?vue&type=template&id=689746e6& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardNav_vue_vue_type_template_id_689746e6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./CardNav.vue?vue&type=template&id=689746e6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/CardDatabase/CardNav.vue?vue&type=template&id=689746e6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardNav_vue_vue_type_template_id_689746e6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardNav_vue_vue_type_template_id_689746e6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/CardDatabase/LanguageSelector.vue":
/*!********************************************************!*\
  !*** ./resources/js/CardDatabase/LanguageSelector.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LanguageSelector_vue_vue_type_template_id_2d48d52d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LanguageSelector.vue?vue&type=template&id=2d48d52d& */ "./resources/js/CardDatabase/LanguageSelector.vue?vue&type=template&id=2d48d52d&");
/* harmony import */ var _LanguageSelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LanguageSelector.vue?vue&type=script&lang=js& */ "./resources/js/CardDatabase/LanguageSelector.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LanguageSelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LanguageSelector_vue_vue_type_template_id_2d48d52d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LanguageSelector_vue_vue_type_template_id_2d48d52d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/CardDatabase/LanguageSelector.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/CardDatabase/LanguageSelector.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/CardDatabase/LanguageSelector.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LanguageSelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./LanguageSelector.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/CardDatabase/LanguageSelector.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LanguageSelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/CardDatabase/LanguageSelector.vue?vue&type=template&id=2d48d52d&":
/*!***************************************************************************************!*\
  !*** ./resources/js/CardDatabase/LanguageSelector.vue?vue&type=template&id=2d48d52d& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LanguageSelector_vue_vue_type_template_id_2d48d52d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./LanguageSelector.vue?vue&type=template&id=2d48d52d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/CardDatabase/LanguageSelector.vue?vue&type=template&id=2d48d52d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LanguageSelector_vue_vue_type_template_id_2d48d52d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LanguageSelector_vue_vue_type_template_id_2d48d52d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/CardDatabase/Metrics/CardPrice.vue":
/*!*********************************************************!*\
  !*** ./resources/js/CardDatabase/Metrics/CardPrice.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CardPrice_vue_vue_type_template_id_551056c7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardPrice.vue?vue&type=template&id=551056c7& */ "./resources/js/CardDatabase/Metrics/CardPrice.vue?vue&type=template&id=551056c7&");
/* harmony import */ var _CardPrice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardPrice.vue?vue&type=script&lang=js& */ "./resources/js/CardDatabase/Metrics/CardPrice.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CardPrice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CardPrice_vue_vue_type_template_id_551056c7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CardPrice_vue_vue_type_template_id_551056c7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/CardDatabase/Metrics/CardPrice.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/CardDatabase/Metrics/CardPrice.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/CardDatabase/Metrics/CardPrice.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardPrice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CardPrice.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/CardDatabase/Metrics/CardPrice.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardPrice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/CardDatabase/Metrics/CardPrice.vue?vue&type=template&id=551056c7&":
/*!****************************************************************************************!*\
  !*** ./resources/js/CardDatabase/Metrics/CardPrice.vue?vue&type=template&id=551056c7& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardPrice_vue_vue_type_template_id_551056c7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./CardPrice.vue?vue&type=template&id=551056c7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/CardDatabase/Metrics/CardPrice.vue?vue&type=template&id=551056c7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardPrice_vue_vue_type_template_id_551056c7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardPrice_vue_vue_type_template_id_551056c7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/CardDatabase/Metrics/CardPriceChart.js":
/*!*************************************************************!*\
  !*** ./resources/js/CardDatabase/Metrics/CardPriceChart.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/es/index.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





/* harmony default export */ __webpack_exports__["default"] = ({
  "extends": vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["Line"],
  props: ['card', 'options'],
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])('session', ['user'])),
  mounted: function mounted() {
    var _this = this;

    var currency = this.user && this.user.currency || 'USD';
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/market/' + this.card.identifier + '?days=30&currency=' + currency).then(function (response) {
      response = response.data;
      var chartData = {
        labels: lodash__WEBPACK_IMPORTED_MODULE_3___default.a.keys(response),
        datasets: [{
          label: 'Low',
          backgroundColor: 'rgba(66, 153, 225, 0.5)',
          borderColor: 'rgba(66, 153, 225, 1)',
          borderWidth: 1,
          data: lodash__WEBPACK_IMPORTED_MODULE_3___default.a.values(response).map(function (record) {
            return record[0];
          })
        }, {
          label: 'Mean',
          backgroundColor: 'rgba(66, 153, 225, 0.5)',
          borderColor: 'rgba(66, 153, 225, 1)',
          borderWidth: 1,
          data: lodash__WEBPACK_IMPORTED_MODULE_3___default.a.values(response).map(function (record) {
            return record[1];
          })
        }, {
          label: 'High',
          backgroundColor: 'rgba(66, 153, 225, 0.5)',
          borderColor: 'rgba(66, 153, 225, 1)',
          borderWidth: 1,
          data: lodash__WEBPACK_IMPORTED_MODULE_3___default.a.values(response).map(function (record) {
            return record[2];
          })
        }]
      };

      _this.renderChart(chartData, {
        legend: false,
        responsive: true,
        maintainAspectRatio: false,
        fill: false
      });
    });
  }
});

/***/ }),

/***/ "./resources/js/CardDatabase/RecentDecks.vue":
/*!***************************************************!*\
  !*** ./resources/js/CardDatabase/RecentDecks.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RecentDecks_vue_vue_type_template_id_3ffc762e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RecentDecks.vue?vue&type=template&id=3ffc762e& */ "./resources/js/CardDatabase/RecentDecks.vue?vue&type=template&id=3ffc762e&");
/* harmony import */ var _RecentDecks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RecentDecks.vue?vue&type=script&lang=js& */ "./resources/js/CardDatabase/RecentDecks.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RecentDecks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RecentDecks_vue_vue_type_template_id_3ffc762e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RecentDecks_vue_vue_type_template_id_3ffc762e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/CardDatabase/RecentDecks.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/CardDatabase/RecentDecks.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/CardDatabase/RecentDecks.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RecentDecks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./RecentDecks.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/CardDatabase/RecentDecks.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RecentDecks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/CardDatabase/RecentDecks.vue?vue&type=template&id=3ffc762e&":
/*!**********************************************************************************!*\
  !*** ./resources/js/CardDatabase/RecentDecks.vue?vue&type=template&id=3ffc762e& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RecentDecks_vue_vue_type_template_id_3ffc762e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./RecentDecks.vue?vue&type=template&id=3ffc762e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/CardDatabase/RecentDecks.vue?vue&type=template&id=3ffc762e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RecentDecks_vue_vue_type_template_id_3ffc762e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RecentDecks_vue_vue_type_template_id_3ffc762e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./resources/js/CardDatabase/SuggestCorrection.vue":
/*!*********************************************************!*\
  !*** ./resources/js/CardDatabase/SuggestCorrection.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SuggestCorrection_vue_vue_type_template_id_67e77c9c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SuggestCorrection.vue?vue&type=template&id=67e77c9c& */ "./resources/js/CardDatabase/SuggestCorrection.vue?vue&type=template&id=67e77c9c&");
/* harmony import */ var _SuggestCorrection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SuggestCorrection.vue?vue&type=script&lang=js& */ "./resources/js/CardDatabase/SuggestCorrection.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SuggestCorrection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SuggestCorrection_vue_vue_type_template_id_67e77c9c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SuggestCorrection_vue_vue_type_template_id_67e77c9c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/CardDatabase/SuggestCorrection.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/CardDatabase/SuggestCorrection.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/CardDatabase/SuggestCorrection.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SuggestCorrection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./SuggestCorrection.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/CardDatabase/SuggestCorrection.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SuggestCorrection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/CardDatabase/SuggestCorrection.vue?vue&type=template&id=67e77c9c&":
/*!****************************************************************************************!*\
  !*** ./resources/js/CardDatabase/SuggestCorrection.vue?vue&type=template&id=67e77c9c& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SuggestCorrection_vue_vue_type_template_id_67e77c9c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./SuggestCorrection.vue?vue&type=template&id=67e77c9c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/CardDatabase/SuggestCorrection.vue?vue&type=template&id=67e77c9c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SuggestCorrection_vue_vue_type_template_id_67e77c9c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SuggestCorrection_vue_vue_type_template_id_67e77c9c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/CardDatabase/ViewCard.vue":
/*!************************************************!*\
  !*** ./resources/js/CardDatabase/ViewCard.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ViewCard_vue_vue_type_template_id_02dd802b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ViewCard.vue?vue&type=template&id=02dd802b& */ "./resources/js/CardDatabase/ViewCard.vue?vue&type=template&id=02dd802b&");
/* harmony import */ var _ViewCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ViewCard.vue?vue&type=script&lang=js& */ "./resources/js/CardDatabase/ViewCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ViewCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ViewCard_vue_vue_type_template_id_02dd802b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ViewCard_vue_vue_type_template_id_02dd802b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/CardDatabase/ViewCard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/CardDatabase/ViewCard.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/CardDatabase/ViewCard.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ViewCard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/CardDatabase/ViewCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/CardDatabase/ViewCard.vue?vue&type=template&id=02dd802b&":
/*!*******************************************************************************!*\
  !*** ./resources/js/CardDatabase/ViewCard.vue?vue&type=template&id=02dd802b& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewCard_vue_vue_type_template_id_02dd802b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ViewCard.vue?vue&type=template&id=02dd802b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/CardDatabase/ViewCard.vue?vue&type=template&id=02dd802b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewCard_vue_vue_type_template_id_02dd802b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewCard_vue_vue_type_template_id_02dd802b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Components/Advertisement.vue":
/*!***************************************************!*\
  !*** ./resources/js/Components/Advertisement.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Advertisement_vue_vue_type_template_id_2fc7116c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Advertisement.vue?vue&type=template&id=2fc7116c& */ "./resources/js/Components/Advertisement.vue?vue&type=template&id=2fc7116c&");
/* harmony import */ var _Advertisement_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Advertisement.vue?vue&type=script&lang=js& */ "./resources/js/Components/Advertisement.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Advertisement_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Advertisement_vue_vue_type_template_id_2fc7116c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Advertisement_vue_vue_type_template_id_2fc7116c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/Advertisement.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Components/Advertisement.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/Components/Advertisement.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Advertisement_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Advertisement.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/Advertisement.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Advertisement_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/Advertisement.vue?vue&type=template&id=2fc7116c&":
/*!**********************************************************************************!*\
  !*** ./resources/js/Components/Advertisement.vue?vue&type=template&id=2fc7116c& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Advertisement_vue_vue_type_template_id_2fc7116c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Advertisement.vue?vue&type=template&id=2fc7116c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/Advertisement.vue?vue&type=template&id=2fc7116c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Advertisement_vue_vue_type_template_id_2fc7116c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Advertisement_vue_vue_type_template_id_2fc7116c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);