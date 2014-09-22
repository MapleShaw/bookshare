var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var _ = require('underscore');
var bookShare = require('../routes/book.js');
var Book = mongoose.model('Book',bookShare);

/* GET home page. */
router.get('/', function(req, res) {
  Book.fetch(function(err,books) {
  	if(err){
  		console.log(err);
  	}

  	res.render('index',{
  		title:'BookShare',
  		books:books
  	});
  })
});


/* GET detail page. */
router.get('/detail/:id', function(req, res) {
	var id = req.params.id;

    Book.findById(id,function(err,book){
	  	res.render('detail',{
	  		title:'BookShare' + book.bookname,
	  		book:book
	  	});
  	});
});

/* GET update page. */
router.get('/update/:id', function(req, res) {
	var id = req.params.id;

    if(id){
    	Book.findById(id,function(err,book){
		  	res.render('detail',{
		  		title:'BookShare 更新',
		  		book:book
		  	});
	  	});
    }
});

/* GET admin page. */
router.get('/book',function(req,res){
	res.render('addBook',{
		title:'BookShare 录入',
		book:{
			bookname : '',
			author: '',
			doubanurl: '',
			coverimg: ''
		}
	});
});


/* GET add page. */
router.post('/addBook', function(req, res) {
	var id = req.params.id;
	var bookObj = req.body; //req.body.book这里的结构有点奇怪
	var _book;

    if(id!==undefined){//不能加冒号
    	Book.findById(id,function(err,book){
	  		if(err){
	  			console.log(err);
	  		}

	  		_book = _.extend(book,bookObj);
	  		_book.save(function(err,book){
	  			if(err){
		  			console.log(err);
		  		}

		  		res.redirect('/detail/'+book._id);
	  		});
	  		
  		});
    }else{
    	convertImgToBase64(bookObj.coverimg, function(base64Img){
		    bookObj.baseCoverImg = base64Img;
		});

    	_book = new Book({
    		bookname : bookObj.bookname,
			author:bookObj.author,
			doubanurl:bookObj.doubanurl,
			coverimg:bookObj.baseCoverImg
    	});

    	_book.save(function(err,book){
  			if(err){
	  			console.log(err);
	  		}

	  		res.redirect('/detail/'+book._id);
  		});
    }
});

/* GET list page. */
router.get('/list', function(req, res) {
	Book.fetch(function(err,books) {
	  	if(err){
	  		console.log(err);
	  	}

	  	res.render('list',{
	  		title:'BookShare 书单',
	  		books:books
	  	});
	});
});


module.exports = router;

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

