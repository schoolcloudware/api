/**
* Roll.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    student:{
      model:'student',
      via:'rolls'
    },
    status:{
      type:'string',
      enum:['present','absent','leave'],
      defaultsTo:'absent'
    },
    subject_net:{
      model:'subjectNet'
    },
    late:{
      type:'boolean',
      defaultsTo:false
    },
    date:{
      type:'datetime',
      defaultsTo: new Date()
    },
    teacher:{
      model:'staff'
    }
  }
};

