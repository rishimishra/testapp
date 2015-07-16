angular.module('myApp.services').factory('Entry', function($resource) {
    return $resource('/api/entries/:id');
});