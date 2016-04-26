'use strict';

var _requestSerializer = require('../../../src/logging/serializers/request-serializer');

var _requestSerializer2 = _interopRequireDefault(_requestSerializer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Test `RequestSerializer`.
 */

describe('RequestSerializer', () => {
  describe('serialize()', () => {
    it('should strip credentials from query string', () => {
      (0, _requestSerializer2.default)({ uri: 'foo.bar?api_key=qux' }).should.eql({ uri: 'foo.bar?api_key=*****' });
    });

    it('should strip credentials from url-encoded body', () => {
      (0, _requestSerializer2.default)({ body: 'foo=bar&api_key=qux' }).should.eql({ body: 'foo=bar&api_key=*****' });
    });
  });
});
/**
 * Module dependencies.
 */