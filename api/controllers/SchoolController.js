/**
 * SchoolController
 *
 * @description :: Server-side logic for managing schools
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	create:function(req,res){

    var school_info = req.param('school_info');

    var validateCriteria = {
      school_info: {
        required: true,
        type: 'object'
      }
    };
    var inputData = {
      school_info: school_info
    };

    ValidationService.validateUserInput(validateCriteria, inputData, function () {
      SchoolService.create(school_info,function(school){
       return res.send({success:true,school:school})
      },function(error){
        return res.send(error);
      })
    },function(error){
      return res.send(error);
    });
  },
  update:function(req,res){

    var school_info = req.param('school_info');
    var school_id = req.param('school_id');

    var validateCriteria = {
      school_info: {
        required: true,
        type: 'object'
      },
      school_id:{
        required:true,
        type:'id'
      }
    };
    var inputData = {
      school_info: school_info,
      school_id:school_id
    };

    ValidationService.validateUserInput(validateCriteria, inputData, function () {
      SchoolService.update(school_id,school_info,function(school){
        return res.send({success:true,school:school})
      },function(error){
        return res.send(error);
      })
    },function(error){
      return res.send(error);
    });
  },
  delete:function(req,res){

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
      SchoolService.update(school_id,{deleted:true},function(school){
        return res.send({success:true,school:school})
      },function(error){
        return res.send(error);
      })
    },function(error){
      return res.send(error);
    });
  },
  getById:function(req,res){
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
      SchoolService.getById(school_id,function(school){
        return res.send({success:true,school:school})
      },function(error){
        return res.send(error);
      })
    },function(error){
      return res.send(error);
    });
  }
};

