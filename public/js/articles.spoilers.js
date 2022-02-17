(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["articles.spoilers"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Content/Spoilers.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Content/Spoilers.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components_HeaderTitle_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/HeaderTitle.vue */ "./resources/js/Components/HeaderTitle.vue");
/* harmony import */ var _Utilities_Imagery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Utilities/Imagery */ "./resources/js/Utilities/Imagery.js");
/* harmony import */ var _Components_LazyLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/LazyLoader */ "./resources/js/Components/LazyLoader.js");
/* harmony import */ var _Utilities_Strings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Utilities/Strings */ "./resources/js/Utilities/Strings.js");
/* harmony import */ var _Utilities_Models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Utilities/Models */ "./resources/js/Utilities/Models.js");
/* harmony import */ var _Article__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Article */ "./resources/js/Content/Article.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  mixins: [_Utilities_Imagery__WEBPACK_IMPORTED_MODULE_2__["default"], _Utilities_Strings__WEBPACK_IMPORTED_MODULE_4__["default"]],
  components: {
    HeaderTitle: _Components_HeaderTitle_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      articles: {},
      upcoming: []
    };
  },
  methods: {
    localTime: function localTime(time) {
      return moment.utc(time).local();
    }
  },
  metaInfo: function metaInfo() {
    return {
      title: 'Flesh & Blood - Monarch Spoilers',
      meta: [{
        vmid: 'description',
        name: 'description',
        content: 'Upcoming and recent spoilers for Flesh and Blood\'s next set, Monarch.'
      }, {
        vmid: 'og:type',
        property: 'og:type',
        content: 'article'
      }, {
        vmid: 'og:title',
        property: 'og:title',
        content: 'Flesh & Blood - Monarch Spoilers'
      }, {
        vmid: 'og:description',
        property: 'og:description',
        content: 'Upcoming and recent spoilers for Flesh and Blood\'s next set, Monarch.'
      }]
    };
  },
  "extends": Object(_Components_LazyLoader__WEBPACK_IMPORTED_MODULE_3__["default"])(function (to, callback) {
    var urls = [axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/articles?type=spoiler'), axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/articles/upcoming?type=spoiler')];
    Promise.all(urls).then(function (responses) {
      callback(function () {
        this.articles = _Utilities_Models__WEBPACK_IMPORTED_MODULE_5__["default"].hydratePaginated(responses[0].data, _Article__WEBPACK_IMPORTED_MODULE_6__["default"]);
        this.upcoming = responses[1].data;
      });
    });
  })
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Content/Spoilers.vue?vue&type=template&id=6eb9a5f6&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Content/Spoilers.vue?vue&type=template&id=6eb9a5f6& ***!
  \********************************************************************************************************************************************************************************************************/
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
    { staticClass: "container px-4 sm:mx-auto sm:px-0 text-white" },
    [
      _c("header-title", {
        staticClass: "text-center",
        attrs: { title: "Monarch Spoilers" }
      }),
      _vm._v(" "),
      _vm._l(_vm.upcoming, function(article) {
        return _vm.upcoming
          ? _c(
              "div",
              {
                staticClass:
                  "bg-semi-black rounded-xl mx-4 p-4 mt-8 sm:mt-0 text-center font-serif text-4xl"
              },
              [
                _c("countdown", {
                  attrs: { "end-time": _vm.localTime(article.publishAt) },
                  scopedSlots: _vm._u(
                    [
                      {
                        key: "process",
                        fn: function(ref) {
                          var timeObj = ref.timeObj
                          return _c("span", {}, [
                            timeObj.d > 0
                              ? _c("span", [_vm._v(_vm._s(timeObj.d) + " :")])
                              : _vm._e(),
                            _vm._v(" "),
                            timeObj.h
                              ? _c("span", [_vm._v(_vm._s(timeObj.h) + " :")])
                              : _vm._e(),
                            _vm._v(" "),
                            timeObj.m
                              ? _c("span", [_vm._v(_vm._s(timeObj.m) + " :")])
                              : _vm._e(),
                            _vm._v(" "),
                            timeObj.s
                              ? _c("span", [_vm._v(_vm._s(timeObj.s))])
                              : _vm._e()
                          ])
                        }
                      }
                    ],
                    null,
                    true
                  )
                })
              ],
              1
            )
          : _vm._e()
      }),
      _vm._v(" "),
      _vm.articles.data.length
        ? _c(
            "div",
            { staticClass: "my-8 mx-4" },
            _vm._l(_vm.articles.data, function(article) {
              return _c(
                "div",
                { staticClass: "flex bg-semi-black rounded-xl p-4" },
                [
                  _c("div", { staticClass: "spoiler" }, [
                    _c(
                      "h1",
                      {
                        staticClass: "font-serif uppercase text-4xl sm:text-6xl"
                      },
                      [_vm._v(_vm._s(article.title))]
                    ),
                    _vm._v(" "),
                    _c("div", [_vm._v(_vm._s(article.excerpt))]),
                    _vm._v(" "),
                    _c("img", {
                      staticClass:
                        "relative rounded-lg float-right m-8 mr-0 z-50 max-w-full",
                      attrs: { src: _vm.thumbUrl(article.image, 450) }
                    }),
                    _vm._v(" "),
                    _c("div", {
                      staticClass: "mt-8",
                      domProps: {
                        innerHTML: _vm._s(_vm.prettyText(article.content))
                      }
                    })
                  ])
                ]
              )
            }),
            0
          )
        : _c("div", [
            _c("p", { staticClass: "my-8 text-center" }, [
              _vm._v("Ah-ah! Not yet! Maybe come back tomorrow? ;)")
            ])
          ])
    ],
    2
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

