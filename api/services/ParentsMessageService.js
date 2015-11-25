var ParentsMessageService = {
  getById:function(id,onResult,onError){
    ParentsMessage.findOne(id).exec(function(err,result){
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
  create:function(parent_message_info,onResult,onError){
    ParentsMessage.create(parent_message_info).exec(function(err,result){
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
  update:function(id,parent_message_info,onResult,onError){
    ParentsMessage.update(id,parent_message_info).exec(function(err,result){
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
    ParentsMessage.find({school:school_id}).exec(function(err,result){
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

module.exports = ParentsMessageService;