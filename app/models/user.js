var mongoose = require('mongoose');
var db = require('./config/db');
var userDB = mongoose.creatConnection(db.url);
var Schema = mongoose.Schema;

var userSchema = new Schema({
	username: String,
	password: String,
	systemid: String
});

var userModel = userDB.model('User',userSchema);

userInfo = '';
userModel.create(userInfo,callback);