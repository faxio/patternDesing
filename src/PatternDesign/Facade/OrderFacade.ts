import { Air, Ground, Shipping } from "./01-example";
import { Order } from "./01-example/Order";

export class OrderFacade {
  private shippings = [new Ground(), new Air()];
  private shippingActive: Shipping;
  private order: Order;

  constructor(listaItems: Array<number>, shipping: string) {
    this.shippingActive = this.createShipping(shipping);
    this.order = new Order(listaItems, this.shippingActive);
  }

  createShipping(shipping: string) {
    switch (shipping) {
      case "air": {
        return this.shippings[1];
      }
      default: {
        return this.shippings[0];
      }
    }
  }

  getOrder() {
    return this.order;
  }
}
