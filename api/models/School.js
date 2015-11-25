/**
* School.js
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
    code:{
      type:'string',
      required:true
    },
    staff_members:{
      collection:'staff',
      via:'schools'
    },
    admin:{
      model:'staff',
      index:true
    },
    latitude:{
      type:'string'
    },
    longitude:{
      type:'string'
    },
    country:{
      type:'string'
    },
    city:{
      type:'string'
    },
    classes:{
      collection:'class',
      via:'school'
    },
    levels:{
      collection:'level',
      via:'school'
    },
    subject_types:{
      collection:'subjectType',
      via:'school'
    },
    class_rooms:{
      collection:'classRoom',
      via:'school'
    },
    subjects:{
      collection:'subject',
      via:'school'
    },
    deleted:{
      type:'boolean',
      defaultsTo:false
    },
    plan:{
      type:'string',
      enum:['single_teacher','premium_teacher','school_admin','school_admin_premium']
    }
  }
};

