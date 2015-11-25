var SchoolService = {
  getById:function(id,onResult,onError){
    School.findOne(id).exec(function(err,result){
      if(err){
        var error = ErrorService.createError('Waterline',err);
        return onError(error);
      }else if(!result){
        return onResult(result)
      }else{
        return onResult(result)
      }
    })
  },
  create:function(school_info,onResult,onError){
    School.create(school_info).exec(function(err,result){
      if(err){
        var error = ErrorService.createError('Waterline',err);
        return onError(error);
      }else if(!result){
        return onResult(result)
      }else{
        return onResult(result)
      }
    })
  },
  update:function(id,school_info,onResult,onError){
    School.update(id,school_info).exec(function(err,result){
      if(err){
        var error = ErrorService.createError('Waterline',err);
        return onError(error);
      }else if(!result){
        return onResult(result)
      }else{
        return onResult(result)
      }
    })
  },
  createSingleTeacherSchool:function(teacher,onResult,onError){
    var splited_name = (teacher.given_name + teacher.surname).split(' ');
    var code = '';
    splited_name.forEach(function(name){
      code += name.charAt(0).toLowerCase();
    })
    var school = {
      name:'Escuela de '+teacher.given_name + ' ' + teacher.surname,
      code: code,
      admin:teacher.id,
      staff_members:[teacher.id],
      levels: sails.config.cloudware.data_templates.levels,
      subject_types:sails.config.cloudware.data_templates.subject_types,
      plan:teacher.plan
    }
    this.create(school,function(created_school){
      return onResult(created_school)
    },function(error){
      return onError(error)
    })
  }
}

module.exports = SchoolService;