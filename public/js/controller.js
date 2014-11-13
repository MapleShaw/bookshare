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
