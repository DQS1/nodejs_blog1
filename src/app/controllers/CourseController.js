import Course from '../models/Course.js';

class CourseController {
  //[GET] /
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .lean()
      .then((course) => res.render('courses/show', { course }))
      .catch(next);
  }

  //[GET] /create
  create(req, res, next) {
    res.render('courses/create');
  }

  // [POST] /courses/store

  async store(req, res, next) {
    try {
      const formData = req.body;
      formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;

      const course = new Course(formData);
      await course.save(); // Lưu vào database

      res.redirect('/'); // Chuyển hướng sau khi lưu thành công
    } catch (error) {
      console.error('Lỗi khi lưu khóa học:', error);
      res.status(500).json({ message: 'Lưu khóa học thất bại', error });
    }
  }
}
export default new CourseController();
