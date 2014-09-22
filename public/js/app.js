var bookShare = angular.module('bookShare',[
	'ngRoute','bookShareCtrls'
	]);

bookShare.config(function($routeProvider) {
	$routeProvider.when('/hot',{
		templateUrl: 'tpls/hot.jade',
		controller: 'HotCtrl'
	}).when('/classify',{
		templateUrl: 'tpls/classify.jade',
		controller: 'ClassifyCtrl'
	}).when('/addBook',{
		templateUrl: 'tpls/addBook.jade',
		controller: 'AddBookCtrl'
	}).when('/detail:bookId',{
		templateUrl: 'tpls/detail.jade',
		controller: 'DetailCtrl'
	}).otherwise({
		redirectTo: '/hot'
	})
});

