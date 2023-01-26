// MANIPULAÇÃO DOM
// pegando id dos inputs radio

let fifo = document.getElementById("FIFO");

let sjf = document.getElementById("SJF");

// pegando o id do text area

let txtarea = document.getElementById("txtmsg");

// verificar se o radio está selecionado

function verificarRadio() {
    if (fifo.checked == true) {
        txtarea.innerHTML = "";
    } else if (sjf.checked == true) {
        txtarea.innerHTML = "";
    }
}

// array fifo
let procFifo = [
    "A", "B", "C", "D", "E"
];

var tempoProcFifo = [];
let tempoTotal = 0;

function tempoAleatorio() {

    // sorteando o tempo dos processos

    for (i = 0; i < 5; i++) {
        let randomTime = Math.floor(Math.random() * (10 - 1 + 1)) + 1;

        tempoProcFifo[i] = randomTime;
    }

    // somando o tempo do array

    // for (var i = 0; i < tempoProcFifo.length; i++) {
    //     tempoTotal += tempoProcFifo[i];
    // }

    // return tempoTotal;

    return tempoProcFifo;
}

tempoAleatorio();


// nome do processo da CPU ex: A, b, c, d, e

let nomeProcesso = document.getElementById("nameProc");
// nomeProcesso.innerHTML = procFifo[1];

// contar o tempo dos processos e subtrair do cronometro


