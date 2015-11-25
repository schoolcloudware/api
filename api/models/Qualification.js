/**
* Qualification.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	value:{
  		type:'string'
  	},
  	student:{
  		model:'student',
      index:true
  	},
  	cycle:{
  		model:'cycle',
      index:true
  	},
    order:{
      type:'integer',
      defaultsTo:0
    },
    subject:{
      model:'subject',
      index:true
    },
    teacher:{
      model:'staff',
      index:true
    }
  }
};

