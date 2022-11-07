const shell = require("shelljs");
const fs = require("fs");

function dijkstra(vertices, arestas, entrada, saida) {
    const nome_arq = "teste.cpp"
    const str = monta_string(vertices, arestas);

    if (str == null) return null;

    gera_arquivo(str, entrada, saida, nome_arq);
}

function roda_arquivo_c(entrada, saida, vertices) {
    console.log("Executando");

    const status = shell.exec(`./a.out < ${entrada} > ${saida}`);

    if (status.code == 0) {
        console.log("Executado com sucesso");
        console.log(`Resultado no arquivo  "${saida}"`);
    } else {
        console.log(`Erro ao executar: ${status.stderr}`);
    }
}

function compila_arquivo_c(nome_arq) {
    console.log(`Compilando ${nome_arq}`);

    const status = shell.exec(`g++ ${nome_arq} -o a.out`);

    if (status.code == 0) {
        console.log("Compilado com sucesso!");
        return true;
    } else {
        console.log(`Erro ao compilar: ${status.stderr}`);
        return false;
    }

}

function gera_arquivo(str, entrada, saida, nome_arq) {
    fs.writeFile(entrada, str, (err) => {
        if (err) {
            throw err;
        }
        console.log("Arquivo criado");

        compila_arquivo_c(nome_arq);

        roda_arquivo_c(entrada, saida);
    });

}

function monta_string(vertices, arestas) {
    var str = "";

    str += `${vertices}\n`

    arestas.forEach((ar) => {
        if (ar[0] && ar[1] && ar[2]) str += `${ar[0]} ${ar[1]} ${ar[2]}\n`;
    });

    str += "0 0 0\n";

    return str;
}

module.exports = dijkstra;