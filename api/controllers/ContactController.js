/**
 * ContactController
 *
 * @description :: Server-side logic for managing contacts
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
  create:function(req,res){

    var contact_info = req.param('contact_info');

    var validateCriteria = {
      contact_info: {
        required: true,
        type: 'object'
      }
    };
    var inputData = {
      contact_info: contact_info
    };

    ValidationService.validateUserInput(validateCriteria, inputData, function () {
      ContactService.create(contact_info,function(contact){
        return res.send({success:true,contact:contact})
      },function(error){
        return res.send(error);
      })
    },function(error){
      return res.send(error);
    });
  },
  update:function(req,res){

    var contact_info = req.param('contact_info');
    var id = req.param('id');

    var validateCriteria = {
      contact_info: {
        required: true,
        type: 'object'
      },
      id:{
        required:true,
        type:'id'
      }
    };
    var inputData = {
      contact_info: contact_info,
      id:id
    };

    ValidationService.validateUserInput(validateCriteria, inputData, function () {
      ContactService.update(id,contact_info,function(contact){
        return res.send({success:true,contact:contact})
      },function(error){
        return res.send(error);
      })
    },function(error){
      return res.send(error);
    });
  },
  delete:function(req,res){

    var id = req.param('id');

    var validateCriteria = {
      id:{
        required:true,
        type:'id'
      }
    };
    var inputData = {
      id:id
    };

    ValidationService.validateUserInput(validateCriteria, inputData, function () {
      ContactService.update(id,{deleted:true},function(contact){
        return res.send({success:true,contact:contact})
      },function(error){
        return res.send(error);
      })
    },function(error){
      return res.send(error);
    });
  },
  removeParentConnection:function(req,res){
    var id = req.param('id');
    var studentId = req.param('studentId');
    var validateCriteria = {
      id:{
        required:true,
        type:'id'
      },
      studentId:{
        required:true,
        type:'id'
      }
    };
    var inputData = {
      id:id,
      studentId:studentId
    };

    ValidationService.validateUserInput(validateCriteria, inputData, function () {
      ContactService.removeParentConnection(id,studentId,function(contact){
        return res.send({success:true,contact:contact})
      },function(error){
        return res.send(error);
      })
    },function(error){
      return res.send(error);
    });
  },
  getById:function(req,res){
    var id = req.param('id');

    var validateCriteria = {
      id:{
        required:true,
        type:'id'
      }
    };
    var inputData = {
      id:id
    };

    ValidationService.validateUserInput(validateCriteria, inputData, function () {
      ContactService.getById(id,function(contact){
        return res.send({success:true,contact:contact})
      },function(error){
        return res.send(error);
      })
    },function(error){
      return res.send(error);
    });
  },
  getByClass:function(req,res){
    var class_id = req.param('class_id');

    var validateCriteria = {
      class_id:{
        required:true,
        type:'id'
      }
    };
    var inputData = {
      class_id:class_id
    };

    ValidationService.validateUserInput(validateCriteria, inputData, function () {
      ContactService.getByClass(class_id,function(contacts){
        return res.send({success:true,contacts:contacts})
      },function(error){
        return res.send(error);
      })
    },function(error){
      return res.send(error);
    });
  }
};

