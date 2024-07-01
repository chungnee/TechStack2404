// 3.Tính tổng các số chẵn trong đoạn [-30, 50].
// let sum = 0 ;
// for(let i = -30 ; i <= 50 ; i++){
//     if(i % 2 === 0){
//         sum = sum + i;
//     }
// }
// console.log("sum: ",sum)

// 6.Nhập vào số n (n >= 2). Hãy tính giá trị biểu thức sau: S = 1/(1.2) + 1/(2.3) + ... + 1/n(n+1)
// let n;
// let i = 1;
// let S = 0;
// do {
//     n = prompt("Nhập vào số n :");
// } while (n < 2);
// do{
//     S = S + 1/(i*(i+1));
//     i++;
// } while(i<=n)
//     console.log('S= ',S)
// 7.Nhập vào số n. Hãy in ra số ước của n.
// let n = prompt('Nhap n: ');
// let count = 0;
// for(let i = 1; i<=n;i++){
//     if(n%i===0){
//         count++;
//     }
// }
// console.log("So uoc cua n la: ", count)

// 9.Nhập vào chuỗi s (chỉ gồm chữ số) và số l. Hãy thêm vào đầu chuỗi s ký tự ‘0’ cho đến khi độ dài chuỗi s >= l.
// let s = prompt('Nhap chuoi s: ')
// let l = prompt('Nhap so l:')
// for(let i = s.length; i<l; i++){
//     s="0" + s;
// }
// console.log(s);
// console.log(s.length);

// 10.Nhập vào 2 số m, n (m > 0, n > 0). Tìm ước chung lớn nhất, bội chung nhỏ nhất của m, n.

// 14.Nhập vào 2 số m, n (m >= 2, n > =2). Hãy in ra màn hình hình chữ nhật có độ chiều rộng là m và chiều cao là n. VD: m = 4, n = 3
// const m = prompt('Chieu rong: ');
// const n = prompt('Chieu cao: ');
// for (let i = 0; i < n; i++) {
//     if(m>=2 && n>=2){
//         let row = '';
//     for (let j = 0; j < m; j++) {
//         row += '*';
//         console.log(row);
//     }
// }else{
//     console.log('Vui long nhap chieu dai, chieu rong hop le')
// }
// }

// 15.Nhập vào số n (n >= 3). Hãy in ra màn hình hình tam giác vuông cân có độ dài cạnh góc vuông = n. VD: n = 3

//16.Nhập vào 2 số w và h là chiều cao và cân nặng của 1 người. Hãy tính chỉ số BMI và đưa ra kết quả: Nếu BMI < 18.5 → in ra “Nhẹ cân” Nếu 18.5 <= BMI < 23 → in ra “Bình thường” Nếu 23 <= BMI < 25 → in ra “Thừa cân” Nếu BMI >= 25 → in ra “Béo phì”
// let w = prompt('Nhap can nang: ')
// let h = prompt('Nhap chieu cao: ')
// if ( w > 0 && h > 0) {
//     let bmi = w / (h * h);
//     let result;
//     if (bmi < 18.5) {
//         result = "Nhẹ cân";
//     } else if (bmi >= 18.5 && bmi < 23) {
//         result = "Bình thường";
//     } else if (bmi >= 23 && bmi < 25) {
//         result = "Thừa cân";
//     } else {
//         result = "Béo phì";
//     }
//     console.log("Chỉ số BMI của bạn là:", bmi.toFixed(2));
//     console.log("Kết quả:", result);
// } else {
//     console.log("Vui lòng nhập vào cân nặng và chiều cao hợp lệ.");
// }

// Tạo 1 biến a có giá trị là 1 số tự nhiên ngẫu nhiên trong [5, 10]. Hãy nhập vào số n cho đến khi giá trị của n bằng a.
// let n = prompt('Nhap n: ')
// let a = Math.floor(Math.random()*6)+5