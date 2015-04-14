'use strict';

module.exports = {
    dataTypes: {
        'function': {
            set: function(fn) {
                if (typeof fn === 'function') {
                    return {
                        val: fn,
                        type: 'function'
                    };
                }
               throw new TypeError('expected fn to be of type function, received ' + typeof fn);
            },
            compare: function(currFn, newFn, attr) {
                return currFn === newFn;
            }
        }
    }
};
