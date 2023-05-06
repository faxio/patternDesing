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

function main() {
  console.log(" Patrones de diseño! ");
  factoryPattern();
}

main();
