var UserModel = require(__basedir + '/src/model/users');

// CREATE
exports.create = function (req, res) {
  var newUser = UserModel.create(req.body);
  res.status(200).json(newUser);
}

// READ
exports.read = function (req, res) {

  // get all the users
  var users = UserModel.findAll();

  users
    .then(function (params) {
      res.status(200).json(params);
    })
    .catch(function (err) {
      res.status(400).json(err);
    })

};

// Get User by username
exports.getUser = function (req, res) {
  // get a specific user
  var user = UserModel.findByUserName(req.params.username);

  // if (user.length == 0) {
  //   return res.status(400).json({"error":"This user could not be found"});
  // } 

  user
    .then(function (params) {
      res.status(200).json(params);
    })
    .catch(function (err) {
      res.status(400).json();
    })

 
}