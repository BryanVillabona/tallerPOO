const chalk = require('chalk');
const { TiaVecina } = require("./classes/TiaVecina.js");
const { CompaneraCuriosa } = require("./classes/CompaneraCuriosa.js");
const { EstudianteEspia } = require("./classes/EstudianteEspia.js");

const chismosas = [
    new TiaVecina("Doña Carmen", 7, 3),
    new CompaneraCuriosa("Doña Lupe", 5, 2),
    new EstudianteEspia("Yhwrr Suarez", 6, 4)
];

const rondas = 2;
for (let r = 1; r <= rondas; r++) {
    console.log(chalk.blueBright(`\n******* RONDA ${r} *******`));
    chismosas.forEach(chismosa => {
        console.log(chalk.yellow(`\n ${chismosa.nombre}:`));
        chismosa.recolectarInfo();
        chismosa.contarChisme();
    });
}

// Mostrar estadísticas finales
console.log(chalk.green("\n*********ESTADÍSTICAS FINALES **********"));
chismosas.forEach(chismosa => {
    let reputacionColor;
    if (chismosa.reputacion >= 7) {
        reputacionColor = chalk.hex("#FFA500");
    } else if (chismosa.reputacion <= 3) {
        reputacionColor = chalk.black.bgWhite;
    } else {
        reputacionColor = chalk.white;
    }

    let nivelColor =
        chismosa.nivelChisme === 10
            ? chalk.magentaBright
            : chalk.cyan;

    console.log(`
${chalk.bold(chismosa.nombre)}
  Reputación: ${reputacionColor(chismosa.reputacion.toString())}
  Nivel de Chisme: ${nivelColor(chismosa.nivelChisme.toString())}
`);
});

const maxNivel = Math.max(...chismosas.map(c => c.nivelChisme));
const ganadoras = chismosas.filter(c => c.nivelChisme === maxNivel);

if (ganadoras.length === 1) {
    console.log(
        chalk.bgMagenta.white.bold(
            `\nLa reina del chisme es: ${ganadoras[0].nombre} con nivel ${ganadoras[0].nivelChisme}!`
        )
    );
} else {
    const nombres = ganadoras.map(g => g.nombre).join(" y ");
    console.log(
        chalk.bgMagenta.white.bold(
            `\nTenemos un empate. Las reinas del chisme son: ${nombres} con nivel ${maxNivel}!`
        )
    );
}