function rodar() {

    if (fifo.checked == true) {
        setInterval(() => {
            if (tempoProcFifo[0] > 0) {

                let idtempo = document.getElementById("tempo");

                idtempo.innerHTML = `TEMPO ${tempoProcFifo[0]}`;

                nomeProcesso.innerHTML = procFifo[0];

                tempoProcFifo[0]--;

                // finalizar processo
                if (tempoProcFifo[0] == 0) {
                    txtarea.innerHTML = `Processo concluído
${procFifo[1]} - ${tempoProcFifo[1]}s
${procFifo[2]} - ${tempoProcFifo[2]}s
${procFifo[3]} - ${tempoProcFifo[3]}s
${procFifo[4]} - ${tempoProcFifo[4]}s`
                }


            } else if (tempoProcFifo[1] > 0) {
                let idtempo = document.getElementById("tempo");

                idtempo.innerHTML = `TEMPO ${tempoProcFifo[1]}`;

                nomeProcesso.innerHTML = procFifo[1];

                tempoProcFifo[1]--;

                // finalizar processo
                if (tempoProcFifo[1] == 0) {
                    txtarea.innerHTML = `Processo concluído
Processo concluído
${procFifo[2]} - ${tempoProcFifo[2]}s
${procFifo[3]} - ${tempoProcFifo[3]}s
${procFifo[4]} - ${tempoProcFifo[4]}s`
                }

            } else if (tempoProcFifo[2] > 0) {
                let idtempo = document.getElementById("tempo");

                idtempo.innerHTML = `TEMPO ${tempoProcFifo[2]}`;

                nomeProcesso.innerHTML = procFifo[2];

                tempoProcFifo[2]--;

                // finalizar processo
                if (tempoProcFifo[2] == 0) {
                    txtarea.innerHTML = `Processo concluído
Processo concluído
Processo concluído
${procFifo[3]} - ${tempoProcFifo[3]}s
${procFifo[4]} - ${tempoProcFifo[4]}s`
                }

            }
            else if (tempoProcFifo[3] > 0) {
                let idtempo = document.getElementById("tempo");

                idtempo.innerHTML = `TEMPO ${tempoProcFifo[3]}`;

                nomeProcesso.innerHTML = procFifo[3];

                tempoProcFifo[3]--;

                // finalizar processo
                if (tempoProcFifo[3] == 0) {
                    txtarea.innerHTML = `Processo concluído
Processo concluído
Processo concluído
Processo concluído
${procFifo[4]} - ${tempoProcFifo[4]}s`
                }

            } else if (tempoProcFifo[4] > 0) {
                let idtempo = document.getElementById("tempo");

                idtempo.innerHTML = `TEMPO ${tempoProcFifo[4]}`;

                nomeProcesso.innerHTML = procFifo[4];

                tempoProcFifo[4]--;

                // finalizar processo
                if (tempoProcFifo[4] == 0) {
                    txtarea.innerHTML = `Processo concluído
Processo concluído
Processo concluído
Processo concluído
Processo concluído`
                }

            }


        }, 1000);

    } else if (sjf.checked == true) {

        setInterval(() => {
            if (tempoProcFifo[0] > 0) {
                let idtempo = document.getElementById("tempo");

                idtempo.innerHTML = `TEMPO ${tempoProcFifo[0]}`;

                nomeProcesso.innerHTML = procFifo[0];

                tempoProcFifo[0]--;

                // finalizar processo
                if (tempoProcFifo[0] == 0) {
                    txtarea.innerHTML = `Processo concluído
${procFifo[1]} - ${tempoProcFifo[1]}s
${procFifo[2]} - ${tempoProcFifo[2]}s
${procFifo[3]} - ${tempoProcFifo[3]}s
${procFifo[4]} - ${tempoProcFifo[4]}s`
                }

            } else if (tempoProcFifo[1] > 0) {
                let idtempo = document.getElementById("tempo");

                idtempo.innerHTML = `TEMPO ${tempoProcFifo[1]}`;

                nomeProcesso.innerHTML = procFifo[1];

                tempoProcFifo[1]--;

                // finalizar processo
                if (tempoProcFifo[1] == 0) {
                    txtarea.innerHTML = `Processo concluído
Processo concluído
${procFifo[2]} - ${tempoProcFifo[2]}s
${procFifo[3]} - ${tempoProcFifo[3]}s
${procFifo[4]} - ${tempoProcFifo[4]}s`
                }

            } else if (tempoProcFifo[2] > 0) {
                let idtempo = document.getElementById("tempo");

                idtempo.innerHTML = `TEMPO ${tempoProcFifo[2]}`;

                nomeProcesso.innerHTML = procFifo[2];

                tempoProcFifo[2]--;
                // finalizar processo
                if (tempoProcFifo[2] == 0) {
                    txtarea.innerHTML = `Processo concluído
Processo concluído
Processo concluído
${procFifo[3]} - ${tempoProcFifo[3]}s
${procFifo[4]} - ${tempoProcFifo[4]}s`
                }

            } else if (tempoProcFifo[3] > 0) {
                let idtempo = document.getElementById("tempo");

                idtempo.innerHTML = `TEMPO ${tempoProcFifo[3]}`;

                nomeProcesso.innerHTML = procFifo[3];

                tempoProcFifo[3]--;
                // finalizar processo
                if (tempoProcFifo[3] == 0) {
                    txtarea.innerHTML = `Processo concluído
Processo concluído
Processo concluído
Processo concluído
${procFifo[4]} - ${tempoProcFifo[4]}s`
                }

            } else if (tempoProcFifo[4]) {
                let idtempo = document.getElementById("tempo");

                idtempo.innerHTML = `TEMPO ${tempoProcFifo[4]}`;

                nomeProcesso.innerHTML = procFifo[4];

                tempoProcFifo[4]--;

                if (tempoProcFifo[4] == 0) {
                    txtarea.innerHTML = `Processo concluído
Processo concluído
Processo concluído
Processo concluído
Processo concluído`
                }


            }

        }, 1000)

    } else {
        alert("Selecione um tipo de fila FIFO ou SJF")
    }

}


function carregarProcessos() {

    // FIFO

    if (fifo.checked == true) {
        txtarea.innerHTML =
            `${procFifo[0]} - ${tempoProcFifo[0]}s
${procFifo[1]} - ${tempoProcFifo[1]}s
${procFifo[2]} - ${tempoProcFifo[2]}s
${procFifo[3]} - ${tempoProcFifo[3]}s
${procFifo[4]} - ${tempoProcFifo[4]}s`

    } else if (sjf.checked == true) {

        // retornando o menor número para o SJF
        tempoProcFifo.sort(function (a, b) {
            return a - b;
        });

        txtarea.innerHTML =
            `${procFifo[0]} - ${tempoProcFifo[0]}s
${procFifo[1]} - ${tempoProcFifo[1]}s
${procFifo[2]} - ${tempoProcFifo[2]}s
${procFifo[3]} - ${tempoProcFifo[3]}s
${procFifo[4]} - ${tempoProcFifo[4]}s`


        // console.log(tempoProcFifo)
    } else {
        alert("Selecione um tipo de fila FIFO ou SJF")
    }
}
