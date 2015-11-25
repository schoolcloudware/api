/**
* Credential.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/
var bcrypt = require('bcrypt');
var SALT_WORK_FACTOR = 11;
module.exports = {

  attributes: {
    type:{
      type:'string',
      enum:['school_cloudware'],
      defaultsTo:'school_cloudware'
    },
    username:{
      type:'string',
      required:true,
      unique:true
    },
    secret:{
      type:'string',
      required:true
    },
    user:{
      model:'user',
      index:true,
      via:'credentials'
    },
    deleted:{
      type:'boolean',
      defaultsTo:false
    }
  },
  beforeCreate: function(object, callback) {

    // Lower case the username
    if(object.username) object.username = object.username.toLowerCase();

    // If new password - hash it
    if(object.secret) {
      bcrypt.hash(object.secret, SALT_WORK_FACTOR, function(err, hash) {
        object.secret = hash;
        return callback();
      });
    } else {
      return callback();
    }

  },
  beforeUpdate: function(object, callback) {

    // Lower case the username
    if(object.username) object.username = object.username.toLowerCase();


    // If new password provided - hash it
    if(object.secret) {
      bcrypt.hash(object.secret, SALT_WORK_FACTOR, function(err, hash) {
        object.secret = hash;
        return callback();
      });
    } else {
      return callback();
    }

  }
};

