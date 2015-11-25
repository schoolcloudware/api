/**
* Student.js
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
    parents:{
      collection:'contact',
      via:'students'
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
    user:{
      model:'user',
      via:'student',
      index:true
    },
    school:{
      model:'school',
      index:true
    },
    birth_date:{
      type:'date'
    },
    deleted:{
      type:'boolean',
      defaultsTo:false
    },
    "class":{
      model:'class',
      via:'students',
      index:true
    },
    rolls:{
      collection:'roll',
      via:'student'
    }
  }
};

