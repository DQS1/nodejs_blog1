import courseRoute from './course.js';
import newsRoute from './news.js';
import siteRoute from './site.js';

function route(app) {
  app.use('/news', newsRoute);
  app.use('/courses', courseRoute);
  app.use('/', siteRoute);
}
export default route;
