/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
  create: function (req, res) {

    var school_info = req.param('school_info');

    var validateCriteria = {
      school_info: {
        required: true,
        type: 'object'
      }
    };
    var inputData = {
      school_info: school_info
    };

    ValidationService.validateUserInput(validateCriteria, inputData, function () {
      SchoolService.create(school_info, function (school) {
        return res.send({success: true, school: school})
      }, function (error) {
        return res.send(error);
      })
    }, function (error) {
      return res.send(error);
    });
  },
  update: function (req, res) {

    var school_info = req.param('school_info');
    var school_id = req.param('school_id');

    var validateCriteria = {
      school_info: {
        required: true,
        type: 'object'
      },
      school_id: {
        required: true,
        type: 'id'
      }
    };
    var inputData = {
      school_info: school_info,
      school_id: school_id
    };

    ValidationService.validateUserInput(validateCriteria, inputData, function () {
      SchoolService.update(school_id, school_info, function (school) {
        return res.send({success: true, school: school})
      }, function (error) {
        return res.send(error);
      })
    }, function (error) {
      return res.send(error);
    });
  },
  delete: function (req, res) {

    var school_id = req.param('school_id');

    var validateCriteria = {
      school_id: {
        required: true,
        type: 'id'
      }
    };
    var inputData = {
      school_id: school_id
    };

    ValidationService.validateUserInput(validateCriteria, inputData, function () {
      SchoolService.update(school_id, {deleted: true}, function (school) {
        return res.send({success: true, school: school})
      }, function (error) {
        return res.send(error);
      })
    }, function (error) {
      return res.send(error);
    });
  },
  getById: function (req, res) {
    var school_id = req.param('school_id');

    var validateCriteria = {
      school_id: {
        required: true,
        type: 'id'
      }
    };
    var inputData = {
      school_id: school_id
    };

    ValidationService.validateUserInput(validateCriteria, inputData, function () {
      SchoolService.getById(school_id, function (school) {
        return res.send({success: true, school: school})
      }, function (error) {
        return res.send(error);
      })
    }, function (error) {
      return res.send(error);
    });
  },
  teacherSignup: function (req, res) {
    var given_name = req.param('given_name');
    var family_name = req.param('family_name');
    var email = req.param('email');
    var birth_date = req.param('birth_date');
    var birth_country = req.param('birth_country');
    var password = req.param('password');
    var plan = req.param('plan');
    var validateCriteria = {
      given_name: {
        required: true,
        type: 'string'
      },
      family_name: {
        required: true,
        type: 'string'
      },
      email: {
        required: true,
        type: 'string'
      },
      password: {
        required: true,
        type: 'string'
      },
      plan: {
        required: true,
        type: 'string'
      }
    };
    var inputData = {
      given_name: given_name,
      family_name: family_name,
      email: email,
      password: password,
      plan:plan
    };

    ValidationService.validateUserInput(validateCriteria, inputData, function () {
      var teacherInfo = {
        given_name: given_name,
        family_name: family_name,
        email: email,
        birth_date: birth_date,
        birth_country: birth_country,
        password: password,
        plan:plan
      }
      UserService.teacherSignup(teacherInfo, function (info) {
        return res.send({success:true})
      }, function (error) {
        return res.send(error);
      })
    }, function (error) {
      return res.send(error);
    });
  }
};

