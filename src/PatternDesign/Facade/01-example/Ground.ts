import { Order } from "./Order";
import { Shipping } from "./Shipping";

export class Ground implements Shipping {
  getCost(order: Order): number {
    if (order.getTotal() > 100) {
      return 0;
    }

    return Math.max(10, order.getTotalWeight() * 1.5);
  }
}
