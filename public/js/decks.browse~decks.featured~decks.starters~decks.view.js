(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["decks.browse~decks.featured~decks.starters~decks.view"],{

/***/ "./resources/js/DeckBuilder/Cards.js":
/*!*******************************************!*\
  !*** ./resources/js/DeckBuilder/Cards.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Cards; });
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/modules/index-all.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Cards =
/*#__PURE__*/
function () {
  function Cards(cards) {
    _classCallCheck(this, Cards);

    this.cards = cards;
  }

  _createClass(Cards, [{
    key: "applyFilters",
    value: function applyFilters(filters) {
      var _this = this;

      return new Cards(this.cards.filter(function (card) {
        if (filters.indexOf('actions') > -1 && _this.isAction(card)) {
          return true;
        }

        if (filters.indexOf('attacks') > -1 && _this.isAttack(card)) {
          return true;
        }

        if (filters.indexOf('attackReactions') > -1 && _this.isAttackReaction(card)) {
          return true;
        }

        if (filters.indexOf('instants') > -1 && _this.isInstant(card)) {
          return true;
        }

        if (filters.indexOf('defenseReactions') > -1 && _this.isDefenseReaction(card)) {
          return true;
        }

        return false;
      }));
    }
  }, {
    key: "isAction",
    value: function isAction(card) {
      return card.keywords.includes('action') && !card.keywords.includes('attack');
    }
  }, {
    key: "isAttack",
    value: function isAttack(card) {
      return card.keywords.includes('attack') && !card.keywords.includes('reaction');
    }
  }, {
    key: "isAttackReaction",
    value: function isAttackReaction(card) {
      return card.keywords.includes('attack') && card.keywords.includes('reaction');
    }
  }, {
    key: "isDefenseReaction",
    value: function isDefenseReaction(card) {
      return card.keywords.includes('defense') && card.keywords.includes('reaction');
    }
  }, {
    key: "isInstant",
    value: function isInstant(card) {
      return card.keywords.includes('instant');
    }
  }, {
    key: "hero",
    value: function hero() {
      return this.cards.filter(function (card) {
        return card.keywords.includes('hero');
      })[0];
    }
  }, {
    key: "miscellaneous",
    value: function miscellaneous() {
      return new Cards(this.cards.filter(function (card) {
        return card.keywords.includes('resource');
      }));
    }
  }, {
    key: "attackActions",
    value: function attackActions() {
      var _this2 = this;

      return new Cards(this.cards.filter(function (card) {
        return _this2.isAttack(card);
      }));
    }
  }, {
    key: "nonAttackActions",
    value: function nonAttackActions() {
      var _this3 = this;

      return new Cards(this.cards.filter(function (card) {
        return _this3.isAction(card);
      }));
    }
  }, {
    key: "attackReactions",
    value: function attackReactions() {
      var _this4 = this;

      return new Cards(this.cards.filter(function (card) {
        return _this4.isAttackReaction(card);
      }));
    }
  }, {
    key: "defenseReactions",
    value: function defenseReactions() {
      var _this5 = this;

      return new Cards(this.cards.filter(function (card) {
        return _this5.isDefenseReaction(card);
      }));
    }
  }, {
    key: "weapons",
    value: function weapons() {
      return new Cards(this.cards.filter(function (card) {
        return card.keywords.includes('weapon');
      }));
    }
  }, {
    key: "equipment",
    value: function equipment() {
      return new Cards(this.cards.filter(function (card) {
        return card.keywords.includes('equipment');
      }));
    }
  }, {
    key: "items",
    value: function items() {
      return new Cards(this.cards.filter(function (card) {
        return card.keywords.includes('item');
      }));
    }
  }, {
    key: "instants",
    value: function instants() {
      var _this6 = this;

      return new Cards(this.cards.filter(function (card) {
        return _this6.isInstant(card);
      }));
    }
  }, {
    key: "colouredCount",
    value: function colouredCount(colour) {
      var resources = {
        blue: 3,
        yellow: 2,
        red: 1
      };
      return this.filter(function (card) {
        return card.stats.resource && card.stats.resource == resources[colour];
      }).total();
    }
  }, {
    key: "other",
    value: function other() {
      var cards = this.cards.filter(function (card) {
        return !(card.keywords.includes('hero') || card.keywords.includes('equipment') || card.keywords.includes('weapon'));
      }); // Sort by pitch

      return new Cards(underscore__WEBPACK_IMPORTED_MODULE_0__["default"].sortBy(cards, function (card) {
        return card.stats.resource;
      }));
    }
  }, {
    key: "withCost",
    value: function withCost() {
      return this.other().filter(function (card) {
        return !isNaN(card.stats.cost);
      });
    }
  }, {
    key: "withResource",
    value: function withResource() {
      return this.other().filter(function (card) {
        return !isNaN(card.stats.resource);
      });
    }
  }, {
    key: "sort",
    value: function sort() {
      return new Cards(underscore__WEBPACK_IMPORTED_MODULE_0__["default"].sortBy(this.cards, function (card) {
        var resource = card.stats ? card.stats.resource : '';
        return card.name + resource;
      }));
    }
  }, {
    key: "filter",
    value: function filter(handler) {
      return new Cards(this.cards.filter(handler));
    }
  }, {
    key: "find",
    value: function find(card) {
      return this.cards.filter(function (deckCard) {
        return deckCard.identifier === card.identifier;
      })[0];
    }
  }, {
    key: "findKey",
    value: function findKey(card) {
      for (var i in this.cards) {
        var match = this.cards[i];

        if (match.identifier === card.identifier) {
          return i;
        }
      }
    }
  }, {
    key: "hydrate",
    value: function hydrate() {
      var reducer = function reducer(carry, card) {
        for (var i = 0; i < card.total; i++) {
          carry.push(card);
        }

        return carry;
      };

      return new Cards(this.cards.reduce(reducer, []));
    }
  }, {
    key: "total",
    value: function total() {
      return this.cards.reduce(function (carry, card) {
        return carry + card.total;
      }, 0);
    }
  }, {
    key: "count",
    value: function count() {
      return this.cards.length;
    }
  }, {
    key: "add",
    value: function add(card) {
      var deckCard = this.find(card);

      if (deckCard) {
        deckCard.total += 1;
      } else {
        card.total = 1;
        this.cards.push(card);
      }
    } // Field could be a string, or a handler

  }, {
    key: "group",
    value: function group(field) {
      var handler = typeof field === 'string' ? function (card) {
        return card[field];
      } : field;
      return new Cards(Object.values(underscore__WEBPACK_IMPORTED_MODULE_0__["default"].groupBy(this.cards, handler)));
    }
  }, {
    key: "concat",
    value: function concat(cards) {
      cards = cards instanceof Cards ? cards.all() : cards;
      return new Cards(this.cards.concat(cards));
    }
  }, {
    key: "remove",
    value: function remove(card) {
      var deckCard = this.find(card);

      if (deckCard.total > 1) {
        deckCard.total -= 1;
      } else {
        var key = this.findKey(card);

        if (key) {
          this.cards.splice(key, 1);
        }
      }
    }
  }, {
    key: "all",
    value: function all() {
      return this.cards;
    }
  }, {
    key: Symbol.iterator,
    value: function value() {
      return this.cards.values();
    }
  }]);

  return Cards;
}();


;

/***/ }),

