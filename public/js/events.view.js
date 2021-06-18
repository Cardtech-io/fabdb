(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["events.view"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Events/PlayerEventActions.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Events/PlayerEventActions.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['event'],
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])('session', ['user'])),
  data: function data() {
    return {
      decks: [],
      registered: this.event.registered
    };
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])('messages', ['addMessage']), {
    selectDeck: function selectDeck(deck) {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/events/' + this.event.slug + '/deck', {
        deck: deck.slug
      }).then(function (response) {
        _this.$modal.hide('submit-deck');

        _this.addMessage({
          status: 'success',
          message: 'Your deck has been submitted.'
        });
      });
    },
    showModal: function showModal() {
      this.$modal.show('submit-deck');
    },
    register: function register() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/events/' + this.event.slug + '/register').then(function (response) {
        _this2.registered = true;

        _this2.addMessage({
          status: 'success',
          message: 'You are now registered for this event.'
        });
      });
    },
    unregister: function unregister() {
      var _this3 = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a["delete"]('/events/' + this.event.slug + '/registration').then(function (response) {
        _this3.registered = false;

        _this3.addMessage({
          status: 'success',
          message: 'You are no longer registered for this event.'
        });
      });
    }
  }),
  mounted: function mounted() {
    var _this4 = this;

    if (this.user) {
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/decks/mine').then(function (response) {
        _this4.decks = response.data;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Events/RegisteredPlayers.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Events/RegisteredPlayers.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _Components_LazyLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/LazyLoader */ "./resources/js/Components/LazyLoader.js");
/* harmony import */ var _Identity_Avatar_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Identity/Avatar.vue */ "./resources/js/Identity/Avatar.vue");
/* harmony import */ var _Identity_Badge_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Identity/Badge.vue */ "./resources/js/Identity/Badge.vue");
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
  props: ['event'],
  components: {
    Avatar: _Identity_Avatar_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    Badge: _Identity_Badge_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('session', ['user']))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Events/ViewEvent.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Events/ViewEvent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _Components_Breadcrumbs_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/Breadcrumbs.vue */ "./resources/js/Components/Breadcrumbs.vue");
/* harmony import */ var _EventTypeIcon_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EventTypeIcon.vue */ "./resources/js/Events/EventTypeIcon.vue");
/* harmony import */ var _Components_HeaderTitle_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Components/HeaderTitle.vue */ "./resources/js/Components/HeaderTitle.vue");
/* harmony import */ var _Components_LazyLoader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Components/LazyLoader */ "./resources/js/Components/LazyLoader.js");
/* harmony import */ var _PlayerEventActions_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PlayerEventActions.vue */ "./resources/js/Events/PlayerEventActions.vue");
/* harmony import */ var _RegisteredPlayers_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./RegisteredPlayers.vue */ "./resources/js/Events/RegisteredPlayers.vue");
/* harmony import */ var _Utilities_Time__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Utilities/Time */ "./resources/js/Utilities/Time.js");
/* harmony import */ var _Utilities_Strings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Utilities/Strings */ "./resources/js/Utilities/Strings.js");
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










