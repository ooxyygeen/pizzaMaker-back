import express from 'express';

import { getAllOrdersByPhone, createNewOrder } from '../controllers/orders';

export default (router: express.Router) => {
    router.get('/orders/:phoneNumber', getAllOrdersByPhone);
    router.post('/orders/placeOrder', createNewOrder);
}