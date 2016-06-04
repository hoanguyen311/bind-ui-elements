function isNotFalsyAndIsOjbect(obj) {
    return Boolean(obj) && obj instanceof Object;
}

module.exports = function(target) {
    var uiKey = '';
    var cfg = target.cfg;

    if (
        !isNotFalsyAndIsOjbect(cfg) ||
        !isNotFalsyAndIsOjbect(cfg.ui) ||
        !isNotFalsyAndIsOjbect(target.$el)
    ) {
        return false;
    }

    for (uiKey in cfg.ui) {
        if (cfg.ui.hasOwnProperty(uiKey)) {
            target[uiKey] = target.$el.find(cfg.ui[uiKey]);
        }
    }

    return target;
};
