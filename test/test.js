var expect = require('chai').expect;
var cmjBindUiElements = require('../dist');
var $ = require('jquery');

describe('bind-ui-elements', function() {
    it('should return false when target has no cfg property', function() {
        var target = {
        };

        expect(cmjBindUiElements(target)).to.be.not.ok;
    });
    it('should fail when the target has no cfg.ui and cfg.$el property', function() {
        var target = {
            cfg: {}
        };

        expect(cmjBindUiElements(target)).to.be.not.ok;
    });

    it('should fail when the target\'s cfg.ui is not a object ', function() {
        var target = {
            cfg: {
                ui: 'test'
            },
            $el: $(document)
        };

        expect(cmjBindUiElements(target)).to.be.not.ok;
    });

    it('should return the target when that target is valid', function() {
        var target = {
            cfg: {
                ui: {}
            },
            $el: $(document)
        };
        expect(cmjBindUiElements(target)).to.equal(target);
    });

    it('bind elements correct', function() {
        var target = {
            cfg: {
                ui: {
                    '$child': '.js-child',
                    '$child2': '.js-child-2'
                }
            },
            $el: $(document)
        };

        cmjBindUiElements(target);
        expect(target).to.contain.all.keys([ '$child', '$child2' ]);
    });

    it('should work when it be included by script tag', function() {
        expect(window.bindUiElements).to.be.a.function;
    })
});
