(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["practise.setup"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Practise/Setup.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Practise/Setup.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Utilities_Imagery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Utilities/Imagery */ "./resources/js/Utilities/Imagery.js");
/* harmony import */ var _Utilities_Strings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Utilities/Strings */ "./resources/js/Utilities/Strings.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
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
  mixins: [_Utilities_Imagery__WEBPACK_IMPORTED_MODULE_0__["default"], _Utilities_Strings__WEBPACK_IMPORTED_MODULE_1__["default"]],
  data: function data() {
    return {
      crumbs: [{
        text: 'Home',
        link: '/'
      }, {
        text: 'Limited practise',
        link: '/practise'
      }, {
        text: this.$route.query.format === 'sealed' ? 'Sealed deck run' : 'Team sealed run'
      }]
    };
  },
  methods: {
    sets: function sets() {
      return _.sortBy(_.filter(this.$settings.game.sets, function (set) {
        return set.draftable;
      }), function (set) {
        return set.released;
      }).reverse();
    },
    setup: function setup(set) {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('practise', {
        format: this.$route.query.format,
        set: set
      }).then(function (response) {
        _this.$router.push({
          name: 'practise.view',
          params: {
            practise: response.data.slug
          }
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Practise/Setup.vue?vue&type=template&id=2a95d417&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Practise/Setup.vue?vue&type=template&id=2a95d417& ***!
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
      _c("header-title", { attrs: { title: "Limited practise" } }),
      _vm._v(" "),
      _c("breadcrumbs", { attrs: { crumbs: _vm.crumbs } }),
      _vm._v(" "),
      _c("div", { staticClass: "bg-gray-200" }, [
        _c(
          "div",
          { staticClass: "w-auto flex justify-center items-start py-8" },
          _vm._l(_vm.sets(), function(set) {
            return _c(
              "div",
              { staticClass: "booster mx-4 hover:bg-white p-4 rounded-lg" },
              [
                _c(
                  "button",
                  {
                    staticClass: "block link-alternate",
                    on: {
                      click: function($event) {
                        return _vm.setup(set.id)
                      }
                    }
                  },
                  [
                    _c("img", {
                      attrs: {
                        src: _vm.imageUrl(
                          "/boosters/" + _vm.kebabCase(set.name) + ".png",
                          180
                        ),
                        alt: set.name,
                        title: set.name
                      }
                    })
                  ]
                )
              ]
            )
          }),
          0
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Practise/Setup.vue":
/*!*****************************************!*\
  !*** ./resources/js/Practise/Setup.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Setup_vue_vue_type_template_id_2a95d417___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Setup.vue?vue&type=template&id=2a95d417& */ "./resources/js/Practise/Setup.vue?vue&type=template&id=2a95d417&");
/* harmony import */ var _Setup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Setup.vue?vue&type=script&lang=js& */ "./resources/js/Practise/Setup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Setup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Setup_vue_vue_type_template_id_2a95d417___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Setup_vue_vue_type_template_id_2a95d417___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Practise/Setup.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Practise/Setup.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/Practise/Setup.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Setup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Setup.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Practise/Setup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Setup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Practise/Setup.vue?vue&type=template&id=2a95d417&":
/*!************************************************************************!*\
  !*** ./resources/js/Practise/Setup.vue?vue&type=template&id=2a95d417& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Setup_vue_vue_type_template_id_2a95d417___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Setup.vue?vue&type=template&id=2a95d417& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Practise/Setup.vue?vue&type=template&id=2a95d417&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Setup_vue_vue_type_template_id_2a95d417___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Setup_vue_vue_type_template_id_2a95d417___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Utilities/Markdown/Blockquote.js":
/*!*******************************************************!*\
  !*** ./resources/js/Utilities/Markdown/Blockquote.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  type: 'output',
  regex: /<blockquote>([^]+?)<\/blockquote>/gi,
  replace: '<blockquote class="relative py-2 px-8 pl-12 my-8 text-xl italic border border-l-4 quote rounded-lg z-0">' + '<div class="stylistic-quote-mark text-gray-200" aria-hidden="true">&ldquo;</div>' + '<p>$1</p>' + '</blockquote>'
});

/***/ }),

/***/ "./resources/js/Utilities/Markdown/Cards.js":
/*!**************************************************!*\
  !*** ./resources/js/Utilities/Markdown/Cards.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Carding__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Carding */ "./resources/js/Utilities/Carding.js");

var matches = [];
var lastAlignment = 'left';
var alignmentClasses = {
  left: 'sm:float-left sm:m-4 sm:ml-0',
  right: 'sm:float-right sm:m-4 sm:mr-0'
};
/* harmony default export */ __webpack_exports__["default"] = ([{
  type: 'lang',
  regex: /\^cards\((([A-Z]{3}[0-9]{3},?)+)\)/gi,
  replace: function replace(s, match) {
    matches.push(match);
    var n = matches.length - 1;
    return '%CARDS' + n + '%';
  }
}, {
  type: 'output',
  filter: function filter(text) {
    for (var i = 0; i < matches.length; ++i) {
      var identifiers = matches[i].split(',');
      var cards = identifiers.map(function (cardIdentifier) {
        return '<card-ad identifier="' + cardIdentifier + '"></card-ad>';
      });
      var pat = '%CARDS' + i + '%';
      var classes = ''; // Here we are moving and positioning the card in the article.

      if (identifiers.length === 1) {
        var alignment = lastAlignment === 'right' ? 'left' : 'right';
        classes = alignmentClasses[alignment];
        lastAlignment = alignment;
      } else {
        classes = 'flex items-start justify-center';
      }

      text = text.replace(new RegExp(pat, 'gi'), '<div class="' + classes + '">' + cards.join('\n') + '</div>');
    } //reset array


    matches = [];
    return text;
  }
}]);

/***/ }),

/***/ "./resources/js/Utilities/Markdown/Classes.js":
/*!****************************************************!*\
  !*** ./resources/js/Utilities/Markdown/Classes.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var classMap = {
  a: 'link',
  h1: 'text-4xl',
  h2: 'text-2xl',
  h3: 'text-xl',
  ol: 'list-decimal ml-8',
  p: 'my-4',
  ul: 'list-disc ml-8'
};
/* harmony default export */ __webpack_exports__["default"] = (Object.keys(classMap).map(function (key) {
  return {
    type: 'output',
    regex: new RegExp("<".concat(key, "(.*)>"), 'g'),
    replace: "<".concat(key, " class=\"").concat(classMap[key], "\" $1>")
  };
}));

/***/ }),

/***/ "./resources/js/Utilities/Markdown/Decks.js":
/*!**************************************************!*\
  !*** ./resources/js/Utilities/Markdown/Decks.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Carding__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Carding */ "./resources/js/Utilities/Carding.js");

var matches = [];
/* harmony default export */ __webpack_exports__["default"] = ([{
  type: 'lang',
  regex: /\^deck\(([A-Z]+)\)/gi,
  replace: function replace(s, match) {
    matches.push(match);
    var n = matches.length - 1;
    return '%DECK' + n + '%';
  }
}, {
  type: 'output',
  filter: function filter(text) {
    for (var i = 0; i < matches.length; ++i) {
      var url = window.location.protocol + '//' + window.location.hostname + '/decks/embed/' + matches[i];
      var pat = '<p>%DECK' + i + '% *<\/p>';
      var replace = '<div class="block sm:m-8 mt-0 sm:float-right border border-gray-400">' + '<iframe src="' + url + '" width="350" height="1200" id="deck-' + i + '" sandbox="allow-same-origin allow-scripts" scrolling="yes"></iframe>' + '</div>';
      text = text.replace(new RegExp(pat, 'gi'), replace);
    } //reset array


    matches = [];
    return text;
  }
}]);

/***/ }),

