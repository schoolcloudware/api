var ClassService = {
  getById:function(id,onResult,onError){
    Class.findOne(id).populate('students',{deleted:false}).populate('level').populate('lead_teacher').populate('subjects').exec(function(err,result){
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
  create:function(class_info,onResult,onError){
    Class.create(class_info).exec(function(err,result){
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
  update:function(id,class_info,onResult,onError){
    Class.update(id,class_info).exec(function(err,result){
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
    Class.find({school:school_id,deleted:false}).populate('level').exec(function(err,result){
      if(err){
        var error = ErrorService.createError('Waterline',err);
        return onError(error);
      }if(!result){
        return onResult([])
      }else{
        return onResult(result)
      }
    })
  },
  updateSubject:function(id,subjectId,action,onResult,onError){
    Class.findOne(id).populate('subjects').exec(function(err,result){
      if(err){
        var error = ErrorService.createError('Waterline',err);
        return onError(error);
      }else if(!result){
        return onError({success:false,error:{message:'record not found'}})
      }else{
        switch(action){
          case 'add':
            result.subjects.add(subjectId)
            break;
          case 'remove':
            result.subjects.remove(subjectId)
            break;
          default:
            result.subjects.add(subjectId)
            break;
        }
        result.save(function(err,result){
          if(err){
            var error = ErrorService.createError('Waterline',err);
            return onError(error);
          }else{
            return onResult()
          }
        })
      }
    })
  }

}

module.exports = ClassService;