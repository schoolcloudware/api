/**
 * CycleController
 *
 * @description :: Server-side logic for managing cycles
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
  create:function(req,res){

    var cycle_info = req.param('cycle_info');

    var validateCriteria = {
      cycle_info: {
        required: true,
        type: 'object'
      }
    };
    var inputData = {
      cycle_info: cycle_info
    };

    ValidationService.validateUserInput(validateCriteria, inputData, function () {
      CycleService.create(cycle_info,function(cycle){
        return res.send({success:true,cycle:cycle})
      },function(error){
        return res.send(error);
      })
    },function(error){
      return res.send(error);
    });
  },
  update:function(req,res){

    var cycle_info = req.param('cycle_info');
    var id = req.param('id');

    var validateCriteria = {
      cycle_info: {
        required: true,
        type: 'object'
      },
      id:{
        required:true,
        type:'id'
      }
    };
    var inputData = {
      cycle_info: cycle_info,
      id:id
    };

    ValidationService.validateUserInput(validateCriteria, inputData, function () {
      CycleService.update(id,cycle_info,function(cycle){
        return res.send({success:true,cycle:cycle})
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
      CycleService.update(id,{deleted:true},function(cycle){
        return res.send({success:true,cycle:cycle})
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
      CycleService.getById(id,function(cycle){
        return res.send({success:true,cycle:cycle})
      },function(error){
        return res.send(error);
      })
    },function(error){
      return res.send(error);
    });
  }
};

