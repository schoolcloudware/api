/**
 * RollController
 *
 * @description :: Server-side logic for managing rolls
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
  create:function(req,res){

    var roll_info = req.param('roll_info');

    var validateCriteria = {
      roll_info: {
        required: true,
        type: 'object'
      }
    };
    var inputData = {
      roll_info: roll_info
    };

    ValidationService.validateUserInput(validateCriteria, inputData, function () {
      RollService.create(roll_info,function(roll){
        return res.send({success:true,roll:roll})
      },function(error){
        return res.send(error);
      })
    },function(error){
      return res.send(error);
    });
  },
  update:function(req,res){

    var roll_info = req.param('roll_info');
    var id = req.param('id');

    var validateCriteria = {
      roll_info: {
        required: true,
        type: 'object'
      },
      id:{
        required:true,
        type:'id'
      }
    };
    var inputData = {
      roll_info: roll_info,
      id:id
    };

    ValidationService.validateUserInput(validateCriteria, inputData, function () {
      RollService.update(id,roll_info,function(roll){
        return res.send({success:true,roll:roll})
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
      RollService.update(id,{deleted:true},function(roll){
        return res.send({success:true,roll:roll})
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
      RollService.getById(id,function(roll){
        return res.send({success:true,roll:roll})
      },function(error){
        return res.send(error);
      })
    },function(error){
      return res.send(error);
    });
  }
};

