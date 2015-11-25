/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    type:{
      type:'string',
      enum:['parent','staff','student'],
      defaultsTo:'staff'
    },
    staff:{
      model:'staff',
      index:true,
      via:'user'
    },
    student:{
      model:'student',
      index:true,
      via:'user'
    },
    parent:{
      model:'contact',
      index:true,
      via:'user'
    },
    credentials:{
      collection:'credential',
      via:'user'
    },
    deleted:{
      type:'boolean',
      defaultsTo:false
    },
    notifications: {
      collection: 'notification',
      via: 'owner'
    }
  }
};

