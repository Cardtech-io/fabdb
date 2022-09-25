(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["articles.view~cards.view~decks.view"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Discussion/Comment.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Discussion/Comment.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Identity_Avatar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Identity/Avatar */ "./resources/js/Identity/Avatar.vue");
/* harmony import */ var _Identity_Badge_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Identity/Badge.vue */ "./resources/js/Identity/Badge.vue");
/* harmony import */ var _Voting_Votes_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Voting/Votes.vue */ "./resources/js/Voting/Votes.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['comment'],
  components: {
    Avatar: _Identity_Avatar__WEBPACK_IMPORTED_MODULE_0__["default"],
    Badge: _Identity_Badge_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    Votes: _Voting_Votes_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Discussion/CommentCount.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Discussion/CommentCount.vue?vue&type=script&lang=js& ***!
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
  props: ['comments']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Discussion/Discussion.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Discussion/Discussion.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CommentCount__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CommentCount */ "./resources/js/Discussion/CommentCount.vue");
/* harmony import */ var _Comment_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Comment.js */ "./resources/js/Discussion/Comment.js");
/* harmony import */ var _Comment_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Comment.vue */ "./resources/js/Discussion/Comment.vue");
/* harmony import */ var _Utilities_Models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Utilities/Models */ "./resources/js/Utilities/Models.js");
/* harmony import */ var _Respond__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Respond */ "./resources/js/Discussion/Respond.vue");
//
//
//
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
    type: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    }
  },
  components: {
    Comment: _Comment_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    CommentCount: _CommentCount__WEBPACK_IMPORTED_MODULE_1__["default"],
    Respond: _Respond__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  data: function data() {
    return {
      comments: []
    };
  },
  methods: {
    addComment: function addComment(comment) {
      this.comments.push(new _Comment_js__WEBPACK_IMPORTED_MODULE_2__["default"](comment));
    }
  },
  mounted: function mounted() {
    var _this = this;

    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/comments/' + this.type + '/' + this.id).then(function (response) {
      _this.comments = _Utilities_Models__WEBPACK_IMPORTED_MODULE_4__["default"].hydrateMany(response.data, _Comment_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Discussion/Respond.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Discussion/Respond.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Components_Form_Submit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/Form/Submit */ "./resources/js/Components/Form/Submit.vue");
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



/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['type', 'foreign'],
  components: {
    Submit: _Components_Form_Submit__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('session', ['user'])), {}, {
    name: {
      get: function get() {
        return this.user.name;
      },
      set: function set(name) {
        this.setUserParam({
          param: 'name',
          value: name
        });
        this.nameRequiresSaving = true;
      }
    }
  }),
  data: function data() {
    return {
      content: null,
      nameRequiresSaving: false,
      saving: false
    };
  },
  methods: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('session', ['setUserParam'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('messages', ['addMessage'])), {}, {
    save: function save() {
      var _this = this;

      this.saving = true;

      if (this.nameRequiresSaving) {
        axios__WEBPACK_IMPORTED_MODULE_1___default.a.put('/profile/name', {
          name: this.name
        });
      }

      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/comments/', {
        type: this.type,
        foreign: this.foreign,
        content: this.content
      }).then(function (response) {
        _this.addMessage({
          status: 'success',
          message: 'Comment posted.'
        });

        _this.saving = false;
        _this.content = '';

        _this.$emit('comment-posted', response.data);
      });
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Identity/Avatar.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Identity/Avatar.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
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
    user: {
      type: Object,
      required: true
    },
    width: {
      type: Number,
      "default": 100
    }
  },
  computed: {
    avatar: function avatar() {
      return this.user.avatar || 'bauble';
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Identity/Badge.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Identity/Badge.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CardDatabase_Cardable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../CardDatabase/Cardable */ "./resources/js/CardDatabase/Cardable.js");
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [_CardDatabase_Cardable__WEBPACK_IMPORTED_MODULE_0__["default"]],
  props: {
    subscriptionLevel: {
      type: String,
      required: true
    },
    size: String
  },
  computed: {
    classes: function classes() {
      var levels = {
        supporter: 'bg-blue-400',
        majestic: 'bg-yellow-500',
        legendary: 'bg-black',
        trial: 'bg-gray-400',
        promo: 'bg-orange-600',
        fabled: 'bg-green-400'
      };
      var classes = {};
      classes[levels[this.subscriptionLevel]] = true;

      if (this.size === 'small') {
        classes['px-3'] = true;
        classes['py-1'] = true;
        classes['text-xs'] = true;
      } else {
        classes['px-4'] = true;
        classes['py-2'] = true;
      }

      return classes;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Voting/Vote.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Voting/Vote.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
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
    direction: {
      type: String,
      required: true,
      validator: function validator(value) {
        return ['up', 'down'].indexOf(value) !== -1;
      }
    },
    size: {
      type: Number,
      required: true
    }
  },
  computed: {
    classes: function classes() {},
    sizes: function sizes() {
      return ['h-' + this.size];
    }
  },
  methods: {
    vote: function vote() {
      var _this = this;

      var payload = {
        type: this.$parent.voteable,
        foreign: this.$parent.foreign,
        direction: this.direction
      };
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/vote', payload).then(function (response) {
        _this.$emit('voted', payload);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Voting/Votes.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Voting/Votes.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Vote_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vote.vue */ "./resources/js/Voting/Vote.vue");
//
//
//
//
//
//
//
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
    Vote: _Vote_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    layout: {
      type: String,
      validator: function validator(value) {
        return ['vertical', 'horizontal'].indexOf(value) !== -1;
      }
    },
    size: {
      type: Number,
      required: true
    },
    total: {
      type: Number,
      required: true
    },
    voteable: {
      type: String,
      required: true
    },
    foreign: {
      type: String,
      required: true
    },
    voted: {
      type: Number,
      required: true
    }
  },
  data: function data() {
    return {
      count: this.total,
      voteState: this.voted,
      previousDirection: null
    };
  },
  computed: {
    actualTotal: function actualTotal() {
      return this.count < 0 ? 0 : this.count;
    }
  },
  methods: {
    handleVote: function handleVote(payload) {
      var vote = payload.direction === 'down' ? -1 : 1;

      if (this.voteState === vote) {
        this.voteState = 0;
      } else {
        this.voteState = vote;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Discussion/Comment.vue?vue&type=template&id=6cc52676&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Discussion/Comment.vue?vue&type=template&id=6cc52676& ***!
  \**********************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "my-4 sm:mx-0" }, [
    _c("div", { staticClass: "flex mb-4" }, [
      _c(
        "div",
        { staticClass: "mr-4" },
        [
          _c("avatar", {
            staticClass: "rounded-br-none",
            attrs: { user: _vm.comment.author, width: 80 },
          }),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "mr-4" },
        [
          _c("votes", {
            attrs: {
              size: 4,
              total: _vm.comment.totalVotes,
              voted: _vm.comment.myVote,
              voteable: "comment",
              foreign: _vm.comment.slug,
              layout: "vertical",
            },
          }),
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "flex-1" }, [
        _c("header", { staticClass: "flex w-full" }, [
          _c(
            "div",
            { staticClass: "flex items-center" },
            [
              _c("span", { staticClass: "mr-4 font-bold" }, [
                _vm._v(_vm._s(_vm.comment.name)),
              ]),
              _vm._v(" "),
              _vm.comment.subscription
                ? _c("badge", {
                    attrs: {
                      "subscription-level": _vm.comment.subscription,
                      size: "small",
                    },
                  })
                : _vm._e(),
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "text-gray-500 text-sm text-right" }, [
            _vm._v(_vm._s(_vm.comment.createdAt)),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "mt-2" }, [
          _vm._v(_vm._s(_vm.comment.content)),
        ]),
      ]),
    ]),
    _vm._v(" "),
    _c("hr", { staticClass: "text-gray-500" }),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Discussion/CommentCount.vue?vue&type=template&id=5faf6a2e&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Discussion/CommentCount.vue?vue&type=template&id=5faf6a2e& ***!
  \***************************************************************************************************************************************************************************************************************/
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
  return _c("h2", { staticClass: "font-serif uppercase text-lg mt-4" }, [
    _vm._v(_vm._s(_vm.comments ? _vm.comments.length : 0) + " comments."),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Discussion/Discussion.vue?vue&type=template&id=414d3561&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Discussion/Discussion.vue?vue&type=template&id=414d3561& ***!
  \*************************************************************************************************************************************************************************************************************/
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
      _c("comment-count", { attrs: { comments: _vm.comments } }),
      _vm._v(" "),
      _vm.comments.length
        ? _c(
            "div",
            _vm._l(_vm.comments, function (comment) {
              return _c("comment", {
                key: comment.slug,
                attrs: { comment: comment },
              })
            }),
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _c("respond", {
        staticClass: "mt-8",
        attrs: { type: _vm.type, foreign: _vm.id },
        on: { "comment-posted": _vm.addComment },
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Discussion/Respond.vue?vue&type=template&id=5ca82dac&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Discussion/Respond.vue?vue&type=template&id=5ca82dac& ***!
  \**********************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "mt-4 sm:px-0" }, [
    _vm.user
      ? _c(
          "form",
          {
            on: {
              submit: function ($event) {
                $event.preventDefault()
                return _vm.save.apply(null, arguments)
              },
            },
          },
          [
            !_vm.user.name || _vm.nameRequiresSaving
              ? _c("div", { staticClass: "w-full" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.name,
                        expression: "name",
                      },
                    ],
                    staticClass:
                      "input focus:border-gray-500 py-3 px-4 rounded-lg",
                    attrs: { type: "text", placeholder: "Name", required: "" },
                    domProps: { value: _vm.name },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.name = $event.target.value
                      },
                    },
                  }),
                ])
              : _vm._e(),
            _vm._v(" "),
            _c("div", { staticClass: "w-full mt-1" }, [
              _c("textarea", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.content,
                    expression: "content",
                  },
                ],
                staticClass: "input focus:border-gray-500 py-3 px-4 rounded-lg",
                attrs: {
                  type: "text",
                  rows: "4",
                  placeholder: "Type here to comment on this " + _vm.type + ".",
                },
                domProps: { value: _vm.content },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.content = $event.target.value
                  },
                },
              }),
            ]),
            _vm._v(" "),
            _c("submit", {
              staticClass: "w-full sm:w-auto mt-2 mx-auto",
              attrs: { text: "Comment", disabled: _vm.saving },
            }),
          ],
          1
        )
      : _c(
          "div",
          { staticClass: "text-center" },
          [
            _vm._v("\n        You must be "),
            _c(
              "router-link",
              {
                staticClass: "link",
                attrs: { to: "/login/?from=" + _vm.$route.path },
              },
              [_vm._v("logged in")]
            ),
            _vm._v(" to participate in discussions.\n    "),
          ],
          1
        ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Identity/Avatar.vue?vue&type=template&id=20c96a88&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Identity/Avatar.vue?vue&type=template&id=20c96a88& ***!
  \*******************************************************************************************************************************************************************************************************/
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
  return _c("img", {
    staticClass: "rounded-full",
    style: { width: _vm.width + "px" },
    attrs: {
      src: _vm.imageUrl("/heroes/" + _vm.avatar + ".jpg", _vm.width),
      alt: _vm.user.name,
    },
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Identity/Badge.vue?vue&type=template&id=e2bef7e0&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Identity/Badge.vue?vue&type=template&id=e2bef7e0& ***!
  \******************************************************************************************************************************************************************************************************/
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
    "span",
    {
      staticClass: "inline-block rounded-full text-white uppercase font-serif",
      class: _vm.classes,
    },
    [_vm._v(_vm._s(_vm.ucfirst(_vm.subscriptionLevel)))]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Voting/Vote.vue?vue&type=template&id=0104a2c4&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Voting/Vote.vue?vue&type=template&id=0104a2c4& ***!
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
    "button",
    {
      staticClass: "text-gray-400 hover:text-gray-800 dark:hover:text-white",
      class: _vm.classes,
      on: {
        click: function ($event) {
          return _vm.vote()
        },
      },
    },
    [
      _c(
        "svg",
        {
          staticClass: "fill-current",
<<<<<<< HEAD
          class: _vm.sizes,
          attrs: { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20" }
        },
        [
          _c("path", {
            attrs: {
              d:
                "M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z"
            }
          })
=======
          class: _vm.classes,
          attrs: { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20" },
        },
        [
          _vm.direction === "up"
            ? _c("path", {
                attrs: {
                  d: "M11 0h1v3l3 7v8a2 2 0 01-2 2H5c-1.1 0-2.31-.84-2.7-1.88L0 12v-2a2 2 0 012-2h7V2a2 2 0 012-2zm6 10h3v10h-3V10z",
                },
              })
            : _c("path", {
                attrs: {
                  d: "M11 20a2 2 0 01-2-2v-6H2a2 2 0 01-2-2V8l2.3-6.12A3.11 3.11 0 015 0h8a2 2 0 012 2v8l-3 7v3h-1zm6-10V0h3v10h-3z",
                },
              }),
>>>>>>> master
        ]
      ),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Voting/Votes.vue?vue&type=template&id=233b56df&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Voting/Votes.vue?vue&type=template&id=233b56df& ***!
  \****************************************************************************************************************************************************************************************************/
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
<<<<<<< HEAD
  return _c(
    "div",
    { class: { "flex items-center": _vm.layout !== "vertical" } },
    [
      _vm.layout !== "vertical"
        ? _c("div", { staticClass: "text-xl mr-2 mt-1" }, [
            _vm.total && _vm.total > 0
              ? _c("span", [_vm._v(_vm._s(_vm.actualTotal))])
              : _vm._e()
          ])
        : _vm._e(),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "mt-1", class: { flex: _vm.layout !== "vertical" } },
        [
          _c(
            "div",
            [
              _c("vote", {
                class: { "text-gray-800": _vm.voteState === 1 },
                attrs: { size: _vm.size, direction: "up" },
                on: { voted: _vm.handleVote }
              })
            ],
            1
          ),
          _vm._v(" "),
          _vm.layout === "vertical"
            ? _c("div", { staticClass: "text-center -mt-1" }, [
                _vm.total && _vm.total > 0
                  ? _c("span", [_vm._v(_vm._s(_vm.actualTotal))])
                  : _vm._e()
              ])
            : _vm._e()
        ]
      )
    ]
  )
=======
  return _c("div", { class: { flex: _vm.layout !== "vertical" } }, [
    _vm.layout !== "vertical"
      ? _c("div", { staticClass: "text-xl mr-2 mt-1" }, [
          _vm.total && _vm.total > 0
            ? _c("span", [_vm._v(_vm._s(_vm.actualTotal))])
            : _vm._e(),
        ])
      : _vm._e(),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "mt-1", class: { flex: _vm.layout !== "vertical" } },
      [
        _c(
          "div",
          [
            _c("vote", {
              class: { "text-gray-800": _vm.voteState === 1 },
              attrs: { size: _vm.size, direction: "up" },
              on: { voted: _vm.handleVote },
            }),
          ],
          1
        ),
        _vm._v(" "),
        _vm.layout === "vertical"
          ? _c("div", { staticClass: "text-center -mt-1" }, [
              _vm.total && _vm.total > 0
                ? _c("span", [_vm._v(_vm._s(_vm.actualTotal))])
                : _vm._e(),
            ])
          : _vm._e(),
      ]
    ),
  ])
>>>>>>> master
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

/***/ "./resources/js/Discussion/Comment.js":
/*!********************************************!*\
  !*** ./resources/js/Discussion/Comment.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



var Comment = /*#__PURE__*/function () {
  function Comment(fields) {
    _classCallCheck(this, Comment);

    this.fields = fields;
  }

  _createClass(Comment, [{
    key: "author",
    get: function get() {
      return this.fields.user;
    }
  }, {
    key: "name",
    get: function get() {
      return this.fields.user.name || 'Anonymous';
    }
  }, {
    key: "slug",
    get: function get() {
      return this.fields.slug;
    }
  }, {
    key: "when",
    get: function get() {
      return moment__WEBPACK_IMPORTED_MODULE_0___default.a.utc(this.fields.createdAt).local().fromNow();
    }
  }, {
    key: "content",
    get: function get() {
      return this.fields.content;
    }
  }, {
    key: "subscription",
    get: function get() {
      return this.fields.user.subscription;
    }
  }, {
    key: "myVote",
    get: function get() {
      return this.fields.myVote || 0;
    }
  }, {
    key: "totalVotes",
    get: function get() {
      return this.fields.totalVotes || 0;
    }
  }]);

  return Comment;
}();

/* harmony default export */ __webpack_exports__["default"] = (Comment);

/***/ }),

/***/ "./resources/js/Discussion/Comment.vue":
/*!*********************************************!*\
  !*** ./resources/js/Discussion/Comment.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Comment_vue_vue_type_template_id_6cc52676___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Comment.vue?vue&type=template&id=6cc52676& */ "./resources/js/Discussion/Comment.vue?vue&type=template&id=6cc52676&");
/* harmony import */ var _Comment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Comment.vue?vue&type=script&lang=js& */ "./resources/js/Discussion/Comment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Comment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Comment_vue_vue_type_template_id_6cc52676___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Comment_vue_vue_type_template_id_6cc52676___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Discussion/Comment.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Discussion/Comment.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/Discussion/Comment.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Comment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Comment.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Discussion/Comment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Comment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Discussion/Comment.vue?vue&type=template&id=6cc52676&":
/*!****************************************************************************!*\
  !*** ./resources/js/Discussion/Comment.vue?vue&type=template&id=6cc52676& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Comment_vue_vue_type_template_id_6cc52676___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Comment.vue?vue&type=template&id=6cc52676& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Discussion/Comment.vue?vue&type=template&id=6cc52676&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Comment_vue_vue_type_template_id_6cc52676___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Comment_vue_vue_type_template_id_6cc52676___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Discussion/CommentCount.vue":
/*!**************************************************!*\
  !*** ./resources/js/Discussion/CommentCount.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CommentCount_vue_vue_type_template_id_5faf6a2e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CommentCount.vue?vue&type=template&id=5faf6a2e& */ "./resources/js/Discussion/CommentCount.vue?vue&type=template&id=5faf6a2e&");
