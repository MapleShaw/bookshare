convertImgToBase64(bookObj.coverimg, function(base64Img){
		    bookObj.baseCoverImg = base64Img;
		});
//封面转为二进制
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

// angular.module('bookshare',[])
//     .derective('imgToData',function(){
//         return function(scope,element,attrs){
//             //封面转为二进制
//             function convertImgToBase64(url, callback, outputFormat){
//                 var canvas = document.createElement('CANVAS'),
//                     ctx = canvas.getContext('2d'),
//                     img = new Image;
//                 img.crossOrigin = 'Anonymous';
//                 img.onload = function(){
//                     canvas.height = img.height;
//                     canvas.width = img.width;
//                     ctx.drawImage(img,0,0);
//                     var dataURL = canvas.toDataURL(outputFormat || 'image/png');
//                     callback.call(this, dataURL);
//                     canvas = null; 
//                 };
//                 img.src = url;
//             }
//         }
//     })