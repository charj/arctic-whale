'use strict';
let mongoose = require('mongoose');
let Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

let userSchema = new Schema({
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

// let UserModel = mongoose.model('UserModel', userSchema );

// TODO: Require schema in create method.

let User = mongoose.model('User', userSchema);

module.exports.create = function (request) {
    let user = new User(request);

    return user.save(function (error) {
        if (error) {
            if (error.name === 'MongoError' && error.code === 11000) {
                console.error('User exists already.');
                return Promise.reject({
                    "error": "User already exists."
                });
            }

            return Promise.reject({
                "error": error
            });
        }
        return Promise.resolve(user);
    });
}

module.exports.findAll = function () {
    return User.find({}, function (error, all) {
        if (error) {
            return Promise.reject(error);
        }

        return Promise.resolve(all);
    });
}

module.exports.findByUserName = function (username) {
    let find = User.findOne({"username": username});

    return find
        .then(user => {
            console.log(user);
            if (user) {
                return user;
            }
            return Promise.reject('User not found');
        })
        .catch(error => {
            return Promise.reject({'error': error});
        })
}