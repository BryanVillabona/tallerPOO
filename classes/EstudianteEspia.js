const { Chismosa } = require("./Chismosa.js");

class EstudianteEspia extends Chismosa {
    constructor(nombre, reputacion, nivelChisme) {
        super(nombre, reputacion, nivelChisme)
    }

    recolectarInfo() {
        console.log("Lee chats ajenos desde el último puesto del salón");
    }

    contarChisme() {
        console.log("Filtra el chisme por estados en WhatsApp");

        const aumento = Math.floor(Math.random() * 2) + 2;
        this._subirChisme(aumento);

        if (Math.random() < 0.3) {
            this._modificarReputacion(-2);
            console.log("Lo descubrierooooooonnnn")
        }
    }
}

module.exports = { EstudianteEspia };