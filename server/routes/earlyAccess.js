import express from 'express';
import { requestEarlyAccess, checkStatus, earlyAccessSchema } from '../controllers/earlyAccessController.js';
import { validateRequest } from '../middleware/requestValidator.js';

const router = express.Router();

router.post('/request', validateRequest(earlyAccessSchema), requestEarlyAccess);
router.get('/status', checkStatus);

export default router;