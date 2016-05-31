var $ = require('jquery');

function isNotFalsyAndIsOjbect(obj) {
    return Boolean(obj) && obj instanceof Object;
}

module.exports = function(target) {
    var uiKey = '';
    var cfg = target.cfg;

    if(!isNotFalsyAndIsOjbect(cfg)) {
        return false;
    }

    if (!isNotFalsyAndIsOjbect(cfg.ui)) {
        return false;
    }

    if (!isNotFalsyAndIsOjbect(cfg.$el)) {
        return false;
    }

    for (uiKey in cfg.ui) {
        if (cfg.ui.hasOwnProperty(uiKey)) {
            target[uiKey] = $(cfg.ui[uiKey], target.$el);
        }
    }

    return target;
};
