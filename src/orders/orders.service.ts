import { Injectable } from '@nestjs/common';
import { Order } from './interface/order';

@Injectable()
export class OrdersService {
  static count = 0;
  private static orders = [];

  createOrder(attributes): Order {
    OrdersService.count++;

    const order = { ...attributes, id: OrdersService.count };
    OrdersService.orders.push(order);

    return order;
  }
}
