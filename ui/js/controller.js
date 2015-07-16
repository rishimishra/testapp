grsApp.controller('ReconStatusCtrl', function($scope){
    $scope.reconStatusList = [
        {
            'company': 'Task1',
            'status': 'failed',
            'timeStamp': 'July 26, 2015 21:20'
        },
        {
            'company': 'Task2',
            'status': 'complete',
            'timeStamp': 'July 26, 2015 21:20'
        },
        {
            'company': 'Task3',
            'status': 'inProgress',
            'timeStamp': 'July 26, 2015 21:20'
        },
         {
             'company': 'Task3',
             'status': 'inProgress',
             'timeStamp': 'July 26, 2015 21:20'
         },
    ];
});

/*grsApp.controller('ReconStatusServiceCtrl', function($scope, $http){
    $http.get('recon-status/all.json').success(function(data) {
        $scope.reconStatusList = data;
    });
});*/