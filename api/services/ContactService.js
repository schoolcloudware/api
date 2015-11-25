var ContactService = {
  getById: function (id, onResult, onError) {
    Contact.findOne(id).populateAll().exec(function (err, result) {
      if (err) {
        var error = ErrorService.createError('Waterline', err);
        return onError(error);
      } else if (!result) {
        return onResult(result)
      } else {
        return onResult(result)
      }
    })
  },
  create: function (contact_info, onResult, onError) {
    Contact.create(contact_info).exec(function (err, result) {
      if (err) {
        var error = ErrorService.createError('Waterline', err);
        return onError(error);
      } else if (!result) {
        return onResult(result)
      } else {
        return onResult(result)
      }
    })
  },
  update: function (id, contact_info, onResult, onError) {
    Contact.update(id, contact_info).exec(function (err, result) {
      if (err) {
        var error = ErrorService.createError('Waterline', err);
        return onError(error);
      } else if (!result) {
        return onResult(result)
      } else {
        return onResult(result[0])
      }
    })
  },
  getByClass: function (class_id, onResult, onError) {
    Student.find({class: class_id, deleted: false}).populate('parents').exec(function (err, students) {
      if (err) {
        var error = ErrorService.createError('Waterline', err);
        return onError(error);
      } else if (!students) {
        return onResult([])
      } else {
        var parents = [];
        students.forEach(function (student) {
          if (student.parents && student.parents.length > 0) {
            student.parents.forEach(function (parent) {
              parents.push(parent.id)
            })
          }
        })
        if (parents.length > 0) {
          Contact.find({id:parents,deleted:false}).populate('students').exec(function (err, result) {
            if (err) {
              var error = ErrorService.createError('Waterline', err);
              return onError(error);
            } else if (!result) {
              return onResult([])
            } else {
              return onResult(result)
            }
          })
        } else {
          return onResult([])
        }
      }
    })
  },
  removeParentConnection:function(id,studentId,onResult,onError){
    this.getById(id,function(contact){
      contact.students.forEach(function(student){
        if(student.id == studentId){
          contact.students.remove(studentId);
        }
      })
      contact.save(function(err,updated_contact){
        if (err) {
          var error = ErrorService.createError('Waterline', err);
          return onError(error);
        } else{
          return onResult(updated_contact)
        }
          })
    },function(error){
      return onError(error);
    })
  }

}

module.exports = ContactService;