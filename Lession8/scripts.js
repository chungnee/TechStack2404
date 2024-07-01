
// for (let x = -100;x<=100; x++){
//     if (x%9===0){
//         console.log(x)
//     }

// }
// let sum = 0;
// for (let i = -10 ; i<=50 ; i++){
//     if(i % 2 === 0){
//         sum = sum + i;
//     }
// }
// console.log("sum: ", sum)

// for( let x = 1 ; x <= 500; x++ ){
//     console.log(x)
// }

// for (let i = 1 ; i <= 300 ; i++){
//     if(i % 2 === 0 && i % 3 === 0){
//         console.log(i)
//     }
// }

// const x = prompt("nhap n") ;
// let y = 1;
// for(y = 1 ; y <= x; i++){
//     y = y*1
//     console.log(x)
// }

// let a,b,x
// do{
//     let a = prompt("nhap a");
//     let b = prompt("nhap b");
// }while(a>=b)
// do{
//     let x = prompt("nhap x");
// }while(x === 0)
//     for(let i = b; i>a;i--){
//         if(i % x === 0){
//             console.log(i)
//         }
//         break;
//     }

const n = prompt('Nhap so n: ');
for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += '*';
    }
    console.log(row);
}