/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Breadcrumbs: _Components_Breadcrumbs_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    EventTypeIcon: _EventTypeIcon_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    HeaderTitle: _Components_HeaderTitle_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    PlayerEventActions: _PlayerEventActions_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    RegisteredPlayers: _RegisteredPlayers_vue__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  mixins: [_Utilities_Strings__WEBPACK_IMPORTED_MODULE_9__["default"]],
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])('session', ['user']), {
    crumbs: function crumbs() {
      return [{
        text: 'Home',
        name: 'home'
      }, {
        text: 'My Events',
        name: 'events.mine'
      }, {
        text: this.title
      }];
    },
    title: function title() {
      return this.event.name || 'Register event';
    },
    registered: function registered() {
      return !!this.event.registered;
    }
  }),
  data: function data() {
    return {
      event: null,
      time: _Utilities_Time__WEBPACK_IMPORTED_MODULE_8__["default"]
    };
  },
  "extends": Object(_Components_LazyLoader__WEBPACK_IMPORTED_MODULE_5__["default"])(function (to, callback) {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/events/' + to.params.event).then(function (response) {
      callback(function () {
        this.event = response.data;
      });
    });
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Events/PlayerEventActions.vue?vue&type=template&id=0db8d5ac&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Events/PlayerEventActions.vue?vue&type=template&id=0db8d5ac& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
    _vm.user
      ? _c(
          "div",
          [
            !_vm.registered
              ? _c(
                  "button",
                  {
                    staticClass:
                      "appearance-none bg-blue-700 text-white rounded-lg py-3 px-4 leading-tight focus:outline-none hover:bg-blue-500 disabled:opacity-50",
                    attrs: { type: "button" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.register()
                      }
                    }
                  },
                  [_vm._v("\n            Register for event\n        ")]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.registered
              ? _c(
                  "button",
                  {
                    staticClass:
                      "appearance-none bg-red-700 text-white rounded-lg py-3 px-4 leading-tight focus:outline-none hover:bg-red-500 disabled:opacity-50",
                    attrs: { type: "button" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.unregister()
                      }
                    }
                  },
                  [_vm._v("\n            Unregister from event\n        ")]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.registered
              ? _c(
                  "button",
                  {
                    staticClass:
                      "appearance-none bg-blue-700 text-white rounded-lg py-3 px-4 leading-tight focus:outline-none hover:bg-blue-500 disabled:opacity-50",
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.showModal()
                      }
                    }
                  },
                  [_vm._v("\n            Submit a deck\n        ")]
                )
              : _vm._e(),
            _vm._v(" "),
            _c(
              "modal",
              { attrs: { name: "submit-deck", classes: "bg-gray-100" } },
              [
                _c(
                  "h2",
                  {
                    staticClass:
                      "bg-red-900 text-white font-serif text-2xl uppercase py-3 px-8"
                  },
                  [_vm._v("Submit your deck")]
                ),
                _vm._v(" "),
                _vm.decks.length
                  ? _c(
                      "ul",
                      _vm._l(_vm.decks, function(deck) {
                        return _c(
                          "li",
                          {
                            staticClass:
                              "even:bg-gray-200 hover:bg-white hover:cursor-pointer"
                          },
                          [
                            _c(
                              "a",
                              {
                                staticClass: "block w-full px-8 py-2",
                                attrs: { href: "" },
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    return _vm.selectDeck(deck)
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  "\n                        " +
                                    _vm._s(deck.hero.name) +
                                    " (" +
                                    _vm._s(deck.name) +
                                    ")\n                    "
                                )
                              ]
                            )
                          ]
                        )
                      }),
                      0
                    )
                  : _c(
                      "div",
                      { staticClass: "px-8 py-4" },
                      [
                        _vm._v(
                          "\n                You have not yet created any decks. In order to participate in the event you must "
                        ),
                        _c(
                          "router-link",
                          {
                            staticClass: "link",
                            attrs: { to: { name: "decks.build" } }
                          },
                          [_vm._v("build a deck")]
                        ),
                        _vm._v(
                          " then\n                submit it via the event page.\n            "
                        )
                      ],
                      1
                    )
              ]
            )
          ],
          1
        )
      : _c(
          "div",
          [
            _vm._v("\n        Please "),
            _c(
              "router-link",
              {
                staticClass: "link",
                attrs: { to: "/login?from=" + _vm.$route.path }
              },
              [_vm._v("login")]
            ),
            _vm._v(" to register for this event.\n    ")
          ],
          1
        )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Events/RegisteredPlayers.vue?vue&type=template&id=53944ad8&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Events/RegisteredPlayers.vue?vue&type=template&id=53944ad8& ***!
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
  return _c("div", [
    _c("h2", { staticClass: "font-serif uppercase text-2xl mb-2" }, [
      _vm._v("Registered Players")
    ]),
    _vm._v(" "),
    _vm.event.players && _vm.event.players.length
      ? _c("div", [
          _c(
            "ul",
            _vm._l(_vm.event.players, function(player) {
              return _c(
                "li",
                {
                  staticClass:
                    "flex odd:bg-gray-100 rounded-xl mb-2 items-center hover:bg-white"
                },
                [
                  _c(
                    "div",
                    [
                      _c("avatar", {
                        attrs: { user: player.user, width: 50, rounded: "xl" }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "flex-auto mx-4" }, [
                    _vm._v(
                      "\n                    " +
                        _vm._s(player.user.name) +
                        "\n                "
                    )
                  ]),
                  _vm._v(" "),
                  player.user.subscription
                    ? _c(
                        "div",
                        { staticClass: "pr-4" },
                        [
                          _c("badge", {
                            attrs: {
                              subscriptionLevel: player.user.subscription,
                              size: "small"
                            }
                          })
                        ],
                        1
                      )
                    : _vm._e()
                ]
              )
            }),
            0
          )
        ])
      : _c("div", { staticClass: "py-2" }, [
          _vm._v("\n        There are currently no registered players.\n    ")
        ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Events/ViewEvent.vue?vue&type=template&id=26cbfb06&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Events/ViewEvent.vue?vue&type=template&id=26cbfb06& ***!
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
    [
      _c("header-title", { attrs: { title: _vm.title } }),
      _vm._v(" "),
      _c("breadcrumbs", { attrs: { crumbs: _vm.crumbs } }),
      _vm._v(" "),
      _c("div", { staticClass: "bg-gray-200" }, [
        _c("div", { staticClass: "container sm:mx-auto p-4 py-8 md:flex" }, [
          _c("div", { staticClass: "md:w-1/2 md:pr-8" }, [
            _c(
              "h2",
              { staticClass: "font-serif uppercase text-4xl -mt-1 mb-4" },
              [_vm._v("Event details")]
            ),
            _vm._v(" "),
            _c("ul", [
              _c("li", { staticClass: "bg-gray-100 p-2 px-4" }, [
                _c("h3", { staticClass: "font-serif uppercase text-xl" }, [
                  _vm._v(_vm._s(_vm.event.name) + " "),
                  _c("span", { staticClass: "text-gray-500" }, [
                    _vm._v("(" + _vm._s(_vm.ucfirst(_vm.event.type)) + ")")
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "p-2 px-4" }, [
                _c("span", { staticClass: "font-serif uppercase" }, [
                  _vm._v("Event fee")
                ]),
                _vm._v(":\n                        "),
                _vm.event.fee
                  ? _c("span", [_vm._v("$" + _vm._s(_vm.event.fee))])
                  : _c("span", [_vm._v("None (FREE)")])
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "bg-gray-100 p-2 px-4" }, [
                _c("span", { staticClass: "font-serif uppercase" }, [
                  _vm._v("When")
                ]),
                _vm._v(
                  ":\n                        " +
                    _vm._s(_vm.time.calendar(_vm.event.startsAt)) +
                    "\n                    "
                )
              ]),
              _vm._v(" "),
              _c(
                "li",
                { staticClass: "pt-8" },
                [_c("player-event-actions", { attrs: { event: _vm.event } })],
                1
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "mt-8 md:mt-0 md:w-1/2" }, [
            _vm.event.description
              ? _c("div", { staticClass: "clearfix mb-8" }, [
                  _c(
                    "div",
                    { staticClass: "float-left mr-6 mb-2" },
                    [
                      _c("event-type-icon", {
                        attrs: { type: _vm.event.type, size: "24" }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("p", {
                    domProps: {
                      innerHTML: _vm._s(
                        _vm.parseMarkdown(_vm.event.description)
                      )
                    }
                  })
                ])
              : _vm._e(),
            _vm._v(" "),
            _c(
              "div",
              [_c("registered-players", { attrs: { event: _vm.event } })],
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
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("img", {
    staticClass: "rounded-full",
    style: { width: _vm.width + "px" },
    attrs: {
      src: _vm.imageUrl("/heroes/" + _vm.avatar + ".jpg", _vm.width),
      alt: _vm.user.name
    }
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
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "span",
    {
      staticClass: "inline-block rounded-full text-white uppercase font-serif",
      class: _vm.classes
    },
    [_vm._v(_vm._s(_vm.ucfirst(_vm.subscriptionLevel)))]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Events/PlayerEventActions.vue":
/*!****************************************************!*\
  !*** ./resources/js/Events/PlayerEventActions.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PlayerEventActions_vue_vue_type_template_id_0db8d5ac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PlayerEventActions.vue?vue&type=template&id=0db8d5ac& */ "./resources/js/Events/PlayerEventActions.vue?vue&type=template&id=0db8d5ac&");
/* harmony import */ var _PlayerEventActions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PlayerEventActions.vue?vue&type=script&lang=js& */ "./resources/js/Events/PlayerEventActions.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PlayerEventActions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PlayerEventActions_vue_vue_type_template_id_0db8d5ac___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PlayerEventActions_vue_vue_type_template_id_0db8d5ac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Events/PlayerEventActions.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Events/PlayerEventActions.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/Events/PlayerEventActions.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PlayerEventActions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./PlayerEventActions.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Events/PlayerEventActions.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PlayerEventActions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Events/PlayerEventActions.vue?vue&type=template&id=0db8d5ac&":
/*!***********************************************************************************!*\
  !*** ./resources/js/Events/PlayerEventActions.vue?vue&type=template&id=0db8d5ac& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PlayerEventActions_vue_vue_type_template_id_0db8d5ac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./PlayerEventActions.vue?vue&type=template&id=0db8d5ac& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Events/PlayerEventActions.vue?vue&type=template&id=0db8d5ac&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PlayerEventActions_vue_vue_type_template_id_0db8d5ac___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PlayerEventActions_vue_vue_type_template_id_0db8d5ac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Events/RegisteredPlayers.vue":
/*!***************************************************!*\
  !*** ./resources/js/Events/RegisteredPlayers.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RegisteredPlayers_vue_vue_type_template_id_53944ad8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RegisteredPlayers.vue?vue&type=template&id=53944ad8& */ "./resources/js/Events/RegisteredPlayers.vue?vue&type=template&id=53944ad8&");
/* harmony import */ var _RegisteredPlayers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RegisteredPlayers.vue?vue&type=script&lang=js& */ "./resources/js/Events/RegisteredPlayers.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RegisteredPlayers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RegisteredPlayers_vue_vue_type_template_id_53944ad8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RegisteredPlayers_vue_vue_type_template_id_53944ad8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Events/RegisteredPlayers.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Events/RegisteredPlayers.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/Events/RegisteredPlayers.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisteredPlayers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./RegisteredPlayers.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Events/RegisteredPlayers.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisteredPlayers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Events/RegisteredPlayers.vue?vue&type=template&id=53944ad8&":
/*!**********************************************************************************!*\
  !*** ./resources/js/Events/RegisteredPlayers.vue?vue&type=template&id=53944ad8& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisteredPlayers_vue_vue_type_template_id_53944ad8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./RegisteredPlayers.vue?vue&type=template&id=53944ad8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Events/RegisteredPlayers.vue?vue&type=template&id=53944ad8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisteredPlayers_vue_vue_type_template_id_53944ad8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisteredPlayers_vue_vue_type_template_id_53944ad8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Events/ViewEvent.vue":
/*!*******************************************!*\
  !*** ./resources/js/Events/ViewEvent.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ViewEvent_vue_vue_type_template_id_26cbfb06___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ViewEvent.vue?vue&type=template&id=26cbfb06& */ "./resources/js/Events/ViewEvent.vue?vue&type=template&id=26cbfb06&");
/* harmony import */ var _ViewEvent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ViewEvent.vue?vue&type=script&lang=js& */ "./resources/js/Events/ViewEvent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ViewEvent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ViewEvent_vue_vue_type_template_id_26cbfb06___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ViewEvent_vue_vue_type_template_id_26cbfb06___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Events/ViewEvent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Events/ViewEvent.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/Events/ViewEvent.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewEvent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ViewEvent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Events/ViewEvent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewEvent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Events/ViewEvent.vue?vue&type=template&id=26cbfb06&":
/*!**************************************************************************!*\
  !*** ./resources/js/Events/ViewEvent.vue?vue&type=template&id=26cbfb06& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewEvent_vue_vue_type_template_id_26cbfb06___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ViewEvent.vue?vue&type=template&id=26cbfb06& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Events/ViewEvent.vue?vue&type=template&id=26cbfb06&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewEvent_vue_vue_type_template_id_26cbfb06___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewEvent_vue_vue_type_template_id_26cbfb06___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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



/***/ })

}]);