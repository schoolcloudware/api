/**
 * SubjectController
 *
 * @description :: Server-side logic for managing subjects
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
  create:function(req,res){

    var subject_info = req.param('subject_info');

    var validateCriteria = {
      subject_info: {
        required: true,
        type: 'object'
      }
    };
    var inputData = {
      subject_info: subject_info
    };

    ValidationService.validateUserInput(validateCriteria, inputData, function () {
      SubjectService.create(subject_info,function(subject){
        return res.send({success:true,subject:subject})
      },function(error){
        return res.send(error);
      })
    },function(error){
      return res.send(error);
    });
  },
  update:function(req,res){

    var subject_info = req.param('subject_info');
    var id = req.param('id');

    var validateCriteria = {
      subject_info: {
        required: true,
        type: 'object'
      },
      id:{
        required:true,
        type:'id'
      }
    };
    var inputData = {
      subject_info: subject_info,
      id:id
    };

    ValidationService.validateUserInput(validateCriteria, inputData, function () {
      SubjectService.update(id,subject_info,function(subject){
        return res.send({success:true,subject:subject})
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
      SubjectService.update(id,{deleted:true},function(subject){
        return res.send({success:true,subject:subject})
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
      SubjectService.getById(id,function(subject){
        return res.send({success:true,subject:subject})
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
      SubjectService.getBySchool(school_id,function(subjects){
        return res.send({success:true,subjects:subjects})
      },function(error){
        return res.send(error);
      })
    },function(error){
      return res.send(error);
    });
  },
  getQualificationsByCycle:function(req,res){
    var subject_id = req.param('id');
    var cycle_id = req.param('cycle_id');
    var validateCriteria = {
      subject_id:{
        required:true,
        type:'id'
      },
      cycle_id:{
        required:true,
        type:'id'
      }
    };
    var inputData = {
      subject_id:subject_id,
      cycle_id:cycle_id
    };

    ValidationService.validateUserInput(validateCriteria, inputData, function () {
      QualificationService.getByCycleAndSubject(subject_id,cycle_id,function(qualifications){
        return res.send({success:true,qualifications:qualifications})
      },function(error){
        return res.send(error);
      })
    },function(error){
      return res.send(error);
    });
  }
};

