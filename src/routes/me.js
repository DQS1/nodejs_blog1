import { Router } from 'express';
import meController from '../app/controllers/MeController.js';

const meRoute = Router();

meRoute.get('/stored/courses', meController.storedCourses);
meRoute.get('/trash/courses', meController.trashCourses);

export default meRoute;
