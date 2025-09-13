const { Chismosa } = require("./Chismosa.js");

class TiaVecina extends Chismosa {
    constructor(nombre, reputacion, nivelChisme){
        super(nombre, reputacion, nivelChisme )
    }

    recolectarInfo(){
        console.log("Aprovecha la reunión del barrio para escuchar discretamente");

        this._modificarReputacion(1);
    }

    contarChisme(){
        console.log("Difunde el chisme mientras ofrece café");

        const aumento = Math.floor(Math.random() * 3) + 2; 
        this._subirChisme(aumento);

        if (Math.random() < 0.5) {
            this._modificarReputacion(-1);
            console.log("Chisme exagerado (Vieja exagerada)")
        }
    }

}

module.exports = { TiaVecina };