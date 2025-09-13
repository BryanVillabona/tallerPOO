class Chismosa {
    #reputacion;
    #nivelChisme;
    constructor(nombre, reputacion, nivelChisme) {
        if (this.constructor === Chismosa) {
            throw new Error("No se puede instanciar la clase abstracta.")
        }

        this.nombre = nombre;
        this.#reputacion = reputacion;
        this.#nivelChisme = nivelChisme;
    }

    get reputacion() {
        return this.#reputacion;
    }

    get nivelChisme() {
        return this.#nivelChisme;
    }

    _subirChisme(valor) {
        this.#nivelChisme = Math.min(10, this.#nivelChisme + valor);
    }

    _modificarReputacion(valor) {
        this.#reputacion = Math.max(0, Math.min(10, this.#reputacion + valor));
    }

    recolectarInfo() {
        throw new Error("Este metodo debe ser implementado en su clase hija")
    }

    contarChisme() {
        throw new Error("Este metodo debe ser implementado en su clase hija")
    }

}

module.exports = { Chismosa };