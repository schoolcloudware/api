/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/
  'post /1/authenticate':'AuthController.authenticate',
  'post /1/teacher/signup':'UserController.teacherSignup',
  '/': {
    view: 'homepage'
  },

  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  *  If a request to a URL doesn't match any of the custom routes above, it  *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/
  'get /1.0/class/byId':'ClassController.getById',
  'get /1.0/class/getBySchool':'ClassController.getBySchool',
  'post /1.0/class/create':'ClassController.create',
  'put /1.0/class/update':'ClassController.update',
  'put /1.0/class/updateSubject':'ClassController.updateSubject',
  'delete /1.0/class/delete':'ClassController.delete',

  'get /1.0/classRoom/byId':'ClassRoomController.getById',
  'post /1.0/classRoom/create':'ClassRoomController.create',
  'put /1.0/classRoom/update':'ClassRoomController.update',
  'delete /1.0/classRoom/delete':'ClassRoomController.delete',

  'get /1.0/contact/byId':'ContactController.getById',
  'get /1.0/contact/getByClass':'ContactController.getByClass',
  'post /1.0/contact/create':'ContactController.create',
  'put /1.0/contact/update':'ContactController.update',
  'put /1.0/contact/removeConnection':'ContactController.removeParentConnection',
  'delete /1.0/contact/delete':'ContactController.delete',

  'get /1.0/cycle/byId':'CycleController.getById',
  'post /1.0/cycle/create':'CycleController.create',
  'put /1.0/cycle/update':'CycleController.update',
  'delete /1.0/cycle/delete':'CycleController.delete',

  'get /1.0/level/byId':'LevelController.getById',
  'get /1.0/level/getBySchool':'LevelController.getBySchool',
  'post /1.0/level/create':'LevelController.create',
  'put /1.0/level/update':'LevelController.update',
  'delete /1.0/level/delete':'LevelController.delete',

  'get /1.0/pastoral/byId':'PastoralController.getById',
  'get /1.0/pastoral/byStudent':'PastoralController.getByStudent',
  'post /1.0/pastoral/create':'PastoralController.create',
  'put /1.0/pastoral/update':'PastoralController.update',
  'delete /1.0/pastoral/delete':'PastoralController.delete',

  'get /1.0/qualification/byId':'QualificationController.getById',
  'get /1.0/qualification/bySubjectAndCycle':'SubjectController.getQualificationsByCycle',
  'post /1.0/qualification/create':'QualificationController.create',
  'put /1.0/qualification/update':'QualificationController.update',
  'delete /1.0/qualification/delete':'QualificationController.delete',

  'get /1.0/roll/byId':'RollController.getById',
  'post /1.0/roll/create':'RollController.create',
  'put /1.0/roll/update':'RollController.update',
  'delete /1.0/roll/delete':'RollController.delete',

  'get /1.0/school/byId':'SchoolController.getById',
  'post /1.0/school/create':'SchoolController.create',
  'put /1.0/school/update':'SchoolController.update',
  'delete /1.0/school/delete':'SchoolController.delete',

  'get /1.0/staff/byId':'StaffController.getById',
  'post /1.0/staff/create':'StaffController.create',
  'put /1.0/staff/update':'StaffController.update',
  'delete /1.0/staff/delete':'StaffController.delete',

  'get /1.0/student/getByClass':'StudentController.getByClass',
  'get /1.0/student/byId':'StudentController.getById',
  'post /1.0/student/create':'StudentController.create',
  'put /1.0/student/update':'StudentController.update',
  'delete /1.0/student/delete':'StudentController.delete',

  'get /1.0/subject/byId':'SubjectController.getById',
  'get /1.0/subject/bySchool':'SubjectController.getBySchool',
  'post /1.0/subject/create':'SubjectController.create',
  'put /1.0/subject/update':'SubjectController.update',
  'delete /1.0/subject/delete':'SubjectController.delete',

  'get /1.0/subjectNet/getByClass':'SubjectNetController.getByClass',
  'get /1.0/subjectNet/byId':'SubjectNetController.getById',
  'post /1.0/subjectNet/create':'SubjectNetController.create',
  'put /1.0/subjectNet/update':'SubjectNetController.update',
  'delete /1.0/subjectNet/delete':'SubjectNetController.delete',

  'get /1.0/subjectType/getBySchool':'SubjectTypeController.getBySchool',
  'get /1.0/subjectType/byId':'SubjectTypeController.getById',
  'post /1.0/subjectType/create':'SubjectTypeController.create',
  'put /1.0/subjectType/update':'SubjectTypeController.update',
  'delete /1.0/subjectType/delete':'SubjectTypeController.delete',

  'get /1.0/teacher/byId':'TeacherController.getById',
  'post /1.0/teacher/create':'TeacherController.create',
  'put /1.0/teacher/update':'TeacherController.update',
  'delete /1.0/teacher/delete':'TeacherController.delete'
  // ,
  //
  //'get /1.0//byId':'Controller.getById',
  //'post /1.0//create':'Controller.create',
  //'put /1.0//update':'Controller.update',
  //'delete /1.0//delete':'Controller.delete',
  //
  //'get /1.0//byId':'Controller.getById',
  //'post /1.0//create':'Controller.create',
  //'put /1.0//update':'Controller.update',
  //'delete /1.0//delete':'Controller.delete',
  //
  //'get /1.0//byId':'Controller.getById',
  //'post /1.0//create':'Controller.create',
  //'put /1.0//update':'Controller.update',
  //'delete /1.0//delete':'Controller.delete',
};
