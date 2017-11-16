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
    .catch(function (error) {
      response.status(400).json(error);
    })
};

// Updating an existing user
exports.update = function (request, response) {
  let user = UserModel.findOne({username:request.params.username});

  user
  .then(updatableUser => {
    updatableUser.set(request.body);
    updatableUser.save();
    response.status(200).json(updatableUser);
  })
  .catch(error => {
    response.status(400).json(error);
  });
}

// Get User by username
exports.getUser = function (request, response) {
  // get a specific user
  let user = UserModel.findByUserName(request.params.username);

  user
    .then(function (params) {
      response.status(200).json(params);
    })
    .catch(function (error) {
      response.status(400).json(error);
    })
}