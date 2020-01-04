import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => res.json('JWT-NODE'));

export default routes;