/* harmony import */ var _CommentCount_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CommentCount.vue?vue&type=script&lang=js& */ "./resources/js/Discussion/CommentCount.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CommentCount_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CommentCount_vue_vue_type_template_id_5faf6a2e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CommentCount_vue_vue_type_template_id_5faf6a2e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Discussion/CommentCount.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Discussion/CommentCount.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/Discussion/CommentCount.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentCount_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./CommentCount.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Discussion/CommentCount.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentCount_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Discussion/CommentCount.vue?vue&type=template&id=5faf6a2e&":
/*!*********************************************************************************!*\
  !*** ./resources/js/Discussion/CommentCount.vue?vue&type=template&id=5faf6a2e& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentCount_vue_vue_type_template_id_5faf6a2e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./CommentCount.vue?vue&type=template&id=5faf6a2e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Discussion/CommentCount.vue?vue&type=template&id=5faf6a2e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentCount_vue_vue_type_template_id_5faf6a2e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentCount_vue_vue_type_template_id_5faf6a2e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Discussion/Discussion.vue":
/*!************************************************!*\
  !*** ./resources/js/Discussion/Discussion.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Discussion_vue_vue_type_template_id_414d3561___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Discussion.vue?vue&type=template&id=414d3561& */ "./resources/js/Discussion/Discussion.vue?vue&type=template&id=414d3561&");
