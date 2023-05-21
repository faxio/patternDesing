export interface Subscriptores {
  attach(observer: Observer): void;
  detach(observer: Observer): void;
  notify(): void;
}

export class Influencer implements Subscriptores {
  public state: string = "";
  private observers: Observer[] = [];

  public attach(observer: Observer): void {
    const isExist = this.observers.includes(observer);
    if (isExist) {
      return console.log("Ya está subscrito");
    }

    console.log("Se ha subscrito correctamente");
    this.observers.push(observer);
  }

  public detach(observer: Observer): void {
    const observerIndex = this.observers.indexOf(observer);
    if (observerIndex === -1) {
      return console.log("No estás subscrito");
    }

    this.observers.splice(observerIndex, 1);
    console.log("Te has desinscrito correctamente");
  }

  public notify(): void {
    for (const observer of this.observers) {
      observer.update(this);
    }
  }

  public nuevoVideoDisponible(): void {
    this.state = "Nuevo video disponible";

    console.log(`Buena noticia!: ${this.state}`);
    this.notify();
  }
}

export interface Observer {
  update(subscriptor: Influencer): void;
}

export class Persona1 implements Observer {
  public update(subscriptor: Subscriptores): void {
    if (subscriptor instanceof Influencer && subscriptor.state) {
      console.log("Voy a ir al sitio");
    }
  }
}

export class Persona2 implements Observer {
  public update(subscriptor: Subscriptores): void {
    if (subscriptor instanceof Influencer) console.log("Buen dato!");
  }
}
