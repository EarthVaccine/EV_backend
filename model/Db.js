const mongoose = require('mongoose');
const uuid = require('node-uuid');
const autoIncrement = require('mongoose-auto-increment');
const Schema = mongoose.Schema;

var userSchema = new Schema({
	id : {
		type: String, 
		default: uuid.v1,
		unique : true
	}, cause_active : {
		type : Array
	}
});

autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin, {
    model:'users',
    field: 'uid', // auto-increment할 field
    startAt: 0, // 0에서 부터
    increment: 1 // 1씩 증가
});

module.exports = mongoose.model('users', userSchema);