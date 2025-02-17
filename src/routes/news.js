import { Router } from 'express';
import newsController from '../app/controllers/NewsController.js';

const newsRoute = Router();

newsRoute.get('/:slug', newsController.show);
newsRoute.get('/', newsController.index);

export default newsRoute;
