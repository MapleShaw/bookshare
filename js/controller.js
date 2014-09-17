var bookShareCtrls = angular.module('bookShareCtrls',[]);

bookShareCtrls.controller('HotCtrl',['$scope',
	function HotCtrl ($scope) {
		$scope.books = [
			{
				'name':'白雪公主杀人事件',
				'img':'http://img3.douban.com/view/movie_poster_cover/lpst/public/p2176900061.jpg',
				'doubanUrl':'http://movie.douban.com/subject/24858414/?tag=%E7%83%AD%E9%97%A8&from=gaia',
				'url':''
			},
			{
				'name':'白雪公主杀人事件',
				'img':'http://img3.douban.com/view/movie_poster_cover/lpst/public/p2176900061.jpg',
				'doubanUrl':'http://movie.douban.com/subject/24858414/?tag=%E7%83%AD%E9%97%A8&from=gaia',
				'url':''
			},
			{
				'name':'白雪公主杀人事件',
				'img':'http://img3.douban.com/view/movie_poster_cover/lpst/public/p2176900061.jpg',
				'doubanUrl':'http://movie.douban.com/subject/24858414/?tag=%E7%83%AD%E9%97%A8&from=gaia',
				'url':''
			}
		]
	}

])
