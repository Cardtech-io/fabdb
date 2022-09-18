(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth.login"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Auth/Login.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Auth/Login.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _Login_CheckEmail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login/CheckEmail */ "./resources/js/Auth/Login/CheckEmail.vue");
/* harmony import */ var _Components_HeaderTitle_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/HeaderTitle.vue */ "./resources/js/Components/HeaderTitle.vue");
/* harmony import */ var _Login_Register__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Login/Register */ "./resources/js/Auth/Login/Register.vue");
/* harmony import */ var _Login_ValidateCode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Login/ValidateCode */ "./resources/js/Auth/Login/ValidateCode.vue");
/* harmony import */ var _Login_EnterPassword__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Login/EnterPassword */ "./resources/js/Auth/Login/EnterPassword.vue");
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






/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    CheckEmail: _Login_CheckEmail__WEBPACK_IMPORTED_MODULE_1__["default"],
    EnterPassword: _Login_EnterPassword__WEBPACK_IMPORTED_MODULE_5__["default"],
    HeaderTitle: _Components_HeaderTitle_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    Register: _Login_Register__WEBPACK_IMPORTED_MODULE_3__["default"],
    ValidateCode: _Login_ValidateCode__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      email: '',
      step: 'first'
    };
  },
  methods: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('messages', ['addMessage'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('session', ['setUser'])), {}, {
    updateEmail: function updateEmail(email) {
      this.email = email;
    },
    updateStep: function updateStep(stepChange) {
      this.step = stepChange;
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Auth/Login/CheckEmail.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Auth/Login/CheckEmail.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Components_Form_Submit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Components/Form/Submit */ "./resources/js/Components/Form/Submit.vue");
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



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Submit: _Components_Form_Submit__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      email: ''
    };
  },
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('messages', ['addMessage'])), {}, {
    checkEmail: function checkEmail() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/auth/check-email', {
        email: this.email
      }).then(function (response) {
        _this.$emit('email-changed', _this.email);

        _this.$emit('status-changed', response.data.status);
      })["catch"](function (error) {
        if (error.response.status === 422) {
          var errors = error.response.data.errors;

          for (var i in errors) {
            for (var x in errors[i]) {
              _this.addMessage({
                status: 'error',
                message: errors[i][x]
              });
            }
          }
        }
      });
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Auth/Login/EnterPassword.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Auth/Login/EnterPassword.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _Components_Form_Submit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Components/Form/Submit */ "./resources/js/Components/Form/Submit.vue");
/* harmony import */ var _Components_Tracker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Components/Tracker */ "./resources/js/Components/Tracker.js");
/* harmony import */ var _SuccessfulAuth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SuccessfulAuth */ "./resources/js/Auth/Login/SuccessfulAuth.js");
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





/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    email: {
      required: true,
      type: String
    }
  },
  mixins: [_SuccessfulAuth__WEBPACK_IMPORTED_MODULE_4__["default"]],
  components: {
    Submit: _Components_Form_Submit__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      password: ''
    };
  },
  methods: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])('messages', ['addMessage'])), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])('session', ['setUser'])), {}, {
    login: function login() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/auth/password', {
        email: this.email,
        password: this.password
      }).then(function (response) {
        _Components_Tracker__WEBPACK_IMPORTED_MODULE_3__["default"].track('Authentication', 'Authenticated password');

        _this.success(response.data.user);
      })["catch"](function (error) {
        if (error.response.status === 422) {
          _this.addMessage({
            status: 'error',
            message: error.response.data.error
          });
        }
      });
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Auth/Login/Register.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Auth/Login/Register.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _Components_Form_Submit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Components/Form/Submit */ "./resources/js/Components/Form/Submit.vue");
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



/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    email: {
      required: true,
      type: String
    }
  },
  components: {
    Submit: _Components_Form_Submit__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      emailConfirmation: ''
    };
  },
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])('messages', ['addMessage'])), {}, {
    register: function register() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/auth/register', {
        email: this.email,
        email_confirmation: this.emailConfirmation
      }).then(function (response) {
        _this.$emit('status-changed', response.data.status);
      })["catch"](function (error) {
        if (error.response.status === 422) {
          var errors = error.response.data.errors;

          for (var i in errors) {
            for (var x in errors[i]) {
              _this.addMessage({
                status: 'error',
                message: errors[i][x]
              });
            }
          }
        }
      });
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Auth/Login/ValidateCode.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Auth/Login/ValidateCode.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _Components_Form_Submit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Components/Form/Submit */ "./resources/js/Components/Form/Submit.vue");
/* harmony import */ var _SuccessfulAuth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SuccessfulAuth */ "./resources/js/Auth/Login/SuccessfulAuth.js");
/* harmony import */ var _Components_Tracker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Components/Tracker */ "./resources/js/Components/Tracker.js");
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





