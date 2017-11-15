'use strict'

let UserModel = require(__basedir + '/src/model/users');

// Create a new user
exports.create = function (request, response) {
  let newUser = UserModel.create(request.body);

  newUser
    .then(function(params) {
        response.status(201).json(params);
    })
    .catch(function (params) {
        response.status(409).json({'error':'This user already exists.'});
    });
}

// List all users
exports.read = function (request, response) {

  let users = UserModel.findAll();

  users
    .then(function (params) {
      response.status(200).json(params);
    })
    .catch(function (err) {
      response.status(400).json(err);
    })
};

// Get User by username
exports.getUser = function (request, response) {
  // get a specific user
  let user = UserModel.findByUserName(request.params.username);

  user
    .then(function (params) {
      response.status(200).json(params);
    })
    .catch(function (err) {
      response.status(400).json();
    })
}