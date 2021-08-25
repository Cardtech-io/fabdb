(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["decks.test"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/DeckTester/Main.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/DeckTester/Main.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _Components_Breadcrumbs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/Breadcrumbs */ "./resources/js/Components/Breadcrumbs.vue");
/* harmony import */ var _Decks_DeckRepository__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Decks/DeckRepository */ "./resources/js/Decks/DeckRepository.js");
/* harmony import */ var _Components_HeaderTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Components/HeaderTitle */ "./resources/js/Components/HeaderTitle.vue");
/* harmony import */ var _Components_LazyLoader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Components/LazyLoader */ "./resources/js/Components/LazyLoader.js");
/* harmony import */ var _Tester__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Tester */ "./resources/js/DeckTester/Tester.js");


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






/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Breadcrumbs: _Components_Breadcrumbs__WEBPACK_IMPORTED_MODULE_2__["default"],
    HeaderTitle: _Components_HeaderTitle__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      deck: null
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])('session', ['premium']), {
    crumbs: function crumbs() {
      return [{
        text: 'Home',
        link: '/'
      }, {
        text: 'Deck Builder',
        link: '/decks/mine'
      }, {
        text: 'Test ' + this.deck.name
      }];
    },
    tester: function tester() {
      return new _Tester__WEBPACK_IMPORTED_MODULE_6__["default"](this.deck);
    }
  }),
  "extends": Object(_Components_LazyLoader__WEBPACK_IMPORTED_MODULE_5__["default"])(function _callee(to, callback) {
    var deck;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_Decks_DeckRepository__WEBPACK_IMPORTED_MODULE_3__["default"].find(to.params.deck));

          case 2:
            deck = _context.sent;
            callback(function () {
              this.deck = deck;
            });

          case 4:
          case "end":
            return _context.stop();
        }
      }
    });
  })
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/DeckTester/Main.vue?vue&type=template&id=bffb5edc&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/DeckTester/Main.vue?vue&type=template&id=bffb5edc& ***!
  \*******************************************************************************************************************************************************************************************************/
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
      _c("header-title", { attrs: { title: "Test Deck" } }),
      _vm._v(" "),
      _c("breadcrumbs", { attrs: { crumbs: _vm.crumbs } }),
      _vm._v(" "),
      _c("div", { staticClass: "bg-gray-200" }, [
        _vm.premium
          ? _c(
              "div",
              { staticClass: "container py-8 sm:mx-auto" },
              [_c("router-view", { attrs: { tester: _vm.tester } })],
              1
            )
          : _c("div", [
              _c("div", { staticClass: "container px-4 py-8 sm:mx-auto" }, [
                _c("h2", { staticClass: "font-serif uppercase text-xl mb-4" }, [
                  _vm._v("Membership required")
                ]),
                _vm._v(" "),
                _c(
                  "p",
                  [
                    _vm._v(
                      "\n                    Testing your deck's draw capabilities is a premium access feature. In order to use this feature,\n                    you must be a Patreon supporter. Check out "
                    ),
                    _c(
                      "router-link",
                      {
                        staticClass: "link",
                        attrs: { to: { name: "support" } }
                      },
                      [_vm._v("our support page")]
                    ),
                    _vm._v(" or\n                    go directly to our "),
                    _c(
                      "a",
                      {
                        staticClass: "link",
                        attrs: { href: "https://www.patreon.com/fabdb" }
                      },
                      [_vm._v("Patreon page")]
                    ),
                    _vm._v(
                      ". Memberships start as\n                    low as $3/month!\n                "
                    )
                  ],
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

/***/ "./resources/js/DeckTester/Main.vue":
/*!******************************************!*\
  !*** ./resources/js/DeckTester/Main.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Main_vue_vue_type_template_id_bffb5edc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Main.vue?vue&type=template&id=bffb5edc& */ "./resources/js/DeckTester/Main.vue?vue&type=template&id=bffb5edc&");
/* harmony import */ var _Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Main.vue?vue&type=script&lang=js& */ "./resources/js/DeckTester/Main.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Main_vue_vue_type_template_id_bffb5edc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Main_vue_vue_type_template_id_bffb5edc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/DeckTester/Main.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/DeckTester/Main.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/DeckTester/Main.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Main.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/DeckTester/Main.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/DeckTester/Main.vue?vue&type=template&id=bffb5edc&":
/*!*************************************************************************!*\
  !*** ./resources/js/DeckTester/Main.vue?vue&type=template&id=bffb5edc& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_bffb5edc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Main.vue?vue&type=template&id=bffb5edc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/DeckTester/Main.vue?vue&type=template&id=bffb5edc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_bffb5edc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_bffb5edc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/DeckTester/Tester.js":
/*!*******************************************!*\
  !*** ./resources/js/DeckTester/Tester.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/modules/index-all.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Tester =
/*#__PURE__*/
function () {
  function Tester(deck) {
    _classCallCheck(this, Tester);

    this.deck = deck;
    this.mainDeck = deck.cards.other();
    this.sideboard = deck.sideboard.other();
    this.hero = deck.hero;
    this.slug = deck.slug;
  }

  _createClass(Tester, [{
    key: "move",
    value: function move(card, from, to) {
      to.add(card);
      from.remove(card);
    }
  }, {
    key: "hydrate",
    value: function hydrate() {
      this.mainDeck = this.mainDeck.hydrate();
      this.sideboardStack = this.sideboard.hydrate();
    }
  }]);

  return Tester;
}();

/* harmony default export */ __webpack_exports__["default"] = (Tester);

/***/ }),

/***/ "./resources/js/Decks/DeckRepository.js":
/*!**********************************************!*\
  !*** ./resources/js/Decks/DeckRepository.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Utilities_Models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Utilities/Models */ "./resources/js/Utilities/Models.js");
/* harmony import */ var _Deck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Deck */ "./resources/js/Decks/Deck.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  find: function find(slug) {
    return axios.get('/decks/' + slug).then(function (response) {
      return _Utilities_Models__WEBPACK_IMPORTED_MODULE_0__["default"].hydrate(response.data, _Deck__WEBPACK_IMPORTED_MODULE_1__["default"]);
    });
  }
});

/***/ })

}]);