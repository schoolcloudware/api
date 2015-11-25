/**
 * QualificationController
 *
 * @description :: Server-side logic for managing qualifications
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
  create:function(req,res){

    var qualification_info = req.param('qualification_info');

    var validateCriteria = {
      qualification_info: {
        required: true,
        type: 'object'
      }
    };
    var inputData = {
      qualification_info: qualification_info
    };

    ValidationService.validateUserInput(validateCriteria, inputData, function () {
      QualificationService.create(qualification_info,function(qualification){
        return res.send({success:true,qualification:qualification})
      },function(error){
        return res.send(error);
      })
    },function(error){
      return res.send(error);
    });
  },
  update:function(req,res){

    var qualification_info = req.param('qualification_info');
    var id = req.param('id');

    var validateCriteria = {
      qualification_info: {
        required: true,
        type: 'object'
      },
      id:{
        required:true,
        type:'id'
      }
    };
    var inputData = {
      qualification_info: qualification_info,
      id:id
    };

    ValidationService.validateUserInput(validateCriteria, inputData, function () {
      QualificationService.update(id,qualification_info,function(qualification){
        return res.send({success:true,qualification:qualification})
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
      QualificationService.update(id,{deleted:true},function(qualification){
        return res.send({success:true,qualification:qualification})
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
      QualificationService.getById(id,function(qualification){
        return res.send({success:true,qualification:qualification})
      },function(error){
        return res.send(error);
      })
    },function(error){
      return res.send(error);
    });
  },

};

