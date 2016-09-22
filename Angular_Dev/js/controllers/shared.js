//shared.js
angular
    .module('app')
    .controller('chartsCtrl', chartsCtrl);

function random(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

chartsCtrl.$inject = ['$scope'];
function chartsCtrl($scope) {

    var elements = 16;
    var labels = [];
    var data = [];
    var data1 = [];
    var data2 = [];

    for (var i = 0; i <= elements; i++) {
        labels.push('1');
        data.push(random(40,100));
        data1.push(random(20,100));
        data2.push(random(60,100));
    }

    $scope.labels = labels;

    $scope.data = [data];
    $scope.data1 = [data1];
    $scope.data2 = [data2];

    $scope.options = {
        responsive: true,
        scales: {
            xAxes: [{
                display:false,
                points:false,
            }],
            yAxes: [{
                display:false,
                ticks: {
                    max: 102
                }
            }]
        },
        elements: { point: { radius: 0 } }
    };

    $scope.colors = [{
        backgroundColor : 'transparent',
		borderColor: brandInfo,
    }];

    $scope.colors2 = [{
        backgroundColor : 'transparent',
		borderColor : brandWarning,
    }];

    $scope.colors3 = [{
        backgroundColor : 'transparent',
		borderColor : brandSuccess,
    }];
}
