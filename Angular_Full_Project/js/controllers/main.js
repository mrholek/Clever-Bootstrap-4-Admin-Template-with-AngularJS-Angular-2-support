//main.js
angular
.module('app')
.controller('toastrWelcome', toastrWelcome)
.controller('mainChartCtrl', mainChartCtrl)
.controller('DoughnutCtrl', DoughnutCtrl)
.controller('gaugeCtrl', gaugeCtrl)
.controller('cardChartCtrl11', cardChartCtrl11)
.controller('dateRangeCtrl', dateRangeCtrl)
.controller('sparklineChartCtrl', sparklineChartCtrl)
.controller('barChartCtrl', barChartCtrl)
.controller('horizontalBarsCtrl', horizontalBarsCtrl)
.controller('horizontalBarsType2Ctrl', horizontalBarsType2Ctrl)
.controller('usersTableCtrl', usersTableCtrl)


toastrWelcome.$inject = ['$scope', 'toastr'];
function toastrWelcome($scope, toastr) {
  toastr.info('Bootstrap 4 Admin Template', 'Welcome to Clever Admin', {
    closeButton: true,
    progressBar: true,
  });
}

//convert Hex to RGBA
function convertHex(hex,opacity){
  hex = hex.replace('#','');
  r = parseInt(hex.substring(0,2), 16);
  g = parseInt(hex.substring(2,4), 16);
  b = parseInt(hex.substring(4,6), 16);

  result = 'rgba('+r+','+g+','+b+','+opacity/100+')';
  return result;
}

mainChartCtrl.$inject = ['$scope'];
function mainChartCtrl($scope){

  function random(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
  }

  var data1 = [0,0,1,2,21,9,12,10,31,13,65,10,12,6,4,3,0];
  var data2 = [0,0,1,2,7,5,6,8,24,7,12,5,6,3,2,2,0];
  var data3 = [0,0,1,0,2,0,1,0,2,3,0,2,3,2,1,0,0];

  $scope.labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday'];
  $scope.series = ['Current', 'Previous', 'BEP'];
  $scope.data = [ data1, data2, data3];
  $scope.colors = [{
    backgroundColor: convertHex(brandInfo,10),
    borderColor: brandInfo,
    pointHoverBackgroundColor: '#fff'

  }, {
    backgroundColor: 'transparent',
    borderColor: brandSuccess,
    pointHoverBackgroundColor: '#fff'
  },{
    backgroundColor: 'transparent',
    borderColor: brandDanger,
    pointHoverBackgroundColor: '#fff',
    borderWidth: 1,
    borderDash: [8, 5]
  }];
  $scope.options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        gridLines: {
          drawOnChartArea: false,
        },
        ticks: {
          callback: function(value) {
            return value.charAt(0);
          }
        }
      }],
      yAxes: [{
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 5,
        }
      }]
    },
    elements: {
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4,
        hoverBorderWidth: 3,
      }
    },
  }
}

DoughnutCtrl.$inject = ['$scope'];
function DoughnutCtrl($scope) {
  $scope.labels = ['Chrome', 'Firefox', 'Safari', 'Edge', 'Other'];
  $scope.data = [35, 20, 15, 10, 20];
  $scope.colors = [brandSuccess, brandPrimary, brandInfo, brandDanger, brandWarning];
  $scope.options = {
    responsive: true,
    maintainAspectRatio: false
  }
}

gaugeCtrl.$inject = ['$scope', '$timeout'];
function gaugeCtrl($scope, $timeout) {

  function random(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
  }

  $scope.gauge1 = {
    animationSpeed: 32,
    value: random(0,3000),
    maxValue: 3000,
    options: {
      lines: 12,
      angle: 0.15,
      lineWidth: 0.44,
      pointer: {
        length: 0.8,
        strokeWidth: 0.035,
        color: grayDark
      },
      limitMax: 'false',
      colorStart: brandInfo,
      colorStop: brandInfo,
      strokeColor: grayLighter,
      generateGradient: true,
      responsive: true,
    }
  }

  $scope.gauge2 = {
    animationSpeed: 32,
    value: random(0,3000),
    maxValue: 3000,
    options: {
      lines: 12,
      angle: 0.15,
      lineWidth: 0.44,
      pointer: {
        length: 0.8,
        strokeWidth: 0.035,
        color: grayDark
      },
      limitMax: 'false',
      colorStart: brandWarning,
      colorStop: brandWarning,
      strokeColor: grayLighter,
      generateGradient: true,
      responsive: true
    }
  }
}


