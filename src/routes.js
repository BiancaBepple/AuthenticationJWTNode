import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => res.json('START-API-NODE'));

export default routes;
