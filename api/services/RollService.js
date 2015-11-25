var RollService = {
  getById:function(id,onResult,onError){
    Roll.findOne(id).exec(function(err,result){
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
  create:function(roll_info,onResult,onError){
    Roll.create(roll_info).exec(function(err,result){
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
  update:function(id,roll_info,onResult,onError){
    Roll.update(id,roll_info).exec(function(err,result){
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
    Roll.find({school:school_id,deleted:false}).exec(function(err,result){
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

module.exports = RollService;