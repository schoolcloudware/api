/**
 * Error Service to deal with producing the errors that are returned to the client and logging errors for us to
 * see on the backend.
 * @class ErrorService
 * @memberOf Services
 */

var ErrorService = {

  createError: function(type, err) {

    var error = {};

    switch (type) {
      case 'Waterline':
        // If validation or 142 else 102 CHECK VALIDATION PROPERLY?
        if(err == 'validation') {
          error.code = 142;
          error.message = 'Error validating data';
        } else {
          error.code = 102;
          error.message = 'Error fetching/saving to database';
        }
        break;
      case 'Wrong Credential':
        error.code = 99;
        error.message = 'Username or password error';
      case 'Record Not Found':
        error.code = 101;
        error.message = 'Record not found';
        break;
      case 'Incorrect Params':
        error.code = 111;
        error.message = 'Incorrect Parameters';
        break;
      case 'Invalid Input Data':
        error.code = 107;
        error.message = 'Invalid data';
        break;
      case 'Display Error':
        error.code = 120;
        error.message = err.message;
        break;
      case 'Mandrill':
        error.code = 125;
        error.message = 'Error sending email';
        break;
      case 'S3 Upload':
        error.code = 102;
        error.message = 'Error uploading file';
      default:
        error.code = 130;
        error.message = 'Unknown Error';
    }

    // Log error
    sails.log.error('Error type: ' + type, err, 'Error code: ' + error.code);

    return {success: false, error: error};
  }

};

module.exports = ErrorService;
