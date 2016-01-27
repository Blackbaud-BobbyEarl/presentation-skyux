(function () {
    'use strict';

    function PaletteTestController(bbPalette, bbPaletteConfig) {
        var vm = this;
        vm.myColor = bbPalette.getColorByIndex(4, 'mono');
    }

    PaletteTestController.$inject = [
        'bbPalette',
        'bbPaletteConfig'
    ];

    angular
        .module('skytutorial', ['sky'])
        .controller('PaletteTestController2', PaletteTestController)
        .controller('PaletteTestController', ['bbPalette', function (bbPalette) {
            var vm = this;
            vm.myColor = bbPalette.getColorByIndex(5, 'mono');
        }]);
}());
