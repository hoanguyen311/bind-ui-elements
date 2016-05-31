var expect = require('chai').expect;
var bindUiElements = require('../index');
var $ = require('jquery');

describe('bind-ui-elements', function() {
    it('should return false when target has no cfg property', function() {
        var target = {
        };

        expect(bindUiElements(target)).to.be.not.ok;
    });
    it('should fail when the target has no cfg.ui and cfg.$el property', function() {
        var target = {
            cfg: {}
        };

        expect(bindUiElements(target)).to.be.not.ok;
    });

    it('should fail when the target\'s cfg.ui is not a object ', function() {
        var target = {
            cfg: {
                ui: 'test',
                $el: $(document)
            }
        };

        expect(bindUiElements(target)).to.be.not.ok;
    });

    it('should return the target when that target is valid', function() {
        var target = {
            cfg: {
                ui: {},
                $el: $(document)
            }
        };
        expect(bindUiElements(target)).to.equal(target);
    });

    it('bind elements correct', function() {
        var target = {
            cfg: {
                ui: {
                    '$child': '.js-child',
                    '$child2': '.js-child-2'
                },
                $el: $(document)
            }
        };
        bindUiElements(target);
        expect(target).to.contain.all.keys([ '$child', '$child2' ]);

    });
});
