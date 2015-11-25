/**
 * StudentController
 *
 * @description :: Server-side logic for managing students
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
  create:function(req,res){

    var student_info = req.param('student_info');

    var validateCriteria = {
      student_info: {
        required: true,
        type: 'object'
      }
    };
    var inputData = {
      student_info: student_info
    };

    ValidationService.validateUserInput(validateCriteria, inputData, function () {
      StudentService.create(student_info,function(student){
        return res.send({success:true,student:student})
      },function(error){
        return res.send(error);
      })
    },function(error){
      return res.send(error);
    });
  },
  update:function(req,res){

    var student_info = req.param('student_info');
    var id = req.param('id');

    var validateCriteria = {
      student_info: {
        required: true,
        type: 'object'
      },
      id:{
        required:true,
        type:'id'
      }
    };
    var inputData = {
      student_info: student_info,
      id:id
    };

    ValidationService.validateUserInput(validateCriteria, inputData, function () {
      StudentService.update(id,student_info,function(student){
        return res.send({success:true,student:student})
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
      StudentService.update(id,{deleted:true},function(student){
        return res.send({success:true,student:student})
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
      StudentService.getById(id,function(student){
        return res.send({success:true,student:student})
      },function(error){
        return res.send(error);
      })
    },function(error){
      return res.send(error);
    });
  },
  getByClass:function(req,res){
    var class_id = req.param('class_id');

    var validateCriteria = {
      class_id:{
        required:true,
        type:'id'
      }
    };
    var inputData = {
      class_id:class_id
    };

    ValidationService.validateUserInput(validateCriteria, inputData, function () {
      StudentService.getByClass(class_id,function(students){
        return res.send({success:true,students:students})
      },function(error){
        return res.send(error);
      })
    },function(error){
      return res.send(error);
    });
  }

};

