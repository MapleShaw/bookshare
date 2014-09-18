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
	}).when('/addBook',{
		templateUrl: 'tpls/addBook.html',
		controller: 'AddBookCtrl'
	}).when('/detail:bookId',{
		templateUrl: 'tpls/detail.html',
		controller: 'DetailCtrl'
	}).otherwise({
		redirectTo: '/hot'
	})
});