/***/ "./resources/js/Utilities/Markdown/showdown.js":
/*!*****************************************************!*\
  !*** ./resources/js/Utilities/Markdown/showdown.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var showdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! showdown */ "./node_modules/showdown/dist/showdown.js");
/* harmony import */ var showdown__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(showdown__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Classes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Classes */ "./resources/js/Utilities/Markdown/Classes.js");
/* harmony import */ var _Blockquote__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Blockquote */ "./resources/js/Utilities/Markdown/Blockquote.js");
/* harmony import */ var _Cards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Cards */ "./resources/js/Utilities/Markdown/Cards.js");
/* harmony import */ var _Decks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Decks */ "./resources/js/Utilities/Markdown/Decks.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }






var converter = new showdown__WEBPACK_IMPORTED_MODULE_0___default.a.Converter({
  extensions: [_Cards__WEBPACK_IMPORTED_MODULE_3__["default"], _Decks__WEBPACK_IMPORTED_MODULE_4__["default"]].concat(_toConsumableArray(_Classes__WEBPACK_IMPORTED_MODULE_1__["default"]), [_Blockquote__WEBPACK_IMPORTED_MODULE_2__["default"]])
});
/* harmony default export */ __webpack_exports__["default"] = (function (string) {
  return '<div>' + converter.makeHtml(string) + '</div>';
});
;