cardChartCtrl11.$inject = ['$scope'];
function cardChartCtrl11($scope) {

  $scope.labels = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec','Jan','Feb','Mar','Apr','May'];
  $scope.data = [
    [4, 18, 9, 17, 34, 22, 11, 3, 15, 12, 18, 9, 9, 17, 34, 22, 11]
  ];

  $scope.colors = [{
    backgroundColor: 'transparent',
    borderColor: 'rgba(255,255,255,.55)',
  }];
  $scope.options = {
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display:false,
        points:false,
      }],
      yAxes: [{
        display:false,
      }]
    },
    elements: { point: { radius: 0 } }
  };

  $scope.colors2 = [{
    backgroundColor: 'rgba(0,0,0,.2)',
    borderWidth: 0
  }];

  $scope.options2 = {
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display:false,
        barPercentage: 0.6,
      }],
      yAxes: [{
        display:false,
        ticks: {
          beginAtZero: true,
        }
      }]
    },
  };



  $scope.labels3 = ['M','T','W','T','F','S','S'];
  $scope.data3 = [
    [17, 34, 22, 11, 3, 15, 12]
  ];

  $scope.colors3 = [{
    backgroundColor: grayLight,
    borderWidth: 0
  }];

  $scope.options3 = {
    responsive: false,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent',
        },
        ticks: {
          fontSize: 10,
          maxRotation: 0,
        },
        barPercentage: 0.6,
      }],
      yAxes: [{
        display:false,
        ticks: {
          beginAtZero: true,
        }
      }]
    },
  }
}


dateRangeCtrl.$inject = ['$scope'];
function dateRangeCtrl($scope) {
  $scope.date = {
    startDate: moment().subtract(5, 'days'),
    endDate: moment()
  };
  $scope.opts = {
    drops: 'down',
    opens: 'left',
    ranges: {
      'Today': [moment(), moment()],
      'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
      'Last 7 days': [moment().subtract(7, 'days'), moment()],
      'Last 30 days': [moment().subtract(30, 'days'), moment()],
      'This month': [moment().startOf('month'), moment().endOf('month')]
    }
  };

  //Watch for date changes
  $scope.$watch('date', function(newDate) {
    //console.log('New date set: ', newDate);
  }, false);

  function gd(year, month, day) {
    return new Date(year, month - 1, day).getTime();
  }
}

sparklineChartCtrl.$inject = ['$scope'];
function sparklineChartCtrl($scope) {
  $scope.labels = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
  $scope.data1 = [
    [65, 59, 84, 84, 51, 55, 40]
  ];
  $scope.data2 = [
    [1, 13, 9, 17, 34, 41, 38]
  ];
  $scope.data3 = [
    [78, 81, 80, 45, 34, 12, 40]
  ];
  $scope.data4 = [
    [35, 23, 56, 22, 97, 23, 64]
  ];
  $scope.default = [{
    backgroundColor: 'transparent',
    borderColor: '#d1d4d7',
  }];
  $scope.primary = [{
    backgroundColor: 'transparent',
    borderColor: brandPrimary,
  }];
  $scope.info = [{
    backgroundColor: 'transparent',
    borderColor: brandInfo,
  }];
  $scope.danger = [{
    backgroundColor: 'transparent',
    borderColor: brandDanger,
  }];
  $scope.warning = [{
    backgroundColor: 'transparent',
    borderColor: brandWarning,
  }];
  $scope.success = [{
    backgroundColor: 'transparent',
    borderColor: brandSuccess,
  }];
  $scope.options = {
    scales: {
      xAxes: [{
        display:false,
      }],
      yAxes: [{
        display:false,
      }]
    },
    elements: {
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4,
        hoverBorderWidth: 3,
      }
    },
  }
}

horizontalBarsCtrl.$inject = ['$scope'];
function horizontalBarsCtrl($scope) {

  $scope.data = [
    {
      day: 'Monday',    new: 34, recurring: 78
    },
    {
      day: 'Tuesday',   new: 56, recurring: 94
    },
    {
      day: 'Wednesday', new: 12, recurring: 67
    },
    {
      day: 'Thursday',  new: 43, recurring: 91
    },
    {
      day: 'Friday',    new: 22, recurring: 73
    },
    {
      day: 'Saturday',  new: 53, recurring: 82
    },
    {
      day: 'Sunday',    new: 9,  recurring: 69
    }
  ];
}

horizontalBarsType2Ctrl.$inject = ['$scope'];
function horizontalBarsType2Ctrl($scope) {

  $scope.gender = [
    {
      title: 'Male',
      icon: 'icon-user',
      value: 43
    },
    {
      title: 'Female',
      icon: 'icon-user-female',
      value: 37
    },
  ];

  $scope.source = [
    {
      title: 'Organic Search',
      icon: 'icon-globe',
      value: 191235,
      percent: 56
    },
    {
      title: 'Facebook',
      icon: 'icon-social-facebook',
      value: 51223,
      percent: 15
    },
    {
      title: 'Twitter',
      icon: 'icon-social-twitter',
      value: 37564,
      percent: 11
    },
    {
      title: 'LinkedIn',
      icon: 'icon-social-linkedin',
      value: 27319,
      percent: 8
    }
  ];
}

