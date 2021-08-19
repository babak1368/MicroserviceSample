import { Router } from 'express';
import userRoute from './userRoute';

export default () => {
	const router = Router();
	userRoute(router);
	return router;
}

