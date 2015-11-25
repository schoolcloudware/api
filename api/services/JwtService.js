var jwt = require('jsonwebtoken');

var JwtService = {

  generateToken: function(payload, type) {
    switch(type) {
      case 'user':
        return jwt.sign(payload, sails.config.cloudware.jwt.credentials, { expiresInMinutes: payload.ipad ? 60*24*14 : 60*24 });
        break;
      case 'invitation':
        return jwt.sign(payload, sails.config.boardingware.jwt.invitation_key, { expiresInMinutes: 60*24*360 });
        break;
      case 'resetToken':
        return jwt.sign(payload, sails.config.boardingware.jwt.reset_token_key, { expiresInMinutes: 60*24 });
        break;
      case 'requestApproval':
        return jwt.sign(payload, sails.config.boardingware.jwt.request_approval, { expiresInMinutes: 60*24*1000 });
        break;
    }

    return undefined;
  },

  getUser: function(token, cb) {
    jwt.verify(token, sails.config.cloudware.jwt.credentials, {}, function(err, user) {
      return cb(err, user);
    });
  },

  getInvitationData: function(token, cb) {
    jwt.verify(token, sails.config.boardingware.jwt.invitation_key, {}, function(err, data) {
      return cb(err, data);
    });
  }

};
module.exports = JwtService;