/***/ }),

/***/ "./resources/js/Utilities/Strings.js":
/*!*******************************************!*\
  !*** ./resources/js/Utilities/Strings.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! marked */ "./node_modules/marked/src/marked.js");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Markdown_showdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Markdown/showdown */ "./resources/js/Utilities/Markdown/showdown.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    kebabCase: function kebabCase(string) {
      return this.snakeCase(string, '-');
    },
    parseMarkdown: function parseMarkdown(string) {
      return Object(_Markdown_showdown__WEBPACK_IMPORTED_MODULE_1__["default"])(string);
    },
    minimalMarkdown: function minimalMarkdown(string) {
      return Object(_Markdown_showdown__WEBPACK_IMPORTED_MODULE_1__["default"])(string);
    },
    prettyText: function prettyText(text) {
      function chunk(arr, len) {
        var chunks = [],
            i = 0,
            n = arr.length;

        while (i < n) {
          chunks.push(arr.slice(i, i += len));
        }

        return chunks;
      }

      var content = this.prettified(text);
      return this.parseMarkdown(content);
    },
    prettified: function prettified(text) {
      var content = text.split('\n');
      content = content.map(function (line) {
        var regex = new RegExp(/\[([+-])?(([X0-9]{1})\s)?([a-z]+)\]/i);

        while (true) {
          var matches = regex.exec(line);

          if (!matches) {
            return line;
          }

          var modifier = matches[1];
          var amount = matches[3];
          var effect = matches[4];
          var string = '';

          if (effect === 'Pitch') {
            effect = 'resource';
          }

          if (effect === 'Power') {
            effect = 'attack';
          }

          effect = effect.toLowerCase();

          if (modifier) {
            string = modifier + amount + '<img src="/img/' + effect + '.png" class="inline-block h-5 align-middle">';
          } else if (amount) {
            for (var x = 0; x < amount; x++) {
              string += '<img src="/img/' + effect + '.png" class="inline-block h-5">';
            }
          } else {
            string += '<img src="/img/' + effect + '.png" class="inline-block h-5">';
          }

          line = line.replace(matches[0], string, line);
        }
      });
      return content.join('\n');
    },
    snakeCase: function snakeCase(string, delimiter) {
      if (!delimiter) delimiter = '_';
      return string.toLowerCase().replace(/[^0-9a-z\s]+/g, '').replace(/\s+/g, delimiter);
    },
    ucfirst: function ucfirst(string) {
      return string[0].toUpperCase() + string.slice(1);
    },
    imageDomain: function imageDomain() {
      return window.settings.imageDomain;
    },
    buildQuery: function buildQuery(params) {
      var esc = encodeURIComponent;
      return Object.keys(params).map(function (k) {
        return esc(k) + '=' + esc(params[k]);
      }).join('&');
    }
  }
});

/***/ })

}]);