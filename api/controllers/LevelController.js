/**
 * LevelController
 *
 * @description :: Server-side logic for managing levels
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
  create:function(req,res){

    var level_info = req.param('level_info');

    var validateCriteria = {
      level_info: {
        required: true,
        type: 'object'
      }
    };
    var inputData = {
      level_info: level_info
    };

    ValidationService.validateUserInput(validateCriteria, inputData, function () {
      LevelService.create(level_info,function(level){
        return res.send({success:true,level:level})
      },function(error){
        return res.send(error);
      })
    },function(error){
      return res.send(error);
    });
  },
  update:function(req,res){

    var level_info = req.param('level_info');
    var level_id = req.param('level_id');

    var validateCriteria = {
      level_info: {
        required: true,
        type: 'object'
      },
      level_id:{
        required:true,
        type:'id'
      }
    };
    var inputData = {
      level_info: level_info,
      level_id:level_id
    };

    ValidationService.validateUserInput(validateCriteria, inputData, function () {
      LevelService.update(level_id,level_info,function(level){
        return res.send({success:true,level:level})
      },function(error){
        return res.send(error);
      })
    },function(error){
      return res.send(error);
    });
  },
  delete:function(req,res){

    var level_id = req.param('level_id');

    var validateCriteria = {
      level_id:{
        required:true,
        type:'id'
      }
    };
    var inputData = {
      level_id:level_id
    };

    ValidationService.validateUserInput(validateCriteria, inputData, function () {
      LevelService.update(level_id,{deleted:true},function(level){
        return res.send({success:true,level:level})
      },function(error){
        return res.send(error);
      })
    },function(error){
      return res.send(error);
    });
  },
  getById:function(req,res){
    var level_id = req.param('level_id');

    var validateCriteria = {
      level_id:{
        required:true,
        type:'id'
      }
    };
    var inputData = {
      level_id:level_id
    };

    ValidationService.validateUserInput(validateCriteria, inputData, function () {
      LevelService.getById(level_id,function(level){
        return res.send({success:true,level:level})
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
      LevelService.getBySchool(school_id,function(levels){
        return res.send({success:true,levels:levels})
      },function(error){
        return res.send(error);
      })
    },function(error){
      return res.send(error);
    });
  }
};

