import { Order } from "./Order";
import { Shipping } from "./Shipping";

export class Air implements Shipping {
  getCost(order: Order): number {
    return Math.max(20, order.getTotalWeight() * 3);
  }
}