/* harmony import */ var _Discussion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Discussion.vue?vue&type=script&lang=js& */ "./resources/js/Discussion/Discussion.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Discussion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Discussion_vue_vue_type_template_id_414d3561___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Discussion_vue_vue_type_template_id_414d3561___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Discussion/Discussion.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Discussion/Discussion.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/Discussion/Discussion.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Discussion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Discussion.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Discussion/Discussion.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Discussion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Discussion/Discussion.vue?vue&type=template&id=414d3561&":
/*!*******************************************************************************!*\
  !*** ./resources/js/Discussion/Discussion.vue?vue&type=template&id=414d3561& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Discussion_vue_vue_type_template_id_414d3561___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Discussion.vue?vue&type=template&id=414d3561& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Discussion/Discussion.vue?vue&type=template&id=414d3561&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Discussion_vue_vue_type_template_id_414d3561___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Discussion_vue_vue_type_template_id_414d3561___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Discussion/Respond.vue":
/*!*********************************************!*\
  !*** ./resources/js/Discussion/Respond.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Respond_vue_vue_type_template_id_5ca82dac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Respond.vue?vue&type=template&id=5ca82dac& */ "./resources/js/Discussion/Respond.vue?vue&type=template&id=5ca82dac&");
/* harmony import */ var _Respond_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Respond.vue?vue&type=script&lang=js& */ "./resources/js/Discussion/Respond.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Respond_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Respond_vue_vue_type_template_id_5ca82dac___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Respond_vue_vue_type_template_id_5ca82dac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Discussion/Respond.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Discussion/Respond.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/Discussion/Respond.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Respond_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Respond.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Discussion/Respond.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Respond_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Discussion/Respond.vue?vue&type=template&id=5ca82dac&":
/*!****************************************************************************!*\
  !*** ./resources/js/Discussion/Respond.vue?vue&type=template&id=5ca82dac& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Respond_vue_vue_type_template_id_5ca82dac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Respond.vue?vue&type=template&id=5ca82dac& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Discussion/Respond.vue?vue&type=template&id=5ca82dac&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Respond_vue_vue_type_template_id_5ca82dac___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Respond_vue_vue_type_template_id_5ca82dac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Identity/Avatar.vue":
/*!******************************************!*\
  !*** ./resources/js/Identity/Avatar.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Avatar_vue_vue_type_template_id_20c96a88___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Avatar.vue?vue&type=template&id=20c96a88& */ "./resources/js/Identity/Avatar.vue?vue&type=template&id=20c96a88&");
