const shell = require("shelljs");
const fs = require("fs");

function monta_string(arestas) {
  var str = "";

  //str += `${vertices}\n`;

  arestas.forEach((ar) => {
    if (ar[0] && ar[1] && ar[2]) str += `${ar[0]} ${ar[1]} ${ar[2]}\n`;
  });

  str += "0 0 0\n";

  return str;
}

const vertices = 5;
const arestas = [
  [1, 2, 3],
  [1, 3, 2],
  [1, 5, 3],
  [2, 5, 1],
  [2, 4, 4],
  [3, 5, 2],
  [3, 4, 3],
  [4, 5, 1],
];

const str = monta_string(arestas);
const entrada = "in";
const saida = "out";

fs.writeFile(entrada, str, (err) => {
  if (err) {
    throw err;
  }
  console.log("Arquivo criado");
  console.log("Compilando teste.cpp");
  
  shell.exec("g++ teste.cpp");

  console.log("Compilado com sucesso!");
  console.log("Executando");

  const status = shell.exec(`./a.out < ${entrada} > ${saida} ${vertices}`);

  if (status.code == 0) {
	console.log("Executado com sucesso");
    console.log(`Resultado no arquivo  "${saida}"`);
  } else {
    console.log(`Erro ao executar: ${status.stderr}`);
  }
});
