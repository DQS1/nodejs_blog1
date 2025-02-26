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
      req.body.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
      const course = new Course(req.body);
      await course.save(); // Lưu vào database

      res.redirect('/me/stored/courses'); // Chuyển hướng sau khi lưu thành công
    } catch (error) {
      console.error('Lỗi khi lưu khóa học:', error);
      res.status(500).json({ message: 'Lưu khóa học thất bại', error });
    }
  }

  // [GET] /courses/:id/edit
  edit(req, res, next) {
    Course.findById(req.params.id)
      .lean()
      .then((course) => {
        res.render('courses/edit', { course });
      })
      .catch(next);
  }

  update(req, res, next) {
    Course.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect('/me/stored/courses'))
      .catch(next);
  }

  // [DELETE] /courses/:id
  destroy(req, res, next) {
    Course.delete({ _id: req.params.id })
      .then(() => req.get('Referrer') || '/')
      .catch(next);
  }
  // [DELETE] /courses/:id/force
  forceDestroy(req, res, next) {
    Course.deleteOne({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch(next);
  }

  // [PATCH] /courses/:id/restore
  restore(req, res, next) {
    Course.restore({ _id: req.params.id })
      .then(() => req.get('Referrer') || '/')
      .catch(next);
  }
}
export default new CourseController();