/* harmony import */ var _Avatar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Avatar.vue?vue&type=script&lang=js& */ "./resources/js/Identity/Avatar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Avatar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Avatar_vue_vue_type_template_id_20c96a88___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Avatar_vue_vue_type_template_id_20c96a88___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Identity/Avatar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Identity/Avatar.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/Identity/Avatar.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Avatar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Avatar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Identity/Avatar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Avatar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Identity/Avatar.vue?vue&type=template&id=20c96a88&":
/*!*************************************************************************!*\
  !*** ./resources/js/Identity/Avatar.vue?vue&type=template&id=20c96a88& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Avatar_vue_vue_type_template_id_20c96a88___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Avatar.vue?vue&type=template&id=20c96a88& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Identity/Avatar.vue?vue&type=template&id=20c96a88&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Avatar_vue_vue_type_template_id_20c96a88___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Avatar_vue_vue_type_template_id_20c96a88___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Identity/Badge.vue":
/*!*****************************************!*\
  !*** ./resources/js/Identity/Badge.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Badge_vue_vue_type_template_id_e2bef7e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Badge.vue?vue&type=template&id=e2bef7e0& */ "./resources/js/Identity/Badge.vue?vue&type=template&id=e2bef7e0&");
/* harmony import */ var _Badge_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Badge.vue?vue&type=script&lang=js& */ "./resources/js/Identity/Badge.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Badge_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Badge_vue_vue_type_template_id_e2bef7e0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Badge_vue_vue_type_template_id_e2bef7e0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Identity/Badge.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Identity/Badge.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/Identity/Badge.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Badge_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Badge.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Identity/Badge.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Badge_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Identity/Badge.vue?vue&type=template&id=e2bef7e0&":
/*!************************************************************************!*\
  !*** ./resources/js/Identity/Badge.vue?vue&type=template&id=e2bef7e0& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Badge_vue_vue_type_template_id_e2bef7e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Badge.vue?vue&type=template&id=e2bef7e0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Identity/Badge.vue?vue&type=template&id=e2bef7e0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Badge_vue_vue_type_template_id_e2bef7e0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Badge_vue_vue_type_template_id_e2bef7e0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Voting/Vote.vue":
/*!**************************************!*\
  !*** ./resources/js/Voting/Vote.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Vote_vue_vue_type_template_id_0104a2c4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vote.vue?vue&type=template&id=0104a2c4& */ "./resources/js/Voting/Vote.vue?vue&type=template&id=0104a2c4&");
