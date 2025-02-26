import Course from '../models/Course.js';

class MeController {
  // [GET] /me/stored/courses
  async storedCourses(req, res, next) {
    try {
      const deletedCount = await Course.countDocumentsWithDeleted({
        deleted: true
      }).lean();
      const courses = await Course.find({}).lean();

      res.render('me/stored-courses', { deletedCount, courses });
    } catch (error) {
      next(error);
    }
  }

  // [GET] /me/trash/courses
  trashCourses(req, res, next) {
    Course.findDeleted({
      deletedAt: { $ne: null }
    })
      .lean()
      .then((courses) =>
        res.render('me/trash-courses', {
          courses
        })
      )
      .catch(next);
  }
}
export default new MeController();
