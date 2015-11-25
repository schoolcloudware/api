/**
 * ClassRoomController
 *
 * @description :: Server-side logic for managing Classrooms
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
  create:function(req,res){

    var class_room_info = req.param('class_room_info');

    var validateCriteria = {
      class_room_info: {
        required: true,
        type: 'object'
      }
    };
    var inputData = {
      class_room_info: class_room_info
    };

    ValidationService.validateUserInput(validateCriteria, inputData, function () {
      ClassRoomService.create(class_room_info,function(class_room){
        return res.send({success:true,class_room:class_room})
      },function(error){
        return res.send(error);
      })
    },function(error){
      return res.send(error);
    });
  },
  update:function(req,res){

    var class_room_info = req.param('class_room_info');
    var class_room_id = req.param('class_room_id');

    var validateCriteria = {
      class_room_info: {
        required: true,
        type: 'object'
      },
      class_room_id:{
        required:true,
        type:'id'
      }
    };
    var inputData = {
      class_room_info: class_room_info,
      class_room_id:class_room_id
    };

    ValidationService.validateUserInput(validateCriteria, inputData, function () {
      ClassRoomService.update(class_room_id,class_room_info,function(class_room){
        return res.send({success:true,class_room:class_room})
      },function(error){
        return res.send(error);
      })
    },function(error){
      return res.send(error);
    });
  },
  delete:function(req,res){

    var class_room_id = req.param('class_room_id');

    var validateCriteria = {
      class_room_id:{
        required:true,
        type:'id'
      }
    };
    var inputData = {
      class_room_id:class_room_id
    };

    ValidationService.validateUserInput(validateCriteria, inputData, function () {
      ClassRoomService.update(class_room_id,{deleted:true},function(class_room){
        return res.send({success:true,class_room:class_room})
      },function(error){
        return res.send(error);
      })
    },function(error){
      return res.send(error);
    });
  },
  getById:function(req,res){
    var class_room_id = req.param('class_room_id');

    var validateCriteria = {
      class_room_id:{
        required:true,
        type:'id'
      }
    };
    var inputData = {
      class_room_id:class_room_id
    };

    ValidationService.validateUserInput(validateCriteria, inputData, function () {
      ClassRoomService.getById(class_room_id,function(class_room){
        return res.send({success:true,class_room:class_room})
      },function(error){
        return res.send(error);
      })
    },function(error){
      return res.send(error);
    });
  }
};

