//Default colors
var brandPrimary =  '#20a8d8';
var brandSuccess =  '#79c447';
var brandInfo =     '#67c2ef';
var brandWarning =  '#fabb3d';
var brandDanger =   '#ff5454';

var grayDark =      '#384042';
var gray =          '#9faecb';
var grayLight =     '#c0cadd';
var grayLighter =   '#e1e6ef';
var grayLightest =  '#f9f9fa';

angular
.module('app', [
  'ui.router',
  'oc.lazyLoad',
  'pascalprecht.translate',
  'ncy-angular-breadcrumb',
  'angular-loading-bar',
  'ngSanitize',
  'ngAnimate'
])
.config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
  cfpLoadingBarProvider.includeSpinner = false;
  cfpLoadingBarProvider.latencyThreshold = 1;
}])
.run(['$rootScope', '$state', '$stateParams', function($rootScope, $state, $stateParams) {
  $rootScope.$on('$stateChangeSuccess',function(){
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  });
  $rootScope.$state = $state;
  return $rootScope.$stateParams = $stateParams;
}]);
