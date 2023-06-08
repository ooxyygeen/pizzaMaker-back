import express from 'express';
import authentication from './authentication';
import users from './users';
import orders from './orders';

const router = express.Router();

export default (): express.Router => {
  authentication(router);
  users(router);
  orders(router);
  return router;
};