import Router from 'express';
const router = new Router();

import deviceRouter from './deviceRouter.js';
import brandRouter from './brandRouter.js';
import typeRouter from './typeRouter.js';
import userRouter from './userRouter.js';
import basketRouter from './basketRouter.js';
import favoriteRouter from './favoriteRouter.js'
import orderRouter from './orderRouter.js'
import deliveryPointRouter from './deliveryPointRouter.js'

router.use('/user', userRouter);
router.use('/type', typeRouter);
router.use('/brand', brandRouter);
router.use('/device', deviceRouter);
router.use('/basket', basketRouter);
router.use('/favorites', favoriteRouter)
router.use('/order', orderRouter)
router.use('/deliveryPoint', deliveryPointRouter)

export default router;