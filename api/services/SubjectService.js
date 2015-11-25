var SubjectService = {
  getById:function(id,onResult,onError){
    Subject.findOne(id).exec(function(err,result){
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
  create:function(subject_info,onResult,onError){
    Subject.create(subject_info).exec(function(err,result){
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
  update:function(id,subject_info,onResult,onError){
    Subject.update(id,subject_info).exec(function(err,result){
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
    Subject.find({school:school_id,deleted:false}).exec(function(err,result){
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

module.exports = SubjectService;