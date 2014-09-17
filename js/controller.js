var bookShareCtrls = angular.module('bookShareCtrls',[]);

bookShareCtrls.controller('HotCtrl',['$scope',
	function HotCtrl ($scope) {
		$scope.books = [
			{
				'name':'白雪公主杀人事件',
				'img':'http://img3.douban.com/view/movie_poster_cover/lpst/public/p2176900061.jpg',
				'doubanUrl':'http://movie.douban.com/subject/24858414/?tag=%E7%83%AD%E9%97%A8&from=gaia',
				'url':'#/detail:100000'
			},
			{
				'name':'白雪公主杀人事件',
				'img':'http://img3.douban.com/view/movie_poster_cover/lpst/public/p2176900061.jpg',
				'doubanUrl':'http://movie.douban.com/subject/24858414/?tag=%E7%83%AD%E9%97%A8&from=gaia',
				'url':'#/detail:100000'
			},
			{
				'name':'白雪公主杀人事件',
				'img':'http://img3.douban.com/view/movie_poster_cover/lpst/public/p2176900061.jpg',
				'doubanUrl':'http://movie.douban.com/subject/24858414/?tag=%E7%83%AD%E9%97%A8&from=gaia',
				'url':'#/detail:100000'
			}
		]
	}

]);

bookShareCtrls.controller('AddBookCtrl',['$scope',
	function AddBookCtrl ($scope) {
		
	}

]);

bookShareCtrls.controller('DetailCtrl',['$scope',
	function DetailCtrl ($scope) {
		$scope.book = {
			'name':'白雪公主杀人事件',
			'img':'http://img3.douban.com/view/movie_poster_cover/lpst/public/p2176900061.jpg',
			'doubanUrl':'http://movie.douban.com/subject/24858414/?tag=%E7%83%AD%E9%97%A8&from=gaia',
			'author':'白烟',
			'uploader':'Maple',
			'hot':124
		}
	}

]);