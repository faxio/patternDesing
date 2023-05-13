// Definimos Los métodos necesarios para crear un producto
interface Builder {
  producePartA(): void;
  producePartB(): void;
  producePartC(): void;
}

// Implementa lo mínimo necesario para que el objeto tenga las propiedades necesarias
export class ConcreteBuilder1 implements Builder {
  private product: Product1;

  constructor() {
    this.product = new Product1();
  }

  public reset(): void {
    this.product = new Product1();
  }
  public producePartA(): void {
    this.product.parts.push("PartA1");
  }

  public producePartB(): void {
    this.product.parts.push("PartB1");
  }

  public producePartC(): void {
    this.product.parts.push("PartC1");
  }

  public getProduct(): Product1 {
    const result = this.product;
    this.reset();
    return result;
  }
}

// Crear un producto
class Product1 {
  public parts: string[] = [];

  public listParts(): void {
    console.log(`Product parts: ${this.parts.join(", ")}\n`);
  }
}

// Opcional -> se utiliza para crear un objeto con ciertos elementos por defecto
export class Director {
  private builder?: Builder;

  public setBuilder(builder: Builder): void {
    this.builder = builder;
  }

  public buildMinimalViableProduct(): void {
    if (this.builder) this.builder.producePartA();
    else console.log("Debe agregar un objeto primero");
  }

  public buildFullFeaturedProduct(): void {
    if (this.builder) {
      this.builder.producePartA();
      this.builder.producePartB();
      this.builder.producePartC();
    } else console.log("Debe agregar un objeto primero");
  }
}
