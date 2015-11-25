/**
 * AuthController
 *
 * @description :: Server-side logic for managing Auths
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

  authenticate:function(req,res){
    var username = req.param('username');
    var password = req.param('password');
    console.log(username,password)
    if(username && password){
      CredentialService.authenticate({username:username,password:password},function(user){
        UserService.generateSessionData({user:user},function(token){
          res.send({success:true,token:token})
        },function(error){
          res.send(error)
        })
      },function(error){
        res.send(error)
      })
    }else{
      res.send({success:false,error:{code:21,message:'Especifique usuario y contraseña'}})
    }
  }
};

