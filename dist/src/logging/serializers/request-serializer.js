'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = serialize;

var _lodash = require('lodash');

/**
 * Instances.
 */

const replacement = /(api_key=)([^&])*/;

/**
 * Export `serialize`.
 */

/**
 * Module dependencies.
 */

function serialize(request) {
  let key = 'uri';

  if (request.body && (0, _lodash.isString)(request.body)) {
    key = 'body';
  }

  return (0, _lodash.defaults)({
    [key]: request[key].replace(replacement, '$1*****')
  }, request);
}