/***/ "./resources/js/Content/Article.js":
/*!*****************************************!*\
  !*** ./resources/js/Content/Article.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Utilities_Strings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Utilities/Strings */ "./resources/js/Utilities/Strings.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Article =
/*#__PURE__*/
function () {
  function Article(fields) {
    _classCallCheck(this, Article);

    this.fields = fields;
  }

  _createClass(Article, [{
    key: "valid",
    value: function valid() {
      return !!this.fields;
    }
  }, {
    key: "author",
    get: function get() {
      return this.fields.author;
    }
  }, {
    key: "content",
    get: function get() {
      return this.fields.content;
    }
  }, {
    key: "published",
    get: function get() {
      return moment.utc(this.fields.publishAt).format('Do MMMM YYYY');
    }
  }, {
    key: "publishedRelative",
    get: function get() {
      return moment.utc(this.fields.publishAt).fromNow();
    }
  }, {
    key: "excerpt",
    get: function get() {
      return this.fields.excerpt;
    }
  }, {
    key: "image",
    get: function get() {
      return this.fields.image;
    }
  }, {
    key: "slug",
    get: function get() {
      return this.fields.slug;
    }
  }, {
    key: "tags",
    get: function get() {
      return this.fields.tags;
    }
  }, {
    key: "title",
    get: function get() {
      return this.fields.title;
    }
  }, {
    key: "link",
    get: function get() {
      return '/articles/' + _Utilities_Strings__WEBPACK_IMPORTED_MODULE_0__["default"].methods.kebabCase(this.title) + '/' + this.slug;
    }
  }]);

  return Article;
}();

/* harmony default export */ __webpack_exports__["default"] = (Article);

/***/ }),

/***/ "./resources/js/Content/Spoilers.vue":
/*!*******************************************!*\
  !*** ./resources/js/Content/Spoilers.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Spoilers_vue_vue_type_template_id_6eb9a5f6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Spoilers.vue?vue&type=template&id=6eb9a5f6& */ "./resources/js/Content/Spoilers.vue?vue&type=template&id=6eb9a5f6&");
/* harmony import */ var _Spoilers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Spoilers.vue?vue&type=script&lang=js& */ "./resources/js/Content/Spoilers.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Spoilers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Spoilers_vue_vue_type_template_id_6eb9a5f6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Spoilers_vue_vue_type_template_id_6eb9a5f6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Content/Spoilers.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Content/Spoilers.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/Content/Spoilers.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Spoilers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Spoilers.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Content/Spoilers.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Spoilers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Content/Spoilers.vue?vue&type=template&id=6eb9a5f6&":
/*!**************************************************************************!*\
  !*** ./resources/js/Content/Spoilers.vue?vue&type=template&id=6eb9a5f6& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Spoilers_vue_vue_type_template_id_6eb9a5f6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Spoilers.vue?vue&type=template&id=6eb9a5f6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Content/Spoilers.vue?vue&type=template&id=6eb9a5f6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Spoilers_vue_vue_type_template_id_6eb9a5f6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Spoilers_vue_vue_type_template_id_6eb9a5f6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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