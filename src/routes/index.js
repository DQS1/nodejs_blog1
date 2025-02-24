import courseRoute from './course.js';
import meRoute from './me.js';
import newsRoute from './news.js';
import siteRoute from './site.js';

function route(app) {
  app.use('/news', newsRoute);
  app.use('/me', meRoute);
  app.use('/courses', courseRoute);
  app.use('/', siteRoute);
}
export default route;
