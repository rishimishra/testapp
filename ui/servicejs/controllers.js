angular.module('myApp.controllers', []);

angular.module('myApp.controllers').controller('ResourceController', function($scope, Entry) {
    var entry = Entry.get({id: $scope.id}, function(){
        console.log(entry);
    });

    var entries = Entry.query(function(){
        console.log(entries);
    });

    $scope.entry = new Entry();
    $scope.entry.data = 'Some Data';

    Entry.save($scope.entry, function() {
    });

});