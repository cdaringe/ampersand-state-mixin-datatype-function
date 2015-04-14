'use strict';
var suite = require('tape-suite'); // jshint ignore:line
var State = require('ampersand-state');
var funcMixin = require('../index.js');
var StateF = State.extend(funcMixin, {
    props: {
        func: {
            type: 'function',
            required: true
        }
    }
});

// Wrap sync tests
var sync = function (cb) {
    return function (t) {
        cb(t);
        t.end();
    };
};


suite('function mixin', function (s) {
    s.beforeEach(function () {});
    s.test('should error on non-function', sync(function (t) {
        var nofunc = function() {
            var a = new StateF({
                func: 'error-out'
            });
        };

        t.throws(nofunc,null, 'errors when no func provided');

        var nofunc2 = function() {
            var a = new StateF({
                func: {function: 'redundant'}
            });
        };

        t.throws(nofunc2,null, 'errors when no func provided');
    }));

    s.test('should work with valid function', sync(function (t) {
        var counter = 0;
        var a = new StateF({
            func: function() {
                ++counter;
            }
        });
        a.func();
        t.equal(1, counter, 'function callable with asserted type');

    }));
});
