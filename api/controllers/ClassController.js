/**
 * ClassController
 *
 * @description :: Server-side logic for managing Classes
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
  create:function(req,res){

    var class_info = req.param('class_info');

    var validateCriteria = {
      class_info: {
        required: true,
        type: 'object'
      }
    };
    var inputData = {
      class_info: class_info
    };

    ValidationService.validateUserInput(validateCriteria, inputData, function () {
      ClassService.create(class_info,function(class_object){
        return res.send({success:true,class:class_object})
      },function(error){
        return res.send(error);
      })
    },function(error){
      return res.send(error);
    });
  },
  update:function(req,res){

    var class_info = req.param('class_info');
    var id = req.param('id');

    var validateCriteria = {
      class_info: {
        required: true,
        type: 'object'
      },
      id:{
        required:true,
        type:'id'
      }
    };
    var inputData = {
      class_info: class_info,
      id:id
    };

    ValidationService.validateUserInput(validateCriteria, inputData, function () {
      ClassService.update(id,class_info,function(class_object){
        return res.send({success:true,class:class_object})
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
      ClassService.update(id,{deleted:true},function(class_object){
        return res.send({success:true,class:class_object})
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
      ClassService.getById(id,function(class_object){
        return res.send({success:true,class:class_object})
      },function(error){
        return res.send(error);
      })
    },function(error){
      return res.send(error);
    });
  },
  getBySchool:function(req,res){
    var school_id = req.param('school_id');
    var validateCriteria = {
      school_id:{
        required:true,
        type:'id'
      }
    };
    var inputData = {
      school_id:school_id
    };

    ValidationService.validateUserInput(validateCriteria, inputData, function () {
      ClassService.getBySchool(school_id,function(classes){
        return res.send({success:true,classes:classes})
      },function(error){
        return res.send(error);
      })
    },function(error){
      return res.send(error);
    });
  },
  updateSubject:function(req,res){
    var id = req.param('id');
    var subject_id = req.param('subject_id');
    var action = req.param('action');
    var validateCriteria = {
      id:{
        required:true,
        type:'id'
      },
      subject_id:{
        required:true,
        type:'id'
      },
      action:{
        required:true,
        type:'string'
      }
    };
    var inputData = {
      id:id,
      subject_id:subject_id,
      action:action
    };

    ValidationService.validateUserInput(validateCriteria, inputData, function () {
      ClassService.updateSubject(id,subject_id,action,function(){
        return res.send({success:true})
      },function(error){
        return res.send(error);
      })
    },function(error){
      return res.send(error);
    });
  }
};

