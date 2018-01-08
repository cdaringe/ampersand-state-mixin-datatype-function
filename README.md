# ampersand-state-mixin-datatype-function

[![Greenkeeper badge](https://badges.greenkeeper.io/cdaringe/ampersand-state-mixin-datatype-function.svg)](https://greenkeeper.io/)
Adds the function datatype to ampersand-state

You may want to specify something like the following in your ampersand-states or ampersand-models:

```js
var State = require('ampersand-state');
var MyState = State.extend({
    props: {
        beep: {
            type: 'function',
            required: true
        }
    }
});
```

# usage
Using the example from above
```js
var State = require('ampersand-state');
var funcMixin = require('ampersand-state-mixin-datatype-function');
var StateF = State.extend(funcMixin, {
    props: {
        beep: {
            type: 'function',
            required: true
        }
    }
});

var robot = new StateF({
    beep: function() {
        console.log('bop');
    }
});

robot.beep(); //=> 'bop'
```
