/**
 * SubjectNetController
 *
 * @description :: Server-side logic for managing subjectnets
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
  create:function(req,res){

    var subject_net_info = req.param('subject_net_info');

    var validateCriteria = {
      subject_net_info: {
        required: true,
        type: 'object'
      }
    };
    var inputData = {
      subject_net_info: subject_net_info
    };

    ValidationService.validateUserInput(validateCriteria, inputData, function () {
      SubjectNetService.create(subject_net_info,function(subject_net){
        return res.send({success:true,subject_net:subject_net})
      },function(error){
        return res.send(error);
      })
    },function(error){
      return res.send(error);
    });
  },
  update:function(req,res){

    var subject_net_info = req.param('subject_net_info');
    var id = req.param('id');

    var validateCriteria = {
      subject_net_info: {
        required: true,
        type: 'object'
      },
      id:{
        required:true,
        type:'id'
      }
    };
    var inputData = {
      subject_net_info: subject_net_info,
      id:id
    };

    ValidationService.validateUserInput(validateCriteria, inputData, function () {
      SubjectNetService.update(id,subject_net_info,function(subject_net){
        return res.send({success:true,subject_net:subject_net})
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
      SubjectNetService.update(id,{deleted:true},function(subject_net){
        return res.send({success:true,subject_net:subject_net})
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
      SubjectNetService.getById(id,function(subject_net){
        return res.send({success:true,subject_net:subject_net})
      },function(error){
        return res.send(error);
      })
    },function(error){
      return res.send(error);
    });
  },
  getByClass:function(req,res){
    var classId = req.param('classId');

    var validateCriteria = {
      classId:{
        required:true,
        type:'id'
      }
    };
    var inputData = {
      classId:classId
    };

    ValidationService.validateUserInput(validateCriteria, inputData, function () {
      SubjectNetService.getByClass(classId,function(subjects_net){
        return res.send({success:true,subjects_net:subjects_net})
      },function(error){
        return res.send(error);
      })
    },function(error){
      return res.send(error);
    });
  }
};

