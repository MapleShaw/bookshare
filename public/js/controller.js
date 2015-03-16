'use strict';

bookShare.controller('HotCtrl',['$scope','$http',function($scope,$http){
    $http.get('/hot')
            .success(function (data) {
                
                console.log(data);
            })
            .error(function (data) {
                console.log('Error: ' + data);
            });
    $scope.books = {};
}]);


bookShare.controller('AddBookCtrl',['$scope','$http',function($scope,$http){
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
    
    $scope.imgToData = function(){
        alert(1)
        convertImgToBase64(bookObj.coverimg, function(base64Img){
            bookObj.baseCoverImg = base64Img;
        });
    }
}]);



function convertImgToBase64(url, callback, outputFormat){
    var canvas = document.createElement('CANVAS'),
        ctx = canvas.getContext('2d'),
        img = new Image;
    img.crossOrigin = 'Anonymous';
    img.onload = function(){
        canvas.height = img.height;
        canvas.width = img.width;
        ctx.drawImage(img,0,0);
        var dataURL = canvas.toDataURL(outputFormat || 'image/png');
        callback.call(this, dataURL);
        canvas = null; 
    };
    img.src = url;
}
