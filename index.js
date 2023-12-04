let nomeDoHeroi = "Asa Valente"; 
let pontosDeExperiencia = 10000;
let nivelDoHeroi = 0;


if(pontosDeExperiencia < 1000) {
    nivelDoHeroi = "Ferro"
}
 else if (pontosDeExperiencia >= 1001 && pontosDeExperiencia <= 2000) {
    nivelDoHeroi = "Bronze"
} 
else if (pontosDeExperiencia >= 2001 && pontosDeExperiencia <= 5000) {
    nivelDoHeroi = "Prata"
} 
else if (pontosDeExperiencia >= 6001 && pontosDeExperiencia <= 7000) {
    nivelDoHeroi = "Ouro"
} 
else if (pontosDeExperiencia >= 7001 && pontosDeExperiencia <= 8000) {
    nivelDoHeroi = "Platina"
}
 else if (pontosDeExperiencia >= 8001 && pontosDeExperiencia <= 9000) {
    nivelDoHeroi = "Ascendente"
} 
else if (pontosDeExperiencia >= 9001 && pontosDeExperiencia <= 10000) {
  nivelDoHeroi = "Imortal"
} 
else if (pontosDeExperiencia >= 9001 && pontosDeExperiencia <= 10001) {
    nivelDoHeroi = "Radiante"
} 

console.log("O  herói de nome " + nomeDoHeroi + " está no nível de " + nivelDoHeroi);