/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    email: {
      required: true,
      type: String
    }
  },
  mixins: [_SuccessfulAuth__WEBPACK_IMPORTED_MODULE_3__["default"]],
  components: {
    Submit: _Components_Form_Submit__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      code: ''
    };
  },
  methods: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])('messages', ['addMessage'])), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])('session', ['setUser'])), {}, {
    submitCode: function submitCode() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/auth/validate/', {
        email: this.email,
        code: this.code
      }).then(function (response) {
        _Components_Tracker__WEBPACK_IMPORTED_MODULE_4__["default"].track('Authentication', 'Authenticated code');

        _this.success(response.data.user);
      })["catch"](function (error) {
        if (error.response.status === 404) {
          _this.addMessage({
            status: 'error',
            message: 'The auth code you have provided is incorrect. Please check to that you have not copied it correctly.'
          });
        }
      });
    }
  })
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Auth/Login.vue?vue&type=template&id=015b0840&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Auth/Login.vue?vue&type=template&id=015b0840& ***!
  \**************************************************************************************************************************************************************************************************/
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
      _c("header-title", { attrs: { title: "Login / Register" } }),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "bg-gray-200" }, [
        _c("div", { staticClass: "container sm:mx-auto" }, [
          _c(
            "div",
            { staticClass: "bg-white p-4 pb-16" },
            [
              _vm.step === "first"
                ? _c("check-email", {
                    on: {
                      "status-changed": _vm.updateStep,
                      "email-changed": _vm.updateEmail,
                    },
                  })
                : _vm._e(),
              _vm._v(" "),
              _vm.step === "registration-required"
                ? _c("register", {
                    attrs: { email: _vm.email },
                    on: { "status-changed": _vm.updateStep },
                  })
                : _vm._e(),
              _vm._v(" "),
              _vm.step === "code-requested" || _vm.step === "user-registered"
                ? _c("validate-code", { attrs: { email: _vm.email } })
                : _vm._e(),
              _vm._v(" "),
              _vm.step === "password-required"
                ? _c("enter-password", { attrs: { email: _vm.email } })
                : _vm._e(),
            ],
            1
          ),
        ]),
      ]),
    ],
    1
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "crumbs font-serif uppercase" }, [
      _c("div", { staticClass: "container sm:mx-auto p-4" }, [_vm._v(" ")]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Auth/Login/CheckEmail.vue?vue&type=template&id=f774d91a&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Auth/Login/CheckEmail.vue?vue&type=template&id=f774d91a& ***!
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
    "form",
    {
      on: {
        submit: function ($event) {
          $event.preventDefault()
          return _vm.checkEmail()
        },
      },
    },
    [
      _c(
        "div",
        { staticClass: "flex mb-4" },
        [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.email,
                expression: "email",
              },
            ],
            staticClass:
              "input focus:bg-white focus:border-gray-500 w-3/4 p-4 rounded-l-lg",
            attrs: {
              type: "email",
              placeholder: "Email address",
              required: "required",
            },
            domProps: { value: _vm.email },
            on: {
              input: function ($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.email = $event.target.value
              },
            },
          }),
          _vm._v(" "),
          _c("submit", {
            staticClass: "w-1/4 p-4 rounded-l-none rounded-r-lg",
            attrs: { text: "Next" },
          }),
        ],
        1
      ),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "\n        Some features on FaB DB require an account. Registration & login is super easy! Just\n        provide your email address and we'll take it from here!\n    "
        ),
      ]),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Auth/Login/EnterPassword.vue?vue&type=template&id=439491e4&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Auth/Login/EnterPassword.vue?vue&type=template&id=439491e4& ***!
  \****************************************************************************************************************************************************************************************************************/
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
    "form",
    {
      on: {
        submit: function ($event) {
          $event.preventDefault()
          return _vm.login()
        },
      },
    },
    [
      _c(
        "div",
        { staticClass: "mb-4" },
        [
          _c("input", {
            staticClass:
              "input focus:bg-white focus:border-gray-500 w-full rounded-lg p-4 mb-2",
            attrs: { type: "email", readonly: "" },
            domProps: { value: _vm.email },
          }),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.password,
                expression: "password",
              },
            ],
            staticClass:
              "input focus:bg-white focus:border-gray-500 w-full rounded-lg p-4 mb-2",
            attrs: {
              type: "password",
              placeholder: "Enter password",
              required: "required",
            },
            domProps: { value: _vm.password },
            on: {
              input: function ($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.password = $event.target.value
              },
            },
          }),
          _vm._v(" "),
          _c("submit", { staticClass: "w-full p-4", attrs: { text: "Next" } }),
        ],
        1
      ),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "\n        Great! Looks like you have an account! Please enter your password to complete login.\n    "
        ),
      ]),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Auth/Login/Register.vue?vue&type=template&id=4bfbe4e2&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Auth/Login/Register.vue?vue&type=template&id=4bfbe4e2& ***!
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
    "form",
    {
      on: {
        submit: function ($event) {
          $event.preventDefault()
          return _vm.register()
        },
      },
    },
    [
      _c(
        "div",
        { staticClass: "mb-4" },
        [
          _c("input", {
            staticClass:
              "input focus:bg-white focus:border-gray-500 w-full rounded-lg p-4 mb-2",
            attrs: { type: "email", required: "required", readonly: "" },
            domProps: { value: _vm.email },
          }),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.emailConfirmation,
                expression: "emailConfirmation",
              },
            ],
            staticClass:
              "input focus:bg-white focus:border-gray-500 w-full rounded-lg p-4 mb-2",
            attrs: {
              type: "email",
              placeholder: "Confirm email",
              required: "required",
            },
            domProps: { value: _vm.emailConfirmation },
            on: {
              input: function ($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.emailConfirmation = $event.target.value
              },
            },
          }),
          _vm._v(" "),
          _c("submit", { staticClass: "w-full p-4", attrs: { text: "Next" } }),
        ],
        1
      ),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "\n        We couldn't find that email address. To register, please confirm your email. We'll send you a login code to confirm your email.\n        Once completed, if you wish, you can configure your account to use a password instead.\n    "
        ),
      ]),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Auth/Login/ValidateCode.vue?vue&type=template&id=36bccae2&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Auth/Login/ValidateCode.vue?vue&type=template&id=36bccae2& ***!
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
  return _c(
    "form",
    {
      on: {
        submit: function ($event) {
          $event.preventDefault()
          return _vm.submitCode()
        },
      },
    },
    [
      _c(
        "div",
        { staticClass: "flex mb-8" },
        [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.code,
                expression: "code",
              },
            ],
            staticClass:
              "input focus:bg-white focus:border-gray-500 w-2/3 p-4 rounded-l-lg",
            attrs: {
              type: "text",
              placeholder: "Enter your authentication code",
              required: "required",
            },
            domProps: { value: _vm.code },
            on: {
              input: function ($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.code = $event.target.value
              },
            },
          }),
          _vm._v(" "),
          _c("submit", {
            staticClass: "w-2/3 p-4 rounded-l-none rounded-r-lg",
            attrs: { text: "Next" },
          }),
        ],
        1
      ),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "Great! Now a one-time code will be emailed to you. When it arrives, copy and paste the code into the form above."
        ),
      ]),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Auth/Login.vue":
