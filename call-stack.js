console.log(3);
async () => {
    return await xxxxx; //4
}
console.log(5);
console.log(6);
console.log(7);
async () => {
    return await xxxxx; //8
}

// INTERPRETACION

// console.log(3);
// console.log(5);
// console.log(6);
// console.log(7);
// //--------------
// async () => {
//     return await xxxxx; //4
// }
// async () => {
//     return await xxxxx; //8
// }
// /*
// 3
// 5
// 6
// 7
// 4
// 8

// */