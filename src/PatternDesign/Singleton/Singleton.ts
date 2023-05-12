export class Singleton {
  private static instance: Singleton;

  // El constructor está vacío porqué siempre un constructor debe crear un objeto
  private constructor() {}

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }

    return Singleton.instance;
  }

  public conectarBD() {
    // ...
    console.log("BD conectada..");
  }
}
