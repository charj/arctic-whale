var User = require(__basedir + '/src/model/users');

// CREATE
exports.create = function (req, res) {

  // create a new user
  var newUser = User({
    name: req.body.name,
    username: req.body.username,
    password: req.body.password,
    admin: false
  });

  // save the user
  newUser.save(function (err) {
    if (err) throw err;

    console.log('User created!');
  });

  res.status(200).json(newUser);
}

// READ
exports.read = function (req, res) {

  // get all the users
  User.find({}, function (err, users) {
    if (err) throw err;

    // object of all the users
    console.log(users);

    res.status(200).json(users);
  });




}

// UPDATE
exports.user = function (req, res) {
  var userName = req.body.user_name;

  if (userName == null) {
    res.status(503).json({
      "error": "Please provide your `user_name`"
    })
  }

  res.status(200).json();
}