/*!*************************************!*\
  !*** ./resources/js/Auth/Login.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Login_vue_vue_type_template_id_015b0840___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login.vue?vue&type=template&id=015b0840& */ "./resources/js/Auth/Login.vue?vue&type=template&id=015b0840&");
/* harmony import */ var _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.vue?vue&type=script&lang=js& */ "./resources/js/Auth/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Login_vue_vue_type_template_id_015b0840___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Login_vue_vue_type_template_id_015b0840___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Auth/Login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Auth/Login.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./resources/js/Auth/Login.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Auth/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Auth/Login.vue?vue&type=template&id=015b0840&":
/*!********************************************************************!*\
  !*** ./resources/js/Auth/Login.vue?vue&type=template&id=015b0840& ***!
  \********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_015b0840___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=template&id=015b0840& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Auth/Login.vue?vue&type=template&id=015b0840&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_015b0840___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_015b0840___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Auth/Login/CheckEmail.vue":
/*!************************************************!*\
  !*** ./resources/js/Auth/Login/CheckEmail.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CheckEmail_vue_vue_type_template_id_f774d91a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CheckEmail.vue?vue&type=template&id=f774d91a& */ "./resources/js/Auth/Login/CheckEmail.vue?vue&type=template&id=f774d91a&");
/* harmony import */ var _CheckEmail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CheckEmail.vue?vue&type=script&lang=js& */ "./resources/js/Auth/Login/CheckEmail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CheckEmail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CheckEmail_vue_vue_type_template_id_f774d91a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CheckEmail_vue_vue_type_template_id_f774d91a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Auth/Login/CheckEmail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Auth/Login/CheckEmail.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/Auth/Login/CheckEmail.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckEmail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CheckEmail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Auth/Login/CheckEmail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckEmail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Auth/Login/CheckEmail.vue?vue&type=template&id=f774d91a&":
/*!*******************************************************************************!*\
  !*** ./resources/js/Auth/Login/CheckEmail.vue?vue&type=template&id=f774d91a& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckEmail_vue_vue_type_template_id_f774d91a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./CheckEmail.vue?vue&type=template&id=f774d91a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Auth/Login/CheckEmail.vue?vue&type=template&id=f774d91a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckEmail_vue_vue_type_template_id_f774d91a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckEmail_vue_vue_type_template_id_f774d91a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Auth/Login/EnterPassword.vue":
/*!***************************************************!*\
  !*** ./resources/js/Auth/Login/EnterPassword.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EnterPassword_vue_vue_type_template_id_439491e4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EnterPassword.vue?vue&type=template&id=439491e4& */ "./resources/js/Auth/Login/EnterPassword.vue?vue&type=template&id=439491e4&");
