var SubjectTypeService = {
  getById:function(id,onResult,onError){
    SubjectType.findOne(id).exec(function(err,result){
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
  create:function(subject_type_info,onResult,onError){
    SubjectType.create(subject_type_info).exec(function(err,result){
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
  update:function(id,subject_type_info,onResult,onError){
    SubjectType.update(id,subject_type_info).exec(function(err,result){
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
  getBySchool:function(school_id,onResult,onError){
    SubjectType.find({school:school_id}).exec(function(err,result){
      if(err){
        var error = ErrorService.createError('Waterline',err);
        return onError(error);
      }if(!result){
        return onResult([])
      }else{
        return onResult(result)
      }
    })
  }

}

module.exports = SubjectTypeService;