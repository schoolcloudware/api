var UserService = {};
UserService.generateSessionData = function (info, onResult, onError) {
  switch (info.user.type) {
    case 'staff':
      console.log(info.user.staff)
      Staff.findOne(info.user.staff).populate('schools').exec(function (err, staff) {
        if (err) {
          var error = ErrorService.createError('Waterline', err);
          onError(error)
        } else {
          var data = {
            permissions: staff.permissions?staff.permissions.split(','):[],
            id: staff.id,
            user_type:'staff',
            usid: info.user.id
          }
          if (staff.schools.length > 0) {
            var schools = [];
            staff.schools.forEach(function (school) {
              schools.push({
                id: school.id,
                plan: school.plan
              })
            })
            data.schools = schools;
          }
          var token = JwtService.generateToken(data, 'user');
          onResult(token)
        }
      })
      break;
  }
}
UserService.getSessionData = function (id, user_type, onResult, onError) {
  switch (user_type) {
    case 'staff':
      Staff.findOne(id).populate('schools').exec(function(err,staff){
        if(err){
          var error = ErrorService.createError('Waterline', err);
          return onError(error)
        }else{
          onResult(staff)
        }
      })
      break;
  }
}

UserService.teacherSignup = function (teacherInfo, onResult, onError) {
  Credential.findOne({username: teacherInfo.email, deleted: false}).exec(function (err, existing_credential) {
    if (err) {
      var error = ErrorService.createError('Waterline', err);
      return onError(error)
    } else if (existing_credential) {
      var error = {success: false, code:'10',message: 'Email already in use'}
      return onError(error)
    } else {
      StaffService.create({
        given_name: teacherInfo.given_name,
        surname: teacherInfo.family_name,
        email: teacherInfo.email,
        birth_date: teacherInfo.birth_date,
        birth_country: teacherInfo.birth_country,
      }, function (teacher) {
        User.create({
          staff: teacher.id,
          type: 'staff',
          credentials: [{
            username: teacherInfo.email,
            secret: teacherInfo.password
          }]
        }).exec(function (err, user) {
          if (err) {
            var error = ErrorService.createError('Waterline', err);
            return onError(error)
          } else {
            teacher.plan = teacherInfo.plan;
            teacher.user = user;
            SchoolService.createSingleTeacherSchool(teacher, function (created_school) {
              sails.config.eventEmitter.emit('Single Teacher School Created', created_school, teacher);
              return onResult(created_school)
            }, function (error) {
              return onError(error)
            })
          }
        })
      }, function (error) {
        return onError(error)
      })
    }
  })
}
module.exports = UserService;