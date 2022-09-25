(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cards.fabled~cards.view"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/CardDatabase/Pricing.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/CardDatabase/Pricing.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/modules/index-all.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _Utilities_Carding__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Utilities/Carding */ "./resources/js/Utilities/Carding.js");
/* harmony import */ var _Components_Price_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/Price.vue */ "./resources/js/Components/Price.vue");
/* harmony import */ var _SkuFinish__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SkuFinish */ "./resources/js/CardDatabase/SkuFinish.vue");
/* harmony import */ var _Utilities_Strings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Utilities/Strings */ "./resources/js/Utilities/Strings.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

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






/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    card: {
      required: true,
      type: Object
    }
  },
  mixins: [_Utilities_Strings__WEBPACK_IMPORTED_MODULE_5__["default"]],
  components: {
    Price: _Components_Price_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    SkuFinish: _SkuFinish__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      currency: 'all',
      listings: []
    };
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])('session', ['user'])), {}, {
    currencies: function currencies() {
      var reduced = this.listings.reduce(function (carry, listing) {
        carry.push(listing.currency);
        return carry;
      }, []);
      return _toConsumableArray(new Set(reduced));
    },
    filtered: function filtered() {
      var _this = this;

      return underscore__WEBPACK_IMPORTED_MODULE_0__["default"].sortBy(this.listings.filter(function (listing) {
        return _this.currency == 'all' || listing.currency == _this.currency;
      }), 'price');
    }
  }),
  methods: {
    useCurrency: function useCurrency(listing) {
      return this.currency == 'all' ? listing.currency : this.currency;
    },
    variant: function variant(_variant) {
      switch (_variant) {
        case 'regular':
          return 'Regular';

        case 'rainbow':
          return 'Rainbow foil';

        case 'cold':
          return 'Cold foil';
      }
    },
    listingUrl: function listingUrl(listing) {
      return _Utilities_Carding__WEBPACK_IMPORTED_MODULE_2__["default"].listingUrl(listing.domain, listing.path, listing.id, 'listing');
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    axios.get('/market/listings?card=' + this.card.identifier).then(function (response) {
      return _this2.listings = response.data;
    });

    if (this.user && this.user.currency && this.currencies.indexOf(this.user.currency) !== -1) {
      this.currency = this.user.currency;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/CardDatabase/Pricing.vue?vue&type=template&id=c0e68240&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/CardDatabase/Pricing.vue?vue&type=template&id=c0e68240& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "h2",
      { staticClass: "flex bg-gray-500 sm:rounded-t-lg overflow-hidden" },
      [
        _c(
          "div",
          {
            staticClass:
              "flex-1 px-4 py-2 uppercase font-serif text-white text-base",
          },
          [_vm._v("\n            Pricing\n        ")]
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "flex relative items-center w-2/5 sm:w-1/3" },
          [
            _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.currency,
                    expression: "currency",
                  },
                ],
                staticClass:
                  "w-full appearance-none outline-none leading-tight h-full p-2 px-4 bg-gray-800 text-white text-sm",
                attrs: { dir: "rtl" },
                on: {
                  change: function ($event) {
                    var $$selectedVal = Array.prototype.filter
                      .call($event.target.options, function (o) {
                        return o.selected
                      })
                      .map(function (o) {
                        var val = "_value" in o ? o._value : o.value
                        return val
                      })
                    _vm.currency = $event.target.multiple
                      ? $$selectedVal
                      : $$selectedVal[0]
                  },
                },
              },
              [
                _c("option", { attrs: { value: "all" } }, [
                  _vm._v("Currency - All"),
                ]),
                _vm._v(" "),
                _vm._l(_vm.currencies, function (c) {
                  return _c("option", { domProps: { value: c } }, [
                    _vm._v(_vm._s(c)),
                  ])
                }),
              ],
              2
            ),
            _vm._v(" "),
            _c(
              "svg",
              {
                staticClass: "fill-current ml-2 h-6 absolute z-100 text-white",
                attrs: {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 20 20",
                },
              },
              [
                _c("path", {
                  attrs: {
                    d: "M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z",
                  },
                }),
              ]
            ),
          ]
        ),
      ]
    ),
    _vm._v(" "),
    _vm.filtered.length
      ? _c(
          "ul",
          { staticClass: "text-base" },
          _vm._l(_vm.filtered, function (listing) {
            return _c("li", { staticClass: "flex odd:bg-white" }, [
              _c(
                "div",
                { staticClass: "w-1/3 p-2 px-4" },
                [_c("sku-finish", { attrs: { sku: listing.sku } })],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "w-1/3 p-2 px-4 text-center" },
                [
                  _c("price", {
                    attrs: {
                      amount: listing.price,
                      currency: _vm.useCurrency(listing),
                      showCurrency: _vm.currency == "all",
                    },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "w-1/3 p-2 px-4 text-right" }, [
                listing.available
                  ? _c(
                      "a",
                      {
                        staticClass: "link-alternate",
                        attrs: {
                          href: _vm.listingUrl(listing),
                          target: "_blank",
                        },
                      },
                      [_vm._v(_vm._s(listing.name))]
                    )
                  : _c("span", { staticClass: "text-gray-500" }, [
                      _vm._v(_vm._s(listing.name)),
                    ]),
              ]),
            ])
          }),
          0
        )
      : _c("div", { staticClass: "bg-white p-4 rounded-b-lg" }, [
          _vm._v(
            "\n        There are currently no listings or none that match the selected criteria.\n    "
          ),
        ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/CardDatabase/Pricing.vue":
/*!***********************************************!*\
  !*** ./resources/js/CardDatabase/Pricing.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Pricing_vue_vue_type_template_id_c0e68240___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pricing.vue?vue&type=template&id=c0e68240& */ "./resources/js/CardDatabase/Pricing.vue?vue&type=template&id=c0e68240&");
/* harmony import */ var _Pricing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pricing.vue?vue&type=script&lang=js& */ "./resources/js/CardDatabase/Pricing.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Pricing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Pricing_vue_vue_type_template_id_c0e68240___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Pricing_vue_vue_type_template_id_c0e68240___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/CardDatabase/Pricing.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/CardDatabase/Pricing.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/CardDatabase/Pricing.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pricing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Pricing.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/CardDatabase/Pricing.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pricing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/CardDatabase/Pricing.vue?vue&type=template&id=c0e68240&":
/*!******************************************************************************!*\
  !*** ./resources/js/CardDatabase/Pricing.vue?vue&type=template&id=c0e68240& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pricing_vue_vue_type_template_id_c0e68240___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Pricing.vue?vue&type=template&id=c0e68240& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/CardDatabase/Pricing.vue?vue&type=template&id=c0e68240&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pricing_vue_vue_type_template_id_c0e68240___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pricing_vue_vue_type_template_id_c0e68240___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);