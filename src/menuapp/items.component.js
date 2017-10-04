// Menu category items list handler
(function () {
    'use strict';
    
    angular.module('Data')
    .controller('CategoryItemsListController', CategoryItemsListController)
    .component('items', {
      templateUrl: 'src/menuapp/templates/items.template.html',      
      bindings: {
        items: '<',
        myTitle: '@title'
      }
    });
    
})();
    