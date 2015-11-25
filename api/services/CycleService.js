var CycleService = {
  getById:function(id,onResult,onError){
    Cycle.findOne(id).exec(function(err,result){
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
  create:function(cycle_info,onResult,onError){
    Cycle.create(cycle_info).exec(function(err,result){
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
  update:function(id,cycle_info,onResult,onError){
    Cycle.update(id,cycle_info).exec(function(err,result){
      if(err){
        var error = ErrorService.createError('Waterline',err);
        return onError(error);
      }else if(!result){
        return onResult(result)
      }else{
        return onResult(result)
      }
    })
  }

}

module.exports = CycleService;