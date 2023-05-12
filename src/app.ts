import { OrderFacade } from "./PatternDesign/Facade/OrderFacade";
import { RoadLogistics } from "./PatternDesign/Factory/01-example/RoadLogistics";
import { SeaLogistics } from "./PatternDesign/Factory/01-example/SeaLogistics";

function factoryPattern() {
  // Producto 1
  const logisticaMaritima = new SeaLogistics();
  logisticaMaritima.deliver();

  // Producto 2
  const logisticaTierra = new RoadLogistics();
  //logisticaTierra.crearTransporte().deliver();

  logisticaTierra.deliver();
}

function facadePattern() {
  let listaItems = [1, 2, 3, 4, 5, 6, 7, 8];
  let order = new OrderFacade(listaItems, "ground");
  console.log(order.getOrder().getShippingCost());
}

function main() {
  console.log(" Patrones de diseño! ");
  factoryPattern();
  facadePattern();
}

main();
