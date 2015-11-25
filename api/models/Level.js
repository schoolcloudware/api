/**
* Level.js
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
    school:{
      model:'school',
      via:'levels'
    },
    grade:{
      type:'integer'
    },
    type:{
      type:'string',
      enum:['pre-school','basic','medium','superior']
    },
    default:{
      type:'boolean',
      defaultsTo:false
    }
  }
};

