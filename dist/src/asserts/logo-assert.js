'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = logoAssert;

var _validator = require('validator.js-asserts');

var asserts = _interopRequireWildcard(_validator);

var _enums = require('../enums');

var _validator2 = require('validator.js');

var _lodash = require('lodash');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Inject `Uri` and `EqualKeys` extra asserts.
 */

/**
 * Module dependencies.
 */

const Assert = _validator2.Assert.extend((0, _lodash.pick)(asserts, ['Uri', 'EqualKeys']));

/**
 * Resolution choices.
 */

const choices = (0, _lodash.values)(_enums.resolution);

/**
 * Export `LogoAssert`.
 */

function logoAssert() {
  // Class name.
  this.__class__ = 'Logo';

  // Validation algorithm.
  this.validate = value => {
    try {
      new Assert().EqualKeys(['res', 'url']).validate(value);
      new Assert().Choice(choices).validate(value.res);
      new Assert().Uri().validate(value.url);
    } catch (e) {
      throw new _validator2.Violation(e.assert, value, e.violation);
    }

    return true;
  };

  return this;
}