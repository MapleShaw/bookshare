var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bookSchema = new Schema({
	bookname : String,
	author:String,
	doubanurl:String,
	coverimg:String,
	meta:{
		creatAt:{
			type: Date, 
			default: Date.now
		},
		updateAt:{
			type: Date, 
			default: Date.now
		}
	}
});

bookSchema.pre('save',function(next) {
	if(this.isNew){
		this.meta.creatAt = this.meta.updateAt = Date.now();
	}else{
		this.meta.updateAt = Date.now();
	}
	next();
});

bookSchema.statics = {
	fetch: function(cb){
		return this
			.find({})
			.sort('meta.updateAt')
			.exec(cb);
	},
	findById: function(id,cb){
		return this
			.findOne({_id:id})
			.exec(cb);
	}
}

module.exports = bookSchema;