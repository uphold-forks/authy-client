'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.obfuscate = obfuscate;

var _lodash = require('lodash');

/**
 * Instances.
 */

const replacement = /(api_key=)([^&])*/;

/**
 * Export `RequestObfuscator`.
 */

/**
 * Module dependencies.
 */

function obfuscate(request) {
  // Obfuscate the API key on `uri`.
  request.uri = request.uri.replace(replacement, '$1*****');

  // Obfuscate the API key on `body`.
  if ((0, _lodash.isString)(request.body)) {
    request.body = request.body.replace(replacement, '$1*****');
  }
}