/**
* SubjectNet.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    day:{
      type:'string',
      enum:['monday','tuesday','wednesday','thursday','friday','saturday','sunday'],
      required:true,
      defaultsTo:'monday'
    },
    start_time:{
      type:'string',
      required:true,
      defaultsTo:'07:00'
    },
    end_time:{
      type:'string',
      required:true,
      defaultsTo:'08:00'
    },
    "class":{
      model:'class'
    },
    subject:{
      model:'subject'
    },
    class_room:{
      model:'classRoom'
    },
    teacher:{
      model:'staff',
      via:'subject_nets'
    },
    deleted:{
      type:'boolean',
      defaultsTo:false
    }
  }
};

