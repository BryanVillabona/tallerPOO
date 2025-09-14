const { Chismosa } = require("./Chismosa.js");

class CompaneraCuriosa extends Chismosa {
    constructor(nombre, reputacion, nivelChisme) {
        super(nombre, reputacion, nivelChisme)
    }

    recolectarInfo() {
        console.log("Hace preguntas aparentemente profesionales a los compañeros de trabajo");

        this._modificarReputacion(1);
    }

    contarChisme() {
        console.log("Comenta el chisme como ejemplo de vida en el trabajo");

        const aumento = Math.floor(Math.random() * 2); 
        this._subirChisme(aumento);

        this._modificarReputacion(1);
    }
}

module.exports = { CompaneraCuriosa };