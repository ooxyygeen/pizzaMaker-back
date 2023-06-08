import mongoose from 'mongoose';

// Order Config
const OrderSchema = new mongoose.Schema({
  id: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  pizzaName: { type: String, required: true },
  pizzaCount: { type: Number, required: true },
  selectedSizeOption: { type: String, required: true },
  selectedBorderOption: { type: String, required: true },
  totalPrice: { type: Number, required: true },
  modificationsMap: { type: Map, of: String},
  status: { type: String, required: true}
});

export const OrderModel = mongoose.model('Order', OrderSchema);

// Order Actions
export const getOrders = () => OrderModel.find();
export const getOrdersByPhoneNumber = (phoneNumber: string) => OrderModel.find({ phoneNumber });
export const getOrderById = (id: string) => OrderModel.findById(id);
export const createOrder = (values: Record<string, any>) => new OrderModel(values).save().then((Order) => Order.toObject());
export const deleteOrderById = (id: string) => OrderModel.findOneAndDelete({ _id: id });
export const updateOrderById = (id: string, values: Record<string, any>) => OrderModel.findByIdAndUpdate(id, values);