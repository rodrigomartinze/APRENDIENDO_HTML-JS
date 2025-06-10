//if, if else, for, while, foreeach

Problema1()
function Problema1() {
    let Resultado1 = '';
    for (let index = 2; index < 202; index = index + 2) {
        Resultado1 = Resultado1 + index + ', ';
    }
    console.log(Resultado1)
    const ResultadoP1 = document.getElementById('problema1');
    ResultadoP1.innerText = Resultado1;
}

Problema2()
function Problema2() {
    let Resultado2 = '';
    let valor = 3;
    for (let index = 1; index <= 100; index++) {
        Resultado2 = Resultado2 + valor + ', ';
        valor = valor * 3
    }
    const ResultadoP2 = document.getElementById('problema2');
    ResultadoP2.innerText = Resultado2;
}

Problema3()
function Problema3() {
    let Resultado3 = '';
    let n1 = 1;
    let n2 = 1;
    for (let index = 0; index <= 100; index++) {
        Resultado3 += n1 + ', ';
        let sum = n1 + n2;
        n1 = n2;
        n2 = sum;
    }
    const ResultadoP3 = document.getElementById('problema3');
    ResultadoP3.innerText = Resultado3;
}

Problema4()
function Problema4() {
    let Resultado4 = '';
    let n = 5;
    for (let index = 0; index <= 100; index++) {
        Resultado4 += n + ', ';
        n = n * 2;

    }

    const ResultadoP4 = document.getElementById('problema4');
    ResultadoP4.innerText = Resultado4;
}

Problema5()
function Problema5() {
    let Resultado5 = '';
    let n = 7;
    for (let index = 0; index <= 100; index++) {
        Resultado5 += n + ', ';
        n = n * 2;

    }

    const ResultadoP5 = document.getElementById('problema5');
    ResultadoP5.innerText = Resultado5;
}

Problema6()
function Problema6() {
    let Resultado6 = '';
    for (let index = 100; index >= 1; index--) {
        Resultado6 += index + ', ';
    }

    const ResultadoP6 = document.getElementById('problema6');
    ResultadoP6.innerText = Resultado6;
}

Problema7()
function Problema7() {
    let Resultado7 = '';

    for (let index = 0; index < 100; index++) {

        for (let i = 2; i < 100; i++) {
            let Primo = true;

            for (let j = 2; j < i; j++) {
                if (i % j === 0) {
                    Primo = false;
                    break;
                }
            }

            if (Primo) {
                Resultado7 += i + ', ';
            }
        }
        const ResultadoP7 = document.getElementById('problema7');
        ResultadoP7.innerText = Resultado7;
    }
}





