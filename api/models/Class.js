/**
* Class.js
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
    current_cycle:{
      model:'cycle',
      index:true
    },
    students:{
      collection:'student',
      via:'class'
    },
    level:{
      model:'level'
    },
    lead_teacher:{
      model:'staff',
      via:'lead_classes'
    },
    main_class_room:{
      model:'classRoom'
    },
    school:{
      model:'school',
      via:'classes'
    },
    deleted:{
      type:'boolean',
      defaultsTo:false
    },
    subjects:{
      collection:'subject',
      via:'classes'
    }

  }
};

