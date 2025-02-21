import Course from '../models/Course.js';

class SiteController {
  //[GET] /
  home(req, res, next) {
    Course.find({})
      .lean()
      .then((courses) => res.render('home', { courses }))
      .catch(next);
  }
  //[GET] /search
  search(req, res) {
    res.render('search');
  }
}
export default new SiteController();
