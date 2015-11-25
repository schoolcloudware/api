/**
* Pastoral.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    student:{
      model:'student',
      via:'pastoral'
    },
    type:{
      type:'string',
      enum:['discipline','merit','general','medical','academic']
    },
    incident: {
      type: 'text',
      defaultsTo: ''
    },
    action: {
      type: 'text',
      defaultsTo: ''
    },
    note: {
      type: 'text',
      defaultsTo: ''
    },
    date: {
      type: 'datetime',
      required: true
    },
    watchlist: {
      type: 'boolean',
      defaultsTo: false
    },
    sensitive: {
      type: 'boolean',
      defaultsTo: false
    },
    deleted: {
      type: 'boolean',
      defaultsTo: false
    }
  }
};

