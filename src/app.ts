import { HotDog } from "./PatternDesign/Builder/builderSimple/HotDog";
import { OrderFacade } from "./PatternDesign/Facade/OrderFacade";
import { RoadLogistics } from "./PatternDesign/Factory/01-example/RoadLogistics";
import { SeaLogistics } from "./PatternDesign/Factory/01-example/SeaLogistics";
import { Singleton } from "./PatternDesign/Singleton/Singleton";
import {
  DirectorHotDog,
  HotDog as HotDog2,
  ConcreteHotDog,
} from "./PatternDesign/Builder/builderRestrictivo/HotDog";

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

function singletonPattern() {
  const s1 = Singleton.getInstance();
  const s2 = Singleton.getInstance();

  if (s1 === s2) {
    console.log("Funciona.. Las dos instancias son la misma");
  } else {
    console.log("No funciona...");
  }
}

function builderPattern() {
  const myLunch = new HotDog("gluten free").addKetchup().addMustard();
  console.log(myLunch);

  const director = new DirectorHotDog();
  const builder = new ConcreteHotDog();

  director.setBuilder(builder);
  director.buildMinimalViableProduct();
  builder.getProduct().getProductComplete();

  const hotDog2 = new ConcreteHotDog();
  hotDog2
    .addBread()
    .addKetchup()
    .addKraut()
    .addMustard()
    .getProduct()
    .getProductComplete();
}

function main() {
  console.log(" Patrones de diseño! ");
  factoryPattern();
  facadePattern();
  singletonPattern();
  builderPattern();
}

main();
