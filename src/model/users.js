// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var userSchema = new Schema({
  name: String,
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  admin: Boolean,
  location: String,
  meta: {
    age: Number,
    website: String
  },
  created_at: Date,
  updated_at: Date
});

// the schema is useless so far
// we need to create a model using it
var User = mongoose.model('User', userSchema);


module.exports.create = function (userObject) {
  // create a new user
  var newUser = new User(userObject);

  // TODO Handle creating the same user twice

  // save the user
  newUser.save(function (err) {
    if (err) throw err;
  });

  return newUser;
}

module.exports.findAll = function() {
  return User.find({},function (err,all) {
    console.log(all);
    if(err) return Promise.reject(err);

    return Promise.resolve(all);
  });

}

module.exports.findByUserName = function(username) {
  return User.findOne({"username":username}).exec(function(err, cb) {

    console.log(cb);
    // if(err){
    //   return Promise.reject(err);
    // }
    if(cb == null){
      console.log('im in null');
      return Promise.reject('user not found');
    }

    // return Promise.resolve(cb);
  });

}