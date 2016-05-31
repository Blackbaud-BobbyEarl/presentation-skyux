(function () {
    'use strict';

    function PaletteTestController(bbPalette) {
        var vm = this;
        vm.myColor = bbPalette.getColorByIndex(4, 'mono');
    }

    PaletteTestController.$inject = [
        'bbPalette'
    ];

    angular
        .module('skytutorial', ['sky'])
        .controller('PaletteTestController', PaletteTestController);
}());
