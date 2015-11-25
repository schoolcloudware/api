/**
 * Validation Service to deal with standard validations required for most models. Also implements functions for
 * validations such as email and phone number.
 * @class ValidationService
 * @memberOf Services
 */

var _ = require('underscore');

var ValidationService = {

  // Validate user input to make sure they pass in required
  validateUserInput: function(validateCriteria, inputData, onResult, onError) {

    // First cycle through the validate criteria
    var keys = Object.keys(validateCriteria);

    for(var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var criteria = validateCriteria[key];
      var value = inputData[key];

      // Is there criteria for this key?
      if(criteria) {

        // Does the value exist?
        if(!_.isNull(value) && !_.isUndefined(value)) {
          // Value is defined

          // Does it need to be a certain type of data?
          if(criteria.type) {

            // Types of type:
            var type = criteria.type;
            switch(type) {
              case 'id':
                // Id can be integer or string
                if(!_.isNumber(value) && !_.isString(value)) {
                  var error = ErrorService.createError('Incorrect Params');
                  return onError(error);
                }
                break;
              case 'object':
                // Id can be integer or string
                if(!_.isObject(value) || (_.isArray(value) || _.isFunction(value))) {
                  var error = ErrorService.createError('Incorrect Params');
                  return onError(error);
                }
                break;
              case 'array':
                if(!_.isArray(value)) {
                  var error = ErrorService.createError('Incorrect Params');
                  return onError(error);
                }
                break;
            }
          }

        } else {
          // Value is undefined

          // If the value is required then throw error cause its not there
          if(criteria.required) {
            var error = ErrorService.createError('Incorrect Params');
            return onError(error);
          }
        }
      }
    }

    return onResult();
  },

  // Provide clean data for saving
  validInput: function(attrs, input, callback) {

    if(input.constructor === Array) {
      var outputArray = [];

      for(var i = 0; i < input.length; i++) {
        var inputObject = input[i];
        var outputObject = {};
        attrs.forEach(function(param) {
          var value = inputObject[param];
          if((typeof value !==  'undefined') && (value != null)) {
            outputObject[param] = value;
          }
        });

        outputArray.push(outputObject);
      }
      return callback(outputArray);

    } else {
      var inputObject = input;
      var outputObject = {};
      attrs.forEach(function(param) {
        var value = inputObject[param];
        if((typeof value !==  'undefined') && (value != null)) {
          outputObject[param] = value;
        }
      });

      return callback(outputObject);
    }
  },

  // Check for valid email address
  validateEmail: function(email) {
      var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
      return re.test(email);
  },

  // Check for valid password
  validatePassword: function(password) {
    var error = '';
    var illegalChars = /[\W_]/; // allow only letters and numbers (do we want this?)

    if (password == '') {
      error = 'You did not enter a password.';
    } else if ((password.length < 6) || (password.length > 15)) {
      error = 'The password must be between 6 and 15 characters long.';
    } else if (illegalChars.test(password)) {
      //error = 'The password contains illegal characters. Only letters and numbers are permitted.';
    } else if ((password.search(/[a-zA-Z]+/)==-1) || (password.search(/[0-9]+/)==-1)) {
      //error = 'The password must contain at least one numeral.';
    }

    if(error != '') {
      return {
        success: false,
        error: error
      };
    } else {
      return {success: true};
    }
  },

  // Check whether the school tier model
  returnModelSchoolId: function(model, id, onResult, onError) {
    model.findOne({where: {id: id}, select: ['school']}).exec(function(err, object) {
      if(err) {
        var error = ErrorService.createError('Waterline', err);
        return onError(error);
      } else if(object) {
        var schoolId = object.school;
        return onResult(schoolId);
      } else {
        return onResult(null);
      }
    });
  },

  // Check whether the house tier model
  returnModelHouseId: function(model, id, onResult, onError) {
    // deleted false????
    model.findOne({where: {id: id}, select: ['house']}).exec(function(err, object) {
      if(err) {
        var error = ErrorService.createError('Waterline', err);
        return onError(error);
      } else if(object) {
        var houseId = object.house;
        return onResult(houseId);
      } else {
        return onResult(null);
      }
    });
  },

  returnModelStudentHouseId: function (model, id, onResult, onError) {
    // deleted false????
    model.findOne({where: {id: id}, select: ['student']}).populate('student').exec(function(err, object) {
      if(err) {
        var error = ErrorService.createError('Waterline', err);
        return onError(error);
      } else if(object) {
        // Check if student is deleted
        var student = object.student;
        if((typeof student !==  'undefined') && (student !== null)) {
          var houseId = student.house;
          return onResult(houseId);
        } else {
          return onResult(null);
        }
      } else {
        return onResult(null);
      }
    });
  }

};

module.exports = ValidationService;
