// Thực hành
// 1. Khai báo 1 mảng gồm các số bất kỳ. 
// -Tính tích của các phần tử trong mảng đó.
// -Tìm số nhỏ nhất mà chia hết cho 2 trong mảng.
// -Tìm số lớn nhất mà chia hết cho 3 trong mảng.
// -Tính giá trị trung bình của mảng.
// -Lọc ra các số nguyên tố trong mảng.
// -Kiểm tra xem trong mảng có số nhỏ hơn 10 hay không.
// -Kiểm tra xem tất cả phần tử trong mảng có lớn hơn 20 không.
// -Nhập vào số n cho đến khi n là 1 số trong mảng s.
// -Sử dụng thuật toán Bubble Sort để sắp xếp phần tử theo thứ tự tăng dần. (https://www.geeksforgeeks.org/bubble-sort/)
// const numbers = [2, 9, 13, 16, 24, 32];
// let product = 1;
// for(let i = 0; i < numbers.length; i++) {
//     product = product * numbers[i];
// }
// console.log(product)


// for(let number of numbers){
//     if(number % 2 === 0){
//         console.log(number)
//         break;
//     }
// }


// let max = null;
// for(let i = 0; i < numbers.length; i++) {
//     if(numbers[i] % 3 === 0 ){
//         if (max === null || numbers[i] > max) {
//             max = numbers[i];
//         }
//     }
// }
// console.log(max)


// let sum = 0;
// for(let i = 0; i < numbers.length; i++){
//     sum = sum + numbers[i];
// }
// const tbc = sum / numbers.length;
// console.log("tbc: ",tbc)


// for (let number of numbers) {
// 	let count = 0;
// 	for (let i = 0; i <= number; i++) {
// 		if (number % i === 0) {
// 			count++;
// 		}
// 	}
// 	if (count === 2) {
// 		console.log(number, ' là số nguyên số');
// 	}
// }


// for (let number of numbers) {
// 		if (number < 10) {
// 		console.log(number, ' là số nho hon 10');
// 	}
// }


// for (let number of numbers) {
//     if (number > 20) {
//     console.log(number, ' là số lon hon 20');
// }
// }


// let n;
//     do {
//         n = Number(prompt("Nhập n"));
//         if (!numbers.includes(n)) {
//             console.log("Nhap lai");    
//         }
//       } while (!numbers.includes(n));
//     console.log('Ban da nhap dung',n);


// const s = [10, -4, 16, 5, 11, 24, 20];
// const len = s.length;
// for (let i = 0; i < len - 1; i++) {
//     for (let j = 0; j < len - 1 - i; j++) {
//         if (s[j] > s[j + 1]) {
//             let temp = s[j];
//             s[j] = s[j + 1];
//             s[j + 1] = temp;
//         }
//     }
// }
// console.log("Mảng s sau khi sắp xếp:", s);



// 2. Khai báo 1 mảng s gồm các chuỗi bất kỳ. Nhập vào 1 chuỗi text.
// -Tìm 1 chuỗi đầu tiên có độ dài nhỏ nhất trong mảng.
// -Tìm những chuỗi trong mảng có chứa giá trị text.
// -Tạo mảng mới newS gồm các phần tử có giá trị là 3 ký tự đầu tiên của từng phần tử trong s.
// -Tạo ra 1 chuỗi là sự kết hợp của các phần tử trong s. Mỗi phần tử cách nhau bởi dấu ‘-’.
// 3. Nhập vào 2 dãy số d1, d2. Mỗi số trong mỗi dãy cách nhau bởi dấu ‘,’.
// -Kiểm tra xem tất cả các giá trị số trong d1 có nằm trong d2 không.
// -Kiểm tra xem có phần tử nào trong d2 chia hết cho tổng của d1 không.
// -Tạo mảng mới gồm các số có giá trị là các số chia hết cho 2 lần lượt trong d2 và d1.
// -Giả sử d1, d2 là các dãy số xếp theo thứ tự tăng dần. Hãy tạo ra 1 dãy số theo thứ tự tăng dần bao gồm các số của d1 và d2 (Sử dụng core của thuật toán Merge Sort).(https://www.geeksforgeeks.org/merge-sort/?ref=lbp)
// 4. Cho mảng đa chiều biểu thị mức độ tăng trưởng của 1 công ty qua các quý và năm tương ứng.
// Dữ liệu của năm: theo hàng.
// Dữ liệu của quý: theo cột.
// let growth = [
//     [5,8,9,16],
//     [2,7,1,9],
//     [5,6,8,12],
//     [10,2,1,8],
//     [20,4,9,1]
// ]
// -Tạo mảng mới gồm các phần tử có giá trị là trung bình tăng trưởng của từng năm (Tính trung bình theo hàng).
// -Tìm giá trị tăng trưởng trung bình theo năm lớn nhất.
// -Tìm giá trị tăng trưởng theo quý lớn nhất.
// -Tính giá trị tăng trưởng trung bình theo quý của các năm (Tính trung bình theo cột).
// 5. Tạo ra 1 mảng gồm các số bất kỳ. Hãy tính tổng của các số lẻ có trong mảng.
// const numbers = [10, 3, 7, 8, 15, 22, 5];
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 !== 0) {
//         sum = sum + numbers[i];
//     }
// }
// console.log("Tổng các số lẻ trong mảng là:", sum);



// 6. Nhập vào 1 dãy số s. Mỗi số cách nhau bởi dấu “,”.
// -Tìm số đầu tiên trong dãy lớn hơn 5 và chia hết cho 2.
// -Tìm tất cả số lẻ trong dãy s .
// -Biến đổi dãy s thành dãy x mà các phần tử của dãy x là bình phương các phần tử của dãy s.