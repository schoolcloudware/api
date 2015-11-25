/**
* Staff.js
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
    schools:{
      collection:'school',
      via:'staff_members'
    },
    permissions:{
      type:'text'
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
      via:'staff'
    },
    lead_classes:{
      collection:'class',
      via:'lead_teacher'
    },
    birth_date:{
      type:'date'
    },
    birth_country:{
      type:'string'
    }
  }
};

