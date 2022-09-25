(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["articles.view"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/Markdown.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Components/Markdown.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    content: {
      type: String,
      required: true
    }
  },
  computed: {
    dynamicComponent: function dynamicComponent() {
      return {
        template: this.content
      };
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Content/Tag.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Content/Tag.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    tag: {
      type: String,
      required: true
    }
  },
  mixins: [_Utilities_Strings__WEBPACK_IMPORTED_MODULE_0__["default"]]
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Content/ViewArticle.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Content/ViewArticle.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _Article__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Article */ "./resources/js/Content/Article.js");
/* harmony import */ var _Identity_Avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Identity/Avatar */ "./resources/js/Identity/Avatar.vue");
/* harmony import */ var _Components_Breadcrumbs_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/Breadcrumbs.vue */ "./resources/js/Components/Breadcrumbs.vue");
/* harmony import */ var _CardDatabase_Cardable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../CardDatabase/Cardable */ "./resources/js/CardDatabase/Cardable.js");
/* harmony import */ var _Discussion_Discussion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Discussion/Discussion */ "./resources/js/Discussion/Discussion.vue");
/* harmony import */ var _Components_HeaderTitle_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Components/HeaderTitle.vue */ "./resources/js/Components/HeaderTitle.vue");
/* harmony import */ var _Utilities_Imagery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Utilities/Imagery */ "./resources/js/Utilities/Imagery.js");
/* harmony import */ var _Components_Markdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Components/Markdown */ "./resources/js/Components/Markdown.vue");
/* harmony import */ var _Components_LazyLoader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Components/LazyLoader */ "./resources/js/Components/LazyLoader.js");
/* harmony import */ var _Utilities_Models__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Utilities/Models */ "./resources/js/Utilities/Models.js");
/* harmony import */ var _Utilities_Strings__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Utilities/Strings */ "./resources/js/Utilities/Strings.js");
/* harmony import */ var _Tag__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Tag */ "./resources/js/Content/Tag.vue");
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
    Avatar: _Identity_Avatar__WEBPACK_IMPORTED_MODULE_2__["default"],
    Breadcrumbs: _Components_Breadcrumbs_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    Discussion: _Discussion_Discussion__WEBPACK_IMPORTED_MODULE_5__["default"],
    HeaderTitle: _Components_HeaderTitle_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    Markdown: _Components_Markdown__WEBPACK_IMPORTED_MODULE_8__["default"],
    Tag: _Tag__WEBPACK_IMPORTED_MODULE_12__["default"]
  },
  mixins: [_CardDatabase_Cardable__WEBPACK_IMPORTED_MODULE_4__["default"], _Utilities_Strings__WEBPACK_IMPORTED_MODULE_11__["default"], _Utilities_Imagery__WEBPACK_IMPORTED_MODULE_7__["default"]],
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('session', ['user'])), {}, {
    crumbs: function crumbs() {
      return [{
        text: 'Home',
        link: '/'
      }, {
        text: 'Articles',
        link: '/articles'
      }, {
        text: this.article.title
      }];
    }
  }),
  data: function data() {
    return {
      article: null
    };
  },
  metaInfo: function metaInfo() {
    return {
      title: this.article.title,
      meta: [{
        vmid: 'description',
        name: 'description',
        content: this.article.excerpt
      }, {
        vmid: 'og:type',
        property: 'og:type',
        content: 'article'
      }, {
        vmid: 'og:title',
        property: 'og:title',
        content: this.article.title
      }, {
        vmid: 'og:description',
        property: 'og:description',
        content: this.article.excerpt
      }, {
        vmid: 'og:image',
        property: 'og:image',
        content: this.imageUrl(this.article.image, 350)
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
    axios.get('/articles/' + to.params.article).then(function (response) {
      callback(function () {
        this.article = _Utilities_Models__WEBPACK_IMPORTED_MODULE_10__["default"].hydrate(response.data.article, _Article__WEBPACK_IMPORTED_MODULE_1__["default"]);
        this.next = _Utilities_Models__WEBPACK_IMPORTED_MODULE_10__["default"].hydrate(response.data.next, _Article__WEBPACK_IMPORTED_MODULE_1__["default"]);
        this.prev = _Utilities_Models__WEBPACK_IMPORTED_MODULE_10__["default"].hydrate(response.data.prev, _Article__WEBPACK_IMPORTED_MODULE_1__["default"]);
      });
    });
  })
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/Markdown.vue?vue&type=template&id=c8b44a8c&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Components/Markdown.vue?vue&type=template&id=c8b44a8c& ***!
  \***********************************************************************************************************************************************************************************************************/
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
  return _c(_vm.dynamicComponent, { tag: "div" })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Content/Tag.vue?vue&type=template&id=18611894&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Content/Tag.vue?vue&type=template&id=18611894& ***!
  \***************************************************************************************************************************************************************************************************/
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
  return _c(
    "router-link",
    {
      staticClass: "rounded inline-block py-1 px-2 mr-2",
      attrs: {
        to: {
          name: "articles.tag",
          params: { tag: _vm.kebabCase(_vm.ucfirst(_vm.tag.trim())) },
        },
      },
    },
    [_vm._v("\n    " + _vm._s(_vm.ucfirst(_vm.tag.trim())) + "\n")]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Content/ViewArticle.vue?vue&type=template&id=7e8519a6&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Content/ViewArticle.vue?vue&type=template&id=7e8519a6& ***!
  \***********************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    [
      _c("header-title", { attrs: { title: "Articles" } }),
      _vm._v(" "),
      _c("breadcrumbs", { attrs: { crumbs: _vm.crumbs } }),
      _vm._v(" "),
      _c("div", { staticClass: "bg-gray-200" }, [
        _c(
          "div",
          { staticClass: "article container sm:mx-auto py-8 flow-root p-4" },
          [
            _c(
              "div",
              [
                _c("h1", { staticClass: "text-4xl uppercase font-serif" }, [
                  _vm._v(_vm._s(_vm.article.title)),
                ]),
                _vm._v(" "),
                _vm.article.tags
                  ? _c(
                      "div",
                      { staticClass: "mb-4" },
                      _vm._l(_vm.article.tags.split(","), function (tag) {
                        return _vm.article.tags
                          ? _c("tag", {
                              key: tag,
                              staticClass: "bg-gray-400 text-gray-600 text-sm",
                              attrs: { tag: tag },
                            })
                          : _vm._e()
                      }),
                      1
                    )
                  : _vm._e(),
                _vm._v(" "),
                _c("div", { staticClass: "mb-8" }, [
                  _c(
                    "span",
                    { staticClass: "text-gray-600" },
                    [
                      _vm._v("Written by "),
                      _c(
                        "router-link",
                        {
                          staticClass: "link",
                          attrs: {
                            to: {
                              name: "articles.author",
                              params: { author: _vm.article.author.slug },
                            },
                          },
                        },
                        [_vm._v(_vm._s(_vm.article.author.name))]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("span", { staticClass: "text-gray-500" }, [_vm._v("on")]),
                  _vm._v(" "),
                  _c("span", { staticClass: "text-gray-600" }, [
                    _vm._v(_vm._s(_vm.article.published)),
                  ]),
                ]),
                _vm._v(" "),
                _c("markdown", {
                  attrs: { content: _vm.parseMarkdown(_vm.article.content) },
                }),
              ],
              1
            ),
            _vm._v(" "),
            _vm.article.author.blurb
              ? _c("div", { staticClass: "pt-4 my-8 flow-root" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "float-left rounded-r-full bg-gray-200 mr-4 mb-4",
                    },
                    [
                      _c(
                        "router-link",
                        {
                          attrs: {
                            to: {
                              name: "articles.author",
                              params: { author: _vm.article.author.slug },
                            },
                          },
                        },
                        [
                          _c("avatar", {
                            attrs: { user: _vm.article.author, width: 150 },
                          }),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "mb-4 mt-2 border-t border-gray-400 pt-4" },
                    [
                      _c(
                        "div",
                        { staticClass: "font-serif uppercase text-2xl" },
                        [
                          _c(
                            "router-link",
                            {
                              attrs: {
                                to: {
                                  name: "articles.author",
                                  params: { author: _vm.article.author.slug },
                                },
                              },
                            },
                            [_vm._v(_vm._s(_vm.article.author.name))]
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("div", [_vm._v(_vm._s(_vm.article.author.blurb))]),
                    ]
                  ),
                ])
              : _vm._e(),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "flex w-full py-4 border-t border-gray-400" },
              [
                _c(
                  "div",
                  { staticClass: "flex-1" },
                  [
                    _vm.prev.valid()
                      ? _c(
                          "router-link",
                          { staticClass: "link", attrs: { to: _vm.prev.link } },
                          [_vm._v("Previously: " + _vm._s(_vm.prev.title))]
                        )
                      : _vm._e(),
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "flex-1 text-right" },
                  [
                    _vm.next.valid()
                      ? _c(
                          "router-link",
                          { staticClass: "link", attrs: { to: _vm.next.link } },
                          [_vm._v("Next up: " + _vm._s(_vm.next.title))]
                        )
                      : _vm._e(),
                  ],
                  1
                ),
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "border-t border-gray-400" },
              [
                _c("discussion", {
                  attrs: { type: "article", id: _vm.article.slug },
                }),
              ],
              1
            ),
          ]
        ),
      ]),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Components/Markdown.vue":
/*!**********************************************!*\
  !*** ./resources/js/Components/Markdown.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Markdown_vue_vue_type_template_id_c8b44a8c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Markdown.vue?vue&type=template&id=c8b44a8c& */ "./resources/js/Components/Markdown.vue?vue&type=template&id=c8b44a8c&");
/* harmony import */ var _Markdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Markdown.vue?vue&type=script&lang=js& */ "./resources/js/Components/Markdown.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Markdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Markdown_vue_vue_type_template_id_c8b44a8c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Markdown_vue_vue_type_template_id_c8b44a8c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/Markdown.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Components/Markdown.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/Components/Markdown.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Markdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Markdown.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/Markdown.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Markdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/Markdown.vue?vue&type=template&id=c8b44a8c&":
/*!*****************************************************************************!*\
  !*** ./resources/js/Components/Markdown.vue?vue&type=template&id=c8b44a8c& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Markdown_vue_vue_type_template_id_c8b44a8c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Markdown.vue?vue&type=template&id=c8b44a8c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/Markdown.vue?vue&type=template&id=c8b44a8c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Markdown_vue_vue_type_template_id_c8b44a8c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Markdown_vue_vue_type_template_id_c8b44a8c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



var Article = /*#__PURE__*/function () {
  function Article(fields) {
    _classCallCheck(this, Article);

    this.fields = fields;
  }

  _createClass(Article, [{
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
  }, {
    key: "valid",
    value: function valid() {
      return !!this.fields;
    }
  }]);

  return Article;
}();

/* harmony default export */ __webpack_exports__["default"] = (Article);

/***/ }),

/***/ "./resources/js/Content/Tag.vue":
/*!**************************************!*\
  !*** ./resources/js/Content/Tag.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tag_vue_vue_type_template_id_18611894___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tag.vue?vue&type=template&id=18611894& */ "./resources/js/Content/Tag.vue?vue&type=template&id=18611894&");
/* harmony import */ var _Tag_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tag.vue?vue&type=script&lang=js& */ "./resources/js/Content/Tag.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Tag_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Tag_vue_vue_type_template_id_18611894___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Tag_vue_vue_type_template_id_18611894___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Content/Tag.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Content/Tag.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./resources/js/Content/Tag.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tag_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Tag.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Content/Tag.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tag_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Content/Tag.vue?vue&type=template&id=18611894&":
/*!*********************************************************************!*\
  !*** ./resources/js/Content/Tag.vue?vue&type=template&id=18611894& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tag_vue_vue_type_template_id_18611894___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Tag.vue?vue&type=template&id=18611894& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Content/Tag.vue?vue&type=template&id=18611894&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tag_vue_vue_type_template_id_18611894___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tag_vue_vue_type_template_id_18611894___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Content/ViewArticle.vue":
/*!**********************************************!*\
  !*** ./resources/js/Content/ViewArticle.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ViewArticle_vue_vue_type_template_id_7e8519a6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ViewArticle.vue?vue&type=template&id=7e8519a6& */ "./resources/js/Content/ViewArticle.vue?vue&type=template&id=7e8519a6&");
/* harmony import */ var _ViewArticle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ViewArticle.vue?vue&type=script&lang=js& */ "./resources/js/Content/ViewArticle.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ViewArticle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ViewArticle_vue_vue_type_template_id_7e8519a6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ViewArticle_vue_vue_type_template_id_7e8519a6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Content/ViewArticle.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Content/ViewArticle.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/Content/ViewArticle.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewArticle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ViewArticle.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Content/ViewArticle.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewArticle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Content/ViewArticle.vue?vue&type=template&id=7e8519a6&":
/*!*****************************************************************************!*\
  !*** ./resources/js/Content/ViewArticle.vue?vue&type=template&id=7e8519a6& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewArticle_vue_vue_type_template_id_7e8519a6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ViewArticle.vue?vue&type=template&id=7e8519a6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Content/ViewArticle.vue?vue&type=template&id=7e8519a6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewArticle_vue_vue_type_template_id_7e8519a6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewArticle_vue_vue_type_template_id_7e8519a6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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