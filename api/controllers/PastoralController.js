/**
 * PastoralController
 *
 * @description :: Server-side logic for managing Pastorals
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
  create:function(req,res){

    var pastoral_info = req.param('pastoral_info');

    var validateCriteria = {
      pastoral_info: {
        required: true,
        type: 'object'
      }
    };
    var inputData = {
      pastoral_info: pastoral_info
    };

    ValidationService.validateUserInput(validateCriteria, inputData, function () {
      PastoralService.create(pastoral_info,function(pastoral){
        return res.send({success:true,pastoral:pastoral})
      },function(error){
        return res.send(error);
      })
    },function(error){
      return res.send(error);
    });
  },
  update:function(req,res){

    var pastoral_info = req.param('pastoral_info');
    var id = req.param('id');

    var validateCriteria = {
      pastoral_info: {
        required: true,
        type: 'object'
      },
      id:{
        required:true,
        type:'id'
      }
    };
    var inputData = {
      pastoral_info: pastoral_info,
      id:id
    };

    ValidationService.validateUserInput(validateCriteria, inputData, function () {
      PastoralService.update(id,pastoral_info,function(pastoral){
        return res.send({success:true,pastoral:pastoral})
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
      PastoralService.update(id,{deleted:true},function(pastoral){
        return res.send({success:true,pastoral:pastoral})
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
      PastoralService.getById(id,function(pastoral){
        return res.send({success:true,pastoral:pastoral})
      },function(error){
        return res.send(error);
      })
    },function(error){
      return res.send(error);
    });
  },
  getByStudent:function(req,res){
    var studentId = req.param('studentId');

    var validateCriteria = {
      studentId:{
        required:true,
        type:'id'
      }
    };
    var inputData = {
      studentId:studentId
    };

    ValidationService.validateUserInput(validateCriteria, inputData, function () {
      PastoralService.getByStudent(studentId,function(pastorals){
        return res.send({success:true,pastorals:pastorals})
      },function(error){
        return res.send(error);
      })
    },function(error){
      return res.send(error);
    });
  }
};

