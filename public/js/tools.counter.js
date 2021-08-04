(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tools.counter"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/HeroAvatar.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Components/HeroAvatar.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
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
    hero: {
      type: Object
    },
    name: {
      type: String
    },
    width: {
      "default": 100
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/HeroSelector.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Components/HeroSelector.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _HeroAvatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HeroAvatar */ "./resources/js/Components/HeroAvatar.vue");
/* harmony import */ var _Utilities_Strings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Utilities/Strings */ "./resources/js/Utilities/Strings.js");
/* harmony import */ var _Utilities_Models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Utilities/Models */ "./resources/js/Utilities/Models.js");
/* harmony import */ var _CardDatabase_Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../CardDatabase/Card */ "./resources/js/CardDatabase/Card.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['deck'],
  components: {
    HeroAvatar: _HeroAvatar__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  mixins: [_Utilities_Strings__WEBPACK_IMPORTED_MODULE_3__["default"]],
  data: function data() {
    return {
      availableHeroes: []
    };
  },
  computed: {
    heroes: function heroes() {
      var _this = this;

      if (this.deck && this.deck.practise) {
        return this.availableHeroes.filter(function (hero) {
          return hero.keywords.indexOf('young') !== -1 && hero.sku.set.id === _this.deck.practise.set.id;
        });
      }

      return this.availableHeroes;
    }
  },
  methods: {
    selectHero: function selectHero(hero) {
      this.$emit('hero-selected', hero);
      this.$eventHub.$emit('hero-selected', hero, this.type(hero));
    },
    type: function type(hero) {
      return hero.keywords.indexOf('young') !== -1 ? 'Blitz' : 'Constructed';
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/cards/heroes').then(function (response) {
      _this2.availableHeroes = _Utilities_Models__WEBPACK_IMPORTED_MODULE_4__["default"].hydrateMany(response.data, _CardDatabase_Card__WEBPACK_IMPORTED_MODULE_5__["default"]);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Decks/Resource.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Decks/Resource.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    player: {
      required: true,
      type: Object
    },
    resource: {
      required: true,
      type: Number
    }
  },
  computed: {
    resourceClass: function resourceClass() {
      return this.resource > 0 && this.resource <= this.player.resource ? 'shadow-highlight' : 'opacity-50';
    }
  },
  methods: {
    pitch: function pitch() {
      this.player.resource = this.resource;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/LifeCounter/Main.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/LifeCounter/Main.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Components_HeroSelector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Components/HeroSelector */ "./resources/js/Components/HeroSelector.vue");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Player */ "./resources/js/LifeCounter/Player.vue");
/* harmony import */ var _Components_Tracker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/Tracker */ "./resources/js/Components/Tracker.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    HeroSelector: _Components_HeroSelector__WEBPACK_IMPORTED_MODULE_0__["default"],
    Player: _Player__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      players: [],
      requirePlayers: true,
      timer: null
    };
  },
  computed: {
    firstPlayer: function firstPlayer() {
      return this.players[0];
    },
    secondPlayer: function secondPlayer() {
      return this.players[1];
    }
  },
  methods: {
    chooseHeroes: function chooseHeroes() {
      this.players = [];
      this.requirePlayers = true;
    },
    logEvent: function logEvent() {
      if (this.timer && this.timer.diff(moment__WEBPACK_IMPORTED_MODULE_1___default()(), 'minutes') >= 5) {
        _Components_Tracker__WEBPACK_IMPORTED_MODULE_3__["default"].track('Game', 'Completed');
        this.timer = null;
      }
    },
    newPlayer: function newPlayer(hero) {
      var player = {
        maxLife: hero.stats.life,
        life: hero.stats.life,
        resource: 0,
        first: !this.players.length,
        hero: hero
      };
      this.players.push(player);

      if (this.players.length === 2) {
        this.requirePlayers = false;
      }
    },
    reset: function reset() {
      this.$eventHub.$emit('life-counter.reset');
      this.timer = moment__WEBPACK_IMPORTED_MODULE_1___default()();
    },
    skip: function skip() {
      this.requirePlayers = false;
    }
  },
  watch: {
    requirePlayers: function requirePlayers(require) {
      if (!require) {
        this.timer = moment__WEBPACK_IMPORTED_MODULE_1___default()();
      } else {
        this.timer = null;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/LifeCounter/Player.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/LifeCounter/Player.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Components_HeroAvatar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Components/HeroAvatar */ "./resources/js/Components/HeroAvatar.vue");
/* harmony import */ var _Utilities_Imagery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Utilities/Imagery */ "./resources/js/Utilities/Imagery.js");
/* harmony import */ var _Decks_Resource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Decks/Resource */ "./resources/js/Decks/Resource.vue");
//
//
//
//
//
//
//
//
//
//
//
//
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
    player: {
      required: true,
      type: Object
    },
    players: Number
  },
  mixins: [_Utilities_Imagery__WEBPACK_IMPORTED_MODULE_1__["default"]],
  components: {
    HeroAvatar: _Components_HeroAvatar__WEBPACK_IMPORTED_MODULE_0__["default"],
    Resource: _Decks_Resource__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      life: Number(this.player.life),
      lastSwipe: null
    };
  },
  computed: {
    lifeClass: function lifeClass() {
      if (this.life > this.player.maxLife) {
        return 'text-green-400';
      }

      if (this.life === 0) {
        return 'text-red-500';
      }

      return 'text-white';
    }
  },
  methods: {
    heal: function heal() {
      this.life += 1;
    },
    hurt: function hurt() {
      if (this.life > 0) {
        this.life -= 1;
      } else {
        this.$emit('player-destroyed');
      }
    },
    swipe: function swipe(event) {
      if (this.lastSwipe !== null) {
        var current = event.changedTouches[0].clientY;
        var previous = this.lastSwipe.clientY;

        if (this.player.first) {
          if (current < previous - 10) {
            this.heal();
            this.lastSwipe = event.changedTouches[0];
          } else if (current > previous + 10) {
            this.hurt();
            this.lastSwipe = event.changedTouches[0];
          }
        } else {
          if (current > previous + 10) {
            this.heal();
            this.lastSwipe = event.changedTouches[0];
          } else if (current < previous - 10) {
            this.hurt();
            this.lastSwipe = event.changedTouches[0];
          }
        }
      } else {
        this.lastSwipe = event.changedTouches[0];
      }
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.$eventHub.$on('life-counter.reset', function () {
      _this.life = Number(_this.player.maxLife);
    });
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/LifeCounter/Main.vue?vue&type=style&index=0&id=c94de074&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/LifeCounter/Main.vue?vue&type=style&index=0&id=c94de074&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".no-dtz[data-v-c94de074] {\n  touch-action: manipulation;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/LifeCounter/Main.vue?vue&type=style&index=0&id=c94de074&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/LifeCounter/Main.vue?vue&type=style&index=0&id=c94de074&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Main.vue?vue&type=style&index=0&id=c94de074&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/LifeCounter/Main.vue?vue&type=style&index=0&id=c94de074&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/HeroAvatar.vue?vue&type=template&id=3c72f4fe&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Components/HeroAvatar.vue?vue&type=template&id=3c72f4fe& ***!
  \*************************************************************************************************************************************************************************************************************/
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
  return _vm.hero
    ? _c("img", {
        staticClass: "rounded-full",
        attrs: {
          src: _vm.heroProfile(_vm.hero, _vm.width),
          alt: _vm.name,
          width: _vm.width,
          height: _vm.width
        }
      })
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/HeroSelector.vue?vue&type=template&id=0a1e4544&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Components/HeroSelector.vue?vue&type=template&id=0a1e4544& ***!
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
  return _c(
    "ol",
    { staticClass: "flex flex-wrap my-8" },
    _vm._l(_vm.heroes, function(hero) {
      return _c(
        "li",
        { staticClass: "w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 mb-8" },
        [
          _c(
            "button",
            {
              staticClass: "block cursor-pointer mx-auto",
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.selectHero(hero)
                }
              }
            },
            [
              _c("hero-avatar", {
                attrs: { hero: hero, name: hero.name, width: 150 }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "flex -mt-5" }, [
                _c("div", { staticClass: "w-1/2 flex justify-end mr-2" }, [
                  _c("span", { staticClass: "text-lg" }, [
                    _vm._v(_vm._s(hero.stats.intellect))
                  ]),
                  _vm._v(" "),
                  _c("img", {
                    staticClass:
                      "block h-10 ml-1 border-2 border-gray-200 rounded-full",
                    attrs: { src: "/img/intellect.png" }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "w-1/2 flex ml-2 " }, [
                  _c("img", {
                    staticClass:
                      "block h-10 mr-1 border-2 border-gray-200 rounded-full",
                    attrs: { src: "/img/life.png" }
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "text-lg" }, [
                    _vm._v(_vm._s(hero.stats.life))
                  ])
                ])
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "mt-4 text-center font-serif uppercase text-lg overflow-hidden",
              staticStyle: { "max-height": "20px" }
            },
            [_vm._v(_vm._s(hero.name))]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "mt-2 text-center" }, [
            _vm._v(_vm._s(_vm.type(hero)))
          ])
        ]
      )
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Decks/Resource.vue?vue&type=template&id=d8c68f5e&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Decks/Resource.vue?vue&type=template&id=d8c68f5e& ***!
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
    "button",
    {
      staticClass:
        "flex flex-col text-center items-center my-1 focus-none mr-3",
      on: {
        click: function($event) {
          return _vm.pitch()
        }
      }
    },
    [
      _c("img", {
        staticClass: "rounded-full",
        class: _vm.resourceClass,
        attrs: { src: "/img/resource.png", width: "58" }
      }),
      _vm._v(" "),
      _c(
        "span",
        {
          staticClass: "font-serif font-bold mt-1 text-xl",
          class:
            _vm.player.resource === _vm.resource
              ? "text-blue-500"
              : "text-gray-300"
        },
        [_vm._v(_vm._s(_vm.resource))]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/LifeCounter/Main.vue?vue&type=template&id=c94de074&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/LifeCounter/Main.vue?vue&type=template&id=c94de074&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************/
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
    {
      staticClass:
        "no-dtz fixed top-0 right-0 bottom-0 left-0 flex flex-col overflow-y-scroll bg-semi-black"
    },
    [
      _vm.requirePlayers
        ? _c(
            "div",
            { staticClass: "p-4" },
            [
              _c("div", { staticClass: "flex" }, [
                _c(
                  "h1",
                  { staticClass: "text-white font-serif uppercase text-2xl" },
                  [_vm._v("Select Player " + _vm._s(_vm.players.length + 1))]
                ),
                _vm._v(" "),
                _vm.players.length === 1
                  ? _c(
                      "button",
                      {
                        staticClass: "button-primary ml-auto py-3 px-4 rounded",
                        on: {
                          click: function($event) {
                            return _vm.skip()
                          }
                        }
                      },
                      [_vm._v("Skip")]
                    )
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c("hero-selector", {
                staticClass: "text-gray-500 shadow-lg",
                on: { "hero-selected": _vm.newPlayer }
              })
            ],
            1
          )
        : _c("div", { staticClass: "w-full flex flex-col h-full" }, [
            _c(
              "div",
              { staticClass: "h-full flex flex-col items-center" },
              [
                _vm.players.length === 2
                  ? _c("player", {
                      staticClass: "transform rotate-180",
                      attrs: {
                        player: _vm.secondPlayer,
                        players: _vm.players.length
                      },
                      on: { "player-destroyed": _vm.logEvent }
                    })
                  : _vm._e(),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "flex items-center" },
                  [
                    _c(
                      "button",
                      {
                        staticClass:
                          "button-primary py-3 px-4 pb-2 font-serif uppercase rounded-l-lg",
                        on: {
                          click: function($event) {
                            return _vm.reset()
                          }
                        }
                      },
                      [_vm._v("Reset")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass:
                          "button-primary py-3 px-4 pb-2 font-serif uppercase",
                        on: {
                          click: function($event) {
                            return _vm.chooseHeroes()
                          }
                        }
                      },
                      [_vm._v("Heroes")]
                    ),
                    _vm._v(" "),
                    _c(
                      "router-link",
                      {
                        staticClass:
                          "button-secondary py-3 px-4 pb-2 font-serif uppercase rounded-r-lg",
                        attrs: { to: { name: "home" } }
                      },
                      [_vm._v("FaB DB")]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c("player", {
                  attrs: {
                    player: _vm.firstPlayer,
                    players: _vm.players.length
                  },
                  on: { "player-destroyed": _vm.logEvent }
                })
              ],
              1
            )
          ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/LifeCounter/Player.vue?vue&type=template&id=6d02b0a4&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/LifeCounter/Player.vue?vue&type=template&id=6d02b0a4& ***!
  \**********************************************************************************************************************************************************************************************************/
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
    {
      directives: [
        {
          name: "touch",
          rawName: "v-touch:moving",
          value: _vm.swipe,
          expression: "swipe",
          arg: "moving"
        }
      ],
      staticClass: "flex-grow flex flex-col w-full "
    },
    [
      _c(
        "div",
        {
          staticClass: "flex mx-auto z-100 my-1",
          style: {
            backgroundImage:
              "url(" + _vm.heroProfile(_vm.player.hero, 160, true) + ")",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center 20px"
          }
        },
        [
          _c(
            "button",
            {
              staticClass: "text-white px-8 text-4xl",
              on: {
                click: function($event) {
                  return _vm.hurt()
                }
              }
            },
            [_vm._v("-")]
          ),
          _vm._v(" "),
          _c(
            "h2",
            {
              staticClass: "font-serif uppercase text-12xl text-center",
              class: _vm.lifeClass,
              staticStyle: { "text-shadow": "2px 2px 3px #000000" }
            },
            [_vm._v(_vm._s(_vm.life))]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "text-white px-8 text-4xl",
              on: {
                click: function($event) {
                  return _vm.heal()
                }
              }
            },
            [_vm._v("+")]
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "flex justify-center px-4 pr-2 py-1" },
        [
          _c("resource", { attrs: { resource: 0, player: _vm.player } }),
          _vm._v(" "),
          _c("resource", { attrs: { resource: 1, player: _vm.player } }),
          _vm._v(" "),
          _c("resource", { attrs: { resource: 2, player: _vm.player } }),
          _vm._v(" "),
          _c("resource", { attrs: { resource: 3, player: _vm.player } })
        ],
        1
      )
    ]
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
      var name = this.name().split(',')[0].toLowerCase().split(' ')[0];

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
    key: "stats",
    get: function get() {
      return this.fields.stats;
    }
  }, {
    key: "keywords",
    get: function get() {
      return this.fields.keywords;
    }
  }]);

  return Card;
}();

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./resources/js/Components/HeroAvatar.vue":
/*!************************************************!*\
  !*** ./resources/js/Components/HeroAvatar.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HeroAvatar_vue_vue_type_template_id_3c72f4fe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HeroAvatar.vue?vue&type=template&id=3c72f4fe& */ "./resources/js/Components/HeroAvatar.vue?vue&type=template&id=3c72f4fe&");
/* harmony import */ var _HeroAvatar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeroAvatar.vue?vue&type=script&lang=js& */ "./resources/js/Components/HeroAvatar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _HeroAvatar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HeroAvatar_vue_vue_type_template_id_3c72f4fe___WEBPACK_IMPORTED_MODULE_0__["render"],
  _HeroAvatar_vue_vue_type_template_id_3c72f4fe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/HeroAvatar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Components/HeroAvatar.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/Components/HeroAvatar.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroAvatar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./HeroAvatar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/HeroAvatar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroAvatar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/HeroAvatar.vue?vue&type=template&id=3c72f4fe&":
/*!*******************************************************************************!*\
  !*** ./resources/js/Components/HeroAvatar.vue?vue&type=template&id=3c72f4fe& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroAvatar_vue_vue_type_template_id_3c72f4fe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./HeroAvatar.vue?vue&type=template&id=3c72f4fe& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/HeroAvatar.vue?vue&type=template&id=3c72f4fe&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroAvatar_vue_vue_type_template_id_3c72f4fe___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroAvatar_vue_vue_type_template_id_3c72f4fe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Components/HeroSelector.vue":
/*!**************************************************!*\
  !*** ./resources/js/Components/HeroSelector.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HeroSelector_vue_vue_type_template_id_0a1e4544___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HeroSelector.vue?vue&type=template&id=0a1e4544& */ "./resources/js/Components/HeroSelector.vue?vue&type=template&id=0a1e4544&");
/* harmony import */ var _HeroSelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeroSelector.vue?vue&type=script&lang=js& */ "./resources/js/Components/HeroSelector.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _HeroSelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HeroSelector_vue_vue_type_template_id_0a1e4544___WEBPACK_IMPORTED_MODULE_0__["render"],
  _HeroSelector_vue_vue_type_template_id_0a1e4544___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/HeroSelector.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Components/HeroSelector.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/Components/HeroSelector.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroSelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./HeroSelector.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/HeroSelector.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroSelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/HeroSelector.vue?vue&type=template&id=0a1e4544&":
/*!*********************************************************************************!*\
  !*** ./resources/js/Components/HeroSelector.vue?vue&type=template&id=0a1e4544& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroSelector_vue_vue_type_template_id_0a1e4544___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./HeroSelector.vue?vue&type=template&id=0a1e4544& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/HeroSelector.vue?vue&type=template&id=0a1e4544&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroSelector_vue_vue_type_template_id_0a1e4544___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroSelector_vue_vue_type_template_id_0a1e4544___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ }),

/***/ "./resources/js/Decks/Resource.vue":
/*!*****************************************!*\
  !*** ./resources/js/Decks/Resource.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Resource_vue_vue_type_template_id_d8c68f5e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Resource.vue?vue&type=template&id=d8c68f5e& */ "./resources/js/Decks/Resource.vue?vue&type=template&id=d8c68f5e&");
/* harmony import */ var _Resource_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Resource.vue?vue&type=script&lang=js& */ "./resources/js/Decks/Resource.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Resource_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Resource_vue_vue_type_template_id_d8c68f5e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Resource_vue_vue_type_template_id_d8c68f5e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Decks/Resource.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Decks/Resource.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/Decks/Resource.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Resource_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Resource.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Decks/Resource.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Resource_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Decks/Resource.vue?vue&type=template&id=d8c68f5e&":
/*!************************************************************************!*\
  !*** ./resources/js/Decks/Resource.vue?vue&type=template&id=d8c68f5e& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Resource_vue_vue_type_template_id_d8c68f5e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Resource.vue?vue&type=template&id=d8c68f5e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Decks/Resource.vue?vue&type=template&id=d8c68f5e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Resource_vue_vue_type_template_id_d8c68f5e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Resource_vue_vue_type_template_id_d8c68f5e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/LifeCounter/Main.vue":
/*!*******************************************!*\
  !*** ./resources/js/LifeCounter/Main.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Main_vue_vue_type_template_id_c94de074_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Main.vue?vue&type=template&id=c94de074&scoped=true& */ "./resources/js/LifeCounter/Main.vue?vue&type=template&id=c94de074&scoped=true&");
/* harmony import */ var _Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Main.vue?vue&type=script&lang=js& */ "./resources/js/LifeCounter/Main.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Main_vue_vue_type_style_index_0_id_c94de074_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Main.vue?vue&type=style&index=0&id=c94de074&scoped=true&lang=css& */ "./resources/js/LifeCounter/Main.vue?vue&type=style&index=0&id=c94de074&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Main_vue_vue_type_template_id_c94de074_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Main_vue_vue_type_template_id_c94de074_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "c94de074",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/LifeCounter/Main.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/LifeCounter/Main.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/LifeCounter/Main.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Main.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/LifeCounter/Main.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/LifeCounter/Main.vue?vue&type=style&index=0&id=c94de074&scoped=true&lang=css&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/LifeCounter/Main.vue?vue&type=style&index=0&id=c94de074&scoped=true&lang=css& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_0_id_c94de074_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Main.vue?vue&type=style&index=0&id=c94de074&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/LifeCounter/Main.vue?vue&type=style&index=0&id=c94de074&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_0_id_c94de074_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_0_id_c94de074_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_0_id_c94de074_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_0_id_c94de074_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_0_id_c94de074_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/LifeCounter/Main.vue?vue&type=template&id=c94de074&scoped=true&":
/*!**************************************************************************************!*\
  !*** ./resources/js/LifeCounter/Main.vue?vue&type=template&id=c94de074&scoped=true& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_c94de074_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Main.vue?vue&type=template&id=c94de074&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/LifeCounter/Main.vue?vue&type=template&id=c94de074&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_c94de074_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_c94de074_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/LifeCounter/Player.vue":
/*!*********************************************!*\
  !*** ./resources/js/LifeCounter/Player.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Player_vue_vue_type_template_id_6d02b0a4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player.vue?vue&type=template&id=6d02b0a4& */ "./resources/js/LifeCounter/Player.vue?vue&type=template&id=6d02b0a4&");
/* harmony import */ var _Player_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Player.vue?vue&type=script&lang=js& */ "./resources/js/LifeCounter/Player.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Player_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Player_vue_vue_type_template_id_6d02b0a4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Player_vue_vue_type_template_id_6d02b0a4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/LifeCounter/Player.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/LifeCounter/Player.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/LifeCounter/Player.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Player_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Player.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/LifeCounter/Player.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Player_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/LifeCounter/Player.vue?vue&type=template&id=6d02b0a4&":
/*!****************************************************************************!*\
  !*** ./resources/js/LifeCounter/Player.vue?vue&type=template&id=6d02b0a4& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Player_vue_vue_type_template_id_6d02b0a4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Player.vue?vue&type=template&id=6d02b0a4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/LifeCounter/Player.vue?vue&type=template&id=6d02b0a4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Player_vue_vue_type_template_id_6d02b0a4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Player_vue_vue_type_template_id_6d02b0a4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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