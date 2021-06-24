(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cards.browse"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/CardDatabase/BrowseCards.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/CardDatabase/BrowseCards.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CardSearch_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardSearch.vue */ "./resources/js/CardDatabase/CardSearch.vue");
/* harmony import */ var _CardItem_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CardItem.vue */ "./resources/js/CardDatabase/CardItem.vue");
/* harmony import */ var _Components_Collapser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/Collapser */ "./resources/js/Components/Collapser.vue");
/* harmony import */ var _Components_HeaderTitle_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Components/HeaderTitle.vue */ "./resources/js/Components/HeaderTitle.vue");
/* harmony import */ var _Components_Paginator_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Components/Paginator.vue */ "./resources/js/Components/Paginator.vue");
/* harmony import */ var _Utilities_Query__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Utilities/Query */ "./resources/js/Utilities/Query.js");
/* harmony import */ var _SearchTips_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SearchTips.vue */ "./resources/js/CardDatabase/SearchTips.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    CardItem: _CardItem_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    CardSearch: _CardSearch_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    Collapser: _Components_Collapser__WEBPACK_IMPORTED_MODULE_3__["default"],
    HeaderTitle: _Components_HeaderTitle_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    Paginator: _Components_Paginator_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    SearchTips: _SearchTips_vue__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  mixins: [_Utilities_Query__WEBPACK_IMPORTED_MODULE_6__["default"]],
  computed: {
    setDescription: function setDescription() {
      return 'Browse the Flesh & Blood card list for the set, "' + this.sets[this.set] + '".';
    }
  },
  data: function data() {
    return {
      page: Number(this.$route.query.page) || 1,
      per_page: 20,
      results: {},
      sets: this.filterSets(),
      set: this.$route.query.set || 'all',
      view: 'gallery'
    };
  },
  metaInfo: function metaInfo() {
    var description = this.setDescription;
    return {
      title: 'Flesh and Blood TCG Card List',
      meta: [{
        vmid: 'description',
        name: 'description',
        content: this.setDescription
      }]
    };
  },
  methods: {
    isActive: function isActive(set) {
      return {
        'border-white': this.set == set,
        'border-crumbs': this.set != set
      };
    },
    refreshResults: function refreshResults(results) {
      this.results = results;
    },
    filterSets: function filterSets() {
      var sets = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.sortBy(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.filter(this.$settings.game.sets, function (setting) {
        return setting.browseable;
      }), 'released');

      sets.unshift({
        id: 'all',
        name: 'All cards'
      });
      return sets;
    },
    updatePage: function updatePage(page) {
      this.updateQuery({
        page: page
      });
    },
    switchSet: function switchSet(set) {
      this.set = set;
      this.updateQuery({
        page: 1,
        set: set
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/CardDatabase/BrowseCards.vue?vue&type=template&id=35c6d8da&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/CardDatabase/BrowseCards.vue?vue&type=template&id=35c6d8da& ***!
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
    [
      _c("header-title", { attrs: { title: "Browse cards" } }),
      _vm._v(" "),
      _c("div", { staticClass: "crumbs font-serif uppercase" }, [
        _c(
          "div",
          { staticClass: "container sm:mx-auto px-4 flex" },
          [
            _c(
              "ul",
              { staticClass: "flex" },
              _vm._l(_vm.sets, function(set) {
                return _c(
                  "li",
                  {
                    staticClass: "mr-8 border-b-4 border-white",
                    class: _vm.isActive(set.id)
                  },
                  [
                    _c(
                      "a",
                      {
                        staticClass: "block text-center py-4",
                        attrs: { href: "" },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.switchSet(set.id)
                          }
                        }
                      },
                      [
                        _c("span", { staticClass: "md:hidden" }, [
                          _vm._v(_vm._s(set.id))
                        ]),
                        _vm._v(" "),
                        _c("span", { staticClass: "hidden md:inline" }, [
                          _vm._v(_vm._s(set.name))
                        ])
                      ]
                    )
                  ]
                )
              }),
              0
            ),
            _vm._v(" "),
            _c("collapser")
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "bg-white pt-4 border-b-4 border-gray-300" }, [
        _c(
          "div",
          { staticClass: "container sm:mx-auto md:px-4" },
          [
            _c("card-search", {
              attrs: {
                useCase: "browse",
                page: _vm.page,
                refreshable: true,
                external: { set: _vm.set, per_page: _vm.per_page }
              },
              on: { "search-completed": _vm.refreshResults }
            })
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "bg-gray-200" }, [
        _c(
          "div",
          { staticClass: "container sm:mx-auto px-4" },
          [
            _vm.results && _vm.results.data
              ? _c("div", [
                  _c("div", { staticClass: "flow-root" }, [
                    _c(
                      "div",
                      { staticClass: "flow-root py-4" },
                      [
                        _c("paginator", {
                          attrs: { results: _vm.results },
                          on: { "page-selected": _vm.updatePage }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "flow-root -mx-2" },
                      _vm._l(_vm.results.data, function(card) {
                        return _c("card-item", {
                          key: card.identifier,
                          attrs: { card: card, view: _vm.view, path: "/cards" }
                        })
                      }),
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "py-4" },
                      [
                        _c("paginator", {
                          attrs: { results: _vm.results },
                          on: { "page-selected": _vm.updatePage }
                        })
                      ],
                      1
                    )
                  ])
                ])
              : _vm._e(),
            _vm._v(" "),
            _c("search-tips")
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/CardDatabase/SearchTips.vue?vue&type=template&id=3e1944d6&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/CardDatabase/SearchTips.vue?vue&type=template&id=3e1944d6& ***!
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
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "border-t border-gray-300 p-4 py-8" }, [
      _c("h1", { staticClass: "font-serif text-xl uppercase" }, [
        _vm._v("Search tips")
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "my-4" }, [
        _vm._v(
          "\n        The FabDB search tool is a powerful utility to help you find the cards you need, fast. It allows you to\n        search for cards based on their id, name, or keywords, such as: WTR001, 11, hero, equipment, weapon,\n        sword.etc. using the keywords search field. You can also find cards based on their various stats, and\n        modifiers, such as: cost>0 attack=1 pitch<3 .etc. Mix and match to find the cards you need, fast!\n    "
        )
      ]),
      _vm._v(" "),
      _c("ul", { staticClass: "list-disc ml-4" }, [
        _c("li", [
          _c("strong", [_vm._v("hero")]),
          _vm._v(
            ": list all cards that have the keyword 'hero'. This applies to any keyword you search for."
          )
        ]),
        _vm._v(" "),
        _c("li", [
          _c("strong", [_vm._v("WTR011")]),
          _vm._v(": Look for card #11 within the Welcome to Rathe set")
        ]),
        _vm._v(" "),
        _c("li", [
          _c("strong", [_vm._v("1")]),
          _vm._v(
            ": Load card #1 in any set (can also be formatted as 01 or 001"
          )
        ]),
        _vm._v(" "),
        _c("li", [
          _c("strong", [_vm._v("guardian action")]),
          _vm._v(
            ': Find all cards that have the keywords "guardian" and "action"'
          )
        ]),
        _vm._v(" "),
        _c("li", [
          _c("strong", [_vm._v("attack=1")]),
          _vm._v(": Find cards that have an attack power of 1")
        ]),
        _vm._v(" "),
        _c("li", [
          _c("strong", [_vm._v("pitch<2")]),
          _vm._v(": Find cards that have a pitch value less than 2")
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/CardDatabase/BrowseCards.vue":
/*!***************************************************!*\
  !*** ./resources/js/CardDatabase/BrowseCards.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BrowseCards_vue_vue_type_template_id_35c6d8da___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BrowseCards.vue?vue&type=template&id=35c6d8da& */ "./resources/js/CardDatabase/BrowseCards.vue?vue&type=template&id=35c6d8da&");
/* harmony import */ var _BrowseCards_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BrowseCards.vue?vue&type=script&lang=js& */ "./resources/js/CardDatabase/BrowseCards.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BrowseCards_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BrowseCards_vue_vue_type_template_id_35c6d8da___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BrowseCards_vue_vue_type_template_id_35c6d8da___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/CardDatabase/BrowseCards.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/CardDatabase/BrowseCards.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/CardDatabase/BrowseCards.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BrowseCards_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./BrowseCards.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/CardDatabase/BrowseCards.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BrowseCards_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/CardDatabase/BrowseCards.vue?vue&type=template&id=35c6d8da&":
/*!**********************************************************************************!*\
  !*** ./resources/js/CardDatabase/BrowseCards.vue?vue&type=template&id=35c6d8da& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BrowseCards_vue_vue_type_template_id_35c6d8da___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./BrowseCards.vue?vue&type=template&id=35c6d8da& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/CardDatabase/BrowseCards.vue?vue&type=template&id=35c6d8da&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BrowseCards_vue_vue_type_template_id_35c6d8da___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BrowseCards_vue_vue_type_template_id_35c6d8da___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/CardDatabase/SearchTips.vue":
/*!**************************************************!*\
  !*** ./resources/js/CardDatabase/SearchTips.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SearchTips_vue_vue_type_template_id_3e1944d6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SearchTips.vue?vue&type=template&id=3e1944d6& */ "./resources/js/CardDatabase/SearchTips.vue?vue&type=template&id=3e1944d6&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _SearchTips_vue_vue_type_template_id_3e1944d6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SearchTips_vue_vue_type_template_id_3e1944d6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/CardDatabase/SearchTips.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/CardDatabase/SearchTips.vue?vue&type=template&id=3e1944d6&":
/*!*********************************************************************************!*\
  !*** ./resources/js/CardDatabase/SearchTips.vue?vue&type=template&id=3e1944d6& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchTips_vue_vue_type_template_id_3e1944d6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./SearchTips.vue?vue&type=template&id=3e1944d6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/CardDatabase/SearchTips.vue?vue&type=template&id=3e1944d6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchTips_vue_vue_type_template_id_3e1944d6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchTips_vue_vue_type_template_id_3e1944d6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);