usersTableCtrl.$inject = ['$scope', '$timeout'];
function usersTableCtrl($scope, $timeout) {

  $scope.users = [
    {
      avatar: '1.jpg',
      status: 'active',
      name: 'Yiorgos Avraamu',
      new: true,
      registered: 'Jan 1, 2015',
      country: 'USA',
      flag: 'USA.png',
      usage: '50',
      period: 'Jun 11, 2015 - Jul 10, 2015',
      payment: 'mastercard',
      activity: '10 sec ago',
      satisfaction: '48'
    },
    {
      avatar: '2.jpg',
      status: 'busy',
      name: 'Avram Tarasios',
      new: false,
      registered: 'Jan 1, 2015',
      country: 'Brazil',
      flag: 'Brazil.png',
      usage: '10',
      period: 'Jun 11, 2015 - Jul 10, 2015',
      payment: 'visa',
      activity: '5 minutes ago',
      satisfaction: '61'
    },
    {
      avatar: '3.jpg',
      status: 'away',
      name: 'Quintin Ed',
      new: true,
      registered: 'Jan 1, 2015',
      country: 'India',
      flag: 'India.png',
      usage: '74',
      period: 'Jun 11, 2015 - Jul 10, 2015',
      payment: 'stripe',
      activity: '1 hour ago',
      satisfaction: '33'
    },
    {
      avatar: '4.jpg',
      status: 'offline',
      name: 'Enéas Kwadwo',
      new: true,
      registered: 'Jan 1, 2015',
      country: 'France',
      flag: 'France.png',
      usage: '98',
      period: 'Jun 11, 2015 - Jul 10, 2015',
      payment: 'paypal',
      activity: 'Last month',
      satisfaction: '23'
    },
    {
      avatar: '5.jpg',
      status: 'active',
      name: 'Agapetus Tadeáš',
      new: true,
      registered: 'Jan 1, 2015',
      country: 'Spain',
      flag: 'Spain.png',
      usage: '22',
      period: 'Jun 11, 2015 - Jul 10, 2015',
      payment: 'google',
      activity: 'Last week',
      satisfaction: '78'
    },
    {
      avatar: '6.jpg',
      status: 'busy',
      name: 'Friderik Dávid',
      new: true,
      registered: 'Jan 1, 2015',
      country: 'Poland',
      flag: 'Poland.png',
      usage: '43',
      period: 'Jun 11, 2015 - Jul 10, 2015',
      payment: 'amex',
      activity: 'Yesterday',
      satisfaction: '11'
    }
  ]


  function random(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
  }

  $scope.gauge = {
    animationTime: 10,
    value: random(0,100),
    maxValue: 100,
    gaugeType: 'donut',
    options: {
      lines: 12,
      // The number of lines to draw
      angle: 0.5,
      // The length of each line
      lineWidth: 0.08,
      // The line thickness
      pointer: {
        length: 0.09,
        // The radius of the inner circle
        strokeWidth: 0.0035,
        // The rotation offset
        color: '#000000' // Fill color
      },
      limitMax: 'false',
      // If true, the pointer will not go past the end of the gauge
      colorStart: brandInfo,
      // Colors
      colorStop: brandInfo,
      // just experiment with them
      strokeColor: '#d1d4d7',
      // to see which ones work best for you
      generateGradient: true,
      responsive: true
    }
  }
}

clientsTableCtrl.$inject = ['$scope', '$timeout'];
function clientsTableCtrl($scope, $timeout) {

  $scope.users = [
    {
      avatar: '1.jpg',
      status: 'active',
      name: 'Yiorgos Avraamu',
      registered: 'Jan 1, 2015',
      activity: '10 sec ago',
      transactions: 189,
      comments: 72
    },
    {
      avatar: '2.jpg',
      status: 'busy',
      name: 'Avram Tarasios',
      registered: 'Jan 1, 2015',
      activity: '5 minutes ago',
      transactions: 156,
      comments: 76
    },
    {
      avatar: '3.jpg',
      status: 'away',
      name: 'Quintin Ed',
      registered: 'Jan 1, 2015',
      activity: '1 hour ago',
      transactions: 189,
      comments: 72
    },
    {
      avatar: '4.jpg',
      status: 'offline',
      name: 'Enéas Kwadwo',
      registered: 'Jan 1, 2015',
      activity: 'Last month',
      transactions: 189,
      comments: 72
    },
    {
      avatar: '5.jpg',
      status: 'active',
      name: 'Agapetus Tadeáš',
      registered: 'Jan 1, 2015',
      activity: 'Last week',
      transactions: 189,
      comments: 72
    },
    {
      avatar: '6.jpg',
      status: 'busy',
      name: 'Friderik Dávid',
      registered: 'Jan 1, 2015',
      activity: 'Yesterday',
      transactions: 189,
      comments: 72
    }
  ]
}

function random(min,max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}

barChartCtrl.$inject = ['$scope'];
function barChartCtrl($scope) {

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
    showScale: false,
    scaleFontSize: 0,
    scaleShowGridLines: false,
    barStrokeWidth : 0,
    barBackground: 'rgba(221, 224, 229, 1)',

    // pointDot :false,
    // scaleLineColor: 'transparent',
  };

  $scope.colors = [{
    backgroundColor : brandInfo,
    borderColor : 'rgba(0,0,0,1)',
    highlightFill: '#818a91',
    pointborderColor: '#000'
  }];
}
