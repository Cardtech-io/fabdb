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
/* harmony import */ var _Components_LazyLoader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Components/LazyLoader */ "./resources/js/Components/LazyLoader.js");
/* harmony import */ var _Components_HeaderTitle_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Components/HeaderTitle.vue */ "./resources/js/Components/HeaderTitle.vue");
/* harmony import */ var _Pricing_vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Pricing.vue */ "./resources/js/CardDatabase/Pricing.vue");
/* harmony import */ var _Rulings__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Rulings */ "./resources/js/CardDatabase/Rulings.vue");
/* harmony import */ var _Utilities_Strings__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Utilities/Strings */ "./resources/js/Utilities/Strings.js");
/* harmony import */ var _Utilities_Imagery__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../Utilities/Imagery */ "./resources/js/Utilities/Imagery.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  mixins: [_Cardable_js__WEBPACK_IMPORTED_MODULE_4__["default"], _Utilities_Imagery__WEBPACK_IMPORTED_MODULE_14__["default"], _Utilities_Strings__WEBPACK_IMPORTED_MODULE_13__["default"]],
  components: {
    Advertisement: _Components_Advertisement__WEBPACK_IMPORTED_MODULE_1__["default"],
    Banned: _Banned__WEBPACK_IMPORTED_MODULE_2__["default"],
    Breadcrumbs: _Components_Breadcrumbs_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    CardImage: _CardImage_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    CardPrice: _Metrics_CardPrice__WEBPACK_IMPORTED_MODULE_6__["default"],
    CardNav: _CardNav__WEBPACK_IMPORTED_MODULE_7__["default"],
    Discussion: _Discussion_Discussion__WEBPACK_IMPORTED_MODULE_8__["default"],
    HeaderTitle: _Components_HeaderTitle_vue__WEBPACK_IMPORTED_MODULE_10__["default"],
    Pricing: _Pricing_vue__WEBPACK_IMPORTED_MODULE_11__["default"],
    Rulings: _Rulings__WEBPACK_IMPORTED_MODULE_12__["default"]
  },
  computed: {
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
      card: null
    };
  },
  methods: {
    printingClasses: function printingClasses(printing) {
      return this.card.image === this.cardImageFromSku(printing.sku.sku, 300) ? 'bg-black' : printing.sku.finish;
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
    }
  },
  metaInfo: function metaInfo() {
    var title = this.card.name + ' - ' + this.card.printings[0].sku.sku;
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
  "extends": Object(_Components_LazyLoader__WEBPACK_IMPORTED_MODULE_9__["default"])(function (to, callback) {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/cards/' + to.params.identifier).then(function (response) {
      callback(function () {
        this.card = response.data;
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
      _c("header-title", { attrs: { title: _vm.card.name } }),
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
                            _vm.card.image = _vm.cardImageFromSku(
                              printing.sku.sku,
                              300
                            )
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
                  _c(
                    "ul",
                    { staticClass: "pt-4 text-base" },
                    [
                      _c("li", { staticClass: "flow-root bg-white" }, [
                        _c(
                          "div",
                          { staticClass: "float-left w-1/3 p-2 px-4" },
                          [_vm._v("Rarity")]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "float-left w-2/3 p-2 px-4" },
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
                      _c("li", { staticClass: "flow-root" }, [
                        _c(
                          "div",
                          { staticClass: "float-left w-1/3 p-2 px-4" },
                          [_vm._v("Keywords")]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "float-left w-2/3 p-2 px-4" },
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
                      ]),
                      _vm._v(" "),
                      _vm._l(_vm.card.stats, function(value, stat) {
                        return value
                          ? _c(
                              "li",
                              { staticClass: "flow-root even:bg-white" },
                              [
                                _c(
                                  "div",
                                  { staticClass: "float-left w-1/3 p-2 px-4" },
                                  [_vm._v(_vm._s(_vm.sentenceCase(stat)))]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "float-left w-2/3 p-2 px-4" },
                                  [_vm._v(_vm._s(value))]
                                )
                              ]
                            )
                          : _vm._e()
                      })
                    ],
                    2
                  )
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
                      _c("div", { staticClass: "p-4 pt-0 sm:p-0" }, [
                        _vm.card.text
                          ? _c(
                              "div",
                              {
                                staticClass:
                                  "border bg-gray-300 border-gray-500 rounded-lg mb-8"
                              },
                              [
                                _c("div", {
                                  staticClass: "px-4",
                                  domProps: {
                                    innerHTML: _vm._s(
                                      _vm.prettyText(_vm.card.text)
                                    )
                                  }
                                }),
                                _vm._v(" "),
                                _vm.card.flavour
                                  ? _c(
                                      "div",
                                      {
                                        staticClass:
                                          "italic border-t border-gray-400 p-4 text-gray-600"
                                      },
                                      [_vm._v(_vm._s(_vm.card.flavour))]
                                    )
                                  : _vm._e()
                              ]
                            )
                          : _vm._e(),
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
                      ]),
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
                      _c("pricing", {
                        staticClass: "mb-8 mt-4 md:mt-0",
                        attrs: { card: _vm.card }
                      }),
                      _vm._v(" "),
                      _c("card-price", { attrs: { card: _vm.card } })
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
var staticRenderFns = []
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