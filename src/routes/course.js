import { Router } from 'express';
import courseController from '../app/controllers/CourseController.js';
const courseRoute = Router();

courseRoute.get('/create', courseController.create);
courseRoute.post('/store', courseController.store);
courseRoute.get('/:id/edit', courseController.edit);
courseRoute.patch('/:id/restore', courseController.restore);
courseRoute.put('/:id', courseController.update);
courseRoute.delete('/:id', courseController.destroy);
courseRoute.delete('/:id/force', courseController.forceDestroy);
courseRoute.get('/:slug', courseController.show);

export default courseRoute;
