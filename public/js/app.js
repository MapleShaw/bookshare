// 这里是angular的路由
// connect views to controllers

var bookShare = angular.module('bookShare',[
	'ngRoute'
	]);



bookShare.config(['$routeProvider','$locationProvider',
	function($routeProvider,$locationProvider) {
		$routeProvider.when('/hot',{
			templateUrl: 'views/hot.jade',
			controller: 'HotCtrl'
		}).when('/classify',{
			templateUrl: 'tpls/classify.jade',
			controller: 'ClassifyCtrl'
		}).when('/addBook',{
			templateUrl: 'views/addBook.jade',
			controller: 'AddBookCtrl'
		}).when('/detail:bookId',{
			templateUrl: 'tpls/detail.jade',
			controller: 'DetailCtrl'
		}).otherwise({
			redirectTo: '/hot'
		});
		$locationProvider.html5Mode({
			enabled: true,
			requireBase: false
		});//去掉url的#
}]);

