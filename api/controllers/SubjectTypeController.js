/**
 * SubjectTypeController
 *
 * @description :: Server-side logic for managing subjecttypes
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
  create:function(req,res){

    var subject_type_info = req.param('subject_type_info');

    var validateCriteria = {
      subject_type_info: {
        required: true,
        type: 'object'
      }
    };
    var inputData = {
      subject_type_info: subject_type_info
    };

    ValidationService.validateUserInput(validateCriteria, inputData, function () {
      SubjectTypeService.create(subject_type_info,function(subject_type){
        return res.send({success:true,subject_type:subject_type})
      },function(error){
        return res.send(error);
      })
    },function(error){
      return res.send(error);
    });
  },
  update:function(req,res){

    var subject_type_info = req.param('subject_type_info');
    var subject_type_id = req.param('subject_type_id');

    var validateCriteria = {
      subject_type_info: {
        required: true,
        type: 'object'
      },
      subject_type_id:{
        required:true,
        type:'id'
      }
    };
    var inputData = {
      subject_type_info: subject_type_info,
      subject_type_id:subject_type_id
    };

    ValidationService.validateUserInput(validateCriteria, inputData, function () {
      SubjectTypeService.update(subject_type_id,subject_type_info,function(subject_type){
        return res.send({success:true,subject_type:subject_type})
      },function(error){
        return res.send(error);
      })
    },function(error){
      return res.send(error);
    });
  },
  delete:function(req,res){

    var subject_type_id = req.param('subject_type_id');

    var validateCriteria = {
      subject_type_id:{
        required:true,
        type:'id'
      }
    };
    var inputData = {
      subject_type_id:subject_type_id
    };

    ValidationService.validateUserInput(validateCriteria, inputData, function () {
      SubjectTypeService.update(subject_type_id,{deleted:true},function(subject_type){
        return res.send({success:true,subject_type:subject_type})
      },function(error){
        return res.send(error);
      })
    },function(error){
      return res.send(error);
    });
  },
  getById:function(req,res){
    var subject_type_id = req.param('subject_type_id');

    var validateCriteria = {
      subject_type_id:{
        required:true,
        type:'id'
      }
    };
    var inputData = {
      subject_type_id:subject_type_id
    };

    ValidationService.validateUserInput(validateCriteria, inputData, function () {
      SubjectTypeService.getById(subject_type_id,function(subject_type){
        return res.send({success:true,subject_type:subject_type})
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
      SubjectTypeService.getBySchool(school_id,function(subject_types){
        return res.send({success:true,subject_types:subject_types})
      },function(error){
        return res.send(error);
      })
    },function(error){
      return res.send(error);
    });
  }
};

