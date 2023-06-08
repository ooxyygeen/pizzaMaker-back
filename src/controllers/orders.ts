import express from 'express';

import { getOrdersByPhoneNumber, createOrder } from '../db/orders';

export const getAllOrdersByPhone = async (req: express.Request, res: express.Response) => {
    try {
        const { phoneNumber } = req.params;
        const orders = await getOrdersByPhoneNumber(phoneNumber);
        return res.status(200).json(orders);
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}

export const createNewOrder = async (req: express.Request, res: express.Response) => {
    try {
    const { id, phoneNumber, pizzaName, pizzaCount, selectedSizeOption, selectedBorderOption, totalPrice, modificationsMap, status } = req.body;
    const order = await createOrder({id, phoneNumber, pizzaName, pizzaCount, selectedSizeOption, selectedBorderOption, totalPrice, modificationsMap, status});
    res.status(201).json(order);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}