/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#/documentation/reference/sails.config/sails.config.bootstrap.html
 */

module.exports.bootstrap = function (cb) {

  // It's very important to trigger this callback method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
  sails.io.on("connect", function (socket) {

    if (typeof socket.handshake.query.swt == 'undefined') {
      sails.log.debug('token undefined - disconnecting');
      socket.emit('auth_error');
      return socket.disconnect();
    }
    var token = socket.handshake.query.swt;
    JwtService.getUser(token, function (err, user) {
      if (err) {
        sails.log.debug('Error authenticating socket: ', socket.id);

        // Emit authentication error back to client to log them out
        socket.emit('auth_error');
        return socket.disconnect();
      } else if (user) {
        sails.log.debug("Successfully authenticated socket: ", socket.id);
        sails.log.debug(user);
        socket.user = user;
        UserService.getSessionData(user.id,user.user_type,function(session_info){
          sails.log.debug('emitting session info',session_info)
          return socket.emit('session_info', {session_info: session_info});
        },function(error){
          sails.log.debug('Error getting session data: ', socket.id, ' error:', error);
          socket.emit('auth_error');
          return socket.disconnect();
        })
      }
    });
  });
  cb();
};
