var bcrypt = require('bcrypt');
var SALT_WORK_FACTOR = 11;
var CredentialService = {}
CredentialService.authenticate = function(info,onResult,onError){
    Credential.findOne({username:info.username}).populate('user').exec(function(err,credential){
      if(err){
        var error = ErrorService.createError('Waterline',err);
        onError(error)
      }else if(credential){
        CredentialService.validatePassword(info.password,credential.secret,function(success){
          if(success){
            console.log(credential.user)
            onResult(credential.user)
          }else{
            var error = ErrorService.createError('Wrong Credential','');
            onError(error)
          }
        })
      }else{
        var error = ErrorService.createError('Wrong Credential','');
        onError(error)
      }
    })
  }
CredentialService.validatePassword = function(password, secret, callback) {
    bcrypt.compare(password, secret, function (err, res) {
      if(!res) {
        return callback(false);
      } else {
        return callback(true);
      }
    });
  }
module.exports = CredentialService;