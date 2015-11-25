/**
* Cycle.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    type:{
      type:'string',
      enum:['annual','semester','trimester','quarter'],
      defaultsTo:'semester'
    },
    number:{
      type:'integer'
    },
    start_date:{
      type:'date'
    },
    end_date:{
      type:'date'
    },
    "class":{
      model:'class',
      index:true
    }
  }
};