/* harmony import */ var _EnterPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EnterPassword.vue?vue&type=script&lang=js& */ "./resources/js/Auth/Login/EnterPassword.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EnterPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EnterPassword_vue_vue_type_template_id_439491e4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EnterPassword_vue_vue_type_template_id_439491e4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Auth/Login/EnterPassword.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Auth/Login/EnterPassword.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/Auth/Login/EnterPassword.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EnterPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./EnterPassword.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Auth/Login/EnterPassword.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EnterPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Auth/Login/EnterPassword.vue?vue&type=template&id=439491e4&":
/*!**********************************************************************************!*\
  !*** ./resources/js/Auth/Login/EnterPassword.vue?vue&type=template&id=439491e4& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EnterPassword_vue_vue_type_template_id_439491e4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./EnterPassword.vue?vue&type=template&id=439491e4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Auth/Login/EnterPassword.vue?vue&type=template&id=439491e4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EnterPassword_vue_vue_type_template_id_439491e4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EnterPassword_vue_vue_type_template_id_439491e4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Auth/Login/Register.vue":
/*!**********************************************!*\
  !*** ./resources/js/Auth/Login/Register.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Register_vue_vue_type_template_id_4bfbe4e2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register.vue?vue&type=template&id=4bfbe4e2& */ "./resources/js/Auth/Login/Register.vue?vue&type=template&id=4bfbe4e2&");
/* harmony import */ var _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register.vue?vue&type=script&lang=js& */ "./resources/js/Auth/Login/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Register_vue_vue_type_template_id_4bfbe4e2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Register_vue_vue_type_template_id_4bfbe4e2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Auth/Login/Register.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Auth/Login/Register.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/Auth/Login/Register.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Auth/Login/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Auth/Login/Register.vue?vue&type=template&id=4bfbe4e2&":
/*!*****************************************************************************!*\
  !*** ./resources/js/Auth/Login/Register.vue?vue&type=template&id=4bfbe4e2& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_4bfbe4e2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=template&id=4bfbe4e2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Auth/Login/Register.vue?vue&type=template&id=4bfbe4e2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_4bfbe4e2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_4bfbe4e2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Auth/Login/SuccessfulAuth.js":
/*!***************************************************!*\
  !*** ./resources/js/Auth/Login/SuccessfulAuth.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    success: function success(user) {
      var from = this.$route.query.from || '/decks/build';
      window.session.user = user;
      this.setUser({
        user: user
      });
      window.location = from;
    }
  }
});

/***/ }),

/***/ "./resources/js/Auth/Login/ValidateCode.vue":
/*!**************************************************!*\
  !*** ./resources/js/Auth/Login/ValidateCode.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ValidateCode_vue_vue_type_template_id_36bccae2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ValidateCode.vue?vue&type=template&id=36bccae2& */ "./resources/js/Auth/Login/ValidateCode.vue?vue&type=template&id=36bccae2&");
/* harmony import */ var _ValidateCode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ValidateCode.vue?vue&type=script&lang=js& */ "./resources/js/Auth/Login/ValidateCode.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ValidateCode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ValidateCode_vue_vue_type_template_id_36bccae2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ValidateCode_vue_vue_type_template_id_36bccae2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Auth/Login/ValidateCode.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Auth/Login/ValidateCode.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/Auth/Login/ValidateCode.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ValidateCode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ValidateCode.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Auth/Login/ValidateCode.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ValidateCode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Auth/Login/ValidateCode.vue?vue&type=template&id=36bccae2&":
/*!*********************************************************************************!*\
  !*** ./resources/js/Auth/Login/ValidateCode.vue?vue&type=template&id=36bccae2& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ValidateCode_vue_vue_type_template_id_36bccae2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ValidateCode.vue?vue&type=template&id=36bccae2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Auth/Login/ValidateCode.vue?vue&type=template&id=36bccae2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ValidateCode_vue_vue_type_template_id_36bccae2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ValidateCode_vue_vue_type_template_id_36bccae2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Components/Tracker.js":
/*!********************************************!*\
  !*** ./resources/js/Components/Tracker.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  track: function track(category, action, label, value) {
    if (typeof ga !== 'undefined') {
      gtag('event', action, {
        'event_category': category,
        'event_label': label,
        'value': value
      });
    }
  }
});

/***/ })

}]);