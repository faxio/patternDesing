// Definimos Los métodos necesarios para crear un producto
interface Builder {
  addKetchup(): ConcreteHotDog;
  addMustard(): ConcreteHotDog;
  addKraut(): ConcreteHotDog;
  addBread(): ConcreteHotDog;
}

// Implementa lo mínimo necesario para que el objeto tenga las propiedades necesarias
export class ConcreteHotDog implements Builder {
  private product: HotDog;

  constructor() {
    this.product = new HotDog();
  }

  public reset(): void {
    this.product = new HotDog();
  }

  addBread() {
    this.product.setBreadGLutenFree();
    return this;
  }

  addKetchup(): ConcreteHotDog {
    this.product.setKetchup();
    return this;
  }

  addMustard(): ConcreteHotDog {
    this.product.setMustard();
    return this;
  }

  addKraut(): ConcreteHotDog {
    this.product.setKraut();
    return this;
  }

  public getProduct(): HotDog {
    const result = this.product;
    this.reset();
    return result;
  }
}

// Crear un producto
export class HotDog {
  constructor(
    private bread?: string,
    private ketchup?: boolean,
    private mustard?: boolean,
    private kraut?: boolean
  ) {}
  setBreadGLutenFree() {
    this.bread = "gluten free";
  }
  setKetchup() {
    this.ketchup = true;
  }
  setMustard() {
    this.mustard = true;
  }
  setKraut() {
    this.kraut = true;
  }
  getProductComplete() {
    return console.log(this);
  }
}

// Opcional -> se utiliza para crear un objeto con ciertos elementos por defecto
export class DirectorHotDog {
  private builder?: Builder;

  public setBuilder(builder: Builder): void {
    this.builder = builder;
  }

  public buildMinimalViableProduct(): void {
    if (this.builder) this.builder.addBread();
    else console.log("Debe agregar un objeto primero");
  }

  public buildFullFeaturedProduct(): void {
    if (this.builder) {
      this.builder.addKetchup().addBread().addKraut().addMustard();
    } else console.log("Debe agregar un objeto primero");
  }
}
