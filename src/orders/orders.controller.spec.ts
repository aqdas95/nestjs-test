import { Test, TestingModule } from '@nestjs/testing';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';

describe('AppController', () => {
  let ordersController: OrdersController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [OrdersController],
      providers: [OrdersService],
    }).compile();

    ordersController = app.get<OrdersController>(OrdersController);
  });

  describe('create', () => {
    it('should create order', () => {
      const params = {
        coin: 'ETH',
        amount: 0.0064,
        extra2: 'abc',
        extra1: 'av',
      };
      const result = { id: OrdersService.count + 1 };

      expect(ordersController.create(params)).toStrictEqual(result);
    });
  });
});
