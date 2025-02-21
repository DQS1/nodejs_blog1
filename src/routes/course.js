import { Router } from 'express';
import courseController from '../app/controllers/CourseController.js';
const courseRoute = Router();

courseRoute.get('/create', courseController.create);
courseRoute.post('/store', courseController.store);
courseRoute.get('/:slug', courseController.show);

export default courseRoute;
