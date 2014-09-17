var bookShare = angular.module('bookShare',[
	'ngRoute','bookShareCtrls'
	]);

bookShare.config(function($routeProvider) {
	$routeProvider.when('/hot',{
		templateUrl: 'tpls/hot.html',
		controller: 'HotCtrl'
	}).when('/classify',{
		templateUrl: 'tpls/classify.html',
		controller: 'ClassifyCtrl'
	}).otherwise({
		redirectTo: '/hot'
	})
});