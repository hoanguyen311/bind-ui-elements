bind-ui-elements
================

[![NPM](https://nodei.co/npm/bind-ui-elements.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/bind-ui-elements/)

A small utility method to help bind children elements to a context. For convenience when using module pattern in jQuery

### Install
> npm install --save bind-ui-elements


##OOP
```
import bindUiElements from 'bind-ui-elements';

class Component {
    constructor($el, config) {
        this.$el = $el;
        this.cfg = Object.assign({}, Component.defaultCfg, config);
        bindUiElements(this);
        this.initalize();
    }
    initalize() {
        //$button now has been attached to component's instance
        this.$button.on('click', function() {

        });

        //$link now has been attached to component's instance
        this.$link.on('click', function() {

        });
    }
}

Component.defaultCfg = {
    ui: {
        $button: '.js-button',
        $link: '.js-link'
    }
}

export default Component;
```
## Singleton

```
var component = {
    cfg: {
        ui: {
            '$button': '.js-button',
            '$link': '.js-link'
        }
    },
    init ($el) {
        this.$el = $el;
        bindUiElements(this);

        //$button now has been attached to component's instance
        this.$button.on('click', function() {

        });

        //$link now has been attached to component's instance
        this.$link.on('click', function() {

        });
    }
};
```

### Test
> npm test
