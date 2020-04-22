export class Spacecraft {

    constructor (public propulsor: string) {}

    jumpIntoHyperspace() {
        console.log(`Entering hyperspace with ${this.propulsor}`);
    }
}

export interface Containership {
    cargoContainers: number;
}