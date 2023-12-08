import { ShoppingOrder } from './shopping-order/shopping-order';

const order = new ShoppingOrder();
order.approvePayment();
order.waitingPayment();
order.shipOrder();
order.rejectPayment();
order.approvePayment();
order.waitingPayment();
order.rejectPayment();
order.shipOrder();
