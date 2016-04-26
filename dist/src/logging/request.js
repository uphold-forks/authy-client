'use strict';

var _requestDebug = require('request-debug');

var _requestDebug2 = _interopRequireDefault(_requestDebug);

var _debugnyan = require('./debugnyan');

var _debugnyan2 = _interopRequireDefault(_debugnyan);

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Instances.
 */

const log = (0, _debugnyan2.default)('authy:request');
/**
 * Module dependencies.
 */

const replacement = /(api_key=)([^&])*/;

/**
 * Customize log handler.
 */

(0, _requestDebug2.default)(_request2.default, (type, data) => {
  const uri = (data.uri || '').replace(replacement, '$1*****');

  let message = `Making request #${ data.debugId } to ${ data.method } ${ uri }`;

  if (type === 'response') {
    message = `Received response for request #${ data.debugId }`;
  }

  log.debug({ [type]: data, type: type }, message);
});