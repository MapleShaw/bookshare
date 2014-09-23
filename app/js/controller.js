'use strict';


function HotCtrl ($scope) {

	$scope.books = {};
    // when landing on the page, get all todos and show them
    $http.get('/api/todos')
        .success(function (data) {
            $scope.todos = data;
            console.log(data);
        })
        .error(function (data) {
            console.log('Error: ' + data);
        });

}




function AddBookCtrl ($scope,$http) {
	$scope.addBookForm = {};
    
    $scope.registerPost = function () {
        $http.post('/addBook', $scope.addBookForm)
            .success(function (data) {
                $scope.addBookForm = {};
                $scope.successMsg = data.data;
                console.log(data);
            })
            .error(function (data) {
                console.log('Error: ' + data);
            });
    }
    

}


bookShare.controller('DetailCtrl',['$scope',
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