'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _debugnyan = require('debugnyan');

var _debugnyan2 = _interopRequireDefault(_debugnyan);

var _requestSerializer = require('./serializers/request-serializer');

var _requestSerializer2 = _interopRequireDefault(_requestSerializer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Module dependencies.
 */

(0, _debugnyan2.default)('authy', {
  serializers: {
    request: _requestSerializer2.default
  }
});

exports.default = _debugnyan2.default;