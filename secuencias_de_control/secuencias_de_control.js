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


Problema8()
function Problema8() {
    let Resultado8 = '';
    let valor = 1
    for (let index = 0; index < 100; index++) {
        Resultado8 += valor + ', ';
        valor = valor * 2
    }
    const ResultadoP8 = document.getElementById('problema8');
    ResultadoP8.innerText = Resultado8;
}

Problema9()
function Problema9() {
    let Resultado9 = '';
    let n1 = 0;
    let n2 = 1;
    for (let index = 0; index < 100; index++) {
        let sum = n1 + n2;
        Resultado9 = Resultado9 + n1 + ', ';
        n2 = n1;
        n1 = sum;
    }
    const ResultadoP9 = document.getElementById('problema9');
    ResultadoP9.innerText = Resultado9;
}

Problema10()
function Problema10() {
    let Resultado10 = '';
    for (let index = 1; index < 500; index += 5) {
        Resultado10 += index + ', ';
    }
    const ResultadoP10 = document.getElementById('problema10');
    ResultadoP10.innerText = Resultado10;
}

Problema11()
function Problema11() {
    let Resultado11 = '';
    let valor = 2;
    for (let index = 0; index < 100; index++) {
        Resultado11 += valor + ', ';
        valor = (valor * 2) + 1;
    }
    const ResultadoP11 = document.getElementById('problema11');
    ResultadoP11.innerText = Resultado11;
}

Problema12()
function Problema12() {
    let Resultado12 = '';
    let n1 = 1;
    let n2 = 0;
    for (let index = 0; index < 100; index++) {
        Resultado12 += n1 + ', ';
        n2 = n1;
        let sum = n2 * n1;
        n1 = sum;
    }
    const ResultadoP12 = document.getElementById('problema12');
    ResultadoP12.innerText = Resultado12;
}

Problema13()
function Problema13() {
    let Resultado13 = '';
    for (let index = 1; index < 300; index += 3) {
        Resultado13 += index + ', ';
    }
    const ResultadoP13 = document.getElementById('problema13');
    ResultadoP13.innerText = Resultado13;
}

Problema14()
function Problema14() {
    let Resultado14 = '';
    let n = 8;
    for (let index = 0; index < 100; index++) {
        Resultado14 += n + ', ';
        n *= 1.5;
    }
    const ResultadoP14 = document.getElementById('problema14');
    ResultadoP14.innerText = Resultado14;
}

Problema15()
function Problema15() {
    let Resultado15 = '';
    let valor = 3;
    for (let index = 0; index < 100; index++) {
        Resultado15 += valor + ', ';
        valor *= 2;
    }
    const ResultadoP15 = document.getElementById('problema15');
    ResultadoP15.innerText = Resultado15;
}

Problema16()
function Problema16() {
    let Resultado16 = '';
    let n = 0;
    for (let index = 1; index < 500; index++) {
        n += index;
        Resultado16 += n + ', ';
    }
    const ResultadoP16 = document.getElementById('problema16');
    ResultadoP16.innerText = Resultado16;
}

Problema17()
function Problema17() {
    let Resultado17 = '';
    let n = 1000;
    for (let index = 1; n >= 0; index++) {
        Resultado17 += n + ', ';
        n -= index;
    }
    const ResultadoP17 = document.getElementById('problema17');
    ResultadoP17.innerText = Resultado17;
}

Problema18()
function Problema18() {
    let Resultado18 = '';
    for (let index = 1; index <= 100; index++) {
        let op = index * index + 1;
        Resultado18 += op + ', ';
    }
    const ResultadoP18 = document.getElementById('problema18');
    ResultadoP18.innerText = Resultado18;
}

Problema19()
function Problema19() {
    let Resultado19 = '';
    for (let index = 1; index <= 100; index++) {
        let op = index * index * index;
        Resultado19 += op + ', ';

    }
    const ResultadoP19 = document.getElementById('problema19');
    ResultadoP19.innerText = Resultado19;
}






