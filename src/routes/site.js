import { Router } from 'express';
import siteController from '../app/controllers/SiteController.js';

const siteRoute = Router();

siteRoute.get('/search', siteController.search);
siteRoute.get('/', siteController.home);

export default siteRoute;
