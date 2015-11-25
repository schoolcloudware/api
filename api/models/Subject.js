/**
* Subject.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    name:{
      type:'string',
      required:true
    },
    type:{
      type:'string',
      defaultsTo:'maths'
    },
    school:{
      model:'school',
      via:'subjects'
    },
    deleted:{
      type:'boolean',
      defaultsTo:false
    },
    classes:{
      collection:'class',
      via:'subjects'
    }
  }
};

