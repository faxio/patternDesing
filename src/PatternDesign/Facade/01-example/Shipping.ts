import { Order } from "./Order";
export interface Shipping {
  getCost(order: Order): number;
}
