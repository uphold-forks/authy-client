'use strict';

var _lodash = require('lodash');

var _requestObfuscator = require('../../src/logging/request-obfuscator');

/**
 * Test `RequestObfuscator`.
 */

/**
 * Module dependencies.
 */

describe('RequestObfuscator', () => {
  describe('obfuscate()', () => {
    it('should strip credentials from query string', () => {
      const request = {
        id: '354f8341-eb27-4c91-a8f7-a30e303a0976',
        method: 'GET',
        uri: 'foo=bar&api_key=foobar'
      };

      (0, _requestObfuscator.obfuscate)(request);

      request.should.eql((0, _lodash.defaults)({ uri: 'foo=bar&api_key=*****' }, request));
    });

    it('should strip credentials from request `body`', () => {
      const request = {
        body: 'foo=bar&api_key=foobar',
        id: '354f8341-eb27-4c91-a8f7-a30e303a0976',
        method: 'GET',
        uri: 'foo=bar&api_key=foobar'
      };

      (0, _requestObfuscator.obfuscate)(request);

      request.should.eql((0, _lodash.defaults)({ body: 'foo=bar&api_key=*****' }, request));
    });
  });
});