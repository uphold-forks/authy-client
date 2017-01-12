'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Assert = undefined;
exports.assert = assert;
exports.validate = validate;

var _asserts = require('./asserts');

var customAsserts = _interopRequireWildcard(_asserts);

var _debugnyan = require('debugnyan');

var _debugnyan2 = _interopRequireDefault(_debugnyan);

var _validator = require('validator.js-asserts');

var _validator2 = _interopRequireDefault(_validator);

var _lodash = require('lodash');

var _errors = require('./errors');

var _validator3 = require('validator.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Instances.
 */

/**
 * Module dependencies.
 */

const asserts = (0, _lodash.merge)({}, _validator2.default, customAsserts);
const logger = (0, _debugnyan2.default)('authy:validator');
const validator = new _validator3.Validator();

/**
 * Export `Assert`.
 */

const Assert = exports.Assert = _validator3.Assert.extend(asserts);

/**
 * Assert.
 */

function assert(data, constraints) {
  const errors = validator.validate(data, new _validator3.Constraint(constraints, { deepRequired: true }));

  if (errors !== true) {
    logger.error({ errors: errors }, 'Assertion failed');

    throw new _errors.AssertionFailedError({ properties: { data: data, errors: errors } });
  }
}

/**
 * Validate.
 */

function validate(data, constraints) {
  const errors = validator.validate(data, new _validator3.Constraint(constraints, { deepRequired: true }));

  if (errors !== true) {
    logger.warn({ errors: errors }, 'Validation failed');

    throw new _errors.ValidationFailedError({ properties: { data: data, errors: errors } });
  }
}