/***/ "./resources/js/Decks/Deck.js":
/*!************************************!*\
  !*** ./resources/js/Decks/Deck.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DeckBuilder_Cards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DeckBuilder/Cards */ "./resources/js/DeckBuilder/Cards.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Deck =
/*#__PURE__*/
function () {
  function Deck(fields) {
    _classCallCheck(this, Deck);

    this.fields = fields;
  }

  _createClass(Deck, [{
    key: "name",
    get: function get() {
      return this.fields.name;
    }
  }, {
    key: "authorName",
    get: function get() {
      return this.fields.user.name || 'Anonymous';
    }
  }, {
    key: "user",
    get: function get() {
      return this.fields.user;
    }
  }, {
    key: "label",
    get: function get() {
      return this.fields.label || '';
    }
  }, {
    key: "notes",
    get: function get() {
      return this.fields.notes;
    }
  }, {
    key: "cards",
    get: function get() {
      return new _DeckBuilder_Cards__WEBPACK_IMPORTED_MODULE_0__["default"](this.fields.cards);
    }
  }, {
    key: "hero",
    get: function get() {
      return this.cards.hero();
    }
  }, {
    key: "weapons",
    get: function get() {
      return this.cards.weapons();
    }
  }, {
    key: "equipment",
    get: function get() {
      return this.cards.equipment();
    }
  }, {
    key: "other",
    get: function get() {
      return this.cards.other();
    }
  }, {
    key: "format",
    get: function get() {
      return this.fields.format;
    }
  }, {
    key: "totalCards",
    get: function get() {
      return this.fields.totalCards || 0;
    }
  }, {
    key: "slug",
    get: function get() {
      return this.fields.slug;
    }
  }]);

  return Deck;
}();

/* harmony default export */ __webpack_exports__["default"] = (Deck);

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