
// HOISTING

// third();
// var a = 4;
// function third() {
//     console.log(a);
// }

// function thirdOne() {
//     console.log(b);
//     b = 3+5;
//     console.log(b);
//     // var b = 0;
//     b=0;
//     console.log(b);
// }
// b = 9;
// console.log(b);
// thirdOne();
// console.log(b);
let x = 0;
function thirdTwo() {
    x += 3;
    var y = 4;
    console.log(x);
}
thirdTwo();
console.log(x);
// // console.log(x);
// // console.log('---------');
// // console.log(y*2);

// const NOMBRE = "JUAN";
// // const NOMBRE = NOMBRE + " PEREZ";
// const CURSOS = ["MATE", 'LENGUA', 'PSICOLOGIA', "HISTORIA"];
// const MISCURSOS = [...CURSOS, 'FISICA']; // SPREAD
// console.log(MISCURSOS);

// if (3<5) {
//     console.log('Woow increíble');
// } else {
//     console.log('Era de esperarse');
// }

// let cont =  0;
// do {
//     if (cont == 5) {
//         console.log('cerramos ciclo');
//     }else {
//         console.log(cont);
//     }
//     cont++;
// } while(cont < 5);
// console.log('valor de cont ==> ' + cont);
// console.log('---------------------');
// cont = 0;
// while(cont < 5) {
//     if (cont == 5) {
//         console.log('cerramos ciclo');
//     }else {
//         console.log(cont);
//     }
//     cont++;
// }
// console.log('valor de cont ==> ' + cont);
// console.log('---------------------');
// var myVar = undefined;
// console.log(typeof myVar);