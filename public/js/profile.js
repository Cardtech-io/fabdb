(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile"],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Identity/Profile.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Identity/Profile.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _Avatar_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Avatar.vue */ "./resources/js/Identity/Avatar.vue");
/* harmony import */ var _Badge_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Badge.vue */ "./resources/js/Identity/Badge.vue");
/* harmony import */ var _Components_Breadcrumbs_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Components/Breadcrumbs.vue */ "./resources/js/Components/Breadcrumbs.vue");
/* harmony import */ var _CardDatabase_Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../CardDatabase/Card */ "./resources/js/CardDatabase/Card.js");
/* harmony import */ var _Components_HeaderTitle_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Components/HeaderTitle.vue */ "./resources/js/Components/HeaderTitle.vue");
/* harmony import */ var _Components_LazyLoader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Components/LazyLoader */ "./resources/js/Components/LazyLoader.js");
/* harmony import */ var _Utilities_Models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Utilities/Models */ "./resources/js/Utilities/Models.js");
/* harmony import */ var _Components_Form_Submit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Components/Form/Submit */ "./resources/js/Components/Form/Submit.vue");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    Avatar: _Avatar_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    Badge: _Badge_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    Breadcrumbs: _Components_Breadcrumbs_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    HeaderTitle: _Components_HeaderTitle_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    Submit: _Components_Form_Submit__WEBPACK_IMPORTED_MODULE_9__["default"]
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])('session', ['user', 'subscribed']), {
    email: {
      get: function get() {
        return this.user.email;
      },
      set: function set(email) {
        this.setUserParam({
          param: 'email',
          value: email
        });
      }
    },
    name: {
      get: function get() {
        return this.user.name;
      },
      set: function set(name) {
        this.setUserParam({
          param: 'name',
          value: name
        });
      }
    },
    width: {
      get: function get() {
        return this.user.width;
      },
      set: function set(width) {
        this.setUserParam({
          param: 'width',
          value: width
        });
      }
    },
    currency: {
      get: function get() {
        return this.user.currency;
      },
      set: function set(currency) {
        this.setUserParam({
          param: 'currency',
          value: currency
        });
      }
    },
    gemId: {
      get: function get() {
        return this.user.gemId;
      },
      set: function set(gemId) {
        this.setUserParam({
          param: 'gemId',
          value: gemId
        });
      }
    },
    need: {
      get: function get() {
        return this.user.need;
      },
      set: function set(need) {
        this.setUserParam({
          param: 'need',
          value: need
        });
      }
    },
    theme: {
      get: function get() {
        return this.user.theme || 'default';
      },
      set: function set(theme) {
        this.setUserParam({
          param: 'theme',
          value: theme
        });
      }
    },
    view: {
      get: function get() {
        return this.user.view;
      },
      set: function set(view) {
        this.setUserParam({
          param: 'view',
          value: view
        });
      }
    },
    avatar: {
      get: function get() {
        return this.user.avatar;
      },
      set: function set(avatar) {
        this.setUserParam({
          param: 'avatar',
          value: avatar
        });
      }
    },
    slug: function slug() {
      return ['legendary', 'fabled'].indexOf(this.user.subscription) !== -1 && this.user.vanitySlug ? this.user.vanitySlug : this.user.slug;
    }
  }),
  data: function data() {
    return {
      crumbs: [{
        text: 'Home',
        link: '/'
      }, {
        text: 'Profile Update'
      }],
      changePassword: false,
      oldPassword: '',
      newPassword: '',
      newPasswordConfirmation: '',
      saving: false
    };
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])('session', ['setUserParam']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])('messages', ['addMessage', 'addValidationMessages']), {
    save: function save() {
      var _this = this;

      this.saving = true;
      var data = {
        email: this.email,
        name: this.name,
        gemId: this.gemId,
        currency: this.currency,
        need: this.need,
        view: this.view,
        oldPassword: this.oldPassword,
        newPassword: this.newPassword,
        newPassword_confirmation: this.newPasswordConfirmation,
        avatar: this.avatar,
        theme: this.theme,
        width: this.width
      };
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.put('/profile', data).then(function (response) {
        _this.addMessage({
          status: 'success',
          message: 'Profile updated'
        });

        _this.saving = false;
      })["catch"](function (error) {
        if (error.response.status === 422) {
          _this.addValidationMessages({
            messages: error.response.data.errors
          });
        }

        _this.saving = false;
      });
    }
  }),
  "extends": Object(_Components_LazyLoader__WEBPACK_IMPORTED_MODULE_7__["default"])(function (to, callback) {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/cards/heroes').then(function (response) {
      callback(function () {
        this.heroes = _Utilities_Models__WEBPACK_IMPORTED_MODULE_8__["default"].hydrateMany(response.data, _CardDatabase_Card__WEBPACK_IMPORTED_MODULE_5__["default"]);
      });
    });
  })
});

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Identity/Profile.vue?vue&type=template&id=0d510454&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Identity/Profile.vue?vue&type=template&id=0d510454& ***!
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
      _c("header-title", { attrs: { title: "Profile Update" } }),
      _vm._v(" "),
      _c("breadcrumbs", { attrs: { crumbs: _vm.crumbs } }),
      _vm._v(" "),
      _c("div", { staticClass: "bg-gray-200" }, [
        _c(
          "div",
          { staticClass: "container sm:mx-auto bg-white py-8 px-8 md:flex" },
          [
            _c("div", { staticClass: "md:w-1/2 md:pr-8" }, [
              _c(
                "form",
                {
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.save.apply(null, arguments)
                    }
                  }
                },
                [
                  _c("div", { staticClass: "w-full flex items-center" }, [
                    _c("div", { staticClass: "mr-4" }, [
                      _c(
                        "div",
                        { staticClass: "rounded-xl overflow-hidden" },
                        [
                          _c("avatar", {
                            attrs: { user: _vm.user, width: 100 }
                          })
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "flex-auto" }, [
                      _c(
                        "label",
                        {
                          staticClass:
                            "block font-serif uppercase tracking-wide mb-1"
                        },
                        [_vm._v("Avatar (Patrons only)")]
                      ),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.avatar,
                              expression: "avatar"
                            }
                          ],
                          staticClass:
                            "input focus:bg-white focus:border-gray-500 py-3 px-4 rounded-lg flex-auto",
                          attrs: { disabled: !_vm.subscribed },
                          on: {
                            change: function($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function(o) {
                                  return o.selected
                                })
                                .map(function(o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.avatar = $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            }
                          }
                        },
                        [
                          _c("option", { attrs: { value: "bauble" } }, [
                            _vm._v("Bauble")
                          ]),
                          _vm._v(" "),
                          _vm._l(_vm.heroes, function(hero) {
                            return _c(
                              "option",
                              { domProps: { value: hero.avatar() } },
                              [_vm._v(_vm._s(hero.name))]
                            )
                          })
                        ],
                        2
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "w-full mt-4" }, [
                    _c(
                      "label",
                      {
                        staticClass:
                          "block font-serif uppercase tracking-wide mb-1"
                      },
                      [_vm._v("Email address")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.email,
                          expression: "email"
                        }
                      ],
                      staticClass:
                        "input focus:bg-white focus:border-gray-500 py-3 px-4 rounded-lg",
                      attrs: { type: "email", required: "required" },
                      domProps: { value: _vm.email },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.email = $event.target.value
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  !_vm.changePassword
                    ? _c(
                        "button",
                        {
                          staticClass:
                            "button-secondary text-sm py-3 px-4 mt-4 rounded-lg",
                          on: {
                            click: function($event) {
                              _vm.changePassword = true
                            }
                          }
                        },
                        [_vm._v("I'd like to add or change my password")]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.changePassword
                    ? _c(
                        "div",
                        { staticClass: "p-4 bg-gray-100 rounded-lg mt-4" },
                        [
                          _vm.user.hasPassword
                            ? _c("div", { staticClass: "w-full mb-4" }, [
                                _c(
                                  "label",
                                  {
                                    staticClass:
                                      "block font-serif uppercase tracking-wide mb-1"
                                  },
                                  [_vm._v("Old password")]
                                ),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.oldPassword,
                                      expression: "oldPassword"
                                    }
                                  ],
                                  staticClass:
                                    "input focus:bg-white focus:border-gray-500 py-3 px-4 rounded-lg",
                                  attrs: { type: "password" },
                                  domProps: { value: _vm.oldPassword },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.oldPassword = $event.target.value
                                    }
                                  }
                                })
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _c("div", { staticClass: "w-full" }, [
                            _c(
                              "label",
                              {
                                staticClass:
                                  "block font-serif uppercase tracking-wide mb-1"
                              },
                              [_vm._v("New password")]
                            ),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.newPassword,
                                  expression: "newPassword"
                                }
                              ],
                              staticClass:
                                "input focus:bg-white focus:border-gray-500 py-3 px-4 rounded-lg",
                              attrs: { type: "password" },
                              domProps: { value: _vm.newPassword },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.newPassword = $event.target.value
                                }
                              }
                            })
                          ]),
                          _vm._v(" "),
                          _vm.newPassword
                            ? _c("div", { staticClass: "w-full mt-4" }, [
                                _c(
                                  "label",
                                  {
                                    staticClass:
                                      "block font-serif uppercase tracking-wide mb-1"
                                  },
                                  [_vm._v("Confirm password")]
                                ),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.newPasswordConfirmation,
                                      expression: "newPasswordConfirmation"
                                    }
                                  ],
                                  staticClass:
                                    "input focus:bg-white focus:border-gray-500 py-3 px-4 rounded-lg",
                                  attrs: { type: "password" },
                                  domProps: {
                                    value: _vm.newPasswordConfirmation
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.newPasswordConfirmation =
                                        $event.target.value
                                    }
                                  }
                                })
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _c(
                            "p",
                            {
                              staticClass:
                                "border border-blue-500 text-blue-500 p-2 rounded-lg text-sm mt-4"
                            },
                            [
                              _vm._v(
                                "At FaB DB we take security seriously. Your password must be at least 8 characters long, and consist of at least 1 non-alpha character (!?<>.,)"
                              )
                            ]
                          )
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c("div", { staticClass: "w-full mt-4" }, [
                    _c(
                      "label",
                      {
                        staticClass:
                          "block font-serif uppercase tracking-wide mb-1"
                      },
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
                        "input focus:bg-white focus:border-gray-500 py-3 px-4 rounded-lg",
                      attrs: { type: "text" },
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
                  _c("div", { staticClass: "w-full mt-4" }, [
                    _c(
                      "label",
                      {
                        staticClass:
                          "block font-serif uppercase tracking-wide mb-1"
                      },
                      [_vm._v("GEM player ID")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.gemId,
                          expression: "gemId"
                        }
                      ],
                      staticClass:
                        "input focus:bg-white focus:border-gray-500 py-3 px-4 rounded-lg",
                      attrs: { type: "text" },
                      domProps: { value: _vm.gemId },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.gemId = $event.target.value
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "w-full mt-4" }, [
                    _c(
                      "label",
                      {
                        staticClass:
                          "block font-serif uppercase tracking-wide mb-1"
                      },
                      [_vm._v("Preferred currency")]
                    ),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.currency,
                            expression: "currency"
                          }
                        ],
                        staticClass:
                          "input focus:bg-white focus:border-gray-500 py-3 px-4 rounded-lg",
                        attrs: { required: "required" },
                        on: {
                          change: function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.currency = $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          }
                        }
                      },
                      [
                        _c("option", { attrs: { value: "AUD" } }, [
                          _vm._v("AUD")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "CAD" } }, [
                          _vm._v("CAD")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "NZD" } }, [
                          _vm._v("NZD")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "USD" } }, [
                          _vm._v("USD")
                        ])
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "h2",
                    { staticClass: "font-serif text-xl uppercase mt-8 mb-4" },
                    [_vm._v("Interface")]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "w-full mt-4 mb-4" }, [
                    _c(
                      "label",
                      {
                        staticClass:
                          "block font-serif uppercase tracking-wide mb-1"
                      },
                      [_vm._v("Width")]
                    ),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.width,
                            expression: "width"
                          }
                        ],
                        staticClass:
                          "input focus:bg-white focus:border-gray-500 py-3 px-4 rounded-lg",
                        on: {
                          change: function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.width = $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          }
                        }
                      },
                      [
                        _c("option", { attrs: { value: "narrow" } }, [
                          _vm._v("Narrow")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "wide" } }, [
                          _vm._v("Wide")
                        ])
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "w-full mt-4" }, [
                    _c(
                      "label",
                      {
                        staticClass:
                          "block font-serif uppercase tracking-wide mb-1"
                      },
                      [_vm._v("Theme")]
                    ),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.theme,
                            expression: "theme"
                          }
                        ],
                        staticClass:
                          "input focus:bg-white focus:border-gray-500 py-3 px-4 rounded-lg",
                        attrs: { required: "required" },
                        on: {
                          change: function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.theme = $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          }
                        }
                      },
                      [
                        _c("option", { attrs: { value: "default" } }, [
                          _vm._v("Default")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "aria" } }, [
                          _vm._v("Aria")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "demonastery" } }, [
                          _vm._v("Demonastery")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "library" } }, [
                          _vm._v("Library")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "monarch" } }, [
                          _vm._v("Monarch")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "skies" } }, [
                          _vm._v("Skies")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "savage-lands" } }, [
                          _vm._v("Savage Lands")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "tales" } }, [
                          _vm._v("Tales of Aria")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "the-pits" } }, [
                          _vm._v("The Pits")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "battle" } }, [
                          _vm._v("Battle at the Peak (Patreon supporters only)")
                        ])
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "w-full mt-4 mb-4" }, [
                    _c(
                      "label",
                      {
                        staticClass:
                          "block font-serif uppercase tracking-wide mb-1"
                      },
                      [_vm._v("Card borders")]
                    ),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.view,
                            expression: "view"
                          }
                        ],
                        staticClass:
                          "input focus:bg-white focus:border-gray-500 py-3 px-4 rounded-lg",
                        on: {
                          change: function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.view = $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          }
                        }
                      },
                      [
                        _c("option", { attrs: { value: "borderless" } }, [
                          _vm._v("Borderless")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "bordered" } }, [
                          _vm._v("Bordered")
                        ])
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "h2",
                    { staticClass: "font-serif text-xl uppercase mt-8 mb-4" },
                    [_vm._v("Collection management")]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "w-full mb-4" }, [
                    _c(
                      "label",
                      {
                        staticClass:
                          "block font-serif uppercase tracking-wide mb-1"
                      },
                      [_vm._v("Cards required until no longer needed")]
                    ),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.need,
                            expression: "need"
                          }
                        ],
                        staticClass:
                          "input focus:bg-white focus:border-gray-500 py-3 px-4 rounded-lg",
                        on: {
                          change: function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.need = $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          }
                        }
                      },
                      [
                        _c("option", { attrs: { value: "1" } }, [_vm._v("1")]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "2" } }, [_vm._v("2")]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "3" } }, [_vm._v("3")])
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "text-sm mt-2" }, [
                      _vm._v(
                        '\n                            When managing your collection, the default minimum cards required to satisfy the "need"\n                            metric, is 1. For example, setting this to 2, means the manager will continue to show\n                            those cards until you have 2 in your collection.\n                        '
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("submit", {
                    staticClass: "mt-8",
                    attrs: { text: "Save", disabled: _vm.saving }
                  })
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "mt-8 md:w-1/2 md:mt-0" },
              [
                _c(
                  "router-link",
                  {
                    staticClass:
                      "inline-block button-secondary mb-4 rounded-full p-4",
                    attrs: {
                      to: {
                        name: "user.profile.decks",
                        params: { user: _vm.slug }
                      }
                    }
                  },
                  [_vm._v("View your public profile")]
                ),
                _vm._v(" "),
                _c("h2", { staticClass: "text-xl font-serif uppercase mb-2" }, [
                  _vm._v("Your membership level")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "mb-8" }, [
                  _vm.user.subscription
                    ? _c(
                        "div",
                        [
                          _c("badge", {
                            attrs: {
                              "subscription-level": _vm.user.subscription
                            }
                          })
                        ],
                        1
                      )
                    : _c("p", [
                        _vm._v("If you love what we're doing, please "),
                        _c(
                          "a",
                          {
                            staticClass: "link",
                            attrs: { href: "https://www.patreon.com/fabdb" }
                          },
                          [_vm._v("support us on Patreon.")]
                        )
                      ])
                ]),
                _vm._v(" "),
                _c("h2", { staticClass: "text-xl font-serif uppercase" }, [
                  _vm._v("What data do we collect?")
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "my-4" }, [
                  _vm._v(
                    "At fabdb.net, we endeavour to collect as little information about you as possible."
                  )
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "my-4" }, [
                  _vm._v(
                    "Some details, such as email address, are absolutely essential. Not for marketing, but\n                    purely for identification purposes and application notifications."
                  )
                ]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "Other details, like name, gem id.etc. are only required if you use certain features. You will be\n                    prompted for these if and when that occurs."
                  )
                ]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "Currency will preferentially display stores and item listings that sell products in your preferred currency."
                  )
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "my-4" }, [
                  _vm._v(
                    "Name for example, is only needed if you participate within the community, providing feedback and\n                    starting threads.etc. Your gem ID is only needed when you export your decks to PDF format, which\n                    can be handed in at tournaments. If you like, your gem ID does not need to be saved, and instead\n                    will be asked when generating a PDF. When asked for in this manner, your gem ID is not saved in\n                    our database."
                  )
                ])
              ],
              1
            )
          ]
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/CardDatabase/Card.js":
/*!*******************************************!*\
  !*** ./resources/js/CardDatabase/Card.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Card =
/*#__PURE__*/
function () {
  function Card(fields) {
    _classCallCheck(this, Card);

    this.fields = fields;
  }

  _createClass(Card, [{
    key: "avatar",
    value: function avatar() {
      var name = this.name.split(',')[0].toLowerCase().split(' ')[0];

      if (this.young()) {
        return name + '-blitz';
      }

      return name;
    }
  }, {
    key: "young",
    value: function young() {
      return this.fields.subType === 'young';
    }
  }, {
    key: "name",
    get: function get() {
      return this.fields.name;
    }
  }, {
    key: "image",
    get: function get() {
      return this.fields.image;
    }
  }, {
    key: "class",
    get: function get() {
      return this.fields["class"];
    }
  }, {
    key: "sku",
    get: function get() {
      return this.fields.sku;
    }
  }, {
    key: "stats",
    get: function get() {
      return this.fields.stats;
    }
  }, {
    key: "keywords",
    get: function get() {
      return this.fields.keywords;
    }
  }, {
    key: "total",
    get: function get() {
      return this.fields.total;
    }
  }]);

  return Card;
}();

/* harmony default export */ __webpack_exports__["default"] = (Card);

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

/***/ "./resources/js/Identity/Profile.vue":
/*!*******************************************!*\
  !*** ./resources/js/Identity/Profile.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Profile_vue_vue_type_template_id_0d510454___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Profile.vue?vue&type=template&id=0d510454& */ "./resources/js/Identity/Profile.vue?vue&type=template&id=0d510454&");
/* harmony import */ var _Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Profile.vue?vue&type=script&lang=js& */ "./resources/js/Identity/Profile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Profile_vue_vue_type_template_id_0d510454___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Profile_vue_vue_type_template_id_0d510454___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Identity/Profile.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Identity/Profile.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/Identity/Profile.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Profile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Identity/Profile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Identity/Profile.vue?vue&type=template&id=0d510454&":
/*!**************************************************************************!*\
  !*** ./resources/js/Identity/Profile.vue?vue&type=template&id=0d510454& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_0d510454___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Profile.vue?vue&type=template&id=0d510454& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Identity/Profile.vue?vue&type=template&id=0d510454&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_0d510454___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_0d510454___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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