/* harmony import */ var _Vote_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Vote.vue?vue&type=script&lang=js& */ "./resources/js/Voting/Vote.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Vote_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Vote_vue_vue_type_template_id_0104a2c4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Vote_vue_vue_type_template_id_0104a2c4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Voting/Vote.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Voting/Vote.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./resources/js/Voting/Vote.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Vote_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Vote.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Voting/Vote.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Vote_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Voting/Vote.vue?vue&type=template&id=0104a2c4&":
/*!*********************************************************************!*\
  !*** ./resources/js/Voting/Vote.vue?vue&type=template&id=0104a2c4& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Vote_vue_vue_type_template_id_0104a2c4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Vote.vue?vue&type=template&id=0104a2c4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Voting/Vote.vue?vue&type=template&id=0104a2c4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Vote_vue_vue_type_template_id_0104a2c4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Vote_vue_vue_type_template_id_0104a2c4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Voting/Votes.vue":
/*!***************************************!*\
  !*** ./resources/js/Voting/Votes.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Votes_vue_vue_type_template_id_233b56df___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Votes.vue?vue&type=template&id=233b56df& */ "./resources/js/Voting/Votes.vue?vue&type=template&id=233b56df&");
/* harmony import */ var _Votes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Votes.vue?vue&type=script&lang=js& */ "./resources/js/Voting/Votes.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Votes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Votes_vue_vue_type_template_id_233b56df___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Votes_vue_vue_type_template_id_233b56df___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Voting/Votes.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Voting/Votes.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./resources/js/Voting/Votes.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Votes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Votes.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Voting/Votes.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Votes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Voting/Votes.vue?vue&type=template&id=233b56df&":
/*!**********************************************************************!*\
  !*** ./resources/js/Voting/Votes.vue?vue&type=template&id=233b56df& ***!
  \**********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Votes_vue_vue_type_template_id_233b56df___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Votes.vue?vue&type=template&id=233b56df& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Voting/Votes.vue?vue&type=template&id=233b56df&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Votes_vue_vue_type_template_id_233b56df___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Votes_vue_vue_type_template_id_233b56df___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);