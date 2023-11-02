import { Router } from 'express';
import { logMiddleware } from '../middleware/log.middleware.js';
import { checkJwt } from '../middleware/check.middleware.js';
import { getAllReservations_ctrl, addSemana_ctrl, addReservaCtrl } from '../controllers/reservas.controller.js'

const router = Router();

router.get('/calendario', logMiddleware, checkJwt, getAllReservations_ctrl);
router.post('/semana', logMiddleware, checkJwt, addSemana_ctrl);
router.post('/addReserva', logMiddleware, checkJwt, addReservaCtrl);

export default router;