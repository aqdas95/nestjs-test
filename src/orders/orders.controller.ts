import { Body, Controller, Post, UsePipes } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { JoiValidationPipe } from '../pipes/validation.pipe';
import { createCatSchema } from './validation/create-order';

@Controller('orders')
export class OrdersController {
  constructor(private readonly orderService: OrdersService) {}

  @Post()
  @UsePipes(new JoiValidationPipe(createCatSchema))
  create(@Body() body): { id: number } {
    const order = this.orderService.createOrder(body);

    // I could have used Class Transform and make an entity return just the id. But that was too much effort for this task
    return { id: order.id };
  }
}
