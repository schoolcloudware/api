/**
* Contact.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    given_name:{
      type:'string',
      required:true
    },
    surname:{
      type:'string',
      required:true
    },

    address:{
      type:'string'
    },
    phone:{
      type:'string'
    },
    mobile:{
      type:'string'
    },
    email:{
      type:'string'
    },
    user: {
      model: 'user',
      via: 'parent'
    },
    students:{
      collection:'student',
      via:'parents'
    },
    student:{
      model:'student',
      via:'contacts'
    },
    deleted:{
      type:'boolean',
      defaultsTo:false
    }
  }
};

