/**
 * StaffController
 *
 * @description :: Server-side logic for managing staff
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
  create:function(req,res){

    var staff_info = req.param('staff_info');

    var validateCriteria = {
      staff_info: {
        required: true,
        type: 'object'
      }
    };
    var inputData = {
      staff_info: staff_info
    };

    ValidationService.validateUserInput(validateCriteria, inputData, function () {
      StaffService.create(staff_info,function(staff){
        return res.send({success:true,staff:staff})
      },function(error){
        return res.send(error);
      })
    },function(error){
      return res.send(error);
    });
  },
  update:function(req,res){

    var staff_info = req.param('staff_info');
    var staff_id = req.param('staff_id');

    var validateCriteria = {
      staff_info: {
        required: true,
        type: 'object'
      },
      staff_id:{
        required:true,
        type:'id'
      }
    };
    var inputData = {
      staff_info: staff_info,
      staff_id:staff_id
    };

    ValidationService.validateUserInput(validateCriteria, inputData, function () {
      StaffService.update(staff_id,staff_info,function(staff){
        return res.send({success:true,staff:staff})
      },function(error){
        return res.send(error);
      })
    },function(error){
      return res.send(error);
    });
  },
  delete:function(req,res){

    var staff_id = req.param('staff_id');

    var validateCriteria = {
      staff_id:{
        required:true,
        type:'id'
      }
    };
    var inputData = {
      staff_id:staff_id
    };

    ValidationService.validateUserInput(validateCriteria, inputData, function () {
      StaffService.update(staff_id,{deleted:true},function(staff){
        return res.send({success:true,staff:staff})
      },function(error){
        return res.send(error);
      })
    },function(error){
      return res.send(error);
    });
  },
  getById:function(req,res){
    var staff_id = req.param('staff_id');

    var validateCriteria = {
      staff_id:{
        required:true,
        type:'id'
      }
    };
    var inputData = {
      staff_id:staff_id
    };

    ValidationService.validateUserInput(validateCriteria, inputData, function () {
      StaffService.getById(staff_id,function(staff){
        return res.send({success:true,staff:staff})
      },function(error){
        return res.send(error);
      })
    },function(error){
      return res.send(error);
    